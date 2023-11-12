import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    document.querySelector("#page_body").scrollTo(0,0);
  }, [pathname]);

  return <></>
}

export default ScrollToTop;