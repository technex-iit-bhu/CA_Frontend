import PhotoAlbum from "react-photo-album";

const photos = [
    { src: "Tnx_2.jpg", width: 942, height: 1413 },
  { src: "Tnx_4.jpg", width: 2048, height: 1152 },
  { src: "Tnx_6.jpg", width: 2048, height: 1365 },
  { src: "Tnx_7.jpg", width: 2048, height: 1365 },
  { src: "Tnx_8.jpg", width: 2048, height: 1365 },
  { src: "Tnx_10.jpg", width: 1291, height: 861 },
  { src: "Tnx_12.png", width: 1365, height: 2048 },
  { src: "Tnx_13.png", width: 2048, height: 1365 },
  { src: "Tnx_14.png", width: 1351, height: 2026 },
  { src: "Tnx_15.png", width: 2048, height: 1365 },
  { src: "Tnx_17.png", width: 2048, height: 1365 },
];

export default function Gallery() {
  return <PhotoAlbum layout="rows" photos={photos} />;
}