
import { useState } from 'react';

import {
    View,
    TextInput,
    Button
  } from 'react-native';


function ToDoForm() {

    // state variable for the new task
    const [newTask, setNewTask] = useState('');

    // state variable handling the addition of tasks
    const [tasks, setTasks] = useState([
        {id: 1, text: 'Task 1', completed: false},
        {id: 2, text: 'Task 2', completed: false},
        {id: 3, text: 'Task 3', completed: false},
    ]);

    // function to handle the addition of tasks
    // add a handler for handling task
    const handleAddTask = () => {

        // create a new task
        const task = {
        id: tasks.length + 1,
        text: newTask,
        completed: false
        }

        // update the tasks
        setTasks([...tasks, task]);

        // reset the newTask
        setNewTask('');
    }

    return (
        <View>
              <TextInput
                placeholder="Enter a task"
                value={newTask}
                onChangeText={text => setNewTask(text)}
              />
              <Button
                title="Add Task"
                onPress={handleAddTask}
              />
            </View>
    )
}

export default ToDoForm;