import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { fetchAppsData, fetchSystemData } from '../../api/configuration/configuration.api';
import { TApps } from '../../interface/application.interface';

export type ISystemconfiguration = {
  totalMemory: Record<string, any>;
  storage: Record<string, any>;
  cpuModel: string;
  gpuModel: string[];
  batteryPercentage?: number;
  diskDrives: string[];
  networkInterfaces: string[];
  version?: string;
  totalCPUs?: number;
  processCount?: number;
  users?: Record<string, any>;
}

export interface SystemState {
  loading: boolean;
  appLoading: boolean;
  system_configuration?: ISystemconfiguration;
  apps: TApps[];
  error: string | null;
  [key: string]: any;
}

const asyncThunks = [
  { thunk: fetchSystemData, actionPrefix: 'system', stateKey: 'system_configuration', loadingKey: 'loading' },
  { thunk: fetchAppsData, actionPrefix: 'apps', stateKey: 'apps', loadingKey: 'appLoading' }
];


const initialState: SystemState = {
  loading: false,
  appLoading: false,
  system_configuration: undefined,
  apps: [],
  error: null
}

export const systemSlice = createSlice({
  name: 'system',
  initialState,
  reducers: {
    updateSystemconfiguration: (state, action: PayloadAction<ISystemconfiguration>) => {
      state.system_configuration = action.payload
    }
  },
  extraReducers: (builder) => {
    asyncThunks.forEach(({ thunk, actionPrefix, stateKey, loadingKey }) => {
      builder
        .addCase(thunk.pending, (state) => {
          state[loadingKey] = true;
          state.error = null;
        })
        .addCase(thunk.fulfilled, (state, action) => {
          state[loadingKey] = false;
          state[stateKey] = action.payload;
          state.error = null;
        })
        .addCase(thunk.rejected, (state, action) => {
          state[loadingKey] = false;
          state.error = action.error.message || `Failed to fetch ${actionPrefix}`;
        });
    });
  },
})

// Action creators are generated for each case reducer function
export const { updateSystemconfiguration } = systemSlice.actions

export default systemSlice.reducer