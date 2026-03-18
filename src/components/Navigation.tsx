import { Calendar, Bell, MessageCircle, ChevronDown, BookOpen } from 'lucide-react';
import { Link } from 'react-router';
import { useState } from 'react';
import logoImage from 'figma:asset/e4535cbe7289e1c6e8a7ab96d351ad53117dd88b.png';

export function Navigation() {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <nav className="bg-white border-b border-[#E5E9EF] sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img src={logoImage} alt="SSAFY Logo" className="h-10 object-contain" />
            <span className="text-xl font-bold text-[#2C3E50]">SSAFY-Mate</span>
          </Link>

          {/* Navigation Menu */}
          <div className="flex items-center gap-8">
            <Link to="/calendar" className="flex items-center gap-2 text-[#5F6C7B] hover:text-[#57B7E9] transition-colors">
              <Calendar size={20} />
              <span className="font-medium">Calendar</span>
            </Link>
            <Link to="/notice" className="flex items-center gap-2 text-[#5F6C7B] hover:text-[#57B7E9] transition-colors">
              <Bell size={20} />
              <span className="font-medium">Notice</span>
            </Link>
            <Link to="/community" className="flex items-center gap-2 text-[#5F6C7B] hover:text-[#57B7E9] transition-colors">
              <MessageCircle size={20} />
              <span className="font-medium">Community</span>
            </Link>
            <Link to="/knowledge" className="flex items-center gap-2 text-[#5F6C7B] hover:text-[#57B7E9] transition-colors">
              <BookOpen size={20} />
              <span className="font-medium">CS Archive</span>
            </Link>
            
            {/* Divider */}
            <div className="w-px h-6 bg-[#E5E9EF]"></div>
            
            {/* User Profile with Dropdown */}
            <div className="relative">
              <button
                onClick={() => setShowDropdown(!showDropdown)}
                className="flex items-center gap-2 hover:opacity-80 transition-opacity"
              >
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#B4E4CE] to-[#57B7E9] flex items-center justify-center text-white font-semibold">
                  김
                </div>
                <span className="font-medium text-[#2C3E50]">사용자</span>
                <ChevronDown size={16} className="text-[#5F6C7B]" />
              </button>

              {/* Dropdown Menu */}
              {showDropdown && (
                <>
                  {/* Backdrop */}
                  <div
                    className="fixed inset-0 z-40"
                    onClick={() => setShowDropdown(false)}
                  ></div>
                  
                  {/* Menu */}
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-[#E5E9EF] py-2 z-50">
                    <Link
                      to="/mypage"
                      onClick={() => setShowDropdown(false)}
                      className="block px-4 py-2.5 text-sm text-[#2C3E50] hover:bg-[#F5F7FA] transition-colors font-medium"
                    >
                      마이페이지
                    </Link>
                    <div className="h-px bg-[#E5E9EF] my-1"></div>
                    <Link
                      to="/login"
                      onClick={() => setShowDropdown(false)}
                      className="block px-4 py-2.5 text-sm text-red-500 hover:bg-[#FFF5F5] transition-colors font-medium"
                    >
                      로그아웃
                    </Link>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}