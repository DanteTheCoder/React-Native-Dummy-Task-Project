import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  ScrollView,
  FlatList,
} from "react-native";

import TaskItem from "./components/TaskItem";
import TaskInput from "./components/TaskInput";

export default function App() {
  const [taskid, setTaskid] = useState(0);
  const [taskList, updateTaskList] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addGoal = (task) => {
    updateTaskList((prevtaskList) => [
      ...prevtaskList,
      { key: taskid.toString(), value: task },
    ]);
    setTaskid(taskid + 1);
  };

  const deleteTask = (id) => {
    updateTaskList((prevtaskList) => {
      return prevtaskList.filter((taskElement) => taskElement.key !== id);
    });
  };

  return (
    <View style={styles.screen}>
      <Button title="Add Goals" onPress={() => setIsAddMode(true)} />
      <TaskInput visible={isAddMode} onaddGoal={addGoal} />
      <FlatList
        data={taskList}
        renderItem={(taskElement) => (
          <TaskItem
            title={taskElement.item.value}
            id={taskElement.item.key}
            onDelete={deleteTask}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 30,
  },
});
