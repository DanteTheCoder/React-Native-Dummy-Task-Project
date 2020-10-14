import React, { useState } from "react";
import { View, TextInput, StyleSheet, Button, Modal } from "react-native";

const TaskInput = (props) => {
  const [task, setTask] = useState("");
  const taskInputHandler = (enteredText) => {
    setTask(enteredText);
  };
  return (
    <Modal visible={props.visible}>
      <View style={styles.taskRow}>
        <TextInput
          placeholder="Task"
          style={styles.inputBox}
          onChangeText={taskInputHandler}
        />
        <Button title="+" onPress={props.onaddGoal.bind(this, task)} />
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  taskRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  inputBox: {
    width: 200,
    textAlign: "center",
    borderBottomColor: "black",
    borderBottomWidth: 1,
    marginBottom: 20,
  },
});

export default TaskInput;
