import  {useState,useEffect} from 'react';
import ShuffleButton from './ShuffleButton';
import Card from './Card';
import DrawCardButton from './DrawCardButton';
import axios from 'axios'

const Deck = () => {
    const [data,setData] = useState(null);
    const [test,setTest] = useState([])
    

      async function shuffle() {
        const res = await axios.get(`https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`);
        setData(res.data)
    }
    useEffect(() => {
        shuffle();
      }, []);
      if(test.length !== 0){
        console.log(test)
      }
     
    
      
      return(
        <div>
          {data ? (
        <>
          <h1>{data.deck_id}</h1>
          <ShuffleButton setData={setData} shuffle={shuffle} />
          <DrawCardButton setTest={setTest} deck_id={data.deck_id} />
        </>
      ) : (
        <h1>Loading...</h1>
      )}
            { test ? test.map(t => (
                <Card info={t}></Card>
            )) : ''}
        </div>
        
    )
}

export default Deck;
