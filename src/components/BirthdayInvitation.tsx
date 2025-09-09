import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Phone, Mail, Camera } from "lucide-react";
const exampleImage = '/album/main.jpeg';

interface BirthdayInvitationProps {
  onNavigateToAlbum: () => void;
}

export function BirthdayInvitation({ onNavigateToAlbum }: BirthdayInvitationProps) {
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
              <h1 className="text-gray-600 text-lg tracking-wide mb-8">
                태윤이의 생일파티에 초대합니다.
              </h1>
              
              {/* Divider */}
              <div className="w-full h-px bg-gray-300 mb-8"></div>
              
              {/* Date and Time */}
              <div className="text-gray-600 space-y-2 mb-8">
                <p className="text-base">2025년 12월 13일 토요일 오후 11시 30분</p>
                <p className="text-base">63빌딩 백리향</p>
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

            {/* Album Button */}
            <div className="mb-6">
              <Button 
                onClick={onNavigateToAlbum}
                variant="outline"
                className="border-gray-300 text-gray-700 hover:bg-gray-50 py-3 rounded-xl transition-colors w-full"
              >
                <Camera className="w-4 h-4 mr-2" />
                태윤이의 첫 번째 해 보기
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}