import { createAsyncThunk } from '@reduxjs/toolkit';
import { userApi } from '../../services/user.service';
import { LoginUserRequest, RegisterUserRequest } from '@it-meetup/dto';
import { localStorageService } from '../../services/storage.service';
import { goToPage } from '../../services/navigate.service';

export const loginUserAction = createAsyncThunk(
  'user/login',
  async (data: LoginUserRequest) => {
    const response = await userApi.loginUser(data);
    if (response.token) {
      localStorageService.setLocalStorage('token', response.token);
      goToPage('');
    }
    return response;
  }
);
export const registerUserAction = createAsyncThunk(
  'user/register',
  async (data: RegisterUserRequest) => {
    const response = await userApi.registerUser(data);
    return response;
  }
);
