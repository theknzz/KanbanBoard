export const addTodoTask = (taskTitle) => {
   return {
       type: 'ADD_TODO',
       taskTitle
   }
}

export const addProgressTask = (taskTitle) => {
    return {
        type: 'ADD_PROGRESS',
        taskTitle
    }
}

export const addDoneTask = (taskTitle) => {
    console.log('send action add_done to reducer ')
    return {
        type: 'ADD_DONE',
        taskTitle
    }
}
