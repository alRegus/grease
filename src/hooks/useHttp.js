import { useEffect, useState } from "react";

const useHttp = function (url) {
  const [state, setState] = useState([]);

  /* useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setState(data));
  }, [url]); */
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetch(url);

        if (!data.ok) {
          throw new Error(
            data.status === 404 ? "Bad Request" : "Something went wrong"
          );
        }

        const json = await data.json();
        setState(json);
      } catch (err) {
        alert(err.message);
      }
    };
    fetchData();
  }, [url]);

  return state;
};

export default useHttp;
