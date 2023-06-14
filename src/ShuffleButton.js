import {useState, useEffect} from 'react';
import axios from 'axios';

const ShuffleButton = ({setData,shuffle}) => {
    
   
    return(
        <div>
            <h1></h1>
            {true ? <button onClick={shuffle}>Shuffle new deck!</button> : ''}
        </div>
        
    )
}

export default ShuffleButton;