import { useState } from 'react';
import { Option } from '../../../types/options/option';
import { baseUrlDoctor, baseUrlPatient } from '../../../api';

export const useStartPage = () => {
  const [selectedOption1, setSelectedOption1] = useState<Option | null>(null);
  const [selectedOption2, setSelectedOption2] = useState<Option | null>(null);

  const options1 = [
    {
      name: 'doktor',
      link1: `${baseUrlDoctor}/add`,
    },
    {
      name: 'pacjent',
      link1: `${baseUrlPatient}/add`,
    },
  ];

  const options2 = [
    {
      name: 'doktor',
      link2: `${baseUrlDoctor}/log`,
    },
    {
      name: 'pacjent',
      link2: `${baseUrlPatient}/log`,
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
