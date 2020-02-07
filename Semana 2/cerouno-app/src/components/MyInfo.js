/**import React from 'react';

function MyInfo(){
    return(
        <div>
            <h1>Ricardo Rodríguez Altamirano</h1>
            <p>Me gustan los tacos</p>
            <ul>
                <li>Mazatlan</li>
                <li>Tokyo</li>
                <li>Paris</li>
            </ul>
        </div>
    )
}
export default MyInfo;
*/

import React from 'react';

function MyInfo(){
    const firstName = 'Ricardo';
    const lastName = 'Rodriguez';
    const date = new Date();
    const hours = date.getHours();
    let timeText;

    if (hours<12){
        timeText = 'buenos días';
    }
    else if(hours >= 12 && hours <17){
        timeText = 'buenas tardes';
    }
    else{
        timeText = 'buenas noches';
    }

    return(
        <div>
            <h1>{`${firstName} ${lastName}`}</h1>
            <p>{timeText}</p>
        </div>
    )
}
export default MyInfo;













