import React, { useState } from 'react';
import { StyleSheet, View, FlatList, Text, TouchableOpacity } from 'react-native';


export default GoalList = (props) => {
  return (
    <TouchableOpacity onPress={() => props.onDelete(props.id)}>
        <View style={styles.listItem}><Text>{props.title}</Text></View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: "olive",
    color: "black",
  }
});
