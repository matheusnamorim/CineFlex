import './style.css';

export default function Footer({img, title, lock, ...otherprops}){

    return(
        <>
            <div className="footer">
                <div className="backgroundImg">
                    <img src={img}/>
                </div>
                <div className="title">
                    <p>{title}</p>
                    {lock ? (
                    <p>{otherprops.weekday} - {otherprops.hour}</p>) : (<></>)}
                </div>
            </div>
        </>
    );
}