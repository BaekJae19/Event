import { Rss, ChevronRight } from 'lucide-react';
import { Link } from 'react-router';
import { format } from 'date-fns';
import { useEffect, useState } from 'react'; // ADDED: Import useEffect and useState
import { getMattermostEvents, MattermostEvent } from '../API/mettermost'; // ADDED: Import API function and interface

export function MattermostEventList() {
  // ADDED: State for events, loading, and error
  const [events, setEvents] = useState<MattermostEvent[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // ADDED: Fetch data on component mount
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const data = await getMattermostEvents();
        setEvents(data);
      } catch (err) {
        setError('Failed to load Mattermost events.');
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchEvents();
  }, []); // Empty dependency array means this runs once on mount

  // 2. 디자인 통일성: NoticeList와 동일한 카드 스타일 적용
  return (
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
        {isLoading ? ( // ADDED: Loading state UI
          <div className="text-center text-[#5F6C7B]">로딩 중...</div>
        ) : error ? ( // ADDED: Error state UI
          <div className="text-center text-red-500">{error}</div>
        ) : events.length === 0 ? ( // ADDED: No events state
          <div className="text-center text-[#5F6C7B]">표시할 Mattermost 이벤트가 없습니다.</div>
        ) : (
          events.map((event) => (
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
          ))
        )}
      </div>
    </div>
  );
}
