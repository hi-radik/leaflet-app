import { Popup } from "react-leaflet";

const PopupForMarker = ({nickname, src, text}) => {
  return (
    <Popup>
      <h1 className="marker-h1">{nickname}</h1>
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
