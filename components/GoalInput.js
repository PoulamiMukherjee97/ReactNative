import React, { useState } from 'react';
import { StyleSheet, View, Button, TextInput, Modal } from 'react-native';


export default GoalInput = (props) => {
  const [goal, setGoal] = useState('');
  const textChangeHandler = (text) => {
    // console.log(text);
    setGoal(text);
  }
  const addGoals = () => {
    props.addGoalHandler(goal);
    setGoal('');
    props.setShowModal(false);
  }
  return (
    <Modal visible={props.visible} animationType="fade">
      <View style={styles.goalInput}>
        <TextInput style={styles.input} placeholder="Add a goal" onChangeText={textChangeHandler} value={goal} />
        <View style={styles.btnContainer}>
          <View style={styles.btn}><Button title="CANCEL" color="red" onPress={() => props.setShowModal(false)} /></View>
          <Button title="ADD" onPress={addGoals} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  input: {
    width: '80%',
    margin: 10,
    padding: 10,
    borderColor: "black",
    borderWidth: 1,
  },
  goalInput: {
    // flexDirection: 'row',
    // marginTop: 20,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnContainer:{
    flexDirection:"row",
    justifyContent:"flex-end",
    // alignItems: "center",
    width:"80%",
  },
  btn:{
    marginRight:10,
  }
});