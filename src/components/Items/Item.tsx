import React from 'react';
import { IItem } from '../../types';
import './Item.css';

interface Props {
    item: IItem;
    deleteItem: (id: number) => void;
}

const Item: React.FC<Props> = ({ item, deleteItem }) => {
    return (
        <div className="card item-card shadow-sm mb-3">
            <div className="card-body d-flex justify-content-between align-items-center flex-wrap">
                <div className="item-details text-start">
                    <h5 className="card-title mb-1">{item.title}</h5>
                    <p className="mb-1 category-label">
                        <strong>Category:</strong> {item.category}
                    </p>
                    <p className="card-text mb-0">
                        <strong>Cost:</strong> {item.cost} KGS
                    </p>
                </div>
                <button
                    onClick={() => deleteItem(item.id)}
                    className="btn btn-sm btn-outline-danger delete-button"
                    aria-label="Delete"
                >
                    ✕
                </button>
            </div>
        </div>
    );
};

export default Item;
