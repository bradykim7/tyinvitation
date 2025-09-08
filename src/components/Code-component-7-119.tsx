import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Phone, Mail, Camera } from "lucide-react";
import exampleImage from 'figma:asset/261a60815ca0d067153bc89f5855f6bdfe7aef75.png';

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
                [Your Son's Name]의 생일파티에 초대합니다
              </h1>
              
              {/* Divider */}
              <div className="w-full h-px bg-gray-300 mb-8"></div>
              
              {/* Date and Time */}
              <div className="text-gray-600 space-y-2 mb-8">
                <p className="text-base">2024년 [월] [일]일 [요일] 오후 [시간]시</p>
                <p className="text-base">[Venue Name]</p>
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
                [Your Son's Name]의 첫 번째 해 보기
              </Button>
            </div>

            {/* RSVP Section */}
            <div className="space-y-4">
              <p className="text-gray-600 text-sm mb-6">
                참석 여부를 알려주세요
              </p>
              
              <div className="flex flex-col gap-3">
                <Button 
                  onClick={handleRSVP}
                  className="bg-gray-700 hover:bg-gray-800 text-white py-3 rounded-xl transition-colors"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  전화로 연락하기
                </Button>
                
                <Button 
                  variant="outline"
                  onClick={() => window.open("mailto:youremail@example.com?subject=생일파티 참석 여부", "_self")}
                  className="border-gray-300 text-gray-700 hover:bg-gray-50 py-3 rounded-xl transition-colors"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  이메일로 연락하기
                </Button>
              </div>
              
              <p className="text-xs text-gray-400 mt-6">
                [날짜]까지 연락주세요 • 전화: [연락처] • 이메일: [이메일]
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}