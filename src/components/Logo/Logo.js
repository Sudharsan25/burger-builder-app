import React from 'react';

import burgerLogo from '../../assests/images/BurgerLogo.png';
import classes from './Logo.css';

const logo = (props) =>(
    <div className={classes.Logo}>
        <img src={burgerLogo} alt='MyBurger' style={{height: props.height}} />
    </div>
);

export default logo;