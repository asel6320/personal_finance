import React from 'react';
import { IItem } from '../../types';

interface Props {
    item: IItem;
}

const Item: React.FC<Props> = ({item}) => {
    return (
        <div className="card mb-3 p-4">
            <div className="row justify-content-between">
                <div className="col-6">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text">Cost: {item.cost} $</p>
                </div>
            </div>
        </div>
    );
};

export default Item;