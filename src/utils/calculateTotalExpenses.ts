
export function convertValue(expense: Expense): number {
  const currency = expense.currency
  const value = Number(expense.exchangeRates[currency]?.ask) * Number(expense.value)
  return value
}

function calculateTotalExpenses(expenses: Expense[]): string {
  const initial = 0

  const totalAmount = expenses.reduce((previous, current) => {
    try {
      const value = convertValue(current)
      return Number(previous + value)
    } catch {
      return previous
    }
  }, initial)
  return totalAmount.toFixed(2)
}

export default calculateTotalExpenses
