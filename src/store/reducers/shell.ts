import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { GlobalState, TShell } from '../../interface/shell.interface';
import { runCommand } from '../../api/shell/shell.api';


const asyncThunks = [
  { thunk: runCommand, actionPrefix: 'shell', stateKey: 'history', loadingKey: 'loading' }
];

const initialState: GlobalState = {
  loading: false,
  currentDir: 'Root',
  error: '',
  history: [],
  shell: []
}

export const shellSlice = createSlice({
  name: 'shell',
  initialState,
  reducers: {
    addNewLineIntoShell: (state, action: PayloadAction<TShell>) => {
      state.shell.push(action.payload)
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
          state[stateKey] = action.payload[stateKey];
          state['currentDir'] = action.payload['currentDir'];
          state['shell'].length > 0 && (state['shell'][state['shell'].length - 1]['output'] = action.payload.cmdOpt)
          state['shell'].length > 0 && (state['shell'][state['shell'].length - 1]['input'] = action.payload.cmd)
          state.error = null;
        })
        .addCase(thunk.rejected, (state, action) => {
          state[loadingKey] = false;
          state.error = action.error.message || `Failed to fetch ${actionPrefix}`;
        });
    });
  },
})

export const { addNewLineIntoShell } = shellSlice.actions

export default shellSlice.reducer