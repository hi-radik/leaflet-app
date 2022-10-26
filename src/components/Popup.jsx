import { Popup } from "react-leaflet";

const PopupForMarker = ({nickname, src, tag, date, tweetRef}) => {
  return (
    <Popup>
      <h1 className="marker-h1">{nickname}</h1>
      <img
        src={src}
        alt=""
        className="marker"
        
      />
      <p>
        {tag}
      </p>
      <p>{date}</p>
      <a href={tweetRef}>{tweetRef}</a>
    </Popup>
  );
};
export default PopupForMarker;
