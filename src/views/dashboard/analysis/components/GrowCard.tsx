import { Fragment } from 'react';
import { Flex, Card, Tag } from 'antd';
// import {
//   DashboardTwoTone,
//   PieChartTwoTone,
//   CreditCardTwoTone,
//   AppstoreTwoTone,
// } from '@ant-design/icons';
import { Icon } from '@iconify/react';
import CountTo from '@/components/CountTo';

interface Props {
  loading: boolean;
}

interface GrowCardItem {
  icon: string;
  title: string;
  value: number;
  total: number;
  color: string;
  action: string;
}

function GrowCard(props: Props) {
  // const growCardList: GrowCardItem[] = [
  //   {
  //     title: '访问数',
  //     icon: 'AppstoreTwoTone',
  //     value: 2000,
  //     total: 120000,
  //     color: 'green',
  //     action: '月',
  //   },
  //   {
  //     title: '成交额',
  //     icon: 'CreditCardTwoTone',
  //     value: 20000,
  //     total: 500000,
  //     color: 'blue',
  //     action: '月',
  //   },
  //   {
  //     title: '下载数',
  //     icon: 'DashboardTwoTone',
  //     value: 8000,
  //     total: 120000,
  //     color: 'orange',
  //     action: '周',
  //   },
  //   {
  //     title: '成交数',
  //     icon: 'PieChartTwoTone',
  //     value: 5000,
  //     total: 50000,
  //     color: 'purple',
  //     action: '年',
  //   },
  // ];

  const growCardList: GrowCardItem[] = [
    {
      title: '访问数',
      icon: 'visit-count|svg',
      value: 2000,
      total: 120000,
      color: 'green',
      action: '月',
    },
    {
      title: '成交额',
      icon: 'total-sales|svg',
      value: 20000,
      total: 500000,
      color: 'blue',
      action: '月',
    },
    {
      title: '下载数',
      icon: 'download-count|svg',
      value: 8000,
      total: 120000,
      color: 'orange',
      action: '周',
    },
    {
      title: '成交数',
      icon: 'transaction|svg',
      value: 5000,
      total: 50000,
      color: 'purple',
      action: '年',
    },
  ];

  // const renderIcon = (name: string) => {
  //   return {
  //     AppstoreTwoTone: <AppstoreTwoTone />,
  //     CreditCardTwoTone: <CreditCardTwoTone />,
  //     DashboardTwoTone: <DashboardTwoTone />,
  //     PieChartTwoTone: <PieChartTwoTone />,
  //   }[name];
  // };

  const renderCardList = () => {
    return growCardList.map((v) => (
      <Fragment key={v.title}>
        <Card
          className='flex-1'
          size='small'
          loading={props.loading}
          title={v.title}
          extra={<Tag color={v.color}>{v.action}</Tag>}>
          <div className='flex-center p4'>
            <CountTo value={v.value} prefix='$' />

            {/* <span className='text-3xl'>{renderIcon(v.icon)}</span> */}

            <Icon icon='flat-color-icons:google' />
          </div>
          <div className='flex-center p4 py-2'>
            <span>总{v.title}</span>
            <CountTo value={v.value} prefix='$' valueStyle={{ fontSize: '14px' }} />
          </div>
        </Card>
      </Fragment>
    ));
  };

  return <Flex gap={16}>{renderCardList()}</Flex>;
}

export default GrowCard;
