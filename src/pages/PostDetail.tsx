import { Eye, MessageCircle, Heart, Share2, Edit, Trash2, ArrowLeft } from 'lucide-react';
import { useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router';

export default function PostDetail() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [liked, setLiked] = useState(false);
  const [comment, setComment] = useState('');

  const post = {
    id: 1,
    category: '프로젝트',
    title: '프로젝트 팀원 구합니다! 프론트엔드 1명 필요해요',
    author: '김싸피',
    avatar: 'K',
    date: '2026.02.11 14:30',
    views: 156,
    likes: 12,
    content: `안녕하세요! 11기 김싸피입니다.

현재 진행 중인 프로젝트에 프론트엔드 개발자 1명을 모집하고 있습니다.

**프로젝트 개요**
- 주제: AI 기반 학습 관리 플랫폼
- 기간: 2월 15일 ~ 4월 10일 (약 8주)
- 인원: 총 6명 (프론트 2, 백엔드 3, 디자인 1)

**기술 스택**
- Frontend: React, TypeScript, Tailwind CSS
- Backend: Spring Boot, MySQL
- Infra: AWS, Docker

**이런 분을 찾습니다**
✅ React 경험이 있으신 분
✅ TypeScript 사용 가능하신 분
✅ 책임감 있게 끝까지 함께하실 분
✅ 소통을 중요하게 생각하시는 분

관심 있으신 분은 댓글이나 DM 주세요!`,
  };

  const comments = [
    { id: 1, author: '이개발', avatar: 'L', date: '2026.02.11 15:10', content: '저 지원하고 싶습니다! DM 보냈어요~' },
    { id: 2, author: '박코딩', avatar: 'P', date: '2026.02.11 15:45', content: '프로젝트 주제 정말 흥미롭네요! 화이팅하세요!' },
    { id: 3, author: '최프로', avatar: 'C', date: '2026.02.11 16:20', content: 'TypeScript 필수인가요? React는 할 수 있는데...' },
  ];

  const getAvatarColor = (index: number) => {
    const colors = [
      'from-[#57B7E9] to-[#4A9FD4]',
      'from-[#B4E4CE] to-[#8FD5B3]',
      'from-[#FFD6E8] to-[#FFBCD5]',
    ];
    return colors[index % colors.length];
  };

  return (
    <main className="max-w-4xl mx-auto px-6 py-8">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-[#5F6C7B] hover:text-[#57B7E9] transition-colors mb-6"
      >
        <ArrowLeft size={20} />
        <span className="font-medium">목록으로</span>
      </button>

      {/* Post Container */}
      <div className="bg-white rounded-2xl shadow-sm overflow-hidden mb-6">
        {/* Post Header */}
        <div className="px-8 pt-8 pb-6 border-b border-[#E5E9EF]">
          {/* Category */}
          <div className="mb-4">
            <span className="px-3 py-1.5 bg-[#E8F5FE] text-[#57B7E9] text-sm font-semibold rounded-lg">
              {post.category}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-3xl font-bold text-[#2C3E50] mb-6 leading-tight">
            {post.title}
          </h1>

          {/* Author Info */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#57B7E9] to-[#4A9FD4] flex items-center justify-center text-white font-semibold shadow-sm">
                {post.avatar}
              </div>
              <div>
                <p className="font-semibold text-[#2C3E50]">{post.author}</p>
                <div className="flex items-center gap-2 text-sm text-[#5F6C7B]">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Eye size={14} />
                    조회 {post.views}
                  </span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-2">
              <Link
                to={`/edit/${id}`}
                className="px-4 py-2 text-[#5F6C7B] hover:text-[#57B7E9] hover:bg-[#F5F7FA] rounded-xl transition-colors flex items-center gap-2 font-medium"
              >
                <Edit size={16} />
                수정
              </Link>
              <button className="px-4 py-2 text-[#5F6C7B] hover:text-red-500 hover:bg-[#FFF5F5] rounded-xl transition-colors flex items-center gap-2 font-medium">
                <Trash2 size={16} />
                삭제
              </button>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="px-8 py-10">
          <div className="prose prose-lg max-w-none text-[#2C3E50] leading-relaxed whitespace-pre-line">
            {post.content}
          </div>
        </div>

        {/* Post Actions */}
        <div className="px-8 pb-8 pt-6 border-t border-[#E5E9EF]">
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={() => setLiked(!liked)}
              className={`px-8 py-3 rounded-xl font-semibold transition-all flex items-center gap-2 shadow-sm ${
                liked
                  ? 'bg-gradient-to-br from-[#FFD6E8] to-[#FFBCD5] text-red-500'
                  : 'bg-[#F5F7FA] text-[#5F6C7B] hover:bg-[#E8F5FE] hover:text-[#57B7E9]'
              }`}
            >
              <Heart size={20} className={liked ? 'fill-red-500' : ''} />
              좋아요 {post.likes + (liked ? 1 : 0)}
            </button>

            <button className="px-8 py-3 bg-[#F5F7FA] text-[#5F6C7B] rounded-xl font-semibold hover:bg-[#E8F5FE] hover:text-[#57B7E9] transition-all flex items-center gap-2 shadow-sm">
              <Share2 size={20} />
              공유하기
            </button>
          </div>
        </div>
      </div>

      {/* Comments Section */}
      <div className="bg-white rounded-2xl shadow-sm p-8">
        <h2 className="text-xl font-bold text-[#2C3E50] mb-6 flex items-center gap-2">
          <MessageCircle size={24} className="text-[#57B7E9]" />
          댓글 <span className="text-[#57B7E9]">{comments.length}</span>
        </h2>

        {/* Comment Input */}
        <div className="mb-8 p-6 bg-[#F5F7FA] rounded-2xl">
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="댓글을 입력하세요... (Shift + Enter로 줄바꿈)"
            className="w-full px-4 py-3 border-2 border-[#E5E9EF] bg-white rounded-xl focus:border-[#57B7E9] focus:outline-none transition-colors resize-none text-[#2C3E50]"
            rows={3}
          />
          <div className="flex justify-end mt-3">
            <button className="px-6 py-2.5 bg-[#57B7E9] text-white font-semibold rounded-xl hover:bg-[#4A9FD4] transition-colors shadow-sm hover:shadow-md">
              댓글 작성
            </button>
          </div>
        </div>

        {/* Comments List */}
        <div className="space-y-4">
          {comments.map((comment, index) => (
            <div key={comment.id} className="flex gap-4 p-5 rounded-xl hover:bg-[#F5F7FA] transition-colors">
              <div className={`w-11 h-11 rounded-full bg-gradient-to-br ${getAvatarColor(index)} flex items-center justify-center text-white font-semibold flex-shrink-0 shadow-sm`}>
                {comment.avatar}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="font-semibold text-[#2C3E50]">{comment.author}</span>
                  <span className="text-sm text-[#5F6C7B]">{comment.date}</span>
                </div>
                <p className="text-[#2C3E50] leading-relaxed">{comment.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}