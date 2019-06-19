import React, { useState } from "react";
import "../../../style.css";
import clock from "../../../images/clock.svg";
import camera from "../../../images/camera.svg";
import mapPinMarked from "../../../images/map-pin-marked.svg";
import speechBubble from "../../../images/speech-bubble.svg";
import imageMainBlock from "../../../images/image_main_block.jpg";
import starIcon from "../../../images/star.png";
import review from "../../../images/review.png";
import {Button} from "react-bootstrap";
import MakePlaceModal from "./MakePlaceModal";


const Body = () => {
  const [isShow, setIsShow] = useState(false);
  const handleShowModal = () => {
    setIsShow(true)
  }
  const handleHideModal = () => {
    setIsShow(false)
  }
  return(
      <div className="container-fluid">
        <div className="row">
        <div className="main_rectangle">
          <p className="announcement">Эксклюзивная <span style={{color: "red"}}>фотосессия</span> на воздушном шаре в Москве</p>
          <div className="price_rectangle">
          </div>
            <MakePlaceModal
                show={isShow}
                onHide={handleHideModal}
            />
            <Button className="make_place_button" onClick={handleShowModal}>Забронировать место</Button>
        </div>
        <div>
          <h4 className="balloon_flight_heading">Полет на воздушном шаре</h4>
          <p className="balloon_flight_paragraph">Пикник на воздушном шаре в облаках это именно тот подарок,
            который поможет разделить эмоции и впечатления со своими близкими людьми</p>
          <img src={clock} alt="clock_icon" className="clock_icon"/>
          <img src={camera} alt="camera_icon" className="camera_icon"/>
          <img src={mapPinMarked} alt="map_pin_marked_icon" className="map_pin_market_icon"/>
          <img src={speechBubble} alt="speech_bubble_icon" className="speech_bubble_icon"/>
          <p className="hours_of_shooting_paragraph">3 часа сьемки</p>
          <p className="more_photos_paragraph">Более 50 фотографий</p>
          <p className="city_paragraph">Дубаи</p>
          <p className="language_paragraph">Русский</p>
          <img src={imageMainBlock} alt="image_main_block" className="image_main_block"/>
          <div>
            <img src={starIcon} alt="first_star_icon" className="first_star_icon"/>
            <img src={starIcon} alt="second_star_icon" className="second_star_icon"/>
            <img src={starIcon} alt="third_star_icon" className="third_star_icon"/>
            <img src={review} alt="review" className="review_icon"/>
            <p className="assessment_paragraph">Более 50 отзывов с оценкой</p>
          </div>
        </div>
        </div>
      </div>
  )
}
export default Body;