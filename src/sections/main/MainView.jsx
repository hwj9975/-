import PageContainer from 'src/components/container/PageContainer';
import MenuGrid from './MenuGrid';
import StrategyCard from './StrategyCard';

export default function MainView() {
  return (
    <PageContainer>
      <StrategyCard />
      <MenuGrid />
    </PageContainer>
  );
}
