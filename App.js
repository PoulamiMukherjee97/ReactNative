import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList } from 'react-native';
import GoalInput from './components/GoalInput';
import GoalList from './components/GoalList';

export default function App() {
  const [goalList, setGoalList] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const addGoalHandler = (title) => {
    // console.log('goal handler title');
    setGoalList([...goalList, { key: Math.random().toString(), value: title}]);
  };
  
  const removeListItem = (id) => {
    let goals = [...goalList];
    goals = goals.filter(goal => goal.key !== id);
    setGoalList(goals);
  };

  return (
    <View style={styles.container}>
      <View style={styles.goalButton}>
      <Button title="ADD GOAL" color="green" onPress={()=>setShowModal(true)} />
      </View>
      <GoalInput addGoalHandler={addGoalHandler} visible={showModal} setShowModal={setShowModal}/>
      <Text style={styles.heading}>Goals to Achieve !!!</Text>
      {goalList.length ? <FlatList data={goalList} renderItem={(itemData) => (<GoalList id={itemData.item.key} onDelete={removeListItem} title={itemData.item.value} />)} /> : <Text>No Goals Added</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 20,
  },
  heading:{
    marginVertical:10,
    fontSize:20,
  },
  goalButton:{
    marginTop:30,
  }
});
