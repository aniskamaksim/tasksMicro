import React, {useState} from "react";
import {NewComponent} from "./NewComponent";

type filterType = 'all' | 'dollar' | 'rouble'
export type moneyType = {
    banknote: string
    nominal: number
    number: string
}
export function Filter_method() {
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

    const [filter, setFilter] = useState<filterType>('all')

    let currentMoney = money;
    if (filter === 'dollar') {
        currentMoney = money.filter(filteredMoney=>filteredMoney.banknote === 'dollar');
    } else if (filter === 'rouble') {
        currentMoney = money.filter(filteredMoney=>filteredMoney.banknote === 'rouble');
    } else {
        currentMoney = money;
    }

    const onClickFilterHandler = (nameButton: filterType) => {
        setFilter(nameButton)
    }


    return (
        <div>
            <NewComponent money={currentMoney}/>

            <div>
                <button onClick={()=>onClickFilterHandler('all')}>All</button>
                <button onClick={()=>onClickFilterHandler('dollar')}>Dollar</button>
                <button onClick={()=>onClickFilterHandler('rouble')}>Rouble</button>
            </div>
        </div>
    )
}