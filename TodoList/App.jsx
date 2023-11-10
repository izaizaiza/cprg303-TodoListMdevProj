/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import { useState } from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
  Button,
  Pressable,
  Modal,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';



function Section({children, title}){
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

function App(){
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  // create state variable to hold the to do list
  const [toDoList, setToDoList] = useState([
    {id:1, text:'Learn React Native', isComplete: false},
  ]);

  // create state variable to hold the new task
  const [newTask, setNewTask] = useState('');

  //create handler to add a task to the to do list
  const handleAddTask = () => {
    //create a new task object
    const task = {
      id: toDoList.length + 1,
      text: newTask,
      isComplete: false,
    };

    //update the to do list with the new task
    setToDoList([...toDoList, task]);

    //clear the new task
    setNewTask('');
  }


  //create handler to mark a task as complete
  const handleCompleteTask = (id) => {
    setToDoList( (prevList) => 
      prevList.map((task) => 
      task.id === id ? {...task, isComplete: !task.isComplete} : task)
    );
  };



  

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Section title="To do List">
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
          </Section>

          <Section title="Task List">
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
        </Section>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
