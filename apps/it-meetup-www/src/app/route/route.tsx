import { Route, Routes } from 'react-router-dom';
import Login from '../pages/login/login';
import Register from '../pages/register/register';
import MyMeetup from '../pages/my-meetup/my-meetup';
import AddMeetup from '../pages/add-meetup/add-meetup';
import Home from '../pages/home/home';
import Layout from '../pages/layout/layout';

export default function AppRoute() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="my" element={<MyMeetup />} />
          <Route path="add" element={<AddMeetup />} />
        </Route>
      </Routes>
    </div>
  );
}
