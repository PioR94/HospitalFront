import React, { useEffect, useState } from 'react';
import './AccountDoctor.css';
import { Week } from '../../organisms/Week/Week';
import { baseUrlDoctor, sendToken } from '../../../api';
import { UserPanel } from '../UserPanel/UserPanel';

export const AccountDoctor = () => {
  const token = sessionStorage.getItem('token');

  return <div className="bgAccountDoctor"></div>;
};
