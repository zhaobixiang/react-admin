// import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  // AppstoreOutlined,
  // ContainerOutlined,
  // DesktopOutlined,
  // MailOutlined,
  // MenuFoldOutlined,
  // MenuUnfoldOutlined,
  PieChartOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';

type MenuItem = Required<MenuProps>['items'][number];

function LayoutSidebar() {
  const navigate = useNavigate();

  const items: MenuItem[] = [
    {
      key: '/dashboard',
      icon: <PieChartOutlined />,
      label: 'Dashboard',
      children: [
        {
          key: '/dashboard/analysis',
          label: '分析页',
        },
        {
          key: '/dashboard/workbench',
          label: '工作台',
        },
      ],
    },
  ];

  const onClick = ({ key }: any) => {
    navigate(key);
  };

  return (
    <div className='w-210px'>
      <Menu className='h-full' mode='inline' theme='dark' items={items} onClick={onClick} />
    </div>
  );
}

export default LayoutSidebar;
