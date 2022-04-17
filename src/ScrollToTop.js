import { useEffect } from "react";
import { useLocation } from "react-router";

export default function ScrollToTop(props) {
  const location = useLocation().pathname;
  console.log(location);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return <>{props.children}</>;
}
