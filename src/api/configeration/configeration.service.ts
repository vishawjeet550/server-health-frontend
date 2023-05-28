import apiService from "../../utils/axios.utils";

export const fetchSystemDetails = async () => {
    const response = await apiService.get(`/system`);
    return response.data;
};
