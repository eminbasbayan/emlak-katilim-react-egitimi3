import { useEffect, useState } from 'react';
import axios from 'axios';

const useAxios = (config = {}, dependencies = []) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const source = axios.CancelToken.source();

    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await axios({
          ...config,
          cancelToken: source.token,
          timeout: 5000,
        });

        setData(response.data);
      } catch (error) {
        if (axios.isCancel(error)) {
          console.log('İstek iptal edildi:', error.message);
        } else {
          setError({
            message: error.response?.data?.message || error.message,
            status: error.response?.status,
          });
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    // clean-up function
    return () => {
      source.cancel('Component unmounted');
    };
  }, dependencies);

  return { data, loading, error };
};

export default useAxios;
