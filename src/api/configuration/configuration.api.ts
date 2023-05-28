import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchApplicationDetails, fetchSystemDetails } from './configuration.service';

export const fetchSystemData: any = createAsyncThunk('system/fetchSystemData', async () => {
  const systemDetails = await fetchSystemDetails();
  return systemDetails;
});

export const fetchAppsData = createAsyncThunk('system/fetchAppsData', async ({ page, limit }: { page: number, limit: number }) => {
  const appDetails = await fetchApplicationDetails(page, limit);
  return appDetails;
});

