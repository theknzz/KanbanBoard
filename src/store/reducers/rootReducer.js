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
        default:
            return state;
    }
}

export default rootReducer