import { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { getData } from '../features/dataSlice';
import { BASE_URL } from '../utils/utils';

function useFetch() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);
  
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(BASE_URL)
      .then((response) => {
        dispatch(getData(response.data));
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [dispatch]);

  return { error, isLoading };
}

export default useFetch;
