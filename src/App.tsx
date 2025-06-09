import React, { useEffect, useState } from 'react';
import { IItem } from './types';
import ItemForm from './components/ItemForm/ItemForm';
import Items from './components/Items/Items';
import ToolBar from './components/ToolBar/ToolBar';
import SpendingChart from './components/SpendingChart/SpendingChart';
import './App.css';

function App() {
  const [items, setItems] = useState<IItem[]>(() => {
    const savedItems = localStorage.getItem('items');
    if (savedItems) {
      return JSON.parse(savedItems);
    }

    return [
      { id: 1, title: 'Bottle of water', cost: 100, category: 'Food' },
      { id: 2, title: 'Milk', cost: 200, category: 'Food' },
      { id: 3, title: 'Bread', cost: 300, category: 'Food' },
      { id: 4, title: 'Dinner at cafe', cost: 1300, category: 'Food' },
    ];
  });

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items));
  }, [items]);

  const totalCost = items.reduce((acc, item) => acc + item.cost, 0);

  const deleteItem = (id: number) => {
    setItems((prevState) => prevState.filter((item) => item.id !== id));
  };

  const addNewItem = (newItem: IItem) => {
    setItems((prevState) => [...prevState, newItem]);
  };

  const clearAllItems = () => {
    setItems([]);
    localStorage.removeItem('items');
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
              <h4>Total Spent: {totalCost} $</h4>
              {items.length > 0 && (
                  <button onClick={clearAllItems} className="btn btn-outline-danger mt-2">
                    Clear All Items
                  </button>
              )}
            </div>
          </div>
          <SpendingChart items={items} type="pie" />
        </main>
      </>
  );
}

export default App;

