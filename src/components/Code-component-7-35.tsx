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
      src: "https://images.unsplash.com/photo-1588495644868-1416d25d8b33?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWJ5JTIwc21pbGluZyUyMGhhcHB5fGVufDF8fHx8MTc1NzI5OTU4Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      caption: "첫 번째 미소",
      month: "1개월"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1723990140290-1c7c6fd4bc92?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWJ5JTIwc2xlZXBpbmclMjBwZWFjZWZ1bHxlbnwxfHx8fDE3NTczMzgxNjJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      caption: "평화로운 잠",
      month: "2개월"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1616540389123-c61321e55dc0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWJ5JTIwcGxheWluZyUyMHRveXN8ZW58MXx8fHwxNzU3Mjk5NTg2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      caption: "장난감과 놀기",
      month: "4개월"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1602887627273-85fff2433015?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWJ5JTIwY3Jhd2xpbmclMjBsZWFybmluZ3xlbnwxfHx8fDE3NTczMzgxNjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      caption: "기어다니기 시작",
      month: "8개월"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1679881611800-e6c713e1bdfa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWJ5JTIwZmlyc3QlMjB5ZWFyJTIwbWlsZXN0b25lfGVufDF8fHx8MTc1NzMzODE2Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      caption: "첫 걸음마",
      month: "10개월"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1722173205783-d602329f0743?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWJ5JTIwcGhvdG8lMjBhbGJ1bSUyMG1lbW9yaWVzfGVufDF8fHx8MTc1NzMzODE2MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      caption: "소중한 추억들",
      month: "12개월"
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
          <h1 className="text-2xl text-gray-700 mb-2">[Your Son's Name]의 첫 번째 해</h1>
          <p className="text-gray-500">소중한 순간들을 함께 나눠요</p>
        </div>
      </div>

      {/* Photo Grid */}
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {photos.map((photo) => (
            <Card key={photo.id} className="bg-white shadow-md rounded-2xl overflow-hidden border-0 hover:shadow-lg transition-shadow">
              <CardContent className="p-0">
                <div className="aspect-square overflow-hidden">
                  <ImageWithFallback
                    src={photo.src}
                    alt={photo.caption}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
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