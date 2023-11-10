



import {
    View,
    TextInput,
    Button,
} from 'react-native';



function TodoForm({ newTask, setNewTask, handleAddTask }) {
  

  return (
    
    <View>
        <TextInput
        placeholder='Enter a task'
        onChangeText={(text) => setNewTask(text)}
        value = {newTask}
        >
        </TextInput>

        <Button 
        title='Add Task'
        onPress={handleAddTask}>
        </Button>

    </View>

  );
}

export default TodoForm;