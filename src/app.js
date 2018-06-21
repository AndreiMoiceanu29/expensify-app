import React from 'react'
import ReactDOM from 'react-dom'
import AppRouter from './routers/AppRouter'
import 'normalize.css/normalize.css'
import './styles/styles.scss'
import configureStore from './store/configureStore'
import {addExpense} from './actions/expenses'
import {setTextFilter} from './actions/filters'
import getVisibleExpenses from './selectors/expenses'
import expenses from './reducers/expenses';
import {Provider} from 'react-redux'

const store=configureStore();







const jsx=(
    <Provider store={store}>
    <AppRouter/>
    </Provider>
)


ReactDOM.render(jsx, document.getElementById("app"));

