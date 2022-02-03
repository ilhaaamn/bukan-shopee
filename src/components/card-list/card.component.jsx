import { NavLink } from "react-router-dom";

const Card = (props) => {
  return (
    <div className="group static shadow-md transform transition duration-300 hover:scale-105 hover:z-50 h-80">
      <NavLink to="#" className="max-w-sm rounded shadow-lg w-60 bg-white">
        <div className="grid grid-cols-1 h-full">
          <div className="relative">
            <img
              className="object-cover h-48 w-full"
              src={props.image}
              loading="lazy"
              alt={props.name}
            />
            <div
              className={`text-white absolute -left-1 top-3 text-xs font-semibold pr-2 pl-2 ${
                props.isOfficial ? "bg-red-700" : "bg-orange-600"
              }`}
            >
              {props.isOfficial ? "Mall" : props.isVerified ? "Star" : ""}
            </div>
          </div>
          <p className="mb-5 text-left pr-3 pl-3 mt-3 text-sm">{props.name}</p>
          <div className="flex text-left self-end pl-3 pr-3 pb-3">
            <p className="flex-1 text-red-600">{props.price}</p>
            <p className="flex-1 text-gray-600 text-sm text-right">
              {props.totalSold} Terjual
            </p>
          </div>
        </div>
      </NavLink>
      <div className="flex items-center bg-orange-600 sticky bottom-0 invisible group-hover:visible transition-opacity duration-150 rounded-bl-sm rounded-br-sm">
        <NavLink to="#" className="flex-1 text-white text-sm p-2">
          Beli Sekarang
        </NavLink>
      </div>
    </div>
  );
};

export default Card;
