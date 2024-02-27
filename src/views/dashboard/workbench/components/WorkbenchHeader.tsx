import { Avatar } from 'antd';
import headerImg from '@/assets/header.jpg';

function WorkbenchHeader() {
  const userInfo = {
    avatar: headerImg,
    realName: 'Vben Admin',
  };

  return (
    <div className='flex bg-white px-6 py-5'>
      <Avatar src={userInfo.avatar} size={72} />

      <div className='flex flex-col justify-center ml-24px'>
        <h1 className='text-lg mb-10px font-500'>
          早安, {userInfo.realName}, 开始您一天的工作吧！
        </h1>
        <span className='text-[#999]'>今日晴，20℃ - 32℃！</span>
      </div>

      <div className='flex flex-1 justify-end mt-4'>
        <div className='flex flex-col justify-center text-right'>
          <span className='text-[#999]'>待办</span>
          <span className='text-2xl'>2/10</span>
        </div>
        <div className='flex flex-col justify-center text-right mx-12'>
          <span className='text-[#999]'>项目</span>
          <span className='text-2xl'>8</span>
        </div>
        <div className='flex flex-col justify-center text-right mr-4'>
          <span className='text-[#999]'>团队</span>
          <span className='text-2xl'>300</span>
        </div>
      </div>
    </div>
  );
}

export default WorkbenchHeader;
