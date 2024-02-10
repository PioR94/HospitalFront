import React, { useEffect } from 'react';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import './SuccessPayment.css';
import { useNavigate } from 'react-router-dom';
import { baseUrlTerm, sendData } from '../../api';

export const SuccessPayment = () => {
  const navigate = useNavigate();

  const dataTerm = sessionStorage.getItem('data-term');

  useEffect(() => {
    if (dataTerm) {
      const data = JSON.parse(dataTerm);

      sendData(data, baseUrlTerm, 'add');

      sessionStorage.removeItem('dataTerm');
    }
  }, []);
  return (
    <div className="success-page">
      {dataTerm && (
        <Card title="Płatność Przyjęta">
          <p style={{ marginBottom: 20 }}>Dziękujemy za dokonanie płatności. Twoja rezerwacja została pomyślnie zrealizowana.</p>
          <Button label="Wróć" icon="pi pi-check" onClick={() => navigate('../find-doctor')} />
        </Card>
      )}
    </div>
  );
};
