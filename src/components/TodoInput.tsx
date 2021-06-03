import React, { useState } from 'react';
import { 
  Image, 
  Platform, 
  StyleSheet, 
  TextInput, 
  TouchableOpacity, 
  View 
} from 'react-native';

import checkIcon from '../assets/icons/Check.png';

interface TodoInputProps {
  addTask: (task: string) => void;
  darkMode: boolean;
}

export function TodoInput({ addTask, darkMode }: TodoInputProps) {
  
  const [task, setTask] = useState('');

  function handleAddNewTask(task: string) {
    addTask(task)
    setTask('')
  }

  return (
    <View style={[styles.inputContainer, Platform.OS === 'ios' ? styles.inputIOSShadow : styles.inputAndroidShadow]}>
      <TextInput 
        style={[styles.input, darkMode ? styles.inputDark : styles.inputLight]} 
        placeholder="Adicionar novo todo..."
        placeholderTextColor={darkMode ? '#E1E1E6' : '#808080' }
        returnKeyType="send"
        value={task}
        onChangeText={setTask}
        onSubmitEditing={() => handleAddNewTask(task)}
      />
      <TouchableOpacity
        testID="add-new-task-button"
        activeOpacity={0.7}
        style={[styles.addButton, darkMode ? styles.addButtonDark : styles.addButtonLight]}
        onPress={() => handleAddNewTask(task)}
      >
        <Image source={checkIcon} />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    borderRadius: 5,
    marginTop: -25,
    marginHorizontal: 40,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    paddingLeft: 12,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
  inputLight: {
    backgroundColor: '#F5F4F8',
    color: '#000'
  },
  inputDark: {
    backgroundColor: '#303030',  
    color: '#FFF'
  },
  inputIOSShadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84
  },
  inputAndroidShadow: {
    elevation: 5
  },
  addButton: {
    height: 50,
    paddingHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
  addButtonLight: {
    backgroundColor: '#3FAD27',
  },
  addButtonDark: {
    backgroundColor: '#181818',
  },
});