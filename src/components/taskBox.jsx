import React, {useContext} from 'react';


const TaskBox = ({ name, createdAt, assignedTo, creator, description, status, priority, onChangeStatus, onDelete  }) => {

    return (
        <div>
            <h4>{name}</h4>
            <div>{assignedTo}</div>
            <div>{status}</div>
            <div>{priority}</div>
            <div>{description}</div>
            <div>
                { createdAt }
            </div>
            <div>
                { creator }
            </div>

            <div>
                <button onClick={onChangeStatus}>Change Status</button>
                <button onClick={onDelete}>Delete Task</button>
            </div>
        </div>
    );
};



export default TaskBox;