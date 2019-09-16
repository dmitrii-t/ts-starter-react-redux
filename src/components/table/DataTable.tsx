import * as React from 'react'
import {FormEvent} from 'react'
import {Button, Table, TableBody, TableCell, TableHead, TableRow, TextField, withStyles} from '@material-ui/core'
import {IRecord} from '../../model/IRecord'
import {connect} from 'react-redux'

import DataTableActions from '../../action/DataTableActions'

const styles = require('./DataTable.css')

export interface IProps {
    appendRecord?: (r: IRecord) => {}
    removeRecord?: (k: string) => {}
    rows: IRecord[]
}

export interface IState {
    value: string
}

export class DataTable extends React.Component<IProps, IState> {

    // Plain static counter
    private static ROW_KEY_COUNTER: number = 0

    constructor(props: IProps) {
        super(props)
        this.state = {value: ''}
    }

    public render() {
        const {rows} = this.props
        return (
            <form onSubmit={this.handleAppendRow}>
                <Table className={styles.table}>
                    <TableHead>
                        <TableRow>
                            <TableCell>Value</TableCell>
                            <TableCell align='right'>Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>

                        {/* Add record form row */}
                        <TableRow>
                            <TableCell>
                                <TextField name={'key'} type={'hidden'} value={DataTable.ROW_KEY_COUNTER}/>
                                <TextField name={'value'} onChange={this.handleAddRowValueChange} value={this.state.value}/>
                            </TableCell>
                            <TableCell align='right'>
                                <Button type={'submit'}>Add row</Button>
                            </TableCell>
                        </TableRow>

                        {/* Data rows  */}
                        {rows.map(row => (
                            <TableRow key={row.key}>
                                <TableCell>{row.value}</TableCell>
                                <TableCell align='right'>
                                    <Button onClick={() => this.handleRemoveRow(row.key)}>Remove row</Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </form>
        )
    }

    private handleAppendRow = (event: FormEvent) => {
        // Prevents submitting the form
        event.preventDefault()

        // Handles new values
        const form = event.target as any
        const key = form.key.value as string
        const value = form.value.value as string

        // Resets component's state
        DataTable.ROW_KEY_COUNTER++
        this.setState({value: ''})

        // Updates global state
        this.props.appendRecord({key, value})
    }

    private handleAddRowValueChange = (event: any) => {
        this.setState({
            value: event.target.value as string
        })
    }

    private handleRemoveRow = (key: string) => {
        this.props.removeRecord(key)
    }

}

const mapStateToProps = (state: any) => ({
    rows: state.dataTable.records
} as IProps)

const mapDispatchToProps = dispatch => ({
    appendRecord: item => dispatch(DataTableActions.appendRecord(item)),
    removeRecord: key => dispatch(DataTableActions.removeRecord(key))
} as IProps)

export default withStyles(styles)(connect<IState, IProps>(
    mapStateToProps,
    mapDispatchToProps
)(DataTable))
