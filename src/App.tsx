import React from 'react';
import { useState } from 'react';
import { IItem } from './types';
import ItemForm from './components/ItemForm/ItemForm';
import Items from './components/Items/Items';
import './App.css';

function App() {

  const [items, setItems] = useState<IItem[]>([
    {
      id: 1,
      title: 'Item 1',
      cost: 100,
    },
    {
      id: 2,
      title: 'Item 2',
      cost: 200,
    },
    {
      id: 3,
      title: 'Item 3',
      cost: 300,
    },
  ])

  const addNewItem = (newItem: IItem) => {
    setItems((prevState) => [...prevState, newItem]);
  };

  return (
      <main className="container mt-4">
        <div className="row">
          <div className="col-6 mb-2">
            <ItemForm addNewItem={addNewItem} />
          </div>
          <div className="col-6 mb-2">
            <Items items={items} />
          </div>
        </div>
      </main>
  );
}

export default App;
