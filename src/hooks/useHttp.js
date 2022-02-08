import { useEffect, useState } from "react";

const useHttp = function (url) {
  const [state, setState] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setState(data));
  }, [url]);

  return state;
};

export default useHttp;
