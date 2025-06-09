import React from 'react';
import { IItem } from '../../types';

interface Props {
    item: IItem;
    deleteItem: (id: number) => void;
}

const Item: React.FC<Props> = ({item, deleteItem}) => {
    return (
        <div className="card shadow-sm mb-3">
            <div className="card-body d-flex justify-content-between align-items-center">
                <div>
                    <h5 className="card-title mb-1 fw-semibold">{item.title}</h5>
                    <p className="mb-1 text-capitalize text-secondary">
                        <small><strong>Category:</strong> {item.category}</small>
                    </p>
                    <p className="card-text mb-0 text-muted">
                        <strong>Cost:</strong> {item.cost} KGS
                    </p>
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