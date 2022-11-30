import React, {useState} from "react";

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
    {/*вешаем хук, передаем в константу Filter значение nameButton, в onClickHandlerе сетаем значение*/}
    const [Filter, setFilter] = useState('all')

    let currentMoney = money;
    if (Filter === 'rouble') {
        currentMoney = money.filter((e) => e.banknote === 'rouble')
    } else if (Filter === 'dollar') {
        currentMoney = money.filter((e) => e.banknote === 'dollar')
    } else {
        currentMoney = money;
    }


    const onClickFilterHandler = (nameButton: string) => {
       setFilter(nameButton)

    }
    return (
        <div>
            <ul>
                {/*objFromMoneyArr он же е он же el он же element он же Жора он же Гога*/}
                {currentMoney.map((objFromMoneyArr, index)=>{
                    return(
                        <div key={index}>
                        <li>
                            <span>{objFromMoneyArr.banknote}</span>
                            <span>{objFromMoneyArr.nominal}</span>
                            <span>{objFromMoneyArr.number}</span>
                        </li>
                        </div>
                          )
                })}
            </ul>
            <div>
                <button onClick={()=>onClickFilterHandler('all')}>All</button>
                <button onClick={()=>onClickFilterHandler('dollar')}>Dollar</button>
                <button onClick={()=>onClickFilterHandler('rouble')}>Rouble</button>
            </div>
        </div>
    )
}