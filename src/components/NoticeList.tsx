import { Megaphone, ChevronRight } from 'lucide-react';
import { Link } from 'react-router';

export function NoticeList() {
  const notices = [
    {
      id: 1,
      isNew: true,
      title: '11기 프로젝트 발표 일정 안내',
      date: '2026.02.10'
    },
    {
      id: 2,
      isNew: true,
      title: '설날 연휴 기간 출입 관련 공지',
      date: '2026.02.09'
    },
    {
      id: 3,
      isNew: false,
      title: '2월 교육생 설문조사 참여 요청',
      date: '2026.02.08'
    },
    {
      id: 4,
      isNew: false,
      title: '알고리즘 스터디 그룹 모집',
      date: '2026.02.07'
    }
  ];

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow h-full flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-[#E8F5FE] flex items-center justify-center">
            <Megaphone size={20} className="text-[#57B7E9]" />
          </div>
          <h3 className="text-lg font-bold text-[#2C3E50]">📢 SSAFY 공지사항</h3>
        </div>
        <Link to="/notice" className="flex items-center gap-1 text-sm text-[#57B7E9] hover:text-[#4A9FD4] font-medium">
          더보기
          <ChevronRight size={16} />
        </Link>
      </div>

      {/* Notice List */}
      <div className="flex-1 space-y-1">
        {notices.map((notice) => (
          <Link
            key={notice.id}
            to={`/post/${notice.id}`}
            className="flex items-center justify-between py-3 px-3 rounded-xl hover:bg-[#F5F7FA] cursor-pointer transition-colors group"
          >
            <div className="flex items-center gap-3 flex-1 min-w-0">
              {notice.isNew && (
                <span className="px-2 py-0.5 bg-[#57B7E9] text-white text-xs font-bold rounded-md flex-shrink-0">
                  NEW
                </span>
              )}
              <span className="text-[#2C3E50] font-medium truncate group-hover:text-[#57B7E9] transition-colors">
                {notice.title}
              </span>
            </div>
            <span className="text-xs text-[#5F6C7B] ml-3 flex-shrink-0">
              {notice.date}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}