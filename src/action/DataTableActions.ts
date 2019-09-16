const Types = {
    APPEND_RECORD: 'APPEND_RECORD',
    REMOVE_RECORD: 'REMOVE_RECORD'
}

// actions
const appendRecord = task => ({
    type: Types.APPEND_RECORD,
    payload: task
})

const removeRecord = id => ({
    type: Types.REMOVE_RECORD,
    payload: id
})

export default {
    appendRecord,
    removeRecord,
    Types
}
