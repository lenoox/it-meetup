import { Link } from 'react-router-dom';
import { Button, Dropdown, MenuProps, Space } from 'antd';
import { CalendarOutlined, PlusOutlined } from '@ant-design/icons';

export function Navbar() {
  const items: MenuProps['items'] = [
    {
      key: '1',
      label: <Link to="/my">My meetup</Link>,
      icon: <CalendarOutlined />,
    },
    {
      key: '2',
      label: <Link to="/add">Add meetup</Link>,
      icon: <PlusOutlined />,
    },
  ];

  const isAuth = true;
  return (
    <div className="bg-white border-b-2 h-14 border-gray-50 flex items-center">
      <div className="container mx-auto h-full flex items-center justify-between">
        <div>
          <Link to="/">IT Meetup</Link>
        </div>
        <div className="relative md:flex h-full gap-x-3">
          {isAuth ? (
            <div>
              <Dropdown menu={{ items }} placement="bottom">
                <button className="text-gray-800 h-full flex items-center gap-x-2 rounded focus:outline-none">
                  <img
                    className="h-8 w-8 rounded-full"
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt="avatar"
                  />
                  <span>Jan Kowalski</span>
                </button>
              </Dropdown>
            </div>
          ) : (
            <Space>
              <Button>
                <Link to="/register">Register</Link>
              </Button>
              <Button type="primary">
                <Link to="/login">Login</Link>
              </Button>
            </Space>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
