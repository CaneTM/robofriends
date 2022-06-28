import React, { Component } from "react";
import "./App.css";
import CardsDisplay from "../components/CardsDisplay";
import ProfileDisplay from "../components/ProfileDisplay";
import ErrorBoundary from "../components/ErrorBoundary";


// a "smart" component, since it has state
class App extends Component {
    constructor() {
        super();
        this.state = {
            robots: [],
            searchfield: "",
            isRobotClicked: false,
            clickedRobotId: 0
        };
    }

    // use arrow functions so "this" refers to App class, not input tag
    onSearchChange = event => {
        this.setState({ searchfield: event.target.value });
    }

    onCardClick = event => {
        this.setState({ clickedRobotId: event.currentTarget.id });
        this.setState({ isRobotClicked: true });
    }

    onGoBack = event => {
        this.setState({ searchfield: "" });
        this.setState({ clickedRobotId: 0 })
        this.setState({ isRobotClicked: false });
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({ robots: users }));
    }

    render() {
        const { robots, searchfield, clickedRobotId, isRobotClicked } = this.state;

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
                        <ProfileDisplay goBack={this.onGoBack} robotUser={robotUser} />
                    </ErrorBoundary> 
                )
                    :
                (
                    <ErrorBoundary>
                        <CardsDisplay filteredRobots={filteredRobots} onSearchChange={this.onSearchChange} onCardClick={this.onCardClick} />
                    </ErrorBoundary>
                )
        } 
        else {
            return (
                        <ErrorBoundary>
                            <CardsDisplay filteredRobots={filteredRobots} onSearchChange={this.onSearchChange} onCardClick={this.onCardClick} />
                        </ErrorBoundary>
                    )
        }
    }
}


export default App;