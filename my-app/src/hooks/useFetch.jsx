import { useState, useEffect } from "react";
import axios from "axios";

export function useFetch(url) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(url);
        setData(response.data);
      } catch (error) {
        setError(error.message || "Something went wrong!");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url]);
  return { data, error, isLoading };
}
