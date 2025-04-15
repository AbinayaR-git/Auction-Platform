import { Link } from "react-router-dom";
import backup from "../assets/backup.jpg";

export const Card = ({ title, description, image, onPlaceBid }) => {
  return (
    <div className="card">
      <img src={image} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <button className="btn btn-primary" onClick={onPlaceBid}>
          Place Bid
        </button>
      </div>
    </div>
  );
};
