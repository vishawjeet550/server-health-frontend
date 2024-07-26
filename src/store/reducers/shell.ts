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
    },
    updateHistoryAndDirectory: (state, action: PayloadAction<any>) => {
      state.history = action.payload.history
      state.currentDir = action.payload.currentDir
    },
    clearShell: (state) => {
      const newArray = [{ input: '', output: '', executed: false, error: '', currentDir: state.shell[state.shell.length - 1].currentDir }];
      state.shell = newArray
    },
    updateShellOutput: (state, action: PayloadAction<any>) => {
        console.log('cominnng in state reducer', action.payload)
        state.shell = action.payload.shell;
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
          state.error = null;
          state[stateKey] = action.payload[stateKey];
          state['shell'].length > 0 && (state['shell'][state['shell'].length - 1]['output'] = action.payload.cmdOpt)
          state['shell'].length > 0 && (state['shell'][state['shell'].length - 1]['input'] = action.payload.cmd)
          state['shell'].length > 0 && (state['shell'][state['shell'].length - 1]['currentDir'] = action.payload.prevDir)
          state['shell'].length > 0 && (state['shell'][state['shell'].length - 1]['executed'] = true)
          state['shell'].push({ error: '', output: '', input: '', currentDir: action.payload.currentDir, executed: false })
        })
        .addCase(thunk.rejected, (state, action) => {
          state[loadingKey] = false;
          state.error = action.error.message || `Failed to fetch ${actionPrefix}`;
        });
    });
  },
})

export const { addNewLineIntoShell, clearShell, updateHistoryAndDirectory, updateShellOutput } = shellSlice.actions

export default shellSlice.reducer