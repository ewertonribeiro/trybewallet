import React, { useEffect } from 'react'
import { useAppDispatch } from '../redux/hooks/hooks'
import fetchCurrenciesThunk from '../redux/thunks/fetchCurrencies'
import Header from '../components/Header'
import Table from '../components/Table'
import WalletForm from '../components/Walletform'

function Wallet(): JSX.Element {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCurrenciesThunk());
  }, [])

  return (
    <>
      <section
        className="
        w-[1037px]
        mx-auto
        bg-white
        h-[400px]
        rounded-xl
        flex
        flex-col
        items-center
        relative
        gap-10
        z-50"
      >
        <Header />
        <WalletForm />
      </section>
      <Table />
    </>
  )
}

export default Wallet
