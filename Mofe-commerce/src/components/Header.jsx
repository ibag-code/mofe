import { Link } from 'react-router'
import logo from '../assets/logo.jpg'

export  function Checkoutheader () {
    return (
        <>
            <header>

                <Link className="vurno-logo" to='/'>

                    <img src={logo} className="Vurno-logo" />
                    
                </Link>


            </header>
        </>
    )
}