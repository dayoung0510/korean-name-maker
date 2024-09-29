import axios, { AxiosResponse } from 'axios';

const defaultClient = axios.create({
  // baseURL: 'http://1.225.87.231:5252',
  baseURL: 'https://api.afterdinnerclub.kr',
  withCredentials: true,
});

export const getCount = (): Promise<AxiosResponse<{ count: number }>> => {
  return defaultClient.get(`/count`);
};

export const postName = (payload: {
  names: string[];
  gender: 'M' | 'W';
}): Promise<AxiosResponse<{ id: string }>> => {
  return defaultClient.post(`/`, payload);
};

export const getResult = (
  id: string,
): Promise<
  AxiosResponse<{
    result: {
      name: string;
      reason: string;
      wishingWord: string;
    };
    status: string;
  }>
> => {
  return defaultClient.get(`/result/${id}`);
};
