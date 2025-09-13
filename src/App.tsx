import { useState } from "react";
import { BirthdayInvitation } from "./components/BirthdayInvitation";
import { PhotoAlbum } from "./components/PhotoAlbum";
import { PhotoView } from "./components/PhotoView";
import { GrowthGraph } from "./components/GrowthGraph";

interface Photo {
  id: number;
  src: string;
  caption: string;
  month: string;
}

export default function App() {
  const [currentPage, setCurrentPage] = useState<'invitation' | 'album' | 'photo' | 'growth'>('invitation');
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);

  const navigateToAlbum = () => {
    setCurrentPage('album');
  };

  const navigateToInvitation = () => {
    setCurrentPage('invitation');
  };

  const navigateToPhoto = (photo: Photo) => {
    setSelectedPhoto(photo);
    setCurrentPage('photo');
  };

  const navigateBackToAlbum = () => {
    setSelectedPhoto(null);
    setCurrentPage('album');
  };

  const navigateToGrowthGraph = () => {
    setCurrentPage('growth');
  };

  const navigateBackToInvitation = () => {
    setCurrentPage('invitation');
  };

  return (
    <>
      {currentPage === 'invitation' && (
        <BirthdayInvitation
          onNavigateToAlbum={navigateToAlbum}
          onNavigateToGrowthGraph={navigateToGrowthGraph}
        />
      )}
      {currentPage === 'album' && (
        <PhotoAlbum onBack={navigateBackToInvitation} onPhotoClick={navigateToPhoto} />
      )}
      {currentPage === 'photo' && selectedPhoto && (
        <PhotoView photo={selectedPhoto} onBack={navigateBackToAlbum} />
      )}
      {currentPage === 'growth' && (
        <GrowthGraph onBack={navigateBackToInvitation} />
      )}
    </>
  );
}