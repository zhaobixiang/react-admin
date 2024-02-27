import { useState, useEffect } from 'react';
import { Flex } from 'antd';
import GrowCard from './components/GrowCard';
import SiteAnalysis from './components/SiteAnalysis';
import VisitRadar from './components/VisitRadar';
import VisitSource from './components/VisitSource';
import SalesProductPie from './components/SalesProductPie';

function Analysis() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <Flex className='p-16' gap={16} vertical={true}>
      <GrowCard loading={loading} />
      <SiteAnalysis loading={loading} />

      <Flex gap={16}>
        <VisitRadar loading={loading} />
        <VisitSource loading={loading} />
        <SalesProductPie loading={loading} />
      </Flex>
    </Flex>
  );
}

export default Analysis;
