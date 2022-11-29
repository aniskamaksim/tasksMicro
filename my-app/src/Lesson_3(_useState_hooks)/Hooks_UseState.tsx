import React, {useState} from 'react';
import "./HooksUseState.css";
/*
let a = 1;
const onclickHandler = () => {
       ++a;
        console.log(a)
    }
 в консоли значение меняется, но единица остается единицей
*/

export const HooksUseState = () => {
    //let a = 1;
    let[a, setA] = useState(1)
    const onclickHandler = () => {
       setA(++a);
        console.log(a)
    }
    const reset = () => {
        setA(0);
    }
    return (
        <div className={'example'}>
            <div><h1>{a}</h1></div>
            <div><button onClick={onclickHandler}>number</button></div>
            <div><button onClick={reset}>reset</button></div>
        </div>
    );
};