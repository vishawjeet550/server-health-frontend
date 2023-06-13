export type TShell = {
    input: string;
    output: string;
    error: string;
    currentDir: string;
}

export interface GlobalState {
    loading: boolean;
    history: string[];
    shell: TShell[];
    [key: string]: any;
}