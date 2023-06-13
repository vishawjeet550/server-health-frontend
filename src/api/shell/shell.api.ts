import { createAsyncThunk } from '@reduxjs/toolkit';
import { execCommand } from './shell.service';

export const runCommand: any = createAsyncThunk('shell/runCommand', async ({ cmd }: { cmd: string }) => {
    const userDetails = await execCommand({ cmd });
    return userDetails;
});
