import { Mail, Lock, User, Eye, EyeOff } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router';

export default function Signup() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="min-h-screen bg-[#F5F7FA] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        {/* Signup Card */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          {/* Logo */}
          <div className="flex flex-col items-center mb-8">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#57B7E9] to-[#4A9FD4] flex items-center justify-center text-white font-bold text-2xl mb-4">
              S
            </div>
            <h1 className="text-2xl font-bold text-[#2C3E50]">회원가입</h1>
            <p className="text-[#5F6C7B] text-sm mt-2">SSAFY-Mate와 함께 시작하세요</p>
          </div>

          {/* Signup Form */}
          <form className="space-y-4">
            {/* Name Input */}
            <div>
              <label className="block text-sm font-semibold text-[#2C3E50] mb-2">
                이름
              </label>
              <div className="relative">
                <User size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#5F6C7B]" />
                <input
                  type="text"
                  placeholder="홍길동"
                  className="w-full pl-12 pr-4 py-3 border-2 border-[#E5E9EF] rounded-xl focus:border-[#57B7E9] focus:outline-none transition-colors"
                />
              </div>
            </div>

            {/* Email Input */}
            <div>
              <label className="block text-sm font-semibold text-[#2C3E50] mb-2">
                이메일
              </label>
              <div className="relative">
                <Mail size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#5F6C7B]" />
                <input
                  type="email"
                  placeholder="example@ssafy.com"
                  className="w-full pl-12 pr-4 py-3 border-2 border-[#E5E9EF] rounded-xl focus:border-[#57B7E9] focus:outline-none transition-colors"
                />
              </div>
            </div>

            {/* Password Input */}
            <div>
              <label className="block text-sm font-semibold text-[#2C3E50] mb-2">
                비밀번호
              </label>
              <div className="relative">
                <Lock size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#5F6C7B]" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="8자 이상 입력해주세요"
                  className="w-full pl-12 pr-12 py-3 border-2 border-[#E5E9EF] rounded-xl focus:border-[#57B7E9] focus:outline-none transition-colors"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[#5F6C7B] hover:text-[#57B7E9]"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            {/* Confirm Password Input */}
            <div>
              <label className="block text-sm font-semibold text-[#2C3E50] mb-2">
                비밀번호 확인
              </label>
              <div className="relative">
                <Lock size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-[#5F6C7B]" />
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  placeholder="비밀번호를 다시 입력해주세요"
                  className="w-full pl-12 pr-12 py-3 border-2 border-[#E5E9EF] rounded-xl focus:border-[#57B7E9] focus:outline-none transition-colors"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[#5F6C7B] hover:text-[#57B7E9]"
                >
                  {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            {/* Terms Agreement */}
            <div className="space-y-3 pt-2">
              <label className="flex items-start gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="w-4 h-4 mt-0.5 rounded border-2 border-[#E5E9EF] text-[#57B7E9] focus:ring-[#57B7E9]"
                />
                <span className="text-sm text-[#5F6C7B]">
                  <span className="text-[#2C3E50] font-semibold">[필수]</span> 이용약관 및 개인정보처리방침에 동의합니다
                </span>
              </label>
              <label className="flex items-start gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="w-4 h-4 mt-0.5 rounded border-2 border-[#E5E9EF] text-[#57B7E9] focus:ring-[#57B7E9]"
                />
                <span className="text-sm text-[#5F6C7B]">
                  <span className="text-[#2C3E50]">[선택]</span> 마케팅 정보 수신에 동의합니다
                </span>
              </label>
            </div>

            {/* Signup Button */}
            <button
              type="submit"
              className="w-full py-3 bg-[#57B7E9] text-white font-semibold rounded-xl hover:bg-[#4A9FD4] transition-colors shadow-sm hover:shadow-md mt-6"
            >
              회원가입
            </button>
          </form>

          {/* Login Link */}
          <div className="mt-6 text-center">
            <span className="text-sm text-[#5F6C7B]">이미 계정이 있으신가요? </span>
            <Link to="/login" className="text-sm text-[#57B7E9] hover:text-[#4A9FD4] font-semibold">
              로그인
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
