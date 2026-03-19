// ADDED: Mattermost Event UI
import { Rss, ChevronRight } from 'lucide-react';
import { Link } from 'react-router';
import { format } from 'date-fns';

// 3. 데이터 구조 설계: Mattermost 웹훅 데이터 인터페이스 정의
interface MattermostEvent {
  id: string;
  text: string;
  username: string;
  channel_name: string;
  timestamp: string; // ISO Date
}

export function MattermostEventList() {
  // API 연동 전 임시 목업 데이터
  const events: MattermostEvent[] = [
    {
      id: 'evt1',
      text: 'Docker 컨테이너 빌드 실패. 로그를 확인해주세요.',
      username: 'Jenkins Bot',
      channel_name: 'dev-alerts',
      timestamp: new Date('2026-03-19T10:30:00Z').toISOString(),
    },
    {
      id: 'evt2',
      text: '새로운 PR이 main 브랜치로 머지되었습니다: #128',
      username: 'GitHub Bot',
      channel_name: 'general',
      timestamp: new Date('2026-03-19T09:45:12Z').toISOString(),
    },
    {
      id: 'evt3',
      text: '오후 5시에 주간 회고가 있습니다.',
      username: 'SSAFY-Mate',
      channel_name: 'random',
      timestamp: new Date('2026-03-18T16:00:00Z').toISOString(),
    },
     {
      id: 'evt4',
      text: '서버 점검이 20분 후에 시작됩니다.',
      username: 'System Bot',
      channel_name: 'dev-alerts',
      timestamp: new Date('2026-03-18T14:00:00Z').toISOString(),
    },
  ];

  return (
    // 2. 디자인 통일성: NoticeList와 동일한 카드 스타일 적용
    <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow h-full flex flex-col">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-[#E8F5FE] flex items-center justify-center">
            <Rss size={20} className="text-[#57B7E9]" />
          </div>
          <h3 className="text-lg font-bold text-[#2C3E50]">🎙️ 실시간 Mattermost</h3>
        </div>
        <Link to="/events" className="flex items-center gap-1 text-sm text-[#57B7E9] hover:text-[#4A9FD4] font-medium">
          더보기
          <ChevronRight size={16} />
        </Link>
      </div>

      {/* Event List */}
      <div className="flex-1 space-y-1">
        {events.map((event) => (
          <div
            key={event.id}
            className="flex items-start justify-between py-3 px-3 rounded-xl hover:bg-[#F5F7FA] transition-colors group"
          >
            <div className="flex items-start gap-3 flex-1 min-w-0">
              <div className="flex-1">
                 <p className="text-sm text-[#2C3E50] font-medium group-hover:text-[#57B7E9] transition-colors">
                  {event.text}
                </p>
                <p className="text-xs text-[#5F6C7B] mt-1">
                  from <span className="font-semibold">{event.username}</span> in <span className="font-semibold">#{event.channel_name}</span>
                </p>
              </div>
            </div>
            <span className="text-xs text-[#5F6C7B] ml-3 flex-shrink-0 pt-1">
              {format(new Date(event.timestamp), 'yyyy.MM.dd HH:mm')}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
