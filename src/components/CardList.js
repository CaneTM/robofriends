import React from "react";
import Card from "./Card";


const CardList = ({ robots, cardClick }) => {
    const cardsArray = robots.map((robot) => {
        // Must have unique, unchanging key prop
        return <Card id={robot.id} 
                    name={robot.name} 
                    email={robot.email} 
                    key={robot.id} 
                    showProfile={cardClick} />
    });

    return(
        <React.StrictMode>
            {cardsArray}
        </React.StrictMode>
    );
}


export default CardList;