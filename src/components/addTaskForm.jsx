import React from 'react';


const AddTaskForm = ({ onAdd }) => {

    return (
        <div>
            <h1>Welcome to TODO Task Manager</h1>
            <div>
                <input type="text" id={'name'} />
                <input type='text' id={'assigneeTo'}/>
                <select id={'priority'}>
                    <option value="" disabled defaultChecked>Priority</option>
                    <option value="low">low</option>
                    <option value="low">medium</option>
                    <option value="low">high</option>
                </select>
                <select id="status">
                    <option value="" disabled defaultChecked>Status</option>
                    <option value="todo" >todo</option>
                    <option value="in_progress" >in_progress</option>
                    <option value="todo" >todo</option>
                    <option value="to_deploy" >to_deploy</option>
                    <option value="test" >test</option>
                    <option value="testing" >testing</option>
                    <option value="fixed">fixed</option>
                </select>
                <button>add new task</button>
            </div>

        </div>
    );
};



export default AddTaskForm;