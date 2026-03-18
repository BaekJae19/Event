import { Home, ArrowLeft } from 'lucide-react';
import { Link, useNavigate } from 'react-router';

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <main className="max-w-2xl mx-auto px-6 py-16">
      <div className="bg-white rounded-2xl shadow-sm p-12 text-center">
        {/* 404 Icon */}
        <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[#E8F5FE] to-[#F0F9FF] flex items-center justify-center mx-auto mb-6">
          <span className="text-6xl font-bold text-[#57B7E9]">404</span>
        </div>

        {/* Title */}
        <h1 className="text-3xl font-bold text-[#2C3E50] mb-4">
          페이지를 찾을 수 없습니다
        </h1>

        {/* Description */}
        <p className="text-[#5F6C7B] mb-8 leading-relaxed">
          요청하신 페이지가 존재하지 않거나 이동되었을 수 있습니다.<br />
          주소를 다시 확인해 주세요.
        </p>

        {/* Action Buttons */}
        <div className="flex gap-3 justify-center">
          <button
            onClick={() => navigate(-1)}
            className="px-6 py-3 border-2 border-[#E5E9EF] text-[#5F6C7B] font-semibold rounded-xl hover:bg-[#F5F7FA] transition-colors flex items-center gap-2"
          >
            <ArrowLeft size={18} />
            이전 페이지
          </button>
          <Link
            to="/"
            className="px-6 py-3 bg-[#57B7E9] text-white font-semibold rounded-xl hover:bg-[#4A9FD4] transition-colors shadow-sm hover:shadow-md flex items-center gap-2"
          >
            <Home size={18} />
            홈으로 가기
          </Link>
        </div>
      </div>
    </main>
  );
}
