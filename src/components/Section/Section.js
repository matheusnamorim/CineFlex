import './style.css';

export default function Section({data}){

    return (
        <>
            <li>
                <p>{data.weekday} - {data.date}</p>
                <div className='sections'>
                {data.showtimes.map(i => (
                    <div className='schedules' key={i.id}>{i.name}</div>
                ))}
                </div>
            </li>
        </>
    );
}