import apiService from "../../utils/axios.utils";

export const fetchUserDetails = async ({ email, password }: { email: string; password: string }) => {
    const response = await apiService.post(`/auth/login`, JSON.stringify({ email, password }));
    if (response.data?.data) return response.data.data;
    else return response.data;
};

export const fetchUserApi = async () => {
    const response = await apiService.get(`/auth/me`);
    return response.data;
};
