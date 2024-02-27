import { Layout } from 'antd';

import LayoutHeader from './Header';
import LayoutSidebar from './Sidebar';
import LayoutContent from './Content';

function LayoutPage() {
  return (
    <Layout className='app flex flex-row bg-[#f4f7f9]'>
      <LayoutSidebar />

      <Layout className='flex-1'>
        <LayoutHeader />
        <LayoutContent />
      </Layout>
    </Layout>
  );
}

export default LayoutPage;
