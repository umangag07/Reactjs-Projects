import Map from './Components/Map'
import {useState, useEffect} from 'react'
import axios from 'axios'

function App() {
  const [eventData, seteventData] = useState([])
  const [loading, setloading] = useState(true)

  useEffect(()=>{
    const fetch = ()=>{
      axios.get('https://eonet.sci.gsfc.nasa.gov/api/v2.1/events')
        .then(request=>{
            seteventData(request.data.events)
            console.log( request.data.events)
            console.log(eventData)
            setloading(true) 
        })
        .catch(error=>{
            console.log(error)
        })
    }
    fetch()
    
    
    
  },[])
  return (
    <div>
   <Map/>
    </div>
  );
}

export default App;
