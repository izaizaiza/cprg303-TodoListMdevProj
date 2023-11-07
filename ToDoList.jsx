

import {
    ScrollView,
    Text,
    View,
    Pressable
  } from 'react-native';

function ToDoList( tasks) {


    return (
        <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
          <Section title="To Do List">
            <View>
              {tasks.map(task => (
                <Pressable>
                    <View key={task.id}>
                        <Text>{task.text}</Text>
                    </View>
                </Pressable>
              ))}
            </View>
          </Section>

        
      </ScrollView>

    )
}


export default ToDoList;