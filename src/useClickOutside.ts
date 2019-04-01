import { useEffect, useRef } from 'react';

// TODO
// - Needs a check to see whether or not we're in a server side context
function useClickOutside(cb: Function) {
  const targetEl = useRef(null);

  const handleClickOutside = (e: MouseEvent) => {
    const { current } = targetEl;
    // Yolo
    if (!(current as any).contains(e.target)) {
      cb(e);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  });

  return targetEl;
}

export default useClickOutside;
