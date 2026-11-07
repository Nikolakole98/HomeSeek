import { supabase } from "../lib/supabase";

function throwOnError({ data, error }) {
  if (error) throw error;
  return data;
}

export async function getProfile(userId) {
  const profile = throwOnError(await supabase.from("profiles").select("*").eq("id", userId).single());
  const favorites = throwOnError(await supabase.from("favorites").select("listing_id").eq("user_id", userId));
  return {
    ...profile,
    isAdmin: profile.is_admin,
    favorites: favorites.map(({ listing_id }) => listing_id),
  };
}

export async function addFavorite(userId, listingId) {
  throwOnError(await supabase.from("favorites").insert({ user_id: userId, listing_id: listingId }));
}

export async function removeFavorite(userId, listingId) {
  throwOnError(await supabase.from("favorites").delete().eq("user_id", userId).eq("listing_id", listingId));
}

export async function getAccounts() {
  const profiles = throwOnError(
    await supabase.from("profiles").select("*, favorites(count)").order("created_at")
  );
  return profiles.map(({ favorites, is_admin, ...profile }) => ({
    ...profile,
    isAdmin: is_admin,
    favoriteCount: favorites[0]?.count ?? 0,
  }));
}

export async function deleteAccount(accountId) {
  throwOnError(await supabase.rpc("admin_delete_user", { target_id: accountId }));
}
