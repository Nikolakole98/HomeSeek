export default function ListingPhoto({ photo, alt, loading }) {
  const { src, position = "50% 50%", zoom = 1 } = photo;

  return (
    <img
      src={src}
      alt={alt}
      loading={loading}
      style={{
        objectPosition: position,
        transformOrigin: position,
        transform: `scale(${zoom})`,
      }}
    />
  );
}
