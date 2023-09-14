import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    
    return (
                <div className='alert alert-secondary'>
                   
                {/* <label className="input-group-text" htmlFor="inputGroupSelect01">Department</label> */}
                <select className="custom-select" id="currency_selector" >
                    <option defaultValue>choose currency</option>
                    <option value="$" name="dollar"> $ Dollar</option>
                    <option value="£" name="pound">£ Pound</option>
                    <option value="€" name="euro">€ Euro</option>
                    <option value="₹" name="rupee">₹ Rupee</option>
                    </select>
                </div>
    );
};
export default Currency;