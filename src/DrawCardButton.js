import {useState, useEffect} from 'react';
import axios from 'axios';

const DrawCardButton = ({deck_id,setTest}) => {
    async function drawCard() {
        const res = await axios.get(`https://deckofcardsapi.com/api/deck/${deck_id}/draw/?count=1`);
        setTest(test => [...test, res.data.cards])
    }
    return(
        <div>
            <h1></h1>
            {true ? <button onClick={drawCard}>Pull new card!</button> : ''}
        </div>
        
    )
}

export default DrawCardButton;