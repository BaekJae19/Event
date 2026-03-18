import { ChevronLeft, ChevronRight, UtensilsCrossed, Calendar as CalendarIcon, X } from 'lucide-react';
import { useState } from 'react';

export default function MenuCalendar() {
  const [currentDate, setCurrentDate] = useState(new Date(2026, 1, 12)); // Feb 12, 2026
  const [viewMode, setViewMode] = useState<'menu' | 'schedule'>('menu');
  const [selectedDate, setSelectedDate] = useState<number | null>(12);

  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const monthNamesKo = ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'];
  const dayNames = ['일', '월', '화', '수', '목', '금', '토'];

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const today = 12; // Feb 12

  // Calendar grid calculation
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDay = new Date(year, month, 1).getDay();
  
  const calendarDays = [];
  for (let i = 0; i < firstDay; i++) {
    calendarDays.push(null);
  }
  for (let i = 1; i <= daysInMonth; i++) {
    calendarDays.push(i);
  }

  // Mock data
  const menuData: Record<number, { lunch: string[]; dinner: string[] }> = {
    10: { lunch: ['제육볶음', '백미밥', '김치찌개'], dinner: ['돈까스', '백미밥', '미역국'] },
    11: { lunch: ['불고기', '백미밥', '된장찌개'], dinner: ['생선구이', '백미밥', '콩나물국'] },
    12: { lunch: ['제육볶음', '백미밥', '김치찌개'], dinner: ['돈까스', '백미밥', '미역국'] },
    13: { lunch: ['비빔밥', '미역국', '잡채'], dinner: ['삼겹살', '백미밥', '김치찌개'] },
    14: { lunch: ['카레라이스', '단무지', '샐러드'], dinner: ['치킨', '감자튀김', '콜슬로'] },
  };

  const scheduleData: Record<number, { title: string; time: string; color: string }[]> = {
    12: [{ title: '오늘', time: '', color: 'bg-[#57B7E9]' }],
    14: [{ title: '알고리즘 스터디', time: '19:00', color: 'bg-[#B4E4CE]' }],
    15: [{ title: '코드 리뷰', time: '10:00', color: 'bg-[#FFD6E8]' }],
    17: [{ title: '프로젝트 발표', time: '14:00', color: 'bg-[#57B7E9]' }],
    19: [{ title: '멘토링', time: '15:30', color: 'bg-[#FFF4B3]' }],
  };

  const prevMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
  };

  const getSelectedDateData = () => {
    if (!selectedDate) return null;
    
    if (viewMode === 'menu') {
      return menuData[selectedDate];
    } else {
      return scheduleData[selectedDate];
    }
  };

  return (
    <main className="max-w-7xl mx-auto px-6 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[#2C3E50] mb-2">
          {viewMode === 'menu' ? '🍱 월간 식단표' : '📅 월간 일정표'}
        </h1>
        <p className="text-[#5F6C7B]">
          {viewMode === 'menu' ? '한 달 동안의 식단을 한눈에 확인하세요' : '이달의 일정을 확인하고 관리하세요'}
        </p>
      </div>

      {/* Controls */}
      <div className="bg-white rounded-2xl p-6 shadow-sm mb-6">
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
          {/* Month Navigation */}
          <div className="flex items-center gap-4">
            <button
              onClick={prevMonth}
              className="w-10 h-10 rounded-xl border-2 border-[#E5E9EF] flex items-center justify-center hover:bg-[#F5F7FA] hover:border-[#57B7E9] transition-all"
            >
              <ChevronLeft size={20} className="text-[#5F6C7B]" />
            </button>
            <h2 className="text-2xl font-bold text-[#2C3E50] min-w-[200px] text-center">
              {monthNames[month]} {year}
            </h2>
            <button
              onClick={nextMonth}
              className="w-10 h-10 rounded-xl border-2 border-[#E5E9EF] flex items-center justify-center hover:bg-[#F5F7FA] hover:border-[#57B7E9] transition-all"
            >
              <ChevronRight size={20} className="text-[#5F6C7B]" />
            </button>
          </div>

          {/* View Mode Toggle */}
          <div className="flex items-center gap-2 bg-[#F5F7FA] p-1.5 rounded-xl">
            <button
              onClick={() => setViewMode('menu')}
              className={`px-5 py-2.5 rounded-lg font-semibold transition-all flex items-center gap-2 ${
                viewMode === 'menu'
                  ? 'bg-white text-[#57B7E9] shadow-sm'
                  : 'text-[#5F6C7B] hover:text-[#2C3E50]'
              }`}
            >
              <UtensilsCrossed size={18} />
              식단 보기
            </button>
            <button
              onClick={() => setViewMode('schedule')}
              className={`px-5 py-2.5 rounded-lg font-semibold transition-all flex items-center gap-2 ${
                viewMode === 'schedule'
                  ? 'bg-white text-[#57B7E9] shadow-sm'
                  : 'text-[#5F6C7B] hover:text-[#2C3E50]'
              }`}
            >
              <CalendarIcon size={18} />
              일정 보기
            </button>
          </div>
        </div>
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Calendar */}
        <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm p-6">
          {/* Day Names */}
          <div className="grid grid-cols-7 gap-2 mb-3">
            {dayNames.map((day, index) => (
              <div
                key={day}
                className={`text-center text-sm font-semibold py-3 ${
                  index === 0 ? 'text-red-500' : index === 6 ? 'text-[#57B7E9]' : 'text-[#5F6C7B]'
                }`}
              >
                {day}
              </div>
            ))}
          </div>

          {/* Calendar Grid */}
          <div className="grid grid-cols-7 gap-2">
            {calendarDays.map((day, index) => {
              const isToday = day === today;
              const isSelected = day === selectedDate;
              const hasData = day && (viewMode === 'menu' ? menuData[day] : scheduleData[day]);

              return (
                <button
                  key={index}
                  onClick={() => day && setSelectedDate(day)}
                  disabled={!day}
                  className={`min-h-[100px] p-2 rounded-xl border-2 transition-all ${
                    !day
                      ? 'border-transparent bg-transparent cursor-default'
                      : isToday
                      ? 'border-[#57B7E9] bg-[#E8F5FE] shadow-sm'
                      : isSelected
                      ? 'border-[#57B7E9] bg-white shadow-md'
                      : 'border-[#E5E9EF] bg-white hover:border-[#57B7E9]/50 hover:shadow-sm'
                  }`}
                >
                  {day && (
                    <div className="text-left h-full flex flex-col">
                      {/* Date Number */}
                      <div
                        className={`text-sm font-semibold mb-1 ${
                          isToday
                            ? 'text-[#57B7E9]'
                            : index % 7 === 0
                            ? 'text-red-500'
                            : index % 7 === 6
                            ? 'text-[#57B7E9]'
                            : 'text-[#2C3E50]'
                        }`}
                      >
                        {day}
                      </div>

                      {/* Content */}
                      <div className="flex-1 text-xs">
                        {viewMode === 'menu' && menuData[day] && (
                          <div className="space-y-0.5">
                            <p className="text-[#2C3E50] font-medium truncate">
                              {menuData[day].lunch[0]}
                            </p>
                            <p className="text-[#5F6C7B] truncate text-[10px]">
                              {menuData[day].lunch.slice(1, 2).join(', ')}...
                            </p>
                          </div>
                        )}
                        {viewMode === 'schedule' && scheduleData[day] && (
                          <div className="space-y-1">
                            {scheduleData[day].slice(0, 2).map((event, i) => (
                              <div
                                key={i}
                                className={`${event.color} text-white px-1.5 py-0.5 rounded text-[10px] font-medium truncate`}
                              >
                                {event.title}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Detail Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-2xl shadow-sm p-6 sticky top-24">
            {selectedDate ? (
              <>
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-bold text-[#2C3E50]">
                    {month + 1}월 {selectedDate}일 ({dayNames[new Date(year, month, selectedDate).getDay()]})
                  </h3>
                  <button
                    onClick={() => setSelectedDate(null)}
                    className="w-8 h-8 rounded-lg hover:bg-[#F5F7FA] transition-colors flex items-center justify-center text-[#5F6C7B]"
                  >
                    <X size={18} />
                  </button>
                </div>

                {/* Content */}
                {viewMode === 'menu' && menuData[selectedDate] ? (
                  <div className="space-y-6">
                    {/* Lunch */}
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-2 h-2 rounded-full bg-[#57B7E9]"></div>
                        <h4 className="font-semibold text-[#2C3E50]">점심</h4>
                      </div>
                      <ul className="space-y-2">
                        {menuData[selectedDate].lunch.map((item, i) => (
                          <li key={i} className="text-sm text-[#5F6C7B] pl-4">
                            • {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Dinner */}
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-2 h-2 rounded-full bg-[#B4E4CE]"></div>
                        <h4 className="font-semibold text-[#2C3E50]">저녁</h4>
                      </div>
                      <ul className="space-y-2">
                        {menuData[selectedDate].dinner.map((item, i) => (
                          <li key={i} className="text-sm text-[#5F6C7B] pl-4">
                            • {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Footer */}
                    <div className="pt-4 border-t border-[#E5E9EF]">
                      <p className="text-xs text-[#5F6C7B]">
                        📍 2층 구내식당<br />
                        ⏰ 점심 11:30-13:00 | 저녁 17:30-19:00
                      </p>
                    </div>
                  </div>
                ) : viewMode === 'schedule' && scheduleData[selectedDate] ? (
                  <div className="space-y-4">
                    {scheduleData[selectedDate].map((event, i) => (
                      <div key={i} className="p-4 bg-[#F5F7FA] rounded-xl">
                        <div className={`${event.color} w-full text-white text-center py-1.5 rounded-lg font-semibold text-sm mb-3`}>
                          {event.title}
                        </div>
                        {event.time && (
                          <p className="text-sm text-[#5F6C7B]">
                            🕐 {event.time}
                          </p>
                        )}
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-[#F5F7FA] flex items-center justify-center mx-auto mb-3">
                      {viewMode === 'menu' ? (
                        <UtensilsCrossed className="text-[#5F6C7B]" size={24} />
                      ) : (
                        <CalendarIcon className="text-[#5F6C7B]" size={24} />
                      )}
                    </div>
                    <p className="text-sm text-[#5F6C7B]">
                      {viewMode === 'menu' ? '식단 정보가 없습니다' : '일정이 없습니다'}
                    </p>
                  </div>
                )}
              </>
            ) : (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full bg-[#F5F7FA] flex items-center justify-center mx-auto mb-3">
                  <CalendarIcon className="text-[#5F6C7B]" size={24} />
                </div>
                <p className="text-sm text-[#5F6C7B]">
                  날짜를 선택하면<br />상세 정보를 확인할 수 있습니다
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
