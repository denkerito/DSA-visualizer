import { useState, useEffect } from 'react';

interface ApiCallProps{
    endpoint: string;
    method: string;
    headers?: string;
    body?: Record<string, any>;

}

const API_URL = 'http://127.0.0.1:8000/'
const API_PREFIX = 'api/v1/'


function useApiCall({ endpoint,method, headers, body }: ApiCallProps){
    const [data, setData] = useState(null);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(true);

     useEffect(() => {
        const api_call = async () =>{
            try {
                setLoading(true);
                const response = await fetch(`${API_URL}${API_PREFIX}${endpoint}`,
                    {
                        method: method,
                        headers: headers ? JSON.parse(headers) : {
                            'Content-type': 'application/json; charset=UTF-8',
                        },
                        body: body ? JSON.stringify(body): undefined

                    }
                )
                console.log("response = " +response);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const result = await response.json();
                setData(result);
            } catch (err) {
                const errorMessage = err instanceof Error ? err.message : 'An unknown error occurred';
                setError(errorMessage);
            } finally {
                setLoading(false);
            }
        };
        api_call();
     }, [endpoint, method, headers, body]);
    return { data, error, loading };
}

export default useApiCall;