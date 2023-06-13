import apiService from "../../utils/axios.utils";

export const execCommand = async ({ cmd }: { cmd: string }) => {
    const response = await apiService.post(`/shell`, JSON.stringify({ cmd }));
    if (response.data?.data) return response.data.data;
    else return response.data;
};