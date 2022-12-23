/**
 * Page Erreur 404
 * When users do not find good user so have made a reduction to pade 404
 */

import React from 'react'
import {Link} from 'react-router-dom';
import "../Style/Page/Erreur_404.scss";

function Erreur_404() {
  return (
    <div className='pagE404'>
        <div className='block_number'>
             <h1 className='number'>404</h1>
        </div>

        <div className="text_404">
            <h2>Oups! La page que vous demandez n'existe pas.</h2>
           <h3><Link className="link_home" to='/'> Retourner sur la page d’accueil </Link> </h3> 
        </div>

    </div>
  )
}
export default Erreur_404