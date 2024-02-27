import { Card } from 'antd';
import { useState } from 'react';
import VisitAnalysis from './VisitAnalysis';
import VisitAnalysisBar from './VisitAnalysisBar';

interface Props {
  loading: boolean;
}

function SiteAnalysis(props: Props) {
  const [activeKey, setActiveKey] = useState('tab1');

  const tabList = [
    {
      key: 'tab1',
      tab: '流量趋势',
    },
    {
      key: 'tab2',
      tab: '访问量',
    },
  ];

  const onTabChange = (key: string) => {
    setActiveKey(key);
  };

  return (
    <Card
      tabList={tabList}
      activeTabKey={activeKey}
      loading={props.loading}
      onTabChange={onTabChange}>
      <div className='mb-10px'>
        {activeKey === 'tab1' ? <VisitAnalysis /> : <VisitAnalysisBar />}
      </div>
    </Card>
  );
}

export default SiteAnalysis;
