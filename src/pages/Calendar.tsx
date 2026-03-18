import { ChevronLeft, ChevronRight, Plus, Clock } from 'lucide-react';
import { useState } from 'react';

export default function Calendar() {
  const [currentDate] = useState(new Date(2026, 1, 12)); // Feb 12, 2026

  const events = [
    { id: 1, title: '프로젝트 발표', date: '2026-02-17', time: '14:00', color: 'bg-[#57B7E9]' },
    { id: 2, title: '알고리즘 스터디', date: '2026-02-14', time: '19:00', color: 'bg-[#B4E4CE]' },
    { id: 3, title: '코드 리뷰', date: '2026-02-15', time: '10:00', color: 'bg-[#FFD6E8]' },
    { id: 4, title: '멘토링', date: '2026-02-19', time: '15:30', color: 'bg-[#FFF4B3]' },
  ];

  const upcomingEvents = [
    { id: 1, title: '알고리즘 스터디', date: '2026.02.14', time: '19:00', dday: 2, color: 'from-[#B4E4CE] to-[#8FD5B3]' },
    { id: 2, title: '코드 리뷰', date: '2026.02.15', time: '10:00', dday: 3, color: 'from-[#FFD6E8] to-[#FFBCD5]' },
    { id: 3, title: '프로젝트 발표', date: '2026.02.17', time: '14:00', dday: 5, color: 'from-[#57B7E9] to-[#4A9FD4]' },
  ];

  const daysInMonth = new Date(2026, 2, 0).getDate();
  const firstDay = new Date(2026, 1, 1).getDay();
  const monthNames = ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'];
  const dayNames = ['일', '월', '화', '수', '목', '금', '토'];

  const calendarDays = [];
  for (let i = 0; i < firstDay; i++) {
    calendarDays.push(null);
  }
  for (let i = 1; i <= daysInMonth; i++) {
    calendarDays.push(i);
  }

  const hasEvent = (day: number) => {
    return events.some(event => {
      const eventDate = new Date(event.date);
      return eventDate.getDate() === day && eventDate.getMonth() === 1;
    });
  };

  return (
    <main className="max-w-7xl mx-auto px-6 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Calendar Card */}
        <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm p-8">
          {/* Calendar Header */}
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-[#2C3E50]">
              {currentDate.getFullYear()}년 {monthNames[currentDate.getMonth()]}
            </h2>
            <div className="flex items-center gap-2">
              <button className="w-10 h-10 rounded-xl border-2 border-[#E5E9EF] flex items-center justify-center hover:bg-[#F5F7FA] transition-colors">
                <ChevronLeft size={20} className="text-[#5F6C7B]" />
              </button>
              <button className="px-4 py-2 rounded-xl border-2 border-[#E5E9EF] text-sm font-medium text-[#5F6C7B] hover:bg-[#F5F7FA] transition-colors">
                오늘
              </button>
              <button className="w-10 h-10 rounded-xl border-2 border-[#E5E9EF] flex items-center justify-center hover:bg-[#F5F7FA] transition-colors">
                <ChevronRight size={20} className="text-[#5F6C7B]" />
              </button>
            </div>
          </div>

          {/* Day Names */}
          <div className="grid grid-cols-7 gap-2 mb-3">
            {dayNames.map((day, index) => (
              <div
                key={day}
                className={`text-center text-sm font-semibold py-2 ${
                  index === 0 ? 'text-red-500' : index === 6 ? 'text-[#57B7E9]' : 'text-[#5F6C7B]'
                }`}
              >
                {day}
              </div>
            ))}
          </div>

          {/* Calendar Grid */}
          <div className="grid grid-cols-7 gap-2">
            {calendarDays.map((day, index) => (
              <div
                key={index}
                className={`aspect-square rounded-xl flex flex-col items-center justify-center relative ${
                  day
                    ? day === 12
                      ? 'bg-[#57B7E9] text-white font-bold shadow-sm'
                      : 'hover:bg-[#F5F7FA] cursor-pointer transition-colors'
                    : ''
                }`}
              >
                {day && (
                  <>
                    <span className={`text-sm ${day === 12 ? 'text-white' : index % 7 === 0 ? 'text-red-500' : index % 7 === 6 ? 'text-[#57B7E9]' : 'text-[#2C3E50]'}`}>
                      {day}
                    </span>
                    {hasEvent(day) && day !== 12 && (
                      <div className="w-1.5 h-1.5 rounded-full bg-[#57B7E9] mt-1"></div>
                    )}
                  </>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Upcoming Events Sidebar */}
        <div className="space-y-6">
          {/* Add Event Button */}
          <button className="w-full py-3 bg-[#57B7E9] text-white font-semibold rounded-xl hover:bg-[#4A9FD4] transition-colors shadow-sm hover:shadow-md flex items-center justify-center gap-2">
            <Plus size={18} />
            일정 추가
          </button>

          {/* Upcoming Events */}
          <div className="bg-white rounded-2xl shadow-sm p-6">
            <h3 className="text-lg font-bold text-[#2C3E50] mb-4">다가오는 일정</h3>
            <div className="space-y-3">
              {upcomingEvents.map((event) => (
                <div
                  key={event.id}
                  className="p-4 rounded-xl bg-[#F5F7FA] hover:shadow-sm transition-shadow cursor-pointer"
                >
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-semibold text-[#2C3E50]">{event.title}</h4>
                    <span className="px-2 py-0.5 bg-gradient-to-br from-[#FFD6E8] to-[#FFBCD5] text-white text-xs font-bold rounded-md">
                      D-{event.dday}
                    </span>
                  </div>
                  <div className="flex items-center gap-4 text-sm text-[#5F6C7B]">
                    <span>{event.date}</span>
                    <div className="flex items-center gap-1">
                      <Clock size={14} />
                      <span>{event.time}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Today's Events */}
          <div className="bg-white rounded-2xl shadow-sm p-6">
            <h3 className="text-lg font-bold text-[#2C3E50] mb-4">오늘의 일정</h3>
            <div className="text-center py-8">
              <div className="w-16 h-16 rounded-full bg-[#F5F7FA] flex items-center justify-center mx-auto mb-3">
                <Calendar className="text-[#5F6C7B]" size={24} />
              </div>
              <p className="text-sm text-[#5F6C7B]">오늘은 일정이 없습니다</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
