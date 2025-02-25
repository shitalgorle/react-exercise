import React from "react";
import "./ProfileImage.css";


export default class ProfileImage extends React.Component{
    render(){
        return(
        <div className="profile-div">
            {/* <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbv54C58COWpOEsE9TCKd4jWzCvhZxeaE5NQIauaC9ohVcORGBc0AXvexSgBFXDDo0gQ8&usqp=CAU"} classNmane="profile-image"/> */}
            <img src={""} classNmane="profile-image"/>
        </div>
        );
    }
}

export class ProfileImageTwo extends React.Component{
    render(){
        const defaultImage=
        "https://w7.pngwing.com/pngs/901/413/png-transparent-gallery-images-photos-thumbnail.png";
        return(
            <div className="profile-div-gray">
            <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbv54C58COWpOEsE9TCKd4jWzCvhZxeaE5NQIauaC9ohVcORGBc0AXvexSgBFXDDo0gQ8&usqp=CAU"} classNmane="profile-image"/>
        </div>
        );
    }
}

export class ProfileImageThree extends React.Component{
    render(){
        const defaultImage=
        "https://png.pngtree.com/element_our/20190528/ourmid/pngtree-photo-icon-image_1128397.jpg"
        return(
            <div className="profile-div-pink">
            <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbv54C58COWpOEsE9TCKd4jWzCvhZxeaE5NQIauaC9ohVcORGBc0AXvexSgBFXDDo0gQ8&usqp=CAU"} classNmane="profile-image"/>
        </div>
        );
    }
}






