import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { ArrowLeft, Heart } from "lucide-react";
import { ImageWithFallback } from './figma/ImageWithFallback';

interface Photo {
  id: number;
  src: string;
  caption: string;
  month: string;
}

interface PhotoViewProps {
  photo: Photo;
  onBack: () => void;
}

export function PhotoView({ photo, onBack }: PhotoViewProps) {
  return (
    <div className="min-h-screen bg-[#F5F0E8] p-4 md:p-8 flex items-center justify-center">
      <div className="w-full max-w-lg">
        {/* Header */}
        <div className="mb-6">
          <Button
            onClick={onBack}
            variant="ghost"
            className="flex items-center gap-2 text-gray-600 hover:text-gray-800 p-2 mb-4"
          >
            <ArrowLeft className="w-5 h-5" />
            앨범으로 돌아가기
          </Button>
        </div>

        {/* Photo Display */}
        <Card className="bg-white shadow-lg rounded-3xl overflow-hidden border-0">
          <CardContent className="p-6 text-center">
            {/* Photo */}
            <div className="mb-6">
              {photo.src.endsWith('.mp4') || photo.src.endsWith('.mov') ? (
                <video
                  src={photo.src}
                  className="max-w-md w-full h-auto object-contain rounded-2xl mx-auto cursor-pointer"
                  controls
                  autoPlay
                  muted
                  loop
                  playsInline
                  onClick={onBack}
                />
              ) : (
                <img
                  src={photo.src}
                  alt={photo.caption}
                  className="max-w-md w-full h-auto object-contain rounded-2xl mx-auto cursor-pointer"
                  onClick={onBack}
                />
              )}
            </div>

            {/* Caption */}
            <div className="text-gray-600">
              <div className="flex items-center justify-center gap-4 mb-4">
                <div>
                  <p className="text-sm text-gray-500 mb-1">{photo.month}</p>
                  <p className="text-lg text-gray-800">{photo.caption}</p>
                </div>
                <Heart className="w-5 h-5 text-pink-300" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}