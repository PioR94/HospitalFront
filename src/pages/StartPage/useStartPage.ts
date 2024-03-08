import { useState } from 'react';
import { Option } from '../../types/options/option';

export const useStartPage = () => {
  const [selectedOption1, setSelectedOption1] = useState<Option | null>(null);
  const [selectedOption2, setSelectedOption2] = useState<Option | null>(null);

  const options1 = [
    {
      name: 'doktor',
      link1: `doctor/add`,
    },
    {
      name: 'pacjent',
      link1: `patient/add`,
    },
  ];

  const options2 = [
    {
      name: 'doktor',
      link2: `doctor/log`,
    },
    {
      name: 'pacjent',
      link2: `patient/log`,
    },
  ];

  const handleOptionChange1 = (e: { value: Option }) => {
    setSelectedOption1(e.value);
    if (e.value) {
      window.location.href = e.value.link1;
    }
  };

  const handleOptionChange2 = (e: { value: Option }) => {
    setSelectedOption2(e.value);
    if (e.value) {
      window.location.href = e.value.link2;
    }
  };

  return { handleOptionChange1, handleOptionChange2, options1, options2 };
};
