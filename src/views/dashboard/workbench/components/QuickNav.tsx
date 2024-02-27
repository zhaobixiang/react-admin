import { Card } from 'antd';

interface Props {
  loading: boolean;
}

interface NavItem {
  title: string;
  icon: string;
  color: string;
}

function QuickNav(props: Props) {
  const navItems: NavItem[] = [
    {
      title: '首页',
      icon: 'ion:home-outline',
      color: '#1fdaca',
    },
    {
      title: '仪表盘',
      icon: 'ion:grid-outline',
      color: '#bf0c2c',
    },
    {
      title: '组件',
      icon: 'ion:layers-outline',
      color: '#e18525',
    },
    {
      title: '系统管理',
      icon: 'ion:settings-outline',
      color: '#3fb27f',
    },
    {
      title: '权限管理',
      icon: 'ion:key-outline',
      color: '#4daf1bc9',
    },
    {
      title: '图表',
      icon: 'ion:bar-chart-outline',
      color: '#00d8ff',
    },
  ];

  return (
    <Card title='快捷导航' loading={props.loading}>
      {navItems.map((v) => (
        <Card.Grid key={v.title}>
          <span className='flex flex-col items-center'>
            <span className='mt-2 truncate'>{v.title}</span>
          </span>
        </Card.Grid>
      ))}
    </Card>
  );
}

export default QuickNav;
