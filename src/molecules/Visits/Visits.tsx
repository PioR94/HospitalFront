import React, { useEffect, useState } from 'react';
import './Visits.css';
import { baseUrlTerm, sendAndReceiveData } from '../../api';
import { Visit } from '../../types/visits/visit';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Month } from '../../utils/enum';
import { VisitTable } from '../../types/terms/term';
import { useAppSelector } from '../../hooks/redux';

export const Visits = () => {
  const [visits, setVisits] = useState<VisitTable[]>([]);

  const role = sessionStorage.getItem('role');

  const { idUser } = useAppSelector((state) => state.user);

  useEffect(() => {
    sendAndReceiveData(idUser, baseUrlTerm, `${role}-terms`).then((r) => {
      const sortedVisits = r.sort((a: Visit, b: Visit) => {
        const monthA = Month[a.month as keyof typeof Month];

        const monthB = Month[b.month as keyof typeof Month];

        const dateStringA = `${a.year}-${monthA.toString().padStart(2, '0')}-${a.numberDay.padStart(2, '0')}T${a.hour}`;

        const dateStringB = `${b.year}-${monthB.toString().padStart(2, '0')}-${b.numberDay.padStart(2, '0')}T${b.hour}`;

        const dateDiff = dateStringB.localeCompare(dateStringA);

        if (dateDiff === 0) {
          return b.hour.localeCompare(a.hour);
        }
        return dateDiff;
      });

      const arrVisitTable = sortedVisits.map((item: Visit) => ({
        id: item.id,
        name: item.name,
        lastName: item.lastName,
        date: `${item.numberDay} ${item.month} ${item.year}, ${item.hour}`,
        price: item.price,
        status: item.status,
      }));

      setVisits(arrVisitTable);
    });
  }, []);

  return (
    <>
      <DataTable value={visits} tableStyle={{ minWidth: '50rem' }}>
        <Column field="date" header="Data"></Column>

        <Column field="lastName" header="Last Name"></Column>
        <Column field="name" header="Name"></Column>
      </DataTable>
    </>
  );
};
