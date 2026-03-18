import { Search, Filter, ChevronLeft, ChevronRight, PenSquare } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router';

export default function NoticeBoard() {
  const [activeFilter, setActiveFilter] = useState('전체');
  const filters = ['전체', '공지', '행사', '교육', '시스템'];

  const notices = [
    { id: 1, isPinned: true, category: '공지', title: '[필독] 11기 프로젝트 발표 일정 안내', author: '관리자', date: '2026.02.10', views: 1234 },
    { id: 2, isPinned: true, category: '공지', title: '설날 연휴 기간 출입 관련 공지', author: '관리자', date: '2026.02.09', views: 892 },
    { id: 3, isPinned: false, category: '교육', title: '2월 교육생 설문조사 참여 요청', author: '교육팀', date: '2026.02.08', views: 456 },
    { id: 4, isPinned: false, category: '행사', title: '알고리즘 스터디 그룹 모집', author: '김싸피', date: '2026.02.07', views: 324 },
    { id: 5, isPinned: false, category: '시스템', title: 'GitLab 서버 점검 안내', author: 'IT팀', date: '2026.02.06', views: 289 },
    { id: 6, isPinned: false, category: '교육', title: 'CS 특강 신청 안내', author: '교육팀', date: '2026.02.05', views: 567 },
    { id: 7, isPinned: false, category: '행사', title: '2월 네트워킹 데이 참가 신청', author: '김싸피', date: '2026.02.04', views: 423 },
    { id: 8, isPinned: false, category: '공지', title: '주차권 신청 방법 안내', author: '관리자', date: '2026.02.03', views: 198 },
  ];

  return (
    <main className="max-w-7xl mx-auto px-6 py-8">
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[#2C3E50] mb-2">📢 SSAFY 공지사항</h1>
        <p className="text-[#5F6C7B]">중요한 공지와 소식을 확인하세요</p>
      </div>

      {/* Search & Filter Area */}
      <div className="bg-white rounded-2xl p-6 shadow-sm mb-6">
        <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
          {/* Filter Tags */}
          <div className="flex gap-2 flex-wrap">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-xl font-medium transition-all ${
                  activeFilter === filter
                    ? 'bg-[#57B7E9] text-white shadow-sm'
                    : 'bg-[#F5F7FA] text-[#5F6C7B] hover:bg-[#E8F5FE]'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="flex gap-3 w-full lg:w-auto">
            <div className="relative flex-1 lg:w-80">
              <Search size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#5F6C7B]" />
              <input
                type="text"
                placeholder="검색어를 입력하세요"
                className="w-full pl-12 pr-4 py-2.5 border-2 border-[#E5E9EF] rounded-xl focus:border-[#57B7E9] focus:outline-none transition-colors"
              />
            </div>
            <Link
              to="/write"
              className="px-6 py-2.5 bg-[#57B7E9] text-white font-semibold rounded-xl hover:bg-[#4A9FD4] transition-colors flex items-center gap-2 shadow-sm whitespace-nowrap"
            >
              <PenSquare size={18} />
              글쓰기
            </Link>
          </div>
        </div>
      </div>

      {/* Board List Table */}
      <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
        {/* Table Header */}
        <div className="grid grid-cols-12 gap-4 px-6 py-4 bg-[#F5F7FA] border-b border-[#E5E9EF] font-semibold text-[#2C3E50] text-sm">
          <div className="col-span-1 text-center">No.</div>
          <div className="col-span-1 text-center">분류</div>
          <div className="col-span-6">제목</div>
          <div className="col-span-2 text-center">작성자</div>
          <div className="col-span-1 text-center">날짜</div>
          <div className="col-span-1 text-center">조회</div>
        </div>

        {/* Table Body */}
        <div className="divide-y divide-[#E5E9EF]">
          {notices.map((notice, index) => (
            <Link
              key={notice.id}
              to={`/post/${notice.id}`}
              className={`grid grid-cols-12 gap-4 px-6 py-4 hover:bg-[#F5F7FA] transition-colors cursor-pointer ${
                notice.isPinned ? 'bg-[#E8F5FE]' : ''
              }`}
            >
              <div className="col-span-1 text-center text-[#5F6C7B] text-sm">
                {notice.isPinned ? '📌' : index + 1}
              </div>
              <div className="col-span-1 text-center">
                <span className="px-2 py-1 bg-[#E8F5FE] text-[#57B7E9] text-xs font-semibold rounded-lg">
                  {notice.category}
                </span>
              </div>
              <div className="col-span-6 font-medium text-[#2C3E50] truncate">
                {notice.title}
              </div>
              <div className="col-span-2 text-center text-[#5F6C7B] text-sm">
                {notice.author}
              </div>
              <div className="col-span-1 text-center text-[#5F6C7B] text-sm">
                {notice.date}
              </div>
              <div className="col-span-1 text-center text-[#5F6C7B] text-sm">
                {notice.views}
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-center gap-2 mt-8">
        <button className="w-9 h-9 rounded-lg border-2 border-[#E5E9EF] flex items-center justify-center hover:bg-[#F5F7FA] transition-colors">
          <ChevronLeft size={18} className="text-[#5F6C7B]" />
        </button>
        {[1, 2, 3, 4, 5].map((page) => (
          <button
            key={page}
            className={`w-9 h-9 rounded-lg font-medium transition-colors ${
              page === 1
                ? 'bg-[#57B7E9] text-white'
                : 'border-2 border-[#E5E9EF] text-[#5F6C7B] hover:bg-[#F5F7FA]'
            }`}
          >
            {page}
          </button>
        ))}
        <button className="w-9 h-9 rounded-lg border-2 border-[#E5E9EF] flex items-center justify-center hover:bg-[#F5F7FA] transition-colors">
          <ChevronRight size={18} className="text-[#5F6C7B]" />
        </button>
      </div>
    </main>
  );
}
