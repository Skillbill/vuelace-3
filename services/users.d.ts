import { User } from '../components/examples/types/user';

export declare const getUsersAPI: (page: number, rows: number, filters?: any) => Promise<{
    result: any;
    page: {
        totalRows: number;
        currentPage: number;
        pageRows: number;
        totalPages: number;
    };
}>;
export declare const getUserAPI: (id: string) => Promise<User | undefined>;
export declare const createUserAPI: (user: User) => Promise<User>;
export declare const updateUserAPI: (id: string, user: User) => Promise<User>;
export declare const deleteUserAPI: (id: string) => Promise<void>;
