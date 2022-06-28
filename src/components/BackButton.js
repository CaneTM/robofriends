import React from "react";


const BackButton = ({ goBack }) => {
    return(
        <div onClick={goBack}>
            <button className="f6 link dim ph3 pv2 mb2 dib black bg-lightest-blue" style={{cursor: 'pointer'}}>BACK</button>
        </div>
    );
}


export default BackButton;