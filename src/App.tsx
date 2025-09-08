import { useState } from "react";
import { BirthdayInvitation } from "./components/BirthdayInvitation";
import { PhotoAlbum } from "./components/PhotoAlbum";

export default function App() {
  const [currentPage, setCurrentPage] = useState<'invitation' | 'album'>('invitation');

  const navigateToAlbum = () => {
    setCurrentPage('album');
  };

  const navigateToInvitation = () => {
    setCurrentPage('invitation');
  };

  return (
    <>
      {currentPage === 'invitation' && (
        <BirthdayInvitation onNavigateToAlbum={navigateToAlbum} />
      )}
      {currentPage === 'album' && (
        <PhotoAlbum onBack={navigateToInvitation} />
      )}
    </>
  );
}