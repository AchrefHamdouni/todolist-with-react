import React, { useState } from 'react'

function Forms() {
    const [inputValue, setInputValue]=useState('');

    const handleInputChange=(e)=>{
        setInputValue(e.target.value)
    }

    return (
        <form className='ui form'>
            <div className='ui grid center aligned'>
                <div className='row'>
                    <div className= 'column five wide '>
                        <input 
                        value={inputValue}
                        onChange={handleInputChange}
                        type="text" 
                        placeholder='your todo'>
                        </input>
                    </div>
                    <div  className= 'column one wide '>
                    <button type="submit" className='ui button circular icon green'><i className="plus icon"></i></button>
                    </div>
                </div>
            </div>
        </form>
    )
}

export default Forms
