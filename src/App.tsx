import React from 'react';
import { useState } from 'react';
import { IItem } from './types';
import ItemForm from './components/ItemForm/ItemForm';
import Items from './components/Items/Items';
import ToolBar from './components/ToolBar/ToolBar';
import './App.css';

function App() {

  const [items, setItems] = useState<IItem[]>([
    {
      id: 1,
      title: 'Bottle of water',
      cost: 100,
    },
    {
      id: 2,
      title: 'Milk',
      cost: 200,
    },
    {
      id: 3,
      title: 'Bread',
      cost: 300,
    },
    {
      id: 4,
      title: 'Dinner at cafe',
      cost: 1300,
    },
  ])

  const totalCost = items.reduce((acc, item) => acc + item.cost, 0);

  const deleteItem = (id: number) => {
    setItems((prevState) => prevState.filter((item) => item.id !== id));
  }

  const addNewItem = (newItem: IItem) => {
    setItems((prevState) => [...prevState, newItem]);
  };

  return (
    <>
      <header>
        <ToolBar />
      </header>
      <main className="container mt-4">
        <div className="row">
          <div className="col-12 mb-2">
            <ItemForm addNewItem={addNewItem} />
          </div>
          <div className="col-12 mb-2">
            <Items items={items} deleteItem={deleteItem} />
          </div>
          <div className="mt-2">
            <h4>Total cost: {totalCost} $</h4>
          </div>
        </div>
      </main>
    </>
  );
};

export default App;
