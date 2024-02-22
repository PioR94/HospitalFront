import { useEffect, useState } from 'react';
import { baseUrlPatient, sendAndReceiveData } from '../../api';

export const useCitySuggestions = () => {
  const [inputText, setInputText] = useState('');

  const [citySuggestions, setCitySuggestions] = useState<string[]>([]);

  useEffect(() => {
    sendAndReceiveData(inputText, baseUrlPatient, 'google-api').then((r) => {
      setCitySuggestions(r);
    });
  }, [inputText]);

  return { citySuggestions, setInputText };
};
