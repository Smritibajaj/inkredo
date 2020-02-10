import { useEffect } from "react";
import { withRouter } from "react-router-dom";

const ScrollHandler = ({ location }) => {
  useEffect(() => {
    const element = document.getElementById(location.hash);

    setTimeout(() => {
      window.scrollTo({
        behavior: element ? "smooth" : "auto",
        top: element ? element.offsetTop -100 : 0
      });
    }, 10);
  }, [location]);

  return null;
};

export default withRouter(ScrollHandler);