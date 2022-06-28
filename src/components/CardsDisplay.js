import React from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scrollable from "../components/Scroll";


const CardsDisplay = ({ filteredRobots, onSearchChange, onCardClick }) => {
    return(
        <>
            <div className='tc'>
                <h1 className="f1">RoboFriends</h1>
                <SearchBox searchChange={onSearchChange} />
                <Scrollable>
                    <CardList robots={filteredRobots} cardClick={onCardClick} />
                </Scrollable>
            </div>
        </>
    );
}


export default CardsDisplay;