const initialData = {
    tasks: {
        'task-1': { id: 'task-1', content: 'Take out the garbage' },
        'task-2': { id: 'task-2', content: 'Watch my favourite show'},
        'task-3': { id: 'task-3', content: 'Charge my phone'},
        'task-4': { id: 'task-4', content: 'Cook diner'},
        'task-5': { id: 'task-5', content: 'Go to sleep'},
        'task-6': { id: 'task-6', content: 'Read a book'},
        'task-7': { id: 'task-7', content: 'Write a book'},
    },
    columns: {
        'column-1': {
            id: 'column-1',
            title: 'To do',
            taskIds: ['task-1', 'task-2', 'task-3', 'task-4'],
        },
        'column-2': {
            id: 'column-2',
            title: 'Progress',
            taskIds: ['task-5', 'task-6'],
        },
        'column-3': {
            id: 'column-3',
            title: 'Done',
            taskIds: ['task-7'],
        },
    },
    columnOrder: ['column-1', 'column-2', 'column-3'],
}

export default initialData