import React, { useState } from 'react';
import { endEditExpense } from '../redux/features/wallet';
import { useAppDispatch, useAppSelector } from '../redux/hooks/hooks';
import createExpenseThunk from '../redux/thunks/createExpenseThunk';
import FormControl from './FormControl';
import Select from './Select';

function WalletForm():JSX.Element {

  const walletState = useAppSelector(state=> state.wallet)
  const dispatch = useAppDispatch()

  const [formValues, setFormValues] = useState({
    value: '',
    description: '',
    currency: 'USD' as CODES,
    method: 'Dinheiro',
    tag: 'Alimentação',
  })

  const handleClick = () => {
    if (walletState.editor) {
      dispatch(endEditExpense(formValues))
      setFormValues({
        value: '',
        description: '',
        currency: 'USD',
        method: 'Dinheiro',
        tag: 'Alimentação',
      });
    } else {
      dispatch(createExpenseThunk(formValues))
      setFormValues({
        value: '',
        description: '',
        currency: 'USD',
        method: 'Dinheiro',
        tag: 'Alimentação',
      });
    }
  };

  const { description, tag, value, method, currency } = formValues;

  return (
    <div className="bg-gray-200 h-auto w-full">
      <form>

        <div
          className="
            mt-2 w-full
            flex mx-auto
            container
            items-center
            justify-center
            gap-36"
        >
          <FormControl
            className="flex items-center"
            label="Descrição da despesa"
            inputType="text"
            inputName="description"
            inputClass="
            border
            border-blue-700
            border-solid
            rounded bg-transparent
            focus:outline-none
            "
            labelClass="text-blue-700 font-bold text-lg flex gap-2 items-center"
            value={description}
            callback={(e) => setFormValues({ ...formValues, description: e.target.value })}
          />

          <Select
            className="flex items-center gap-6"
            label="Categoria da despesa"
            labelClass="text-blue-700 font-bold text-lg flex items-center gap-2"
            selectClass="
            border
            border-blue-700
            border-solid rounded
            bg-transparent
            focus:outline-none
            p-1
            text-blue-700
            "
            selectName="categorie"
            options={[
              'Alimentação',
              'Lazer',
              'Trabalho',
              'Transporte',
              'Saúde',
            ]}
            value={tag}
            callback={(e) => setFormValues({ ...formValues, tag: e.target.value })}
          />
        </div>

        <div
          className="
            mt-4 w-full
            flex
            mx-auto
            container
            items-center
            justify-center
            gap-20"
        >
          <FormControl
            className="flex items-center gap-6"
            label="Valor"
            labelClass="text-blue-700 font-bold text-lg flex items-center gap-1"
            inputType="number"
            inputName="value"
            inputClass="
                border
                border-blue-700
                border-solid
                rounded
                bg-transparent
                focus:outline-none
                w-20
                "
            value={value}
            callback={(e) => setFormValues({ ...formValues, value: e.target.value })}
          />
          <Select
            className="flex items-center gap-6"
            label="Método de Pagamento"
            labelClass="text-blue-700 font-bold text-lg flex items-center gap-1"
            selectName="method"
            selectClass="
                bg-transparent
                w-60 border
                border-solid
                border-blue-700
                rounded
                text-blue-700"
            options={[
              'Dinheiro',
              'Cartão de crédito',
              'Cartão de débito',
            ]}
            value={method}
            callback={(e) => setFormValues({ ...formValues, method: e.target.value })}
          />

          <Select
            className="flex items-center gap-6"
            label="Moeda"
            labelClass="text-blue-700 font-bold text-lg flex items-center gap-1"
            selectName="coin"
            selectClass="
                bg-transparent
                w-60
                border
                border-solid
                border-blue-700
                rounded
                text-blue-700"
            value={currency}
            options={walletState.currencies}
            callback={(e) => setFormValues({ ...formValues, currency: e.target.value as CODES })}
          />

        </div>

        <button
          type="button"
          className="
              w-80
              bg-green-500
              mx-auto
              block
              my-6
              text-white
              font-semibold
              p-2
              rounded
              hover:bg-green-700"
          onClick={handleClick}
        >
          {!walletState.editor ? 'Adicionar despesa' : 'Editar despesa'}
        </button>
      </form>
    </div>
  );
}


export default WalletForm
