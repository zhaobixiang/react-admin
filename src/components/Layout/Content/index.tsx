import { Outlet } from 'react-router-dom';

function LayoutContent() {
  return (
    <div className='overflow-auto'>
      <Outlet />
    </div>
  );
}

export default LayoutContent;
