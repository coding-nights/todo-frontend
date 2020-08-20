import React, {useContext} from 'react';
import { AppContext } from "../appContext";
import TaskBox from "./taskBox";
import AddTaskForm from "./addTaskForm";


const TaskForm = () => {
    const context = useContext(AppContext);

    const onDelete = () => {
        console.log('hello from onDelete');
    }
    const onChangeStatus = () => {
        console.log('hello from onChangeStatus');
    }



    return (
        <div>
            <h1>Welcome to TODO Task Manager</h1>
            <AddTaskForm />
            {
                context.data.map((item, index) => {
                    return (
                        <TaskBox
                            key={index}
                            onDelete={onDelete}
                            onChangeStatus={onChangeStatus}
                            assignedTo={item.assigneeId}
                            createdAt={item.createdAt}
                            creator={item.creatorId}
                            description={item.descirption}
                            name={item.name}
                            priority={item.priority}
                            status={item.status}
                        />
                    );
                })
            }
        </div>
    );
};



export default TaskForm;