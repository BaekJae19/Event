import { MessageCircle, PenSquare } from 'lucide-react';
import { Link } from 'react-router';

export function CommunityList() {
  const posts = [
    {
      id: 1,
      author: '김싸피',
      avatar: 'K',
      message: '프로젝트 팀원 구합니다! 프론트엔드 1명 필요해요',
      time: '5분 전',
      color: 'from-[#57B7E9] to-[#4A9FD4]'
    },
    {
      id: 2,
      author: '이개발',
      avatar: 'L',
      message: '오늘 알고리즘 스터디 몇 시에 하나요?',
      time: '23분 전',
      color: 'from-[#B4E4CE] to-[#8FD5B3]'
    },
    {
      id: 3,
      author: '박코딩',
      avatar: 'P',
      message: 'React Hook 질문 있는데 도와주실 분 계신가요?',
      time: '1시간 전',
      color: 'from-[#FFD6E8] to-[#FFBCD5]'
    },
    {
      id: 4,
      author: '최프로',
      avatar: 'C',
      message: '점심 같이 드실 분~',
      time: '2시간 전',
      color: 'from-[#FFF4B3] to-[#FFE680]'
    }
  ];

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow h-full flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-[#E8F5FE] flex items-center justify-center">
            <MessageCircle size={20} className="text-[#57B7E9]" />
          </div>
          <h3 className="text-lg font-bold text-[#2C3E50]">💬 반 커뮤니티</h3>
        </div>
        <div className="flex items-center gap-2">
          <Link to="/community" className="text-sm text-[#57B7E9] hover:text-[#4A9FD4] font-medium">
            더보기
          </Link>
          <Link to="/write" className="flex items-center gap-1.5 px-3 py-1.5 bg-[#57B7E9] text-white text-sm font-medium rounded-lg hover:bg-[#4A9FD4] transition-colors">
            <PenSquare size={14} />
            작성
          </Link>
        </div>
      </div>

      {/* Community List */}
      <div className="flex-1 space-y-1">
        {posts.map((post) => (
          <Link
            key={post.id}
            to={`/post/${post.id}`}
            className="flex items-start gap-3 py-3 px-3 rounded-xl hover:bg-[#F5F7FA] cursor-pointer transition-colors group"
          >
            {/* Avatar */}
            <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${post.color} flex items-center justify-center text-white font-semibold text-sm flex-shrink-0`}>
              {post.avatar}
            </div>
            
            {/* Content */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-sm font-semibold text-[#2C3E50]">
                  {post.author}
                </span>
                <span className="text-xs text-[#5F6C7B]">{post.time}</span>
              </div>
              <p className="text-sm text-[#2C3E50] truncate group-hover:text-[#57B7E9] transition-colors">
                {post.message}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}