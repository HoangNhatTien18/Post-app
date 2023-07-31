import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import Login from '../components/Login'
import Register from '../components/Register'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AppContext } from './AppContext';
import Screen1 from '../components/Screen1';
import Home from '../components/Home';
import NewDetails from '../components/NewDetails';
import PostNews from '../components/PostNews';
import Ionic from 'react-native-vector-icons/Ionicons'
//login, register => stack
const Stack = createNativeStackNavigator();
const Users = () =>{
  return(
  <Stack.Navigator initialRouteName='Login' screenOptions={{headerShown: false}}>
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="Register" component={Register} />
  </Stack.Navigator>
  )
}

const News = () =>{
  return(
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="NewDetails" component={NewDetails}/>
    </Stack.Navigator>
  )
}

//list new, profile, new manage => tab
const Tab = createBottomTabNavigator();
const Main = ()=>{
  return(

    <Tab.Navigator 
    screenOptions={({route}) => ({
      tabBarIcon: ({focused, colour, size}) => {
        let iconName;
        if(route.name === "News"){
          iconName = focused ? 'newspaper' : 'newspaper-outline';
        }else if(route.name === "PostNews"){
          iconName = focused? 'book' : 'book-outline';
        }
        return <Ionic name={iconName} size={size} colour={colour}/>;
      },
      headerShown : false,
      activeTintColor: 'black',
      inactiveTintColor: 'black',
     
    })}
   
    
    >
      <Tab.Screen  name='News' component={News} options={{title: "News"}}/>
      <Tab.Screen  name='PostNews' component={PostNews} options={{title: "Post New"}}/>
    </Tab.Navigator>
  )
};

const AppNavigator = () => {
  const {isLogin} = useContext(AppContext);
  return (
    <>
     {
       isLogin == false ? <Users/> : <Main/>
     } 
    </>
  )
}

export default AppNavigator

const styles = StyleSheet.create({})