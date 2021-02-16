import React, { useState } from 'react';
import { Button, FlatList, StyleSheet, View } from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

export default function App() {
  const [courseGoal, setCourseGoals] = useState([])
  const [modalVisible, setModalVisible] = useState(false)

  const handleGoalSubmit = (goal) => {
    setCourseGoals(currentGoals => [...currentGoals,
    { id: Math.random().toString(), value: goal }])
    setModalVisible(false)
  }
  const handleRemoveGoal = (goalId) => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.id !== goalId)
    })
  }
  const handleCancelModal = () => {
    setModalVisible(false)
  }

  return (
    <View style={styles.screen}>
      <Button title='Add New Goal' onPress={() => setModalVisible(true)} />
      <GoalInput modalVisible={modalVisible} onGoalAdd={handleGoalSubmit} onCancel={handleCancelModal} />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoal}
        renderItem={itemData => <GoalItem title={itemData.item.value} onDelete={() => handleRemoveGoal(itemData.item.id)} />}
      />


    </View>
  );
}

const styles = StyleSheet.create({
  screen: { padding: 50 },


})

