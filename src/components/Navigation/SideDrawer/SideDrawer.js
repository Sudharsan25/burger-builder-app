import React from 'react';

import Logo from '../../../components/Logo/Logo';
import NavigationItems from "../NavigationItems/NavigationItems";
import classes from './SideDrawer.css';
import Aux from '../../../hoc/Auxilary/Auxilary';
import Backdrop from '../../UI/Backdrop/Backdrop';

const sideDrawer = (props) => {
    let attachedClasses = [classes.SideDrawer , classes.Close]
    if (props.open){
        attachedClasses=[classes.SideDrawer , classes.Open];    }
    return(
        <Aux>
            <Backdrop show={props.open} clicked={props.closed}/>
            <div className={attachedClasses.join(" ")} onClick={props.closed}>
            <div className={classes.Logo}>
                <Logo/>
            </div>
            <nav>
                <NavigationItems isAuthenticated = {props.isAuth}/>
            </nav>
        </div>
        </Aux>
        
    );
};

export default sideDrawer;