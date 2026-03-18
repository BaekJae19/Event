import { DdayCard } from '../components/DdayCard';
import { MenuCard } from '../components/MenuCard';
import { NoticeList } from '../components/NoticeList';
import { CommunityList } from '../components/CommunityList';
import { DailyKnowledge } from '../components/DailyKnowledge';

export default function Dashboard() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-8">
      {/* Hero Section - Bento Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* D-Day Card */}
        <DdayCard />
        
        {/* Menu Card */}
        <MenuCard />
      </div>

      {/* Middle Section - Notice & Community */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Notice List */}
        <NoticeList />
        
        {/* Community List */}
        <CommunityList />
      </div>

      {/* Bottom Section - Daily Knowledge */}
      <DailyKnowledge />
    </main>
  );
}
