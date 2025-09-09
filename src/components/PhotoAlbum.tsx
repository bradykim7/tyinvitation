import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { ArrowLeft, Heart } from "lucide-react";
import { ImageWithFallback } from './figma/ImageWithFallback';

interface PhotoAlbumProps {
  onBack: () => void;
}

export function PhotoAlbum({ onBack }: PhotoAlbumProps) {
  const photos = [
    {
      id: 1,
      src: "/album/2412.JPG",
      caption: "첫 번째 미소",
      month: "12월"
    },
    {
      id: 2,
      src: "/album/2501.jpeg",
      caption: "평화로운 잠",
      month: "1월"
    },
    {
      id: 3,
      src: "/album/2502.jpeg",
      caption: "장난감과 놀기",
      month: "2월"
    },
    {
      id: 4,
      src: "/album/2503.jpeg",
      caption: "웃음소리",
      month: "3월"
    },
    {
      id: 5,
      src: "/album/2504.jpeg",
      caption: "혼자 앉기",
      month: "4월"
    },
    {
      id: 6,
      src: "/album/2505.mp4",
      caption: "이유식 시작",
      month: "5월"
    },
    {
      id: 7,
      src: "/album/2506.jpeg",
      caption: "블록 쌓기",
      month: "6월"
    },
    {
      id: 8,
      src: "/album/2507.jpeg",
      caption: "기어다니기 시작",
      month: "7월"
    },
    {
      id: 9,
      src: "/album/2508.jpeg",
      caption: "붙잡고 서기",
      month: "8월"
    },
    {
      id: 10,
      src: "/album/2509.mp4",
      caption: "첫 걸음마",
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
                    <video
                      src={photo.src}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      controls
                      muted
                      loop
                      playsInline
                    />
                  ) : (
                    <ImageWithFallback
                      src={photo.src}
                      alt={photo.caption}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
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

        {/* Album Stats */}
        <Card className="bg-white shadow-md rounded-2xl border-0 mt-8 mb-8">
          <CardContent className="p-6 text-center">
            <h3 className="text-lg text-gray-700 mb-4">첫 번째 해 통계</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div>
                <p className="text-2xl text-gray-800 mb-1">365</p>
                <p className="text-sm text-gray-600">소중한 날들</p>
              </div>
              <div>
                <p className="text-2xl text-gray-800 mb-1">12</p>
                <p className="text-sm text-gray-600">개월의 성장</p>
              </div>
              <div>
                <p className="text-2xl text-gray-800 mb-1">∞</p>
                <p className="text-sm text-gray-600">행복한 순간</p>
              </div>
              <div>
                <p className="text-2xl text-gray-800 mb-1">1</p>
                <p className="text-sm text-gray-600">특별한 생일</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Thank You Message */}
        <div className="text-center">
          <Card className="bg-white shadow-md rounded-2xl border-0 inline-block">
            <CardContent className="p-8">
              <p className="text-gray-600 mb-4">
                함께해주신 모든 분들께 감사드립니다
              </p>
              <div className="text-2xl">💕</div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}