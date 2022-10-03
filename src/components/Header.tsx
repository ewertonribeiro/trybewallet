import Logo from '../assets/logoWallet.svg'
import Coins from '../assets/Moedas.svg'
import User from '../assets/user.svg'
import { useAppSelector } from '../redux/hooks/hooks'
import calculateTotalExpenses from '../utils/calculateTotalExpenses'

function Header () {
  const expenses = useAppSelector(state => state.wallet.expenses)
  const total = calculateTotalExpenses(expenses)
  const userEmail = useAppSelector(state => state.user.user.email)

  return (
    <header>
      <div className="flex gap-20 mt-10 items-center justify-center font-bold text-sm">
        <div>
          <img src={Logo} alt="Logo Trybe Wallet" className="w-64 h-14" />
        </div>

        <div className="flex gap-6 items-center justify-center">
          <img src={Coins} alt="Moedas" className="w-7 h-7" />
          <span className="text-blue-700 text-base">
            Total Despesas:
            <strong data-testid="total-field">
              {total}
            </strong>
            <span data-testid="header-currency-field"> BRL</span>
          </span>
        </div>

        <div
          className="flex gap-3 items-center justify-center text-base text-green-500"
        >
          <img src={User} alt="Usuario" />
          <span data-testid="email-field">
            {!userEmail ? 'Sem Usuario' : userEmail}
          </span>
        </div>
      </div>
    </header>
  )
}

export default Header
