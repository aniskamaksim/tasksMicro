import React from 'react';
import {moneyType} from "./filter_method";

type NewComponentPropsType = {
  money: moneyType[]
}

export const NewComponent = (props: NewComponentPropsType) => {
    return (
        <div>
            <ul>
            {/*objFromMoneyArr он же е он же el он же element он же Жора он же Гога*/}
            {props.money.map((objFromMoneyArr, index) => {
                return (
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
        </div>
    );
};