import { IMG_URL } from "../utils";

const Card = (props)=>{
    const {resData} = props
    const {name,cuisines,avgRating,cloudinaryImageId} = resData?.info
    return (
            <div className="card">
                <img className ="img-card" src={IMG_URL+cloudinaryImageId} alt="" />
                <h4>{name}</h4>
                <h4>{cuisines.join(", ")}</h4>
                <h4>$400 for two</h4>
                <h4>{avgRating} Rating</h4>
            </div>
    )
}

export default Card;