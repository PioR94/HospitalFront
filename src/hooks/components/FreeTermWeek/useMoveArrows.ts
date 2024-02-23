import { addDays } from 'date-fns';
import { useState } from 'react';

export const useMoveArrows = () => {
  const [counter, setCounter] = useState(0);

  const [initialDate, setInitialDate] = useState(new Date());

  const moveRight = (): void => {
    if (counter < 20) {
      setInitialDate(addDays(initialDate, 3));
      setCounter(counter + 1);
    }
  };

  const moveLeft = (): void => {
    if (counter > 0) {
      setInitialDate(addDays(initialDate, -3));
      setCounter(counter - 1);
    }
  };

  return { counter, initialDate, moveRight, moveLeft };
};
