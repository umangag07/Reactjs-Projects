import GoogleMapReact from 'google-map-react'
import LocationMarker from './LocationMarker'



const Map = ({center, zoom})=> {
    return (
        <div className="map">
            <GoogleMapReact
               bootstrapURLKeys={{key:'AIzaSyCGVAtUU-IclVtd7W0Qm3h_xqEbD_vqIGQ'}}
               defaultCenter={center}
               defaultZoom={zoom}
            >
            <LocationMarker lat={center.lat} lng={center.lng}></LocationMarker>
            </GoogleMapReact>
        

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
