// Write your code here
import './index.css'

const DenominationItem = props => {
  const {denominations, deductAmount} = props
  const {value} = denominations
  const denominateById = () => {
    deductAmount(value) // value passing direct to cashwithdrawal module
  }
  return (
    <li>
      <button type="button" onClick={denominateById} className="button">
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
