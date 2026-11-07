import { supabase } from "../lib/supabase";

const PHOTOS_BUCKET = "listing-photos";

function fromRow({ owner_id, owner_name, owner_phone, owner_email, updated_at, lat, lon, ...listing }) {
  return {
    ...listing,
    ownerId: owner_id,
    ownerName: owner_name ?? undefined,
    ownerPhone: owner_phone ?? undefined,
    ownerEmail: owner_email ?? undefined,
    updatedAt: updated_at,
    coordinates: lat === null ? null : { lat, lon },
  };
}

function throwOnError({ data, error }) {
  if (error) throw error;
  return data;
}

export async function getListings() {
  const rows = throwOnError(
    await supabase.from("listings").select("*").order("created_at", { ascending: false }).order("id")
  );
  return rows.map(fromRow);
}

async function uploadPhotos(userId, blobs) {
  const bucket = supabase.storage.from(PHOTOS_BUCKET);
  return Promise.all(
    blobs.map(async (blob) => {
      const path = `${userId}/${crypto.randomUUID()}.jpg`;
      throwOnError(await bucket.upload(path, blob, { contentType: "image/jpeg" }));
      return { src: bucket.getPublicUrl(path).data.publicUrl, path };
    })
  );
}

async function removePhotos(photos) {
  const paths = photos.map(({ path }) => path).filter(Boolean);
  if (paths.length > 0) {
    await supabase.storage.from(PHOTOS_BUCKET).remove(paths);
  }
}

export async function publishListing(userId, { coordinates, ownerName, ownerPhone, ownerEmail, ...listing }, blobs) {
  const photos = await uploadPhotos(userId, blobs);
  try {
    const row = throwOnError(
      await supabase
        .from("listings")
        .insert({
          ...listing,
          photos,
          owner_id: userId,
          owner_name: ownerName,
          owner_phone: ownerPhone,
          owner_email: ownerEmail,
          lat: coordinates?.lat ?? null,
          lon: coordinates?.lon ?? null,
        })
        .select()
        .single()
    );
    return fromRow(row);
  } catch (error) {
    await removePhotos(photos);
    throw error;
  }
}

// Baca gresku i kada baza odbije izmenu zbog prava pristupa.
export async function updateListing(id, changes) {
  throwOnError(await supabase.from("listings").update(changes).eq("id", id).select("id").single());
}

export async function deleteListing({ id, photos }) {
  throwOnError(await supabase.from("listings").delete().eq("id", id).select("id").single());
  await removePhotos(photos);
}
