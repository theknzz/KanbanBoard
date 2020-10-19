import React from 'react'

const TaskSummary = ({ title }) => {
    return (
        <div className="card task-summary">
            <div className="card-content black-text text-darken-3">
                <span className="card-title">{title}</span>
            </div>
        </div>
    );
}

export default TaskSummary