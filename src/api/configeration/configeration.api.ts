import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchSystemDetails } from './configeration.service';

export const fetchSystemData: any = createAsyncThunk('system/fetchSystemData', async () => {
  const systemDetails = await fetchSystemDetails();
  return systemDetails;
});
