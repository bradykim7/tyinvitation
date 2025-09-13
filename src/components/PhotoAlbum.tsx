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

interface PhotoAlbumProps {
  onBack: () => void;
  onPhotoClick: (photo: Photo) => void;
}

export function PhotoAlbum({ onBack, onPhotoClick }: PhotoAlbumProps) {

  const photos = [
    {
      id: 1,
      src: "/album/2412.JPG",
      caption: "12월의 루돌프 태윤이",
      month: "12월"
    },
    {
      id: 2,
      src: "/album/2501.jpeg",
      caption: "아빠 와 아들 ?!",
      month: "1월"
    },
    {
      id: 3,
      src: "/album/2502.jpeg",
      caption: "청룡의 해, 태윤이!",
      month: "2월"
    },
    {
      id: 4,
      src: "/album/2503.jpeg",
      caption: "백일 파티",
      month: "3월"
    },
    {
      id: 5,
      src: "/album/2504.jpeg",
      caption: "곰돌이 푸 보다 귀여운 태윤이",
      month: "4월"
    },
    {
      id: 6,
      src: "/album/2505.mp4",
      caption: "살인 미소 태윤",
      month: "5월"
    },
    {
      id: 7,
      src: "/album/2506.jpeg",
      caption: "맘마 더주세요.",
      month: "6월"
    },
    {
      id: 8,
      src: "/album/2507.jpeg",
      caption: "첫 물놀이",
      month: "7월"
    },
    {
      id: 9,
      src: "/album/2508.jpeg",
      caption: "엄마랑 백화점 나들이",
      month: "8월"
    },
    {
      id: 10,
      src: "/album/2509.mp4",
      caption: "살인 미소2",
      month: "9월"
    },
    {
      id: 11,
      src: "",
      caption: "첫 번째 말",
      month: "10월"
    },
    {
      id: 12,
      src: "",
      caption: "소중한 추억들",
      month: "11월"
    }
  ];

  return (
    <div className="min-h-screen bg-[#F5F0E8] p-4">
      {/* Header */}
      <div className="max-w-4xl mx-auto mb-8">
        <div className="flex items-center justify-between mb-6">
          <Button
            onClick={onBack}
            variant="ghost"
            className="flex items-center gap-2 text-gray-600 hover:text-gray-800 p-2"
          >
            <ArrowLeft className="w-5 h-5" />
            초대장으로 돌아가기
          </Button>
        </div>
        
        <div className="text-center">
          <h1 className="text-2xl text-gray-700 mb-2"> 태윤이의 첫 번째 해</h1>
          <p className="text-gray-500">소중한 순간들을 함께 나눠요</p>
        </div>
      </div>

      {/* Photo Grid */}
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.filter(photo => photo.src).map((photo) => (
            <Card key={photo.id} className="bg-white shadow-md rounded-2xl overflow-hidden border-0 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="aspect-square overflow-hidden">
                  {photo.src.endsWith('.mp4') || photo.src.endsWith('.mov') ? (
                    <div
                      className="relative w-full h-full cursor-pointer"
                      onClick={() => onPhotoClick(photo)}
                    >
                      <video
                        src={photo.src}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 pointer-events-none"
                        muted
                        loop
                        playsInline
                      />
                    </div>
                  ) : (
                    <ImageWithFallback
                      src={photo.src}
                      alt={photo.caption}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 cursor-pointer"
                      onClick={() => onPhotoClick(photo)}
                    />
                  )}
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600 mb-1">{photo.month}</p>
                      <p className="text-gray-800">{photo.caption}</p>
                    </div>
                    <Heart className="w-5 h-5 text-pink-300" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

      </div>

    </div>
  );
}