import { UtensilsCrossed, ExternalLink } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router';

export function MenuCard() {
  const [activeTab, setActiveTab] = useState<'lunch' | 'dinner'>('lunch');

  const menus = {
    lunch: [
      '제육볶음',
      '백미밥',
      '김치찌개',
      '배추김치',
      '모듬야채무침',
      '바나나'
    ],
    dinner: [
      '돈까스',
      '백미밥',
      '미역국',
      '배추김치',
      '마카로니샐러드',
      '요구르트'
    ]
  };

  return (
    <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow h-full flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-[#E8F5FE] flex items-center justify-center">
            <UtensilsCrossed size={24} className="text-[#57B7E9]" />
          </div>
          <h3 className="text-xl font-bold text-[#2C3E50]">오늘의 식단 🍱</h3>
        </div>
        <Link
          to="/menu-calendar"
          className="text-sm text-[#57B7E9] hover:text-[#4A9FD4] font-medium flex items-center gap-1"
        >
          전체보기
          <ExternalLink size={14} />
        </Link>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 mb-6">
        <button
          onClick={() => setActiveTab('lunch')}
          className={`flex-1 py-2.5 px-4 rounded-xl font-medium transition-all ${
            activeTab === 'lunch'
              ? 'bg-[#57B7E9] text-white shadow-sm'
              : 'bg-[#F5F7FA] text-[#5F6C7B] hover:bg-[#E8F5FE]'
          }`}
        >
          점심
        </button>
        <button
          onClick={() => setActiveTab('dinner')}
          className={`flex-1 py-2.5 px-4 rounded-xl font-medium transition-all ${
            activeTab === 'dinner'
              ? 'bg-[#57B7E9] text-white shadow-sm'
              : 'bg-[#F5F7FA] text-[#5F6C7B] hover:bg-[#E8F5FE]'
          }`}
        >
          저녁
        </button>
      </div>

      {/* Menu List */}
      <div className="flex-1">
        <ul className="space-y-3">
          {menus[activeTab].map((item, index) => (
            <li
              key={index}
              className="flex items-center gap-3 py-3 border-b border-[#E5E9EF] last:border-0"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-[#57B7E9]"></div>
              <span className="text-[#2C3E50] font-medium">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Footer Note */}
      <div className="mt-6 pt-4 border-t border-[#E5E9EF]">
        <p className="text-xs text-[#5F6C7B] text-center">
          📍 2층 구내식당 | 운영시간 11:30 - 13:00
        </p>
      </div>
    </div>
  );
}