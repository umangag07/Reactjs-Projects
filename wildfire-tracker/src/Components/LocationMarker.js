import { Icon } from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/fire-alert'

const LocationMarker = ({ lat, lng, Onclick})=> {
    return (
        <div className="location-marker" onClick={clickHandler}>
            <Icon icon={locationIcon} className="location-icon"></Icon>
        </div>
    )
}

export default LocationMarker
