import React from 'react';
import { convertValue } from '../utils/calculateTotalExpenses';
import Trash from '../assets/trash.svg';
import Edit from '../assets/edit.svg';
import { useAppDispatch } from '../redux/hooks/hooks';
import { deleteExpense, startEditExpense } from '../redux/features/wallet';

function Expense(expense: Expense):JSX.Element {

  const dispatch = useAppDispatch()

  const handleClick = ({ target }: React.MouseEvent<HTMLButtonElement>) => {
    const { id } = target as HTMLButtonElement;

    if (id === 'edit-btn') {
      dispatch(startEditExpense(expense.id))
    } else {
      dispatch(deleteExpense(expense.id));
    }
  }

  const { description, method, tag, value, exchangeRates, currency } = expense;

  return (
    <tr
      className="text-center
               text-green-500
               text-sm
               border-b-slate-500
               border-b-2"
    >
      <td>{description}</td>
      <td>{tag}</td>
      <td>{method}</td>
      <td>{Number(value).toFixed(2)}</td>
      <td>
        <p className="break-all">{exchangeRates[currency]?.name}</p>
      </td>
      <td>{Number(exchangeRates[currency]?.ask).toFixed(2)}</td>
      <td>{convertValue(expense).toFixed(2)}</td>
      <td>Real</td>
      <td>
        <button
          name="edit-btn"
          type="button"
          data-testid="edit-btn"
          onClick={handleClick}
          className="mr-2"
        >
          <img
            id="edit-btn"
            src={Edit}
            alt="Edit"
            className="w-6"
          />
        </button>
        <button
          name="delete-btn"
          type="button"
          data-testid="delete-btn"
          onClick={handleClick}
        >
          <img id="delete-btn"
            src={Trash} alt="Lixo" className="w-4" />
        </button>
      </td>
    </tr>

  );
}



export default Expense;
