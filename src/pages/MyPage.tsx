import { User, Mail, Calendar, Award, Edit, Settings, LogOut, Heart, MessageCircle, FileText } from 'lucide-react';
import { Link, useNavigate } from 'react-router';

export default function MyPage() {
  const navigate = useNavigate();
  
  const userStats = [
    { label: '작성한 글', value: 24, icon: FileText, color: 'from-[#57B7E9] to-[#4A9FD4]' },
    { label: '댓글', value: 156, icon: MessageCircle, color: 'from-[#B4E4CE] to-[#8FD5B3]' },
    { label: '좋아요', value: 89, icon: Heart, color: 'from-[#FFD6E8] to-[#FFBCD5]' },
  ];

  const myPosts = [
    { id: 1, title: 'React Hook 질문있어요!', category: '질문', date: '2026.02.10', likes: 12, comments: 8 },
    { id: 2, title: '프로젝트 팀원 모집합니다', category: '프로젝트', date: '2026.02.08', likes: 24, comments: 15 },
    { id: 3, title: '알고리즘 스터디 후기', category: '정보', date: '2026.02.05', likes: 18, comments: 6 },
  ];

  return (
    <main className="max-w-6xl mx-auto px-6 py-8">
      {/* Profile Card */}
      <div className="bg-white rounded-2xl shadow-sm p-8 mb-8">
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center gap-6">
            {/* Avatar */}
            <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-[#57B7E9] to-[#4A9FD4] flex items-center justify-center text-white font-bold text-3xl shadow-md">
              김
            </div>
            
            {/* User Info */}
            <div>
              <h1 className="text-3xl font-bold text-[#2C3E50] mb-2">김싸피</h1>
              <div className="space-y-1.5">
                <div className="flex items-center gap-2 text-[#5F6C7B]">
                  <Mail size={16} />
                  <span className="text-sm">kim.ssafy@example.com</span>
                </div>
                <div className="flex items-center gap-2 text-[#5F6C7B]">
                  <Calendar size={16} />
                  <span className="text-sm">가입일: 2025.01.15</span>
                </div>
                <div className="flex items-center gap-2 text-[#5F6C7B]">
                  <Award size={16} />
                  <span className="text-sm font-medium text-[#57B7E9]">11기 교육생</span>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-2">
            <button
              onClick={() => navigate('/settings')}
              className="px-4 py-2 border-2 border-[#E5E9EF] rounded-xl hover:bg-[#F5F7FA] transition-colors flex items-center gap-2 text-[#5F6C7B] font-medium"
            >
              <Edit size={16} />
              프로필 수정
            </button>
            <button
              onClick={() => navigate('/settings')}
              className="px-4 py-2 border-2 border-[#E5E9EF] rounded-xl hover:bg-[#F5F7FA] transition-colors flex items-center gap-2 text-[#5F6C7B]"
            >
              <Settings size={16} />
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 pt-6 border-t border-[#E5E9EF]">
          {userStats.map((stat) => (
            <div
              key={stat.label}
              className="bg-[#F5F7FA] rounded-xl p-4 hover:shadow-sm transition-shadow"
            >
              <div className="flex items-center gap-3">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center shadow-sm`}>
                  <stat.icon size={20} className="text-white" />
                </div>
                <div>
                  <p className="text-sm text-[#5F6C7B] mb-0.5">{stat.label}</p>
                  <p className="text-2xl font-bold text-[#2C3E50]">{stat.value}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* My Posts Section */}
      <div className="bg-white rounded-2xl shadow-sm p-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold text-[#2C3E50]">내가 작성한 글</h2>
          <button className="text-sm text-[#57B7E9] hover:text-[#4A9FD4] font-medium">
            전체보기
          </button>
        </div>

        <div className="space-y-3">
          {myPosts.map((post) => (
            <Link
              key={post.id}
              to={`/post/${post.id}`}
              className="flex items-center justify-between p-4 rounded-xl hover:bg-[#F5F7FA] transition-colors group"
            >
              <div className="flex items-center gap-4 flex-1">
                <span className="px-3 py-1 bg-[#E8F5FE] text-[#57B7E9] text-xs font-semibold rounded-lg">
                  {post.category}
                </span>
                <h3 className="text-[#2C3E50] font-medium group-hover:text-[#57B7E9] transition-colors">
                  {post.title}
                </h3>
              </div>
              <div className="flex items-center gap-6 text-sm text-[#5F6C7B]">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <Heart size={14} />
                    <span>{post.likes}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MessageCircle size={14} />
                    <span>{post.comments}</span>
                  </div>
                </div>
                <span>{post.date}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Logout Button */}
      <div className="mt-8 text-center">
        <Link
          to="/login"
          className="inline-flex items-center gap-2 px-6 py-3 text-[#5F6C7B] hover:text-red-500 transition-colors font-medium"
        >
          <LogOut size={18} />
          로그아웃
        </Link>
      </div>
    </main>
  );
}