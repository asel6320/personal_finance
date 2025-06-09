import React from 'react';
import {IItem} from '../../types';
import Item from './Item';

interface Props {
    items: IItem[];
}

const Items: React.FC<Props> = ({ items }) => {
    return (
        <>
            {items.map((item) => (
                <Item key={item.id} item={item} />
            ))}
        </>
    );
};

export default Items;