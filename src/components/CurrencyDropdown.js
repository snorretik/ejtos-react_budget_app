// import React, { useState } from 'react';
// import { AppContext } from '../context/AppContext';

const CurrencyDropdown = () => {
    // const { currency } = useContext(AppContext);

    //const [currency, setCurrency] = useState('');

    const changeCurrency = (theValue) => {
        console.log(theValue);  
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
                <option value="$" style={{color: "black", width: "150px"}}>$ Dollar</option>
                <option value="£" style={{color: "black", width: "150px"}}>£ Pound</option>
                <option value="€" style={{color: "black", width: "150px"}}>€ Euro</option>
                <option value="₹" style={{color: "black", width: "150px"}}>₹ Ruppee</option>
            </select>
            )
            </label>
        </div>
    );
}

export default CurrencyDropdown;