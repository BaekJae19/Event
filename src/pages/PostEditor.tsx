import { ArrowLeft, Image, Paperclip, Send, Bold, Italic, Link as LinkIcon, List, ListOrdered, Quote } from 'lucide-react';
import { Link, useNavigate, useParams } from 'react-router';
import { useState } from 'react';

export default function PostEditor() {
  const navigate = useNavigate();
  const { id } = useParams();
  const isEditMode = Boolean(id);
  const [category, setCategory] = useState('자유');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const categories = ['자유', '질문', '정보', '스터디', '프로젝트'];

  return (
    <main className="max-w-5xl mx-auto px-6 py-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-[#5F6C7B] hover:text-[#57B7E9] transition-colors"
        >
          <ArrowLeft size={20} />
          <span className="font-medium">뒤로가기</span>
        </button>
        <h1 className="text-2xl font-bold text-[#2C3E50]">
          {isEditMode ? '게시글 수정' : '새 글 작성'}
        </h1>
        <div className="w-24"></div>
      </div>

      {/* Editor Card */}
      <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
        <form className="divide-y divide-[#E5E9EF]">
          {/* Category Selection */}
          <div className="p-8">
            <label className="block text-sm font-semibold text-[#2C3E50] mb-4">
              카테고리 선택 <span className="text-red-500">*</span>
            </label>
            <div className="flex gap-2 flex-wrap">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setCategory(cat)}
                  className={`px-5 py-2.5 rounded-xl font-medium transition-all ${
                    category === cat
                      ? 'bg-[#57B7E9] text-white shadow-md'
                      : 'bg-[#F5F7FA] text-[#5F6C7B] hover:bg-[#E8F5FE] hover:text-[#57B7E9]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Title Input */}
          <div className="p-8">
            <label className="block text-sm font-semibold text-[#2C3E50] mb-4">
              제목 <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="제목을 입력하세요"
              className="w-full px-5 py-4 text-lg border-2 border-[#E5E9EF] rounded-xl focus:border-[#57B7E9] focus:outline-none transition-colors text-[#2C3E50] placeholder:text-[#5F6C7B]/40"
            />
          </div>

          {/* Content Editor */}
          <div className="p-8">
            <label className="block text-sm font-semibold text-[#2C3E50] mb-4">
              내용 <span className="text-red-500">*</span>
            </label>
            
            {/* Editor Toolbar */}
            <div className="mb-4 p-3 bg-[#F5F7FA] rounded-xl flex items-center gap-1 border border-[#E5E9EF]">
              <button
                type="button"
                className="p-2.5 rounded-lg hover:bg-white hover:shadow-sm transition-all text-[#5F6C7B] hover:text-[#57B7E9]"
                title="Bold"
              >
                <Bold size={18} />
              </button>
              <button
                type="button"
                className="p-2.5 rounded-lg hover:bg-white hover:shadow-sm transition-all text-[#5F6C7B] hover:text-[#57B7E9]"
                title="Italic"
              >
                <Italic size={18} />
              </button>
              <div className="w-px h-6 bg-[#E5E9EF] mx-1"></div>
              <button
                type="button"
                className="p-2.5 rounded-lg hover:bg-white hover:shadow-sm transition-all text-[#5F6C7B] hover:text-[#57B7E9]"
                title="Link"
              >
                <LinkIcon size={18} />
              </button>
              <button
                type="button"
                className="p-2.5 rounded-lg hover:bg-white hover:shadow-sm transition-all text-[#5F6C7B] hover:text-[#57B7E9]"
                title="Bullet List"
              >
                <List size={18} />
              </button>
              <button
                type="button"
                className="p-2.5 rounded-lg hover:bg-white hover:shadow-sm transition-all text-[#5F6C7B] hover:text-[#57B7E9]"
                title="Numbered List"
              >
                <ListOrdered size={18} />
              </button>
              <button
                type="button"
                className="p-2.5 rounded-lg hover:bg-white hover:shadow-sm transition-all text-[#5F6C7B] hover:text-[#57B7E9]"
                title="Quote"
              >
                <Quote size={18} />
              </button>
              <div className="w-px h-6 bg-[#E5E9EF] mx-1"></div>
              <button
                type="button"
                className="px-3 py-2 rounded-lg hover:bg-white hover:shadow-sm transition-all text-[#5F6C7B] hover:text-[#57B7E9] flex items-center gap-1.5 text-sm font-medium"
                title="Image Upload"
              >
                <Image size={18} />
                이미지
              </button>
            </div>

            {/* Textarea */}
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              rows={16}
              placeholder="내용을 입력하세요&#10;&#10;💡 작성 가이드&#10;• 서로 존중하는 언어를 사용해주세요&#10;• 개인정보가 포함되지 않도록 주의해주세요&#10;• 마크다운 문법을 사용할 수 있습니다"
              className="w-full px-5 py-4 border-2 border-[#E5E9EF] rounded-xl focus:border-[#57B7E9] focus:outline-none transition-colors text-[#2C3E50] resize-none leading-relaxed placeholder:text-[#5F6C7B]/40"
            />
            
            {/* Character Count */}
            <div className="mt-3 text-right text-sm text-[#5F6C7B]">
              {content.length} / 5000자
            </div>
          </div>

          {/* File Attachments */}
          <div className="p-8">
            <label className="block text-sm font-semibold text-[#2C3E50] mb-4">
              첨부파일 (선택)
            </label>
            <div className="flex gap-3">
              <button
                type="button"
                className="flex items-center gap-2 px-5 py-3 border-2 border-[#E5E9EF] rounded-xl hover:bg-[#F5F7FA] hover:border-[#57B7E9] transition-all text-[#5F6C7B] hover:text-[#57B7E9] font-medium"
              >
                <Image size={18} />
                이미지 추가
              </button>
              <button
                type="button"
                className="flex items-center gap-2 px-5 py-3 border-2 border-[#E5E9EF] rounded-xl hover:bg-[#F5F7FA] hover:border-[#57B7E9] transition-all text-[#5F6C7B] hover:text-[#57B7E9] font-medium"
              >
                <Paperclip size={18} />
                파일 첨부
              </button>
            </div>
            <p className="text-xs text-[#5F6C7B] mt-3">
              이미지는 최대 5MB, 파일은 최대 10MB까지 업로드 가능합니다.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="p-8 bg-[#F5F7FA]">
            <div className="flex gap-3 max-w-md mx-auto">
              <button
                type="button"
                onClick={() => navigate(-1)}
                className="flex-1 py-3.5 border-2 border-[#E5E9EF] bg-white text-[#5F6C7B] font-semibold rounded-xl hover:bg-[#F5F7FA] transition-colors"
              >
                취소
              </button>
              <button
                type="submit"
                className="flex-1 py-3.5 bg-[#57B7E9] text-white font-semibold rounded-xl hover:bg-[#4A9FD4] transition-colors shadow-md hover:shadow-lg flex items-center justify-center gap-2"
              >
                <Send size={18} />
                {isEditMode ? '수정하기' : '작성완료'}
              </button>
            </div>
          </div>
        </form>
      </div>

      {/* Tips */}
      <div className="mt-6 p-6 bg-[#E8F5FE] rounded-2xl">
        <h3 className="text-sm font-semibold text-[#2C3E50] mb-3">📝 작성 팁</h3>
        <ul className="text-sm text-[#5F6C7B] space-y-1.5 leading-relaxed">
          <li>• 제목은 구체적이고 명확하게 작성해주세요</li>
          <li>• 코드를 첨부할 때는 마크다운 코드 블록을 활용하세요</li>
          <li>• 질문글은 문제 상황과 시도한 해결 방법을 함께 작성하면 좋습니다</li>
        </ul>
      </div>
    </main>
  );
}