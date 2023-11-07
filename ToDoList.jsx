

import {
    ScrollView,
    Text,
    View,
    TextInput,
    Button
  } from 'react-native';

function ToDoList() {

    return (
        <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Section title="To Do List">
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
            <View>
              {tasks.map(task => (
                <View key={task.id}>
                  <Text>{task.text}</Text>
                </View>
              ))}
            </View>
          </Section>

        </View>
      </ScrollView>

    )
}
