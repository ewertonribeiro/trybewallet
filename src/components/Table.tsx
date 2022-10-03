import { useAppSelector } from '../redux/hooks/hooks';
import Expense from './Expense';

function Table() {

  const expenses = useAppSelector(state=>state.wallet.expenses);

  return (
    <section
      className="
          bg-blue-800
          shadow
          shadow-gray-400
          rounded-xl
          h-[480px]
          mx-auto
          max-w-[1155px]
          -z-10
          -mt-20
          flex
          items-center
           "
    >

      <table className="w-[90%] mx-auto h-44 table-auto">
        <thead className="table-header-group">
          <tr
            className="
                text-white
                font-semibold
                text-base
                border-b-2
                border-b-slate-500
                text-center table-row"
          >
            <th>Descrição</th>
            <th>Tag</th>
            <th>Método de pagamento</th>
            <th>Valor</th>
            <th>Moeda</th>
            <th>Câmbio utilizado</th>
            <th>Valor convertido</th>
            <th>Moeda de conversão</th>
            <th>Editar/Excluir</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((item) => (<Expense {...item} key={item.id} />))}
        </tbody>
      </table>
    </section>
  );
}

export default Table
