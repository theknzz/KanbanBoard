let taskID = 100;

export const createTask = (task) => {
   return {
       type: 'CREATE_TASK',
       id: `task-${++taskID}`,
       taskInfo: task
   }
}

export const updateBoard = (board) => {
    return {
        type: 'UPDATE_BOARD',
        board,
    }
}

export const deleteTask = (taskId, columnId) => {
    return {
        type: 'DELETE_TASK',
        taskId,
        columnId
    }
}