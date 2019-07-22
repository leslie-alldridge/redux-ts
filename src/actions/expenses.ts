import uuid from 'uuid';
import { Expense } from '../types/expense';
import { AppActions } from '../types/actions';

export const addExpense = (expense: Expense): AppActions => ({
  type: 'ADD_EXPENSE',
  expense
});

export const removeExpense = (id: string): AppActions => ({
  type: 'REMOVE_EXPENSE',
  id
});

export const editExpense = (expense: Expense): AppActions => ({
  type: 'EDIT_EXPENSE',
  expense
});

export const setExpenses = (expenses: Expense[]): AppActions => ({
  type: 'SET_EXPENSES',
  expenses
});

export const startAddExpense = ({ description, note, amount, createdAt }) => {
  return (dispatch, getState) => {
    const {
      description = '',
      note = '',
      amount = 0,
      createdAt = 0
    } = expenseData;
    const expense = { description, note, amount, createdAt };

    const id = uuid();

    dispatch(
      addExpense({
        id,
        ...expense
      })
    );
  };
};

export const startRemoveExpense = id => {
  return (dispatch, getState) => {
    dispatch(removeExpense({ id }));
  };
};

export const startEditExpense = expense => {
  return (dispatch, getState) => {
    dispatch(editExpense(id, updates));
  };
};

export const startSetExpenses = expenses => {
  //console.log(database);
  return (dispatch, getState) => {
    dispatch(setExpenses(expenses));
  };
};
