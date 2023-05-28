import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { fetchSystemData } from '../../api/configeration/configeration.api';

export type ISystemConfigeration = {
  totalMemory: number;
  usedMemory: number;
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
  system_configeration?: ISystemConfigeration;
  error: string | null;
}

const asyncThunks = [
  { thunk: fetchSystemData, actionPrefix: 'system' }
];


const initialState: SystemState = {
  loading: false,
  system_configeration: undefined,
  error: null
}

export const systemSlice = createSlice({
  name: 'system',
  initialState,
  reducers: {
    updateSystemConfigeration: (state, action: PayloadAction<ISystemConfigeration>) => {
      state.system_configeration = action.payload
    }
  },
  extraReducers: (builder) => {
    asyncThunks.forEach(({ thunk, actionPrefix }) => {
      builder
        .addCase(thunk.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(thunk.fulfilled, (state, action) => {
          state.loading = false;
          state.system_configeration = action.payload.system;
          state.error = null;
        })
        .addCase(thunk.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message || `Failed to fetch ${actionPrefix}`;
        });
    });
  },
})

// Action creators are generated for each case reducer function
export const { updateSystemConfigeration } = systemSlice.actions

export default systemSlice.reducer