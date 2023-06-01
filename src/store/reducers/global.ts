import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { GlobalState, IUser } from '../../interface/global.interface';
import { fetchGlobalData, fetchUser } from '../../api/global/global.api';


const asyncThunks = [
  { thunk: fetchGlobalData, actionPrefix: 'global', stateKey: 'user', loadingKey: 'loading' },
  { thunk: fetchUser, actionPrefix: 'global', stateKey: 'user', loadingKey: 'globalLoader' }
];

const initialState: GlobalState = {
  loading: false,
  globalLoader: false,
  user: null,
  error: null
}

export const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    updateUserInformation: (state, action: PayloadAction<IUser>) => {
      state.user = action.payload
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
export const { updateUserInformation } = globalSlice.actions

export default globalSlice.reducer