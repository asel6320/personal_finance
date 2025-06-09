export type Category = 'Food' | 'Clothing' | 'Electronics' | 'Entertainment' | 'Other';

export interface IItem {
  id: number;
  title: string;
  cost: number;
  category: Category;
}

export interface IItemMutation {
    title: string;
    cost: number;
    category: Category;
}
