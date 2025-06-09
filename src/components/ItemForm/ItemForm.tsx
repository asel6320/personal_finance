import {useState} from 'react';
import {IItem, IItemMutation} from '../../types';
import * as React from "react";

interface Props {
  addNewItem: (item: IItem) => void;
}

const ItemForm: React.FC<Props>  = ({addNewItem}) => {

  const [newItem, setNewItem] = useState<IItemMutation>({
      title: "",
      cost: 0,
  });

  const changeItem = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setNewItem((prevState) => {
          return {
              ...prevState,
              [e.target.name]: e.target.value,
          };
      });
  };

  const onSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      if (newItem.title.trim().length === 0 ) {
          alert("Make sure you enter a title");
      } else {
          addNewItem({
              id: Date.now(),
              ...newItem,
              cost: Number(newItem.cost),
          });

          setNewItem(
              {
                  title: "",
                  cost: 0,
              }
          );
      }
  };


  return (
      <form onSubmit={onSubmit}>
          <h3>Add new spending</h3>
          <div className="form-group mb-2">
              <label htmlFor="name">Title:</label>
              <input
                  type="text"
                  onChange={changeItem}
                  value={newItem.title}
                  id="title"
                  name="title"
                  required
                  className="form-control"
              />
          </div>
          <div className="form-group mb-2">
              <label htmlFor="cost">Cost:</label>
              <input
                  type="number"
                  onChange={changeItem}
                  value={newItem.cost}
                  id="cost"
                  name="cost"
              />
          </div>
          <button type="submit" className="btn btn-primary">
              Add
          </button>
      </form>
  );
};

export default ItemForm;