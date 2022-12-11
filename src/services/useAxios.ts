import axios, { AxiosRequestConfig } from 'axios';
import { useEffect, useState } from 'react';
import { GameCardType } from './types';


export const useAxios = <T>(option: AxiosRequestConfig): [boolean, T | undefined, string, () => void] => {


    const [loading, setLoading] = useState(true);
    const [data, setData] = useState<T>();
    const [error, setError] = useState('');

    useEffect(() => {
        sendRequest();
    }, []);

    const request = () => {
        sendRequest();
    };

    const sendRequest = () => {
        setLoading(true);

        axios(option)
            .then((response) => {
                setError('');
                setData(response.data);
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => setLoading(false));
    }

    return [loading, data, error, request];
};
