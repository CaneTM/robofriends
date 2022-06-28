import React from "react";
import "tachyons";


const Card = ({ id, name, email, username, phone, website, showProfile }) => {
    return(
        <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5" onClick={showProfile} id={id} style={{cursor: 'pointer'}}>

            {/* use template string */}
            <img src={`https://robohash.org/${id}?200x200`} alt="" />

            <h2>{name}</h2>
            <p>{email}</p>

            <p>{username}</p>
            <p>{phone}</p>
            <p>{website}</p>
        </div>
    );
}


export default Card;