import React from 'react'

let id = 3;
const initState = {
    todos: [ {id: 1, title: 'setup redux'} ],
    progress: [ {id: 2, title: 'finish css'} ],
    done: [ {id: 3, title: 'deploy app'} ]
}

const rootReducer = (state = initState , action) => {
    console.log('reducer' , state, action)
    switch (action.type) {
        case 'ADD_TODO':
            return {
                ...state,
                todos: [...state.todos, { id: ++id, title: action.taskTitle }]
            }

        case 'ADD_PROGRESS':
            return {
                ...state,
                progress: [...state.progress, { id: ++id, title: action.taskTitle }]
            }

        case 'ADD_DONE':
            console.log('got a add_done action')
            return {
                ...state,
                done: [...state.done, { id: ++id, title: action.taskTitle }]
            }
        default:
            return state;
    }
}

export default rootReducer