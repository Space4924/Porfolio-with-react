import React from 'react'
import './main.css';

const Message = () => {
    return (
        <div>
            <div className="mess">
                <div className="my">
                    <div className="me"><h1>Message <span>Me</span></h1></div>
                    <div className="form">
                        <input type="text" className='input' placeholder="Name" />
                        <input type="text" className='input' placeholder="E-mail" />
                        <textarea className='text' placeholder='Message' name="" id="" cols="10" rows="10"></textarea>
                        <input type="submit" className='submit' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Message