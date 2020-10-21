import initialData from "../../initial-data";

const rootReducer = ( state = initialData, action) => {
    switch(action.type) {
        case 'CREATE_TASK':
            const newTasks = {
                ...state.tasks,
                [action.id]: {
                    id: action.id,
                    content: action.taskInfo.task,
                }
            };

            const taskList = state.columns[action.taskInfo.columnId].taskIds;

            const newColumns = {
                ...state.columns,
                [action.taskInfo.columnId]: {
                    id: action.taskInfo.columnId,
                    title: action.taskInfo.title,
                    taskIds: [...taskList, action.id]
                }
            }

            return {
                ...state,
                tasks: newTasks,
                columns: newColumns,
            }
        case 'UPDATE_BOARD':
            return {
                tasks: action.board.tasks,
                columns: action.board.columns,
                columnOrder: action.board.columnOrder,
            }
        case 'DELETE_TASK':
            // filter all the tasks and delete the respective one
            const tasks = state.tasks;

            delete tasks[action.taskId];
            console.log(tasks)
            // pick the task's column
            let col = state.columns[action.columnId];

            // get the tasks from that column
            let tasksFromCol = Array.from(col.taskIds);

            // filter those tasks and delete the respective one
            tasksFromCol = tasksFromCol.filter(task => {
                return task !== action.taskId
            });

            // update the state
            return {
                ...state,
                tasks,
                columns: {
                    ...state.columns,
                    [col.id]: {
                        ...col,
                        taskIds: tasksFromCol,
                    }
                }
            };
        default:
            return state;
    }
}

export default rootReducer