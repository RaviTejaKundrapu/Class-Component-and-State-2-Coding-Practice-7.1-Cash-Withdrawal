// Write your code here
import {Component} from 'react'
import './index.css'
import DenominationItem from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {amount: 2000}

  deductAmount = value => {
    const {amount} = this.state
    const ProcessingDeduction = amount - value
    this.setState({amount: ProcessingDeduction})
  }

  render() {
    const {denominationsList} = this.props
    const {amount} = this.state
    const userName = 'Ravi Teja K'
    const firstLetter = userName.slice(0, 1)

    return (
      <div className="app-container">
        <img
          src="https://projectd.co.uk/images/HSBC/HSBC_banner_2017.jpg"
          alt="bank"
          className="bank-img"
        />
        <div className="card-container">
          <div className="profile-container">
            <p className="profile">{firstLetter}</p>
            <p className="profile-name">{userName}</p>
          </div>
          <div className="Balance-container">
            <p className="YourBalText">Your Balance</p>
            <div className="amount-container">
              <p className="amount">{amount}</p>
              <p className="ruppes-text">In Rupees</p>
            </div>
          </div>
          <div className="withdraw-container">
            <p className="Withdrawtext">Withdraw</p>
            <p className="chooseAmount">CHOOSE SUM (IN RUPEES)</p>
          </div>
          <ul className="buttons-container">
            {denominationsList.map(each => (
              <DenominationItem
                denominations={each}
                deductAmount={this.deductAmount}
                key={each.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
