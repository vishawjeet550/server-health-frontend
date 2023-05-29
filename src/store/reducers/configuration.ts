import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { fetchAppsData, fetchProcessData, fetchSystemData } from '../../api/configuration/configuration.api';
import { ISystemconfiguration, SystemState, TApps } from '../../interface/configuration.interface';


const asyncThunks = [
  { thunk: fetchSystemData, actionPrefix: 'system', stateKey: 'system_configuration', loadingKey: 'loading' },
  { thunk: fetchAppsData, actionPrefix: 'system', stateKey: 'apps', loadingKey: 'appLoading' },
  { thunk: fetchProcessData, actionPrefix: 'system', stateKey: 'process', loadingKey: 'processLoading' },
];

const initialState: SystemState = {
  loading: false,
  processLoading: false,
  appLoading: false,
  system_configuration: undefined,
  apps: [],
  process: undefined,
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