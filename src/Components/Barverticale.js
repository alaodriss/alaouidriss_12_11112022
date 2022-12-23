import React  from 'react';
import '../Style/Components/Barverticale.scss'
import {Link} from "react-router-dom";

function NavbarVer () {
/** 
 * Componentbar verticale with components NavbarVer et Link 
 */ 
        return (
            <>
                <div className="bar-Verticale">
                    <ul className='bars-vs'>
                        <li className="bar-ver"><Link to="/"><img src="/images/icon.png" alt='...'/></Link></li>
                        <li className="bar-ver"><Link to="/"><img src="/images/icon (1).png" alt='...'/></Link></li>
                        <li className="bar-ver"><Link to="/"><img src="/images/icon (2).png" alt='...'/></Link></li>
                        <li className="bar-ver"><Link to="/"><img src="/images/icon (3).png" alt='...'/></Link></li>

                    </ul>
                    <div className="copirygyt">
                        <p>Copirygt, SportSee 2022</p>
                    </div>
                </div>
            </>
        );

}

export default NavbarVer;
