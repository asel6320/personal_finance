import {useState} from 'react';
import {IItem, IItemMutation} from '../../types';
import * as React from "react";
import {Category} from "../../types";
import './ItemForm.css';

interface Props {
  addNewItem: (item: IItem) => void;
}

const ItemForm: React.FC<Props>  = ({addNewItem}) => {

  const [newItem, setNewItem] = useState<IItemMutation>({
      title: "",
      category: "Other",
      cost: 0
  });

  const categories: Category[] = ['Food', 'Clothing', 'Electronics', 'Entertainment', 'Other'];

  const changeItem = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      setNewItem((prevState) => ({
          ...prevState,
          [e.target.name]: e.target.name === 'cost' ? Number(e.target.value) : e.target.value,
      }));
  };

  const onSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      if (newItem.title.trim().length === 0 ) {
          alert("Make sure you enter a title");
      } else {
          addNewItem({
              id: Date.now(),
              ...newItem,
              category: newItem.category as Category,
              cost: Number(newItem.cost),
          });

          setNewItem(
              {
                  title: "",
                  cost: 0,
                  category: "Other",
              }
          );
      }
  };


  return (
      <form onSubmit={onSubmit} className="d-flex align-items-end gap-3 flex-wrap">
          <div className="form-group">
              <label htmlFor="title" className="form-label">Title:</label>
              <input
                  type="text"
                  onChange={changeItem}
                  value={newItem.title}
                  id="title"
                  name="title"
                  required
                  className="form-control"
                  placeholder="Enter spending title"
              />
          </div>

          <div className="form-group">
              <label htmlFor="cost" className="form-label">Cost:</label>
              <input
                  type="number"
                  onChange={changeItem}
                  value={newItem.cost}
                  id="cost"
                  name="cost"
                  required
                  className="form-control"
                  placeholder="0"
                  min="1"
              />
          </div>

          <div className="form-group">
              <label htmlFor="category" className="form-label">Category:</label>
              <select
                  name="category"
                  id="category"
                  className="form-select"
                  onChange={changeItem}
                  value={newItem.category}
                  required
              >
                  <option value="">Select...</option>
                  {categories.map((category) => (
                      <option key={category} value={category}>
                          {category[0].toUpperCase() + category.slice(1)}
                      </option>
                  ))}
              </select>
          </div>

          <button type="submit" className="btn btn-primary h-50 mt-auto">
              Add
          </button>
      </form>
  );
};

export default ItemForm;