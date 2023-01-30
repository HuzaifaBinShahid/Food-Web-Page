import { useContext  , useEffect, useState} from "react";

import CartContext from "../../../store/cart-context";

import CartIcon from "../../Cart/CartIcon";

import classes from './HeaderCartButton.module.css'

const HeaderCartButton = props => {

    const  [btnIsHighlighted , setBtnisHighlighted] =  useState(false);

   

    const cartCtx = useContext(CartContext);

    const {items} = cartCtx;

    const numberofCartitems = items.reduce((curNumber , item) =>{
        return curNumber + item.amount;
    } ,0);  

    const btnClasses = `${classes.button} ${ btnIsHighlighted? classes.bump : ''}`;

    


    useEffect(() =>{

        if(items.length === 0){
            return;
        }
        setBtnisHighlighted(true);


        const timer = setTimeout(() => {

            setBtnisHighlighted(false);

            return(() =>{
                clearTimeout(timer);
            })
            
            
        }, 300);



    },  [items]);


    return (

       

    <button className={btnClasses} onClick = {props.onClick}>

        <span className={classes.icon}> <CartIcon /> </span>

        <span >
            Your Cart
        </span>

        <span className={classes.badge}> {numberofCartitems} </span>

    </button>
    )

}
 export default HeaderCartButton;