import apiService from "../../utils/axios.utils";

export const fetchSystemDetails = async () => {
    const response = await apiService.get(`/system`);
    return response.data;
};

export const fetchApplicationDetails = async (page: number = 1, limit: number = 10) => {
    const response = await apiService.get(`/system/apps?page=${page}&pageSize=${limit}`);
    return response.data;
};
