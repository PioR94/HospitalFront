import './FreeTermHour.css'

interface Props {
    id: string;
    hour: string;
}

export const FreeTermHour = (props: Props) => {





    return <>
        <div className="free-term-hour">
           {props.hour}
        </div>
    </>
}