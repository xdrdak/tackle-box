import { useState } from 'react';

function useToggle(initialToggle = false) {
  const [isToggled, setToggle] = useState(initialToggle);

  return {
    isToggled,
    toggle: () => setToggle(!isToggled),
  };
}

export default useToggle;
