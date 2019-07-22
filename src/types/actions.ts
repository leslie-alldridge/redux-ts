import { Expense } from './expense';

export const ADD_EXPENSE = 'ADD EXPENSE';
export const EDIT_EXPENSE = 'EDIT EXPENSE';
export const REMOVE_EXPENSE = 'REMOVE EXPENSE';
export const SET_EXPENSE = 'SET EXPENSE';

export interface SetExpenseAction {
  type: typeof SET_EXPENSE;
  expenses: Expense[];
}

export interface EditExpenseAction {
  type: typeof EDIT_EXPENSE;
  expense: Expense;
}

export interface RemoveExpenseAction {
  type: typeof REMOVE_EXPENSE;
  id: string;
}

export interface AddExpenseAction {
  type: typeof ADD_EXPENSE;
  expense: Expense;
}

export type ExpenseActionTypes =
  | SetExpenseAction
  | EditExpenseAction
  | RemoveExpenseAction
  | AddExpenseAction;
