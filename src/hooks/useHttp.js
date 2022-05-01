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
      const data = await fetch(url);
      const json = await data.json();
      setState(json);
    };
    fetchData();
  }, [url]);

  return state;
};

export default useHttp;
