import React, { useState } from 'react';

export const NewTodoForm: React.FC<{addTodo: Function}> = (props) => {
    const [description, setDescription] = useState('');
    const [assigned, setAssigned] = useState('');

    const submitTodo = () => {
        if (description !== '' && assigned !== '') {
            props.addTodo(description, assigned);
            setAssigned('');
            setDescription('');
        }
    }

    // const descriptionChange = (event) => {
    //     console.log('description', event.target.value, description);
    //     setDescription(event.target.value);
    // }

    // const assignedChange = (event) => {
    //     console.log('assigned', event.target.value, assigned);
    //     setAssigned(event.target.value);
    // }

    return (
        <div className='mt-5'>
            <div className='mb-3'>
                <label className='form-label'>Assigned</label>
                <input type='text' className='form-control' required value={assigned} onChange={e => setAssigned(e.target.value)}></input>
            </div>
            <div className='mb-3'>
                <label className='form-label'>Description</label>
                <textarea  className='form-control' rows={3} onChange={e => setDescription(e.target.value)} required value={description}></textarea>
            </div>
            <button type='button' className='btn btn-primary mt-3' onClick={submitTodo}>Add To Do</button>
        </div>
    )

}
