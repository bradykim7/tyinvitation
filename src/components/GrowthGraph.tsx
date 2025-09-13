import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { ArrowLeft } from "lucide-react";

// ============================================================================
// 🎯 EASY DATA ENTRY - UPDATE HERE WITH YOUR SON'S ACTUAL DATA
// ============================================================================

// 📏 Growth measurements (height in cm, weight in kg)
const GROWTH_DATA = [
  { month: "출생 (D+1)", height: 50.5, weight: 3.42 },
  { month: "2주 (D+15)", height: 50.5, weight: 4.01 },  // using last height measurement
  { month: "1개월 (D+32)", height: 55.5, weight: 5.5 },
  { month: "2개월 (D+65)", height: 60.7, weight: 6.4 },
  { month: "3개월 (D+103)", height: 60.7, weight: 7.49 }, // using last height measurement
  { month: "4개월 (D+129)", height: 65.8, weight: 7.86 },
  { month: "5개월 (D+158)", height: 68.2, weight: 8.4 },
  { month: "7개월 (D+203)", height: 69.8, weight: 9.0 },
  { month: "8개월 (D+242)", height: 72.5, weight: 9.9 },
  // To add new month: { month: "9개월 (D+XXX)", height: XX.X, weight: X.XX },
];


// ============================================================================

interface GrowthGraphProps {
  onBack: () => void;
}

export function GrowthGraph({ onBack }: GrowthGraphProps) {
  const growthData = GROWTH_DATA;

  const maxHeight = Math.max(...growthData.map(d => d.height));
  const maxWeight = Math.max(...growthData.map(d => d.weight));

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
          <h1 className="text-2xl text-gray-700 mb-2">태윤이의 성장 그래프</h1>
          <p className="text-gray-500">첫 번째 해 동안의 소중한 성장 기록</p>
        </div>
      </div>

      {/* Growth Charts */}
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Height Chart */}
        <Card className="bg-white shadow-lg rounded-3xl overflow-hidden border-0">
          <CardContent className="p-8">
            <h3 className="text-lg text-gray-700 mb-6 text-center">키 성장 그래프 (cm)</h3>
            <div className="relative h-96 md:h-[500px] mb-4">
              <svg width="100%" height="100%" viewBox="0 0 900 450" className="overflow-visible">
                {/* Grid lines */}
                {[0, 1, 2, 3, 4].map(i => (
                  <line
                    key={i}
                    x1="90"
                    y1={50 + i * 75}
                    x2="840"
                    y2={50 + i * 75}
                    stroke="#f0f0f0"
                    strokeWidth="1"
                  />
                ))}

                {/* Y-axis labels */}
                {[80, 70, 60, 50, 40].map((value, i) => (
                  <text
                    key={value}
                    x="80"
                    y={58 + i * 75}
                    textAnchor="end"
                    fontSize="14"
                    fill="#666"
                  >
                    {value}
                  </text>
                ))}

                {/* Line chart */}
                <polyline
                  points={growthData.map((d, i) =>
                    `${120 + i * 80},${350 - ((d.height - 40) / 40) * 300}`
                  ).join(' ')}
                  fill="none"
                  stroke="#3b82f6"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                {/* Data points */}
                {growthData.map((d, i) => (
                  <g key={i}>
                    <circle
                      cx={120 + i * 80}
                      cy={350 - ((d.height - 40) / 40) * 300}
                      r="6"
                      fill="#3b82f6"
                    />
                    <text
                      x={120 + i * 80}
                      y={420}
                      textAnchor="middle"
                      fontSize="12"
                      fill="#666"
                      transform={`rotate(-45, ${120 + i * 80}, 420)`}
                    >
                      {d.month}
                    </text>
                  </g>
                ))}
              </svg>
            </div>
          </CardContent>
        </Card>

        {/* Weight Chart */}
        <Card className="bg-white shadow-lg rounded-3xl overflow-hidden border-0">
          <CardContent className="p-8">
            <h3 className="text-lg text-gray-700 mb-6 text-center">몸무게 성장 그래프 (kg)</h3>
            <div className="relative h-96 md:h-[500px] mb-4">
              <svg width="100%" height="100%" viewBox="0 0 900 450" className="overflow-visible">
                {/* Grid lines */}
                {[0, 1, 2, 3, 4].map(i => (
                  <line
                    key={i}
                    x1="90"
                    y1={50 + i * 75}
                    x2="840"
                    y2={50 + i * 75}
                    stroke="#f0f0f0"
                    strokeWidth="1"
                  />
                ))}

                {/* Y-axis labels */}
                {[12, 9, 6, 3, 0].map((value, i) => (
                  <text
                    key={value}
                    x="80"
                    y={58 + i * 75}
                    textAnchor="end"
                    fontSize="14"
                    fill="#666"
                  >
                    {value}
                  </text>
                ))}

                {/* Line chart */}
                <polyline
                  points={growthData.map((d, i) =>
                    `${120 + i * 80},${350 - (d.weight / 12) * 300}`
                  ).join(' ')}
                  fill="none"
                  stroke="#10b981"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                {/* Data points */}
                {growthData.map((d, i) => (
                  <g key={i}>
                    <circle
                      cx={120 + i * 80}
                      cy={350 - (d.weight / 12) * 300}
                      r="6"
                      fill="#10b981"
                    />
                    <text
                      x={120 + i * 80}
                      y={420}
                      textAnchor="middle"
                      fontSize="12"
                      fill="#666"
                      transform={`rotate(-45, ${120 + i * 80}, 420)`}
                    >
                      {d.month}
                    </text>
                  </g>
                ))}
              </svg>
            </div>
          </CardContent>
        </Card>

        {/* Growth Stats */}
        <Card className="bg-white shadow-lg rounded-3xl overflow-hidden border-0">
          <CardContent className="p-8">
            <h3 className="text-lg text-gray-700 mb-6 text-center">성장 통계</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <p className="text-2xl text-blue-600 font-medium mb-1">
                  {growthData[growthData.length - 1].height}cm
                </p>
                <p className="text-sm text-gray-600">현재 키</p>
              </div>
              <div className="text-center">
                <p className="text-2xl text-green-600 font-medium mb-1">
                  {growthData[growthData.length - 1].weight}kg
                </p>
                <p className="text-sm text-gray-600">현재 몸무게</p>
              </div>
              <div className="text-center">
                <p className="text-2xl text-purple-600 font-medium mb-1">
                  +{growthData[growthData.length - 1].height - growthData[0].height}cm
                </p>
                <p className="text-sm text-gray-600">키 성장</p>
              </div>
              <div className="text-center">
                <p className="text-2xl text-orange-600 font-medium mb-1">
                  +{(growthData[growthData.length - 1].weight - growthData[0].weight).toFixed(1)}kg
                </p>
                <p className="text-sm text-gray-600">몸무게 증가</p>
              </div>
            </div>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}