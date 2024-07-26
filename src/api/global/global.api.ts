import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchUserApi, fetchUserDetails } from './global.service';

export const fetchGlobalData: any = createAsyncThunk('global/fetchUserDetails', async ({ email, password }: { email: string; password: string }) => {
  const userDetails = await fetchUserDetails({ email, password });
  return userDetails;
});

export const fetchUser: any = createAsyncThunk('global/fetchUser', async () => {
  const userDetails = await fetchUserApi();
  return userDetails;
});

