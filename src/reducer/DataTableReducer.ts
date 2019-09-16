import {IRecord} from '../model/IRecord'
import ACTIONS from '../action/DataTableActions'

export interface IDataTableState {
    records: IRecord[]
}

const defaultDataTableState: IDataTableState = {
    records: []
}

export const dataTableReducer = (dataTable = defaultDataTableState, action): IDataTableState => {
    switch (action.type) {

        case ACTIONS.Types.APPEND_RECORD: {
            console.log(action)

            const newRecord = action.payload
            const newRecords = [...dataTable.records, newRecord]
            return {...dataTable, records: newRecords}
        }

        case ACTIONS.Types.REMOVE_RECORD: {
            console.log(action)

            const keyToRemove = action.payload
            const newRecords = dataTable.records.filter(record => record.key !== keyToRemove)
            return {...dataTable, records: newRecords}
        }

        default:
            return dataTable
    }
}
