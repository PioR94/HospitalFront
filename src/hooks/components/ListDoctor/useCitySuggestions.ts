import { useEffect, useState } from 'react';
import { baseUrlPatient, sendAndReceiveData } from '../../../api';

export const useCitySuggestions = (inputText: string) => {
  const [citySuggestions, setCitySuggestions] = useState<string[]>([]);

  useEffect(() => {
    sendAndReceiveData(inputText, baseUrlPatient, 'google-api').then((r) => {
      setCitySuggestions(r);
    });
  }, [inputText]);

  return citySuggestions;
};
