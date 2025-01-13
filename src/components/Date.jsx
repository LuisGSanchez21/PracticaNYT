import React from "react"

const CurrentDay = () => {
    const today = new Date();

    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };

    const fullDate = today.toLocaleDateString(undefined, options);

    return(
        <div>
            <h2>{fullDate}</h2>
        </div>
    )
}

export default CurrentDay