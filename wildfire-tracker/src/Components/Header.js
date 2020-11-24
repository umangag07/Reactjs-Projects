import { Icon } from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/fire-alert'

const Header =()=> {
    return (
        <header className="header">
            <div className="header-icon">
               <Icon icon={locationIcon}/>
            </div>
            <div className="header-text">
                Wildfire Tracker
            </div>
        </header>
    )
}

export default Header
