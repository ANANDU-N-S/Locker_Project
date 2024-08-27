import React from 'react'
import NavbarComponent from '../MainDash/NavbarComponent'
import SubNavComponent from '../MainDash/SubNavComponent'
import TalcoComponent from './TalcoComponent'

function TalcoMainComponent() {
    return (
        <div>
            <NavbarComponent />
            <SubNavComponent />
            <TalcoComponent />
        </div>
    )
}

export default TalcoMainComponent