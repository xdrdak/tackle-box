import { useEffect, useRef } from 'react';

// TODO
// - Ditch that any conversion
// - Needs a check to see whether or not we're in a server side context
function useClickOutside(cb: Function) {
  const targetEl = useRef(null);

  const handleClickOutside = (e: Event) => {
    const target = e.target as HTMLElement;

    // How 2 typescript pls
    if (!(targetEl.current as any).contains(target)) {
      cb(e);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  });

  return {
    targetEl,
  };
}

export default useClickOutside;
