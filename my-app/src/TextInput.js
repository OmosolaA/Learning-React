import React, {useState} from 'react';

function TextInput(){
    const [text, setText] = useState["no text set"];
    function getUserInput(){
        const promptResponse = prompt("Please provide input");
        console.log(promptResponse);
        setText(promptResponse);
    }
    return(
        <div>
            <button></button>
        </div>
    )

}