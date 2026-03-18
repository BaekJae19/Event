import { Heart, Sparkles } from 'lucide-react';
import bgImage from 'figma:asset/f46234e0b28e2778531bd521303c7a81d5f7f871.png';

export function DdayCard() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-[#E8F9F1] to-[#D5F0E6] rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
      {/* Background Image */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      ></div>
      
      {/* Decorative Elements */}
      <div className="absolute top-4 right-4 opacity-10">
        <Sparkles size={48} className="text-[#57B7E9]" />
      </div>
      
      <div className="relative z-10">
        {/* Icon */}
        <div className="w-16 h-16 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center mb-4 shadow-md">
          <Heart size={28} className="text-[#57B7E9] fill-[#57B7E9]" />
        </div>

        {/* D-Day Counter */}
        <div className="mb-3">
          <p className="text-sm font-semibold text-[#2C3E50] mb-1 drop-shadow-sm">프로젝트 마감까지</p>
          <h2 className="text-5xl font-bold text-[#2C3E50] drop-shadow-sm">
            D-<span className="text-[#57B7E9]">5</span>
          </h2>
        </div>
      </div>
    </div>
  );
}