import { useState, useEffect } from 'react';
import { Card } from 'antd';
import WorkbenchHeader from './components/WorkbenchHeader';
import ProjectCard from './components/ProjectCard';
import DynamicInfo from './components/DynamicInfo';
import QuickNav from './components/QuickNav';
import SaleRadar from './components/SaleRadar';

import Illustration from '@/assets/illustration.svg';

import Icon from './Icon';

function Workbench() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <div>
      <WorkbenchHeader />

      <div className='flex p4'>
        <div className='w-7/10 mr-4'>
          <ProjectCard loading={loading} />
          <DynamicInfo loading={loading} />
        </div>
        <div className='w-3/10'>
          <QuickNav loading={loading} />

          <Card className='my-4' loading={loading}>
            <img className='h-50 mx-auto' src={Illustration} />
            <Icon />
          </Card>

          <SaleRadar loading={loading} />
        </div>
      </div>
    </div>
  );
}

export default Workbench;
