import React from "react";
import "./ProfileImage.css";


export default class ProfileImageOne extends React.Component{
    render(){
        return(
        <div className="profile-div">
            <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbv54C58COWpOEsE9TCKd4jWzCvhZxeaE5NQIauaC9ohVcORGBc0AXvexSgBFXDDo0gQ8&usqp=CAU"} className="profile-image"/>
        </div>
        );
    }
}




