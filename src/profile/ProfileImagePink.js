import React from "react";
import "./ProfileImage.css";


export class ProfileImagePink extends React.Component{
    render(){
        const defaultImage=
        "https://png.pngtree.com/element_our/20190528/ourmid/pngtree-photo-icon-image_1128397.jpg"
        return(
            <div className="profile-div-pink">
            <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbv54C58COWpOEsE9TCKd4jWzCvhZxeaE5NQIauaC9ohVcORGBc0AXvexSgBFXDDo0gQ8&usqp=CAU"} className="profile-image"/>
        </div>
        );
    }
}
export default ProfileImagePink;
