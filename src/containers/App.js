import React, { useState, useEffect } from "react";
import "./App.css";
import CardsDisplay from "../components/CardsDisplay";
import ProfileDisplay from "../components/ProfileDisplay";
import ErrorBoundary from "../components/ErrorBoundary";


function App() {
    // constructor() {
    //     super();
    //     this.state = {
    //         robots: [],
    //         searchfield: "",
    //         isRobotClicked: false,
    //         clickedRobotId: 0
    //     };
    // }

    const [robots, setRobots] = useState([]);
    const [searchfield, setSearchfield] = useState("");
    const [isRobotClicked, setIsRobotClicked] = useState(false);
    const [clickedRobotId, setClickedRobotId] = useState(0);

    // use arrow functions so "this" refers to App class, not input tag
    // disregard above comment
    const onSearchChange = event => {
        setSearchfield(event.target.value);
    }

    const onCardClick = event => {
        setClickedRobotId(event.currentTarget.id);
        setIsRobotClicked(true);
    }

    const onGoBack = event => {
        setSearchfield("");
        setClickedRobotId(0);
        setIsRobotClicked(false);
    }

    // componentDidMount() {
    //     fetch('https://jsonplaceholder.typicode.com/users')
    //     .then(response => response.json())
    //     .then(users => this.setState({ robots: users }));
    // }

    // gets called after every render,
    // but when an empty array is provided, it is treated
    // like componentDidMount (only runs once after intial render)
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => setRobots(users));
    }, []);

    // all strings include an empty string 
    const filteredRobots = !clickedRobotId ? 
        robots.filter(robot => robot.name.toLowerCase().includes(searchfield.toLowerCase())) :
        robots.filter(robot => robot.id === Number(clickedRobotId));

    if (!robots.length) {
        return <h1 className="tc">Loading . . .</h1>
    } 
    else if (filteredRobots.length === 1) {
        const robotUser = filteredRobots[0];
        
        return isRobotClicked ?
            (
                <ErrorBoundary>
                    <ProfileDisplay goBack={onGoBack} robotUser={robotUser} />
                </ErrorBoundary> 
            )
                :
            (
                <ErrorBoundary>
                    <CardsDisplay filteredRobots={filteredRobots} onSearchChange={onSearchChange} onCardClick={onCardClick} />
                </ErrorBoundary>
            )
    } 
    else {
        return (
                    <ErrorBoundary>
                        <CardsDisplay filteredRobots={filteredRobots} onSearchChange={onSearchChange} onCardClick={onCardClick} />
                    </ErrorBoundary>
                )
    }
}


export default App;