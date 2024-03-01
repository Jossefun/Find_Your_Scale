import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import HomeStack from './routes/homeStack';
//import MyDrawer from './routes/drawer';


export default function App() {
    
  return (
    <NavigationContainer>  
        <HomeStack />     
    </NavigationContainer>  
    
  )
};
