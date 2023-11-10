

import {
    Text,
    View,
    Pressable,
    Button,
} from 'react-native';



function TodoList({ toDoList, handleCompleteTask }){


    return(
        <View>
            {/*add the to do list here*/}
            {toDoList.map((task) => (
              <View
              key={task.id}
              style={{
                flexDirection: 'row',
                justifyContent:'space-between',
                marginBottom: 5,
              }}
              >
                <Pressable 
                key={task.id}
                onPress={() => handleCompleteTask(task.id)}
                style={ ({ pressed}) => [
                  {
                    backgroundColor: pressed
                      ? 'rgb(210, 230, 255)'
                      : task.isComplete
                      ? 'rgb(200, 200, 200)'
                      : 'white',
                    padding: 8,
                    flex: 1,
                  }
                ]}
                >
                  <Text>{task.text}</Text>
                </Pressable>
                <View
                style = {{width: 100}}>
                  <Button
                  title={task.isComplete ? 'Completed' : 'Complete'}
                  onPress={() => handleCompleteTask(task.id)}
                  />
                </View>
                  
              </View>
            ))}

          </View>
    )
}

export default TodoList;