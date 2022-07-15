import React, {SyntheticEvent, useState} from 'react';
import {Btn} from "../Btn/Btn";

interface Props {
    idDr: string;
    idPt: string;
}

export const AdVisitForm = (props: Props) => {

    const [form, setForm] = useState({
        date: ''
    })



    const updateForm = (key: string, value: any) => {
        setForm(form => ({
            ...form,
            [key]: value,
        }))
    };


    const sendForm = async (e: SyntheticEvent) => {
        e.preventDefault();


            const res = await fetch('http://localhost:3001/doctor/visit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...form,
                    doctorId: props.idDr,
                    patientId: props.idPt,

                }),
            });

            const data = await res.json();

            console.log(data)




        }

    return <>

        <form action="" onSubmit={sendForm} >

            <h2>Dodaj wizytę</h2>

        <p>
            <label>

                <input
                    type="datetime-local"
                    name="date"
                    value={form.date}
                     onChange={e => updateForm('date', e.target.value)}
                />
            </label>
        </p>

            <Btn text="Dodaj"/>
        </form>
    </>
}