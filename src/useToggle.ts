import { useState } from 'react';

function useToggle(initialToggle = false): [boolean, () => void] {
  const [isToggled, setToggle] = useState(initialToggle);

  return [
    isToggled,
    () => setToggle(!isToggled),
  ];
}

export default useToggle;
