import React from 'react';
import {IItem} from '../../types';
import Item from './Item';

interface Props {
    items: IItem[];
    deleteItem: (id: number) => void;
}

const Items: React.FC<Props> = ({ items, deleteItem }) => {
    return (
        <>
            {items.map((item) => (
                <Item key={item.id} item={item} deleteItem={deleteItem} />
            ))}
        </>
    );
};

export default Items;