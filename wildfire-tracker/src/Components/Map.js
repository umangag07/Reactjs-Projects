import GoogleMapReact from 'google-map-react'

const Map = ({center, zoom})=> {
    return (
        <div className="map">
            <GoogleMapReact
               bootstrapURLKeys={{key:'AIzaSyD0peyf6wrrXaUDDyRfXbDURp_Y58RtQKU'}}
               defaultCenter={center}
               defaultZoom={zoom}
            >

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
