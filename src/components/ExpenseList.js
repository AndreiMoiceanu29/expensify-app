import React from 'react'
import selectExpenses from '../selectors/expenses'
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
const ExpenseList= (props)=>(
    <div>
    <h1> Expense List</h1>
    {props.expenses.map((expense)=>{
      return <ExpenseListItem key={expense.id} {...expense}/>
    })}
    
    </div>
)

const mapStateToProps=(state)=>{
    return{
        expenses:selectExpenses(state.expenses,state.filters)
    }
}

const ConnectedExpenseList=connect(mapStateToProps)(ExpenseList);
      

export default ConnectedExpenseList;