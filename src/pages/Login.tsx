import { Mail, Lock, Eye, EyeOff } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router';

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <div className="min-h-screen bg-[#F5F7FA] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        {/* Login Card */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          {/* Logo */}
          <div className="flex flex-col items-center mb-8">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#57B7E9] to-[#4A9FD4] flex items-center justify-center text-white font-bold text-2xl mb-4">
              S
            </div>
            <h1 className="text-2xl font-bold text-[#2C3E50]">SSAFY-Mate</h1>
            <p className="text-[#5F6C7B] text-sm mt-2">함께 성장하는 개발자 커뮤니티</p>
          </div>

          {/* Login Form */}
          <form className="space-y-4">
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
                  placeholder="••••••••"
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

            {/* Remember Me & Find Password */}
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-4 h-4 rounded border-2 border-[#E5E9EF] text-[#57B7E9] focus:ring-[#57B7E9]"
                />
                <span className="text-sm text-[#5F6C7B]">로그인 상태 유지</span>
              </label>
              <Link to="/find-password" className="text-sm text-[#57B7E9] hover:text-[#4A9FD4] font-medium">
                비밀번호 찾기
              </Link>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full py-3 bg-[#57B7E9] text-white font-semibold rounded-xl hover:bg-[#4A9FD4] transition-colors shadow-sm hover:shadow-md"
            >
              로그인
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-4 my-6">
            <div className="flex-1 h-px bg-[#E5E9EF]"></div>
            <span className="text-xs text-[#5F6C7B]">또는</span>
            <div className="flex-1 h-px bg-[#E5E9EF]"></div>
          </div>

          {/* Social Login */}
          <div className="space-y-3">
            <button className="w-full py-3 border-2 border-[#E5E9EF] rounded-xl hover:bg-[#F5F7FA] transition-colors flex items-center justify-center gap-2 font-medium text-[#2C3E50]">
              <div className="w-5 h-5 bg-red-500 rounded-full"></div>
              Google로 계속하기
            </button>
            <button className="w-full py-3 border-2 border-[#E5E9EF] rounded-xl hover:bg-[#F5F7FA] transition-colors flex items-center justify-center gap-2 font-medium text-[#2C3E50]">
              <div className="w-5 h-5 bg-yellow-400 rounded-full"></div>
              Kakao로 계속하기
            </button>
          </div>

          {/* Sign Up Link */}
          <div className="mt-6 text-center">
            <span className="text-sm text-[#5F6C7B]">아직 회원이 아니신가요? </span>
            <Link to="/signup" className="text-sm text-[#57B7E9] hover:text-[#4A9FD4] font-semibold">
              회원가입
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
