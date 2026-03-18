import { Lightbulb, ArrowRight } from 'lucide-react';

export function DailyKnowledge() {
  return (
    <div className="bg-gradient-to-r from-[#E8F5FE] to-[#F0F9FF] rounded-2xl p-8 shadow-sm hover:shadow-md transition-all border border-[#57B7E9]/20">
      <div className="flex items-center gap-6">
        {/* Icon */}
        <div className="w-20 h-20 rounded-2xl bg-white shadow-sm flex items-center justify-center flex-shrink-0">
          <Lightbulb size={36} className="text-[#57B7E9]" />
        </div>

        {/* Content */}
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <span className="px-3 py-1 bg-[#57B7E9] text-white text-xs font-bold rounded-full">
              Today's Keyword
            </span>
            <span className="text-xs text-[#5F6C7B]">2026.02.11</span>
          </div>
          
          <h3 className="text-2xl font-bold text-[#2C3E50] mb-3">
            프로세스 vs 스레드 (Process vs Thread)
          </h3>
          
          <p className="text-[#5F6C7B] leading-relaxed">
            프로세스는 실행 중인 프로그램의 인스턴스로, 독립적인 메모리 공간을 가집니다. 
            스레드는 프로세스 내에서 실행되는 작업 단위로, 같은 프로세스의 자원을 공유합니다...
          </p>
        </div>

        {/* CTA Button */}
        <button className="px-6 py-3 bg-[#57B7E9] text-white font-semibold rounded-xl hover:bg-[#4A9FD4] transition-colors flex items-center gap-2 shadow-sm hover:shadow-md flex-shrink-0">
          자세히 보기
          <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
}
