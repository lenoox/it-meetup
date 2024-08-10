import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store';
import { loginUserAction, registerUserAction } from './auth.action';
import { LoginUserRequest, RegisterUserRequest } from '@it-meetup/dto';

export const useAuth = () => {
  const token = useSelector((state: RootState) => state.user.token);
  const dispatch: AppDispatch = useDispatch();
  const loginUser = (data: LoginUserRequest): void => {
    dispatch(loginUserAction(data));
  };
  const registerUser = (data: RegisterUserRequest): void => {
    dispatch(registerUserAction(data));
  };
  return {
    loginUser,
    registerUser,
    token,
  };
};
