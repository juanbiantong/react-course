import React from "react";
import "./profile.css"

function Profile(props){
    return(
        <div className="profile-box">
            <div className="avatar-box">
                <img src={props.avatar} alt="avatar"/>
            </div>

            <div className="detail-box">
                <h1>{props.name}</h1>
                <h3>{props.status}</h3>
                <p>{props.quote}</p>
            </div>

        </div>
    )
}

export default Profile;