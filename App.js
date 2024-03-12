import React, { useState, useEffect } from 'react';
import { Text, View , TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeStack from './routes/homeStack';
import DrawerNavigation from './routes/drawerNavigation';


export default function App() {
    
  return (
    <NavigationContainer>  
      <DrawerNavigation/>
    </NavigationContainer>  
    
  )
};
