import { useState } from 'react';
import { Option } from '../../../types/options/option';

export const useStartPage = () => {
  const [selectedOption1, setSelectedOption1] = useState<Option | null>(null);
  const [selectedOption2, setSelectedOption2] = useState<Option | null>(null);

  const hostUrl = process.env.React_APP_HOST;
  const options1 = [
    {
      name: 'doktor',
      link1: `${hostUrl}/doctor/add`,
    },
    {
      name: 'pacjent',
      link1: `${hostUrl}/patient/add`,
    },
  ];

  const options2 = [
    {
      name: 'doktor',
      link2: `${hostUrl}/doctor/log`,
    },
    {
      name: 'pacjent',
      link2: `${hostUrl}/patient/log`,
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
