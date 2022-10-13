import { Popup } from "react-leaflet";

const PopupForMarker = ({nickname, src, text}) => {
  return (
    <Popup>
      <h2>{nickname}</h2>
      <img
        src={src}
        alt=""
        className="marker"
      />
      <p>
        {text}
      </p>
    </Popup>
  );
};
export default PopupForMarker;
