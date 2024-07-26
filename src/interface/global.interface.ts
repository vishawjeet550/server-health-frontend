export type IUser = {
    id: string;
    username: string;
    email: string;
    firstName: string;
    lastName: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface GlobalState {
    loading: boolean;
    globalLoader: boolean;
    user: IUser | null;
    error: string | null;
    [key: string]: any;
  }