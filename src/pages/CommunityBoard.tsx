import { Search, PenSquare, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router';

export default function CommunityBoard() {
  const [activeFilter, setActiveFilter] = useState('전체');
  const filters = ['전체', '스터디', '프로젝트', '잡담', '질문'];

  const posts = [
    { id: 1, category: '프로젝트', title: '프로젝트 팀원 구합니다! 프론트엔드 1명 필요해요', author: '김싸피', avatar: 'K', date: '2026.02.11', views: 156, comments: 12 },
    { id: 2, category: '질문', title: 'React 상태관리 라이브러리 추천 부탁드립니다', author: '이개발', avatar: 'L', date: '2026.02.11', views: 89, comments: 8 },
    { id: 3, category: '스터디', title: '알고리즘 스터디원 모집합니다 (백준 골드 이상)', author: '박코딩', avatar: 'P', date: '2026.02.10', views: 234, comments: 15 },
    { id: 4, category: '잡담', title: '오늘 점심 메뉴 어땠나요?', author: '최프로', avatar: 'C', date: '2026.02.10', views: 67, comments: 23 },
    { id: 5, category: '질문', title: 'Spring Boot vs Node.js 어떤 걸 선택해야 할까요?', author: '정웹개발', avatar: 'J', date: '2026.02.09', views: 198, comments: 19 },
    { id: 6, category: '프로젝트', title: '공모전 팀원 모집 (디자이너 1명, 백엔드 1명)', author: '강싸피', avatar: 'K', date: '2026.02.09', views: 145, comments: 7 },
    { id: 7, category: '스터디', title: 'CS 스터디 같이 하실 분 계신가요?', author: '윤개발', avatar: 'Y', date: '2026.02.08', views: 112, comments: 11 },
    { id: 8, category: '잡담', title: '다들 프로젝트 진행 어디까지 하셨나요?', author: '조코딩', avatar: 'J', date: '2026.02.08', views: 203, comments: 34 },
  ];

  const getAvatarColor = (index: number) => {
    const colors = [
      'from-[#57B7E9] to-[#4A9FD4]',
      'from-[#B4E4CE] to-[#8FD5B3]',
      'from-[#FFD6E8] to-[#FFBCD5]',
      'from-[#FFF4B3] to-[#FFE680]',
    ];
    return colors[index % colors.length];
  };

  return (
    <main className="max-w-7xl mx-auto px-6 py-8">
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[#2C3E50] mb-2">💬 반 커뮤니티</h1>
        <p className="text-[#5F6C7B]">자유롭게 소통하고 정보를 공유하세요</p>
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

      {/* Board List */}
      <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
        <div className="divide-y divide-[#E5E9EF]">
          {posts.map((post, index) => (
            <Link
              key={post.id}
              to={`/post/${post.id}`}
              className="flex items-center gap-4 px-6 py-5 hover:bg-[#F5F7FA] transition-colors cursor-pointer"
            >
              {/* Avatar */}
              <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${getAvatarColor(index)} flex items-center justify-center text-white font-semibold flex-shrink-0`}>
                {post.avatar}
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="px-2.5 py-0.5 bg-[#E8F5FE] text-[#57B7E9] text-xs font-semibold rounded-lg">
                    {post.category}
                  </span>
                  <h3 className="font-semibold text-[#2C3E50] truncate flex-1">
                    {post.title}
                  </h3>
                </div>
                <div className="flex items-center gap-3 text-xs text-[#5F6C7B]">
                  <span>{post.author}</span>
                  <span>•</span>
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>조회 {post.views}</span>
                  <span>•</span>
                  <span>댓글 {post.comments}</span>
                </div>
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
