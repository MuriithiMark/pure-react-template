import "../styles/Card.css";


export default function Card({item}) {

    const { imageUrl, title, date, location, price } = item;
    
    return (
        <div className="card">
            <img className="image" src={imageUrl} />
            <div className="card-footer">
                <span className="title">{title}</span>
                <span className="date">{date}</span>
                <span className="location">{location}</span>
                <span className="price">Ksh {price}</span>
                <button className="btn buy-now">Buy Now</button>
            </div>
        </div>
    )
}