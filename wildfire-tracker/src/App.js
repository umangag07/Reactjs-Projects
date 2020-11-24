import Map from './Components/Map'
import {useState, useEffect} from 'react'
import axios from 'axios'
import Loader from './Components/Loader'

function App() {
  const [eventData, seteventData] = useState([])
  const [loading, setloading] = useState(false)

  useEffect(()=>{
    const fetch = ()=>{
      axios.get('https://eonet.sci.gsfc.nasa.gov/api/v2.1/events')
        .then(request=>{
          setloading(true) 
          seteventData(request.data.events)
          //console.log( request.data.events)
          //console.log(eventData)
          setloading(false) 
        })
        .catch(error=>{
            console.log(error)
        })
    }
    fetch()
    
    
    
  },[])
  return (
    <div>
     { !loading ?<Map eventData={eventData}></Map>:<Loader/>}
    </div>
  );
}

export default App;
