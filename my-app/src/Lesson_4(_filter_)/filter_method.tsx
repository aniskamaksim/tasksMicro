import React, {useState} from "react";

function App() {
    const [money, setMoney] = useState([
        {banknote: 'dollar', nominal: 100, number: 'a1234567890'},
        {banknote: 'dollar', nominal: 50, number: 'z1234567890'},
        {banknote: 'rouble', nominal: 100, number: 'v1234567890'},
        {banknote: 'dollar', nominal: 100, number: 'e1234567890'},
        {banknote: 'dollar', nominal: 50, number: 'r1234567890'},
        {banknote: 'rouble', nominal: 100, number: 'c1234567890'},
        {banknote: 'dollar', nominal: 50, number: 'y1234567890'},
        {banknote: 'rouble', nominal: 50, number: 'w1234567890'}
    ])
    return (
        <ul>
            {money.map((objFromMoneyArr)=>{
                return(
                    <li>
                        <span>{objFromMoneyArr.banknote}</span>
                        <span>{objFromMoneyArr.nominal}</span>
                        <span>{objFromMoneyArr.number}</span>
                    </li>
                )
            })}
        </ul>
    )
}