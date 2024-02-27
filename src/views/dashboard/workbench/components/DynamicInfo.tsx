import { Button, Card, List, Avatar } from 'antd';

interface Props {
  loading: boolean;
}

interface DynamicInfoItem {
  avatar: string;
  name: string;
  date: string;
  desc: string;
}

function DynamicInfo(props: Props) {
  const dynamicInfoItems: DynamicInfoItem[] = [
    {
      avatar: 'dynamic-avatar-1|svg',
      name: '威廉',
      date: '刚刚',
      desc: `在 <a>开源组</a> 创建了项目 <a>Vue</a>`,
    },
    {
      avatar: 'dynamic-avatar-2|svg',
      name: '艾文',
      date: '1个小时前',
      desc: `关注了 <a>威廉</a> `,
    },
    {
      avatar: 'dynamic-avatar-3|svg',
      name: '克里斯',
      date: '1天前',
      desc: `发布了 <a>个人动态</a> `,
    },
    {
      avatar: 'dynamic-avatar-4|svg',
      name: 'Vben',
      date: '2天前',
      desc: `发表文章 <a>如何编写一个Vite插件</a> `,
    },
    {
      avatar: 'dynamic-avatar-5|svg',
      name: '皮特',
      date: '3天前',
      desc: `回复了 <a>杰克</a> 的问题 <a>如何进行项目优化？</a>`,
    },
    {
      avatar: 'dynamic-avatar-6|svg',
      name: '杰克',
      date: '1周前',
      desc: `关闭了问题 <a>如何运行项目</a> `,
    },
    {
      avatar: 'dynamic-avatar-1|svg',
      name: '威廉',
      date: '1周前',
      desc: `发布了 <a>个人动态</a> `,
    },
    {
      avatar: 'dynamic-avatar-1|svg',
      name: '威廉',
      date: '2021-04-01 20:00',
      desc: `推送了代码到 <a>Github</a>`,
    },
  ];

  return (
    <Card
      className='mt-4'
      title='最新动态'
      loading={props.loading}
      extra={
        <Button type='link' size='small'>
          更多
        </Button>
      }>
      <List
        itemLayout='horizontal'
        dataSource={dynamicInfoItems}
        renderItem={(item, index) => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`} />}
              title={
                <span>
                  {item.name} <span dangerouslySetInnerHTML={{ __html: item.desc }}></span>
                </span>
              }
              description={item.date}
            />
          </List.Item>
        )}
      />
    </Card>
  );
}

export default DynamicInfo;
