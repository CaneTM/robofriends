import React from "react";
import BackButton from "./BackButton";
import Card from "./Card";


const ProfileDisplay = ({ goBack, robotUser }) => {
    const {id, name, email, username, phone, website } = robotUser;

    return(
        <div className="tc">
            <h1 className="f1">RoboFriends</h1>
            <BackButton goBack={goBack} />
            <Card id={id} 
                name={name} 
                email={email}
                username={username}
                phone={phone}
                website={website} />
        </div>
    );
}


export default ProfileDisplay;