import { useState, useEffect, useCallback } from 'react';
import { getFizzBuzz } from '../utils/getFixzzBuzz';

interface UseFizzBuzzProps {
  onChange: (val: string) => void;
  displayValue: string;
  value: string;
}

export const useFizzBuzz = (): UseFizzBuzzProps => {
  const [value, setValue] = useState(0);
  const [displayValue, setDisplayValue] = useState('');

  useEffect(() => {
    if (value) {
      setDisplayValue(getFizzBuzz(value));
    }
  }, [value]);

  const onChange = useCallback(
    (value: string) => {
      if (!isNaN(Number(value))) {
        setValue(Number(value));
      }
    },
    [value],
  );

  return {
    value: value + '',
    displayValue,
    onChange,
  };
};
