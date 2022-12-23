/**
 * @file Energy.js is the file that contains the component to disply energy's data
 */

import React from 'react';
import '../Style/Components/Nutrition.scss'
import PropTypes from 'prop-types';
function Nutrition(props) {
    return (
        <div className='div-energy'>
            <div className='icon-energy'>
                <img src={props.image} alt='icon'/>
            </div>
            <div className='infos-energy'>
                <p className='p-bold' style={{color:'black'}}>{props.data}</p>
                <div className='text-p'>
                <p  className='text'>{props.text}</p>
                </div>
            </div> 
        </div>
    ); 
}

export default Nutrition;

Nutrition.propTypes = {
    image: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    data: PropTypes.string.isRequired
}