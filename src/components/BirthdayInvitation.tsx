import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Phone, Mail, Camera, TrendingUp } from "lucide-react";
const exampleImage = '/album/main.jpeg';

interface BirthdayInvitationProps {
  onNavigateToAlbum: () => void;
  onNavigateToGrowthGraph: () => void;
}

export function BirthdayInvitation({ onNavigateToAlbum, onNavigateToGrowthGraph }: BirthdayInvitationProps) {
  const handleRSVP = () => {
    // You can replace this with actual RSVP logic
    window.open("tel:+1234567890", "_self");
  };

  return (
    <div className="min-h-screen bg-[#F5F0E8] p-4 md:p-8 flex items-center justify-center">
      <div className="max-w-md mx-auto">
        <Card className="bg-white shadow-lg rounded-3xl overflow-hidden border-0">
          <CardContent className="p-8 text-center">
            {/* Title */}
            <div className="mb-8">
              <h1 className="text-gray-600 text-2xl tracking-wide mb-8">
                태윤이의 생일파티에 초대합니다.
              </h1>
              {/* Date and Time */}
              <div className="text-gray-600 space-y-2 mb-8">
                <p className="text-lg">날짜 : 2025년 12월 13일 토요일</p>
                <p className="text-lg">시간 : 오전 11시 30분</p>
                <p className="text-lg">장소 : 63빌딩 백리향</p>
                <div className="flex flex-col items-center space-y-2 mt-4">
                  <div className="grid grid-cols-2 gap-3 max-w-sm">
                    <a href="https://kko.kakao.com/fwnveoaeyc" target="_blank" rel="noopener noreferrer"
                       className="flex items-center justify-center gap-2 text-blue-600 hover:text-blue-800 underline text-sm p-2 rounded-lg hover:bg-blue-50 transition-colors">
                      <img src="https://www.google.com/s2/favicons?domain=kakao.com&sz=16" alt="Kakao" className="w-4 h-4" />
                      카카오맵
                    </a>
                    <a href="https://naver.me/FqWtmF3C" target="_blank" rel="noopener noreferrer"
                       className="flex items-center justify-center gap-2 text-green-600 hover:text-green-800 underline text-sm p-2 rounded-lg hover:bg-green-50 transition-colors">
                      <img src="https://www.google.com/s2/favicons?domain=naver.com&sz=16" alt="Naver" className="w-4 h-4" />
                      네이버지도
                    </a>
                    <a href="https://maps.app.goo.gl/BLkdoMZUUMjikddE8" target="_blank" rel="noopener noreferrer"
                       className="flex items-center justify-center gap-2 text-red-600 hover:text-red-800 underline text-sm p-2 rounded-lg hover:bg-red-50 transition-colors">
                      <img src="https://www.google.com/s2/favicons?domain=maps.google.com&sz=16" alt="Google Maps" className="w-4 h-4" />
                      구글맵
                    </a>
                    <a href="https://tmap.life/9c334840" target="_blank" rel="noopener noreferrer"
                       className="flex items-center justify-center gap-2 text-purple-600 hover:text-purple-800 underline text-sm p-2 rounded-lg hover:bg-purple-50 transition-colors">
                      <img src="https://www.google.com/s2/favicons?domain=tmap.life&sz=16" alt="TMAP" className="w-4 h-4" />
                      티맵
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Photo */}
            <div className="mb-8">
              <div className="rounded-2xl overflow-hidden shadow-md">
                <img
                  src={exampleImage}
                  alt="Birthday celebration"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="space-y-3 mb-6">
              <Button
                onClick={onNavigateToAlbum}
                variant="outline"
                className="border-gray-300 text-gray-700 hover:bg-gray-50 py-3 rounded-xl transition-colors w-full flex items-center justify-center"
              >
                <Camera className="w-4 h-4 mr-2" />
                <span>태윤이의 첫 번째 해 보기</span>
              </Button>

              <Button
                onClick={onNavigateToGrowthGraph}
                variant="outline"
                className="border-gray-300 text-gray-700 hover:bg-gray-50 py-3 rounded-xl transition-colors w-full flex items-center justify-center"
              >
                <TrendingUp className="w-4 h-4 mr-2" />
                <span>태윤이의 성장 그래프</span>
              </Button>
            </div>

            {/* Thank You Message */}
            <div className="mt-8 text-center">
              <p className="text-gray-600 mb-2">
                함께해주신 모든 분들께 감사드립니다
              </p>
              <div className="text-2xl">💕</div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}