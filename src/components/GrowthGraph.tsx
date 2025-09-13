import React from "react";
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
          <CardContent className="p-4 md:p-8">
            <h3 className="text-lg md:text-xl font-semibold text-gray-700 mb-4 md:mb-6 text-center">키 성장 그래프 (cm)</h3>
            <div className="relative" style={{ paddingBottom: '75%' }}>
              <svg 
                className="absolute inset-0 w-full h-full" 
                viewBox="0 0 900 480" 
                preserveAspectRatio="xMidYMid meet"
              >
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
                    className="text-sm md:text-base"
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
                  strokeWidth="4"
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
                    {/* Value labels - show alternating on mobile */}
                    <text
                      x={120 + i * 80}
                      y={350 - ((d.height - 40) / 40) * 300 - 12}
                      textAnchor="middle"
                      className={`${i % 2 === 0 ? 'block' : 'hidden md:block'} text-[10px] md:text-xs font-bold`}
                      fill="#3b82f6"
                    >
                      {d.height}
                    </text>
                    {/* Month labels with better rotation */}
                    <text
                      x={120 + i * 80}
                      y={430}
                      textAnchor="end"
                      className="text-[8px] md:text-xs"
                      fill="#666"
                      transform={`rotate(-70, ${120 + i * 80}, 430)`}
                    >
                      {i % 2 === 0 || window.innerWidth > 768 ? d.month.split(' ')[0] : ''}
                    </text>
                  </g>
                ))}
              </svg>
            </div>
          </CardContent>
        </Card>

        {/* Weight Chart */}
        <Card className="bg-white shadow-lg rounded-3xl overflow-hidden border-0">
          <CardContent className="p-4 md:p-8">
            <h3 className="text-lg md:text-xl font-semibold text-gray-700 mb-4 md:mb-6 text-center">몸무게 성장 그래프 (kg)</h3>
            <div className="relative" style={{ paddingBottom: '75%' }}>
              <svg 
                className="absolute inset-0 w-full h-full" 
                viewBox="0 0 900 480" 
                preserveAspectRatio="xMidYMid meet"
              >
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
                    className="text-sm md:text-base"
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
                  strokeWidth="4"
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
                    {/* Value labels - show alternating on mobile */}
                    <text
                      x={120 + i * 80}
                      y={350 - (d.weight / 12) * 300 - 12}
                      textAnchor="middle"
                      className={`${i % 2 === 0 ? 'block' : 'hidden md:block'} text-[10px] md:text-xs font-bold`}
                      fill="#10b981"
                    >
                      {d.weight}
                    </text>
                    {/* Month labels with better rotation */}
                    <text
                      x={120 + i * 80}
                      y={430}
                      textAnchor="end"
                      className="text-[8px] md:text-xs"
                      fill="#666"
                      transform={`rotate(-70, ${120 + i * 80}, 430)`}
                    >
                      {i % 2 === 0 || window.innerWidth > 768 ? d.month.split(' ')[0] : ''}
                    </text>
                  </g>
                ))}
              </svg>
            </div>
          </CardContent>
        </Card>

        {/* Growth Stats */}
        <Card className="bg-white shadow-lg rounded-3xl overflow-hidden border-0">
          <CardContent className="p-4 md:p-8">
            <h3 className="text-lg md:text-xl font-semibold text-gray-700 mb-4 md:mb-6 text-center">성장 통계</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              <div className="text-center">
                <p className="text-2xl md:text-3xl text-blue-600 font-bold mb-1">
                  {growthData[growthData.length - 1].height}cm
                </p>
                <p className="text-base md:text-lg text-gray-600">현재 키</p>
              </div>
              <div className="text-center">
                <p className="text-2xl md:text-3xl text-green-600 font-bold mb-1">
                  {growthData[growthData.length - 1].weight}kg
                </p>
                <p className="text-base md:text-lg text-gray-600">현재 몸무게</p>
              </div>
              <div className="text-center">
                <p className="text-2xl md:text-3xl text-purple-600 font-bold mb-1">
                  +{growthData[growthData.length - 1].height - growthData[0].height}cm
                </p>
                <p className="text-base md:text-lg text-gray-600">키 성장</p>
              </div>
              <div className="text-center">
                <p className="text-2xl md:text-3xl text-orange-600 font-bold mb-1">
                  +{(growthData[growthData.length - 1].weight - growthData[0].weight).toFixed(1)}kg
                </p>
                <p className="text-base md:text-lg text-gray-600">몸무게 증가</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Growth Data Table */}
        <Card className="bg-white shadow-lg rounded-3xl overflow-hidden border-0">
          <CardContent className="p-4 md:p-8">
            <h3 className="text-lg md:text-xl font-semibold text-gray-700 mb-4 md:mb-6 text-center">성장 기록 데이터</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm md:text-base">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="text-left py-3 px-2 md:px-4 text-gray-700 font-semibold">측정 시기</th>
                    <th className="text-center py-3 px-2 md:px-4 text-gray-700 font-semibold">키 (cm)</th>
                    <th className="text-center py-3 px-2 md:px-4 text-gray-700 font-semibold">몸무게 (kg)</th>
                    <th className="text-center py-3 px-2 md:px-4 text-gray-700 font-semibold hidden md:table-cell">키 증가</th>
                    <th className="text-center py-3 px-2 md:px-4 text-gray-700 font-semibold hidden md:table-cell">몸무게 증가</th>
                  </tr>
                </thead>
                <tbody>
                  {growthData.map((data, index) => (
                    <tr key={index} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                      <td className="py-3 px-2 md:px-4 text-gray-600">
                        <div className="font-medium">{data.month}</div>
                      </td>
                      <td className="text-center py-3 px-2 md:px-4">
                        <span className="text-blue-600 font-semibold">{data.height}</span>
                      </td>
                      <td className="text-center py-3 px-2 md:px-4">
                        <span className="text-green-600 font-semibold">{data.weight}</span>
                      </td>
                      <td className="text-center py-3 px-2 md:px-4 text-gray-500 hidden md:table-cell">
                        {index === 0 ? (
                          <span className="text-gray-400">-</span>
                        ) : (
                          <span className="text-purple-600">
                            +{(data.height - growthData[index - 1].height).toFixed(1)}
                          </span>
                        )}
                      </td>
                      <td className="text-center py-3 px-2 md:px-4 text-gray-500 hidden md:table-cell">
                        {index === 0 ? (
                          <span className="text-gray-400">-</span>
                        ) : (
                          <span className="text-orange-600">
                            +{(data.weight - growthData[index - 1].weight).toFixed(2)}
                          </span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr className="border-t-2 border-gray-200 bg-gray-50">
                    <td className="py-3 px-2 md:px-4 font-semibold text-gray-700">총 성장</td>
                    <td className="text-center py-3 px-2 md:px-4">
                      <span className="text-blue-600 font-bold">
                        +{(growthData[growthData.length - 1].height - growthData[0].height).toFixed(1)}cm
                      </span>
                    </td>
                    <td className="text-center py-3 px-2 md:px-4">
                      <span className="text-green-600 font-bold">
                        +{(growthData[growthData.length - 1].weight - growthData[0].weight).toFixed(2)}kg
                      </span>
                    </td>
                    <td className="text-center py-3 px-2 md:px-4 hidden md:table-cell" colSpan={2}>
                      <span className="text-gray-500 text-sm">
                        {growthData.length}회 측정
                      </span>
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
            
            {/* Mobile summary for hidden columns */}
            <div className="mt-4 p-4 bg-gray-50 rounded-xl md:hidden">
              <p className="text-sm text-gray-600 text-center">
                <span className="font-semibold">총 {growthData.length}회 측정</span><br/>
                키 성장: <span className="text-purple-600 font-bold">+{(growthData[growthData.length - 1].height - growthData[0].height).toFixed(1)}cm</span><br/>
                몸무게 증가: <span className="text-orange-600 font-bold">+{(growthData[growthData.length - 1].weight - growthData[0].weight).toFixed(2)}kg</span>
              </p>
            </div>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}