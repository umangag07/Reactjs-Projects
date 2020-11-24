import GoogleMapReact from 'google-map-react'
import LocationMarker from './LocationMarker'
import {useState} from 'react'
import FireInfo from './FireInfo'


const Map = ({eventData, center, zoom})=> {
    const [fireinfo,setfireinfo] = useState(null)
    const markers = eventData.map(ev =>{
        if(ev.categories[0].id === 8){
           return <LocationMarker 
           key ={ev.id} 
           lat={ev.geometries[0].coordinates[1]} 
           lng={ev.geometries[0].coordinates[0]}
           Onclick={()=>setfireinfo({id:ev.id, title:ev.title} )}></LocationMarker>
        }
        return null
    })
    return (
        <div className="map">
            <GoogleMapReact
               bootstrapURLKeys={{key:'AIzaSyCGVAtUU-IclVtd7W0Qm3h_xqEbD_vqIGQ'}}
               defaultCenter={center}
               defaultZoom={zoom}
            >
            {markers}
            </GoogleMapReact>
            {fireinfo && <FireInfo info={fireinfo}/>}
        

        </div>
    )
}
Map.defaultProps = {
    center:{
        lat:20.5937,
        lng:78.9629
    },
    zoom:6
}

export default Map
