import PhotoAlbum from 'react-photo-album';

const photos = [
  { src: 'Tnx_2.webp', width: 942, height: 1413 },
  { src: 'Tnx_4.webp', width: 2048, height: 1152 },
  { src: 'Tnx_6.webp', width: 2048, height: 1365 },
  { src: 'Tnx_7.webp', width: 2048, height: 1365 },
  { src: 'Tnx_8.webp', width: 2048, height: 1365 },
  { src: 'Tnx_10.webp', width: 1291, height: 861 },
  { src: 'Tnx_12.webp', width: 1365, height: 2048 },
  { src: 'Tnx_13.webp', width: 2048, height: 1365 },
  { src: 'Tnx_14.webp', width: 1351, height: 2026 },
  { src: 'Tnx_15.webp', width: 2048, height: 1365 },
  { src: 'Tnx_17.webp', width: 2048, height: 1365 },
];

export default function Gallery() {
  return <PhotoAlbum layout='rows' photos={photos} />;
}
