import React from 'react'
import "./rocket-card.css";
 const rocketCard = ({rocketData}) => {
var LunchSucess=rocketData.launch_success;
var LandSucess=rocketData["land_success"];

    return (
      
      <div className="card-list">
          
          <img className="fazlay" alt="this is test" src={rocketData.links["mission_patch_small"]}/>
          <div className="information">
            <div className="title-name">{rocketData["mission_name"]}#{rocketData.flight_number}</div>
            <div className="title-item">Misson Ids: {rocketData["mission_id"]}</div>
            <div className="title-item">Lunch Year: {rocketData.launch_year} </div>
            <div className="title-item">Successful Lunch: {LunchSucess?"Yes":"No"}</div>
            <div className="title-item">Successful Landing: {LandSucess?"Yes":"No"} </div>
          </div>
      </div>
    )
}

export default rocketCard;

//{rocketData.launch_year}

//{rocketData.launch_success}
//{rocketData.["mission_patch_small"]}
//{rocketData.launch_year}