import {createShallow} from '@material-ui/core/test-utils'
import * as React from 'react'
import {IRecord} from '../../model/IRecord'
import {DataTable} from './DataTable'
import {Table, TableRow} from '@material-ui/core'

describe('<DataTable/>', () => {
    const MUIShallow = createShallow()
    const records: IRecord[] = [{
        key: '0',
        value: 'asd',
    }]

    it('should display a Table', () => {
        const wrapper = MUIShallow(<DataTable rows={records}/>)
        expect(wrapper.find(Table).length).toEqual(1)
    })

    it('should display a header and a TableRow', () => {
        const wrapper = MUIShallow(<DataTable rows={records}/>)
        // remember header and bottom rows when doing a comparison
        expect(wrapper.find(TableRow).length).toEqual(3)
    })

    it('should display the value of the record', () => {
        const wrapper = MUIShallow(<DataTable rows={records}/>)
        records.forEach(record => {
            const row = wrapper.findWhere(node => node.key() === record.key)
            const valueColumn = row.childAt(0)
            expect(valueColumn.childAt(0).text()).toEqual(record.value)
        })
    })

})
