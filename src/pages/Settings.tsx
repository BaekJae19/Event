import { User, Calendar as CalendarIcon, Image, Palette, Quote, Save, Upload, X } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router';

export default function Settings() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'profile' | 'dday'>('profile');
  
  // Profile Settings State
  const [nickname, setNickname] = useState('김싸피');
  const [email, setEmail] = useState('kim.ssafy@example.com');
  
  // D-Day Settings State
  const [projectName, setProjectName] = useState('프로젝트 마감');
  const [targetDate, setTargetDate] = useState('2026-02-17');
  const [motivationalQuote, setMotivationalQuote] = useState('You can do it! 💪');
  const [theme, setTheme] = useState<'pastel-green' | 'pastel-pink' | 'sky-blue' | 'custom'>('pastel-green');

  const themes = [
    { id: 'pastel-green', name: '파스텔 그린', gradient: 'from-[#B4E4CE] to-[#E8F9F1]' },
    { id: 'pastel-pink', name: '파스텔 핑크', gradient: 'from-[#FFD6E8] to-[#FFF0F6]' },
    { id: 'sky-blue', name: '스카이 블루', gradient: 'from-[#E8F5FE] to-[#F0F9FF]' },
    { id: 'custom', name: '커스텀', gradient: 'bg-gradient-to-br from-purple-200 to-pink-200' },
  ];

  const handleSave = () => {
    // Save logic here
    alert('설정이 저장되었습니다!');
    navigate('/');
  };

  return (
    <main className="max-w-5xl mx-auto px-6 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[#2C3E50] mb-2">설정</h1>
        <p className="text-[#5F6C7B]">프로필과 D-Day 카드를 커스터마이징하세요</p>
      </div>

      {/* Tab Navigation */}
      <div className="bg-white rounded-2xl shadow-sm mb-6 p-2 inline-flex gap-2">
        <button
          onClick={() => setActiveTab('profile')}
          className={`px-6 py-3 rounded-xl font-semibold transition-all ${
            activeTab === 'profile'
              ? 'bg-[#57B7E9] text-white shadow-sm'
              : 'text-[#5F6C7B] hover:bg-[#F5F7FA]'
          }`}
        >
          👤 프로필 설정
        </button>
        <button
          onClick={() => setActiveTab('dday')}
          className={`px-6 py-3 rounded-xl font-semibold transition-all ${
            activeTab === 'dday'
              ? 'bg-[#57B7E9] text-white shadow-sm'
              : 'text-[#5F6C7B] hover:bg-[#F5F7FA]'
          }`}
        >
          📅 D-Day 설정
        </button>
      </div>

      {/* Settings Content */}
      <div className="bg-white rounded-2xl shadow-sm p-8">
        {activeTab === 'profile' ? (
          <div className="space-y-8">
            {/* Profile Header */}
            <div>
              <h2 className="text-xl font-bold text-[#2C3E50] mb-6 flex items-center gap-2">
                <User size={24} className="text-[#57B7E9]" />
                프로필 정보
              </h2>
            </div>

            {/* Avatar Section */}
            <div>
              <label className="block text-sm font-semibold text-[#2C3E50] mb-4">
                프로필 이미지
              </label>
              <div className="flex items-center gap-6">
                <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-[#57B7E9] to-[#4A9FD4] flex items-center justify-center text-white font-bold text-3xl shadow-md">
                  김
                </div>
                <div className="flex gap-3">
                  <button className="px-5 py-2.5 border-2 border-[#E5E9EF] rounded-xl hover:bg-[#F5F7FA] hover:border-[#57B7E9] transition-all text-[#5F6C7B] hover:text-[#57B7E9] font-medium flex items-center gap-2">
                    <Upload size={18} />
                    이미지 업로드
                  </button>
                  <button className="px-5 py-2.5 border-2 border-[#E5E9EF] rounded-xl hover:bg-[#FFF5F5] hover:border-red-300 transition-all text-[#5F6C7B] hover:text-red-500 font-medium flex items-center gap-2">
                    <X size={18} />
                    삭제
                  </button>
                </div>
              </div>
              <p className="text-xs text-[#5F6C7B] mt-3">
                JPG, PNG 파일 (최대 2MB)
              </p>
            </div>

            {/* Nickname */}
            <div>
              <label className="block text-sm font-semibold text-[#2C3E50] mb-3">
                닉네임
              </label>
              <input
                type="text"
                value={nickname}
                onChange={(e) => setNickname(e.target.value)}
                className="w-full max-w-md px-4 py-3 border-2 border-[#E5E9EF] rounded-xl focus:border-[#57B7E9] focus:outline-none transition-colors"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-semibold text-[#2C3E50] mb-3">
                이메일
              </label>
              <input
                type="email"
                value={email}
                disabled
                className="w-full max-w-md px-4 py-3 border-2 border-[#E5E9EF] rounded-xl bg-[#F5F7FA] text-[#5F6C7B] cursor-not-allowed"
              />
              <p className="text-xs text-[#5F6C7B] mt-2">
                이메일은 변경할 수 없습니다
              </p>
            </div>

            {/* Password Change */}
            <div>
              <label className="block text-sm font-semibold text-[#2C3E50] mb-3">
                비밀번호
              </label>
              <button className="px-5 py-2.5 border-2 border-[#E5E9EF] rounded-xl hover:bg-[#F5F7FA] hover:border-[#57B7E9] transition-all text-[#5F6C7B] hover:text-[#57B7E9] font-medium">
                비밀번호 변경
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-8">
            {/* D-Day Header */}
            <div>
              <h2 className="text-xl font-bold text-[#2C3E50] mb-2 flex items-center gap-2">
                <CalendarIcon size={24} className="text-[#57B7E9]" />
                D-Day 카드 설정
              </h2>
              <p className="text-sm text-[#5F6C7B]">
                메인 대시보드에 표시될 D-Day 카드를 커스터마이징하세요
              </p>
            </div>

            {/* Project Name */}
            <div>
              <label className="block text-sm font-semibold text-[#2C3E50] mb-3">
                프로젝트명
              </label>
              <input
                type="text"
                value={projectName}
                onChange={(e) => setProjectName(e.target.value)}
                placeholder="예: 최종 프로젝트"
                className="w-full max-w-md px-4 py-3 border-2 border-[#E5E9EF] rounded-xl focus:border-[#57B7E9] focus:outline-none transition-colors"
              />
            </div>

            {/* Target Date */}
            <div>
              <label className="block text-sm font-semibold text-[#2C3E50] mb-3">
                목표 날짜
              </label>
              <input
                type="date"
                value={targetDate}
                onChange={(e) => setTargetDate(e.target.value)}
                className="w-full max-w-md px-4 py-3 border-2 border-[#E5E9EF] rounded-xl focus:border-[#57B7E9] focus:outline-none transition-colors"
              />
            </div>

            {/* Background Theme */}
            <div>
              <label className="block text-sm font-semibold text-[#2C3E50] mb-4">
                배경 테마
              </label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {themes.map((t) => (
                  <button
                    key={t.id}
                    onClick={() => setTheme(t.id as any)}
                    className={`p-4 rounded-xl border-2 transition-all ${
                      theme === t.id
                        ? 'border-[#57B7E9] shadow-md'
                        : 'border-[#E5E9EF] hover:border-[#57B7E9]/50'
                    }`}
                  >
                    <div className={`w-full h-20 rounded-lg bg-gradient-to-br ${t.gradient} mb-3`}></div>
                    <p className="text-sm font-medium text-[#2C3E50]">{t.name}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Custom Image Upload */}
            {theme === 'custom' && (
              <div className="p-6 bg-[#F5F7FA] rounded-xl">
                <label className="block text-sm font-semibold text-[#2C3E50] mb-4">
                  커스텀 이미지 업로드
                </label>
                <div className="flex flex-col items-center justify-center border-2 border-dashed border-[#E5E9EF] rounded-xl p-8 hover:border-[#57B7E9] transition-all cursor-pointer bg-white">
                  <Image size={48} className="text-[#5F6C7B] mb-3" />
                  <p className="text-sm font-medium text-[#2C3E50] mb-1">클릭하여 이미지 업로드</p>
                  <p className="text-xs text-[#5F6C7B]">또는 드래그 앤 드롭</p>
                </div>
                <p className="text-xs text-[#5F6C7B] mt-3">
                  💡 행운의 부적 이미지나 좋아하는 캐릭터 이미지를 업로드하세요!
                </p>
              </div>
            )}

            {/* Motivational Quote */}
            <div>
              <label className="block text-sm font-semibold text-[#2C3E50] mb-3 flex items-center gap-2">
                <Quote size={18} className="text-[#57B7E9]" />
                동기부여 문구
              </label>
              <textarea
                value={motivationalQuote}
                onChange={(e) => setMotivationalQuote(e.target.value)}
                placeholder="힘이 되는 문구를 입력하세요"
                rows={3}
                className="w-full max-w-md px-4 py-3 border-2 border-[#E5E9EF] rounded-xl focus:border-[#57B7E9] focus:outline-none transition-colors resize-none"
              />
              <p className="text-xs text-[#5F6C7B] mt-2">
                예: "You can do it! 💪", "포기하지 말고 끝까지 힘내세요!"
              </p>
            </div>

            {/* Preview */}
            <div>
              <label className="block text-sm font-semibold text-[#2C3E50] mb-4">
                미리보기
              </label>
              <div className={`relative overflow-hidden bg-gradient-to-br ${themes.find(t => t.id === theme)?.gradient} rounded-2xl p-8 shadow-sm max-w-md`}>
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center mb-4 shadow-sm">
                    <span className="text-2xl">❤️</span>
                  </div>
                  <div className="mb-3">
                    <p className="text-sm font-medium text-[#5F6C7B] mb-1">{projectName} 까지</p>
                    <h2 className="text-5xl font-bold text-[#2C3E50]">
                      D-<span className="text-[#57B7E9]">5</span>
                    </h2>
                  </div>
                  <div className="mt-6 pt-6 border-t border-white/50">
                    <p className="text-[#2C3E50] font-medium text-lg">
                      "{motivationalQuote}"
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex gap-3 pt-8 border-t border-[#E5E9EF] mt-8">
          <button
            onClick={() => navigate(-1)}
            className="px-8 py-3 border-2 border-[#E5E9EF] text-[#5F6C7B] font-semibold rounded-xl hover:bg-[#F5F7FA] transition-colors"
          >
            취소
          </button>
          <button
            onClick={handleSave}
            className="px-8 py-3 bg-[#57B7E9] text-white font-semibold rounded-xl hover:bg-[#4A9FD4] transition-colors shadow-sm hover:shadow-md flex items-center gap-2"
          >
            <Save size={18} />
            저장하기
          </button>
        </div>
      </div>
    </main>
  );
}
