/**
 * Sample React Native App
 * To do List App
 *
 * @format
 */

import React, { Component, useState} from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Pressable,
  Text,
  useColorScheme,
  View,
  TextInput,
  Button
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): JSX.Element {
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

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  // state variable for tasks
  const [tasks, setTasks] = useState([
    {id: 1, text: 'Task 1', completed: false},
    {id: 2, text: 'Task 2', completed: false},
    {id: 3, text: 'Task 3', completed: false},
  ]);
  // state variable for new task
  const [newTask, setNewTask] = useState('');

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };


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
