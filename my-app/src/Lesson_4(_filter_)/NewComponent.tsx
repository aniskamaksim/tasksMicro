import React from 'react';
import {moneyType} from "./filter_method";

type NewComponentPropsType = {
  money: moneyType[]
}

export const NewComponent = (props: NewComponentPropsType) => {
    return (
        <div>
            <ul>
            {/*objFromMoneyArr �� �� � �� �� el �� �� element �� �� ���� �� �� ����*/}
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