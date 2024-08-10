import { apiService } from './api.service';
import { LoginUserRequest, RegisterUserRequest } from '@it-meetup/dto';

interface SinginUser {
  token: string;
}
interface User {
  name: string;
}
const path = 'auth';
export const loginUser = async (
  data: LoginUserRequest
): Promise<SinginUser> => {
  const response = await apiService.post<SinginUser>(`${path}/signin`, data);

  return response.data;
};
export const registerUser = async (
  data: RegisterUserRequest
): Promise<User> => {
  const response = await apiService.post<User>(`${path}/register`, data);
  return response.data;
};
export const userApi = {
  loginUser,
  registerUser,
};
