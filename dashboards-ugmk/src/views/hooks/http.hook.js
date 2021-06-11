import { useCallback, useState } from "react";
import axios from "axios";

export const useHttp = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const request = useCallback(
    async (url, method = "GET", body = null, headers = {}) => {
      setLoading(true);
      try {
        if (body) {
          body = JSON.stringify(body);
          headers["Content-Type"] = "application/json";
        }

        console.log(body);

        const response = await fetch(url, {
          // mode: "no-cors",
          method,
          body,
          headers,
        });
        const data = await response.json();
        console.log(data);

        if (!response.ok) {
          throw new Error(data.message || "Что-то пошло не так");
        }

        setLoading(false);

        return data;
      } catch (e) {
        setLoading(false);

        setError(e.message);
        throw e;
      }
    },
    []
  );

  const requestFile = useCallback(
    async (url, method = "GET", body = null, headers = {}) => {
      setLoading(true);

      const storage = JSON.parse(localStorage.userData);

      headers["X-API-Key"] = storage.token;

      fetch(url, {
        method: method,
        body: body,
        headers: headers,
      })
        .then((response) => response.json())
        .then((result) => {
          console.log("Success:", result);
          setLoading(false);
        })
        .catch((error) => {
          setLoading(false);
          setError(error.message);
          console.error("Error:", error);
        });
    },
    []
  );

  const requestAuth = useCallback(
    async (url, method = "GET", body = null, headers = {}) => {
      setLoading(true);
      try {
        const storage = JSON.parse(localStorage.userData)

        headers["X-API-Key"] = storage.token;


        const response =  await fetch(url, {
          method: method,
          body: body,
          headers: headers,
        })

        const data = await response.json();
        console.log(data);

        if (!response.ok) {
          throw new Error(data.message || "Что-то пошло не так");
        }

        setLoading(false);

        return data;


      } catch (e) {
        setLoading(false);

        setError(e.message);
        throw e;
      }
    },
    []
  );

  const clearError = useCallback(() => setError(null), []);

  return { loading, request, requestFile, requestAuth, error, clearError };
};
