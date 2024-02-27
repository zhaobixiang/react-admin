import { Button, Card } from 'antd';

interface Props {
  loading: boolean;
}

interface GroupItem {
  title: string;
  icon: string;
  color: string;
  desc: string;
  date: string;
  group: string;
}

function ProjectCard(props: Props) {
  const groupItems: GroupItem[] = [
    {
      title: 'Github',
      icon: 'carbon:logo-github',
      color: '',
      desc: '不要等待机会，而要创造机会。',
      group: '开源组',
      date: '2021-04-01',
    },
    {
      title: 'Vue',
      icon: 'ion:logo-vue',
      color: '#3fb27f',
      desc: '现在的你决定将来的你。',
      group: '算法组',
      date: '2021-04-01',
    },
    {
      title: 'Html5',
      icon: 'ion:logo-html5',
      color: '#e18525',
      desc: '没有什么才能比努力更重要。',
      group: '上班摸鱼',
      date: '2021-04-01',
    },
    {
      title: 'Angular',
      icon: 'ion:logo-angular',
      color: '#bf0c2c',
      desc: '热情和欲望可以突破一切难关。',
      group: 'UI',
      date: '2021-04-01',
    },
    {
      title: 'React',
      icon: 'bx:bxl-react',
      color: '#00d8ff',
      desc: '健康的身体是实现目标的基石。',
      group: '技术牛',
      date: '2021-04-01',
    },
    {
      title: 'Js',
      icon: 'ion:logo-javascript',
      color: '#EBD94E',
      desc: '路是走出来的，而不是空想出来的。',
      group: '架构组',
      date: '2021-04-01',
    },
  ];

  const renderItem = () => {
    return groupItems.map((v) => {
      return (
        <Card.Grid key={v.title}>
          <span className='text-lg'>{v.title}</span>
          <div className='flex mt-2 h-10 text-[#999]'>{v.desc}</div>
          <div className='flex justify-between text-[#999]'>
            <span>{v.group}</span>
            <span>{v.date}</span>
          </div>
        </Card.Grid>
      );
    });
  };

  return (
    <Card
      title='项目'
      loading={props.loading}
      extra={
        <Button type='link' size='small'>
          更多
        </Button>
      }>
      {renderItem()}
    </Card>
  );
}

export default ProjectCard;
