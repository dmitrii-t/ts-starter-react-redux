import {applyMiddleware, combineReducers, createStore} from 'redux'
import {dataTableReducer} from '../reducer/DataTableReducer'
// Logger with default options
import logger from 'redux-logger'

const rootReducer = combineReducers({
    dataTable: dataTableReducer
    // Add more reducers below
})

export default function configureStore() {
    return createStore(rootReducer, applyMiddleware(logger))
}
