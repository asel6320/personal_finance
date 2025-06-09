import React from 'react';
import { IItem } from '../../types';

interface Props {
    item: IItem;
    deleteItem: (id: number) => void;
}

const Item: React.FC<Props> = ({item, deleteItem}) => {
    return (
        <div className="card mb-3">
            <div className="card-body d-flex justify-content-between align-items-center">
                <div>
                    <h5 className="card-title mb-1">{item.title}</h5>
                    <p className="card-text mb-0 text-muted">Cost: {item.cost} KGS</p>
                </div>
                <button
                    onClick={() => deleteItem(item.id)}
                    className="btn btn-sm btn-outline-danger"
                    aria-label="Delete"
                >
                    ✕
                </button>
            </div>
        </div>
    );
};

export default Item;