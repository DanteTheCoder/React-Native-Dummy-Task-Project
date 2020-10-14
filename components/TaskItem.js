import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const TaskItem = (props) => {
  return (
    <TouchableOpacity onLongPress={props.onDelete.bind(this, props.id)}>
      <View style={styles.listElement}>
        <Text>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listElement: {
    borderColor: "black",
    padding: 10,
    backgroundColor: "gainsboro",
  },
});

export default TaskItem;
