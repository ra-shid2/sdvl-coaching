// scrollUtils.ts
import { animateScroll as scroll } from 'react-scroll';

export const handleScrollTo = () => {
  const element = document.getElementById("userForm");
  const navbarHeight = document.getElementById("navbar")?.offsetHeight ?? 0;

  if (element) {
    const offset = element.offsetTop - navbarHeight;
    scroll.scrollTo(offset, {
      duration: 800,
      smooth: 'easeInOutQuart',
    });
  }
};
