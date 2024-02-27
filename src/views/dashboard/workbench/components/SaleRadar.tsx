import { Card } from 'antd';
import Chart from '@/components/Chart';

interface Props {
  loading: boolean;
}

function SaleRadar(props: Props) {
  const options = {
    legend: {
      bottom: 0,
      data: ['Visits', 'Sales'],
    },
    tooltip: {},
    radar: {
      radius: '60%',
      splitNumber: 8,
      indicator: [
        {
          name: '2017',
        },
        {
          name: '2017',
        },
        {
          name: '2018',
        },
        {
          name: '2019',
        },
        {
          name: '2020',
        },
        {
          name: '2021',
        },
      ],
    },
    series: [
      {
        type: 'radar',
        symbolSize: 0,
        areaStyle: {
          shadowBlur: 0,
          shadowColor: 'rgba(0,0,0,.2)',
          shadowOffsetX: 0,
          shadowOffsetY: 10,
          opacity: 1,
        },
        data: [
          {
            value: [90, 50, 86, 40, 50, 20],
            name: 'Visits',
            itemStyle: {
              color: '#b6a2de',
            },
          },
          {
            value: [70, 75, 70, 76, 20, 85],
            name: 'Sales',
            itemStyle: {
              color: '#67e0e3',
            },
          },
        ],
      },
    ],
  };

  return (
    <Card title='销售统计' loading={props.loading}>
      <Chart options={options} height='400px' />
    </Card>
  );
}

export default SaleRadar;
