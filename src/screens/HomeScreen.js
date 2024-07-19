// src/screens/HomeScreen.js
import React from 'react';
import { View, Text } from 'react-native';
import ChatbotDiary from '../components/ChatbotDiary';
import MedicalPaperSummary from '../components/MedicalPaperSummary';
import WorkoutPlanner from '../components/WorkoutPlanner';
import FitnessStats from '../components/FitnessStats';

const HomeScreen = () => {
  return (
    <View>
      <Text>Home Screen</Text>
      <ChatbotDiary />
      <MedicalPaperSummary />
      <WorkoutPlanner />
      <FitnessStats />
    </View>
  );
};

export default HomeScreen;