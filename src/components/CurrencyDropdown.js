import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const CurrencyDropdown = () => {
    const { dispatch } = useContext(AppContext);

    const changeCurrency = (theValue) => {
        console.log(theValue);

        const currencyObject = {
            currency: String(theValue),
        }
        
        dispatch({
            type: 'CHG_CURRENCY',
            payload: currencyObject,
        });
    }

    return (
        <div id="divCurrencyDropdown">        
            <label style={{color: "white", 
                            backgroundColor: "lightgreen",
                            width:"200px",
                            paddingLeft: "10px",
                            paddingTop: "8px",
                            paddingBottom: "8px", 
                            borderRadius:"3px", 
                            borderStyle:"solid", 
                            borderWidth:"1px", 
                            borderColor:"lightgray"
                            }}>Currency (
            <select id="currencyDropdown" 
                    style={{color: "white", 
                            backgroundColor: "lightgreen", 
                            border: "none", 
                            outline: "none", 
                            width: "92px"}}
                    onChange={(event) => changeCurrency(event.target.value)}>
                <option value="$" style={{color: "black"}}>$ Dollar</option>
                <option selected='selected' value="£" style={{color: "black"}}>£ Pound</option>
                <option value="€" style={{color: "black"}}>€ Euro</option>
                <option value="₹" style={{color: "black"}}>₹ Ruppee</option>
            </select>
            )
            </label>
        </div>
    );
}

export default CurrencyDropdown;