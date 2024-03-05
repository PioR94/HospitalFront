import { useState } from 'react';

export const useOneDoctor = (alwaysInvisible: boolean | undefined) => {
  const [calendarVisible, setCalendarVisible] = useState(false);

  const sectionDataClass = `${alwaysInvisible ? 'modal-one-doctor-section-data' : 'one-doctor-section-data'} ${
    alwaysInvisible ? calendarVisible && 'hidden' : calendarVisible && 'invisible'
  }`;

  const sectionCalendarClass = `${alwaysInvisible ? 'modal-one-doctor-section-calendar' : 'one-doctor-section-calendar'} ${
    alwaysInvisible ? !calendarVisible && 'hidden' : !calendarVisible && 'invisible'
  }`;

  return { setCalendarVisible, sectionCalendarClass, sectionDataClass };
};
