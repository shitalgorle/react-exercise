import React from "react";
import "./ProfileImage.css";

export class ProfileImageGray extends React.Component{
    render(){
        const defaultImage=
        "https://w7.pngwing.com/pngs/901/413/png-transparent-gallery-images-photos-thumbnail.png";
        return(
            <div className="profile-div-gray">
            <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbv54C58COWpOEsE9TCKd4jWzCvhZxeaE5NQIauaC9ohVcORGBc0AXvexSgBFXDDo0gQ8&usqp=CAU"} className="profile-image"/>
          
        </div>
        );
    }
}
export default ProfileImageGray;