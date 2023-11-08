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

  //state variable for the new task
  const [newTask, setNewTask] = React.useState('');

  //state variable for addition of tasks
  const [tasks, setTasks] = React.useState([
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
                onChange={text => setNewTask(text)}>
                </TextInput>

                <Button 
                title='Add Task' onPress={handleAddTask}>
                </Button>

            </View>
          </Section>
          <Section title="See Your Changes">
            <ReloadInstructions />
          </Section>
          <Section title="Debug">
            <DebugInstructions />
          </Section>
          <Section title="">
            <View>
              {tasks.map(task => (
                <View key={task.id}>
                  <Pressable>
                    <Text>{task.text}</Text>
                  </Pressable>
                  
                </View>
              ))}
            </View>
          </Section>
          <LearnMoreLinks />
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
