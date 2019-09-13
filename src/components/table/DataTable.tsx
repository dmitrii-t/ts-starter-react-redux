import * as React from 'react';
import {Table, TableBody, TableCell, TableHead, TableRow} from '@material-ui/core';
import {IRecord} from '../../model/IRecord';

const styles = require('./DataTable.css');

export interface IDataTableProps {
    rows: IRecord[];
}

interface IDataTableState {
}

export class DataTable extends React.Component<IDataTableProps, {}> {

    constructor(props: IDataTableProps) {
        super(props);
        this.state = {};
    }

    public render() {
        const {rows} = this.props;
        return (
            <Table className={styles.table}>
                <TableHead>
                    <TableRow>
                        <TableCell>Key</TableCell>
                        <TableCell align='right'>Value</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map(row => (
                        <TableRow key={row.key}>
                            <TableCell align='right'>{row.value}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        );
    }
}
