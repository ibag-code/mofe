import { Link } from 'react-router'

export  function Checkoutheader () {
    return (
        <>
            <header>

                <Link className="vurno-logo" to='/'>

                    <img src="images/product/Vurno-logo.jpg" className="Vurno-logo" />
                    
                </Link>


            </header>
        </>
    )
}