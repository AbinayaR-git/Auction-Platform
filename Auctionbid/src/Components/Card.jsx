import { Link } from "react-router-dom";
import backup from "../assets/backup.jpg";

export const Card = ({ title, description, image, onPlaceBid }) => {
  return (
    <div className="col">
    <div className="card shadow-sm " title= {title}>
      <img src={image}  alt={title} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title text-danger text-overflow-1">{title}</h5>
        <p className="card-text text-overflow-2">{description}</p>
        <div className="d-flex justify-content-between align-items-center">
        <button className="btn btn-sm btn-outline-warning stretched-link" onClick={onPlaceBid}>
          Bid Now
        </button>
        <small>
              <i className="bi bi-alarm-fill text-danger"></i> Hurry Up.!!
           </small>
      </div>
    </div>
  </div>
  </div>
  );
};