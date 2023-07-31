import { Button, Pressable, StyleSheet, Text, TextInput, TouchableHighlight, View , Image, ToastAndroid} from 'react-native'
import React,{useContext, useEffect, useState} from 'react'
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { styles } from '../styles';
import AxiosIntance from '../ultill/AxiosIntance';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AppContext } from '../ultill/AppContext';


const Login = (props) => {
  const {navigation} = props
  //check login
  const {setisLogin} = useContext(AppContext)
  //click button login
  const clickSignUp = ()=>{
    navigation.navigate('Register')
  }
  


  const [emailUser, setemailUser] = useState("");
  const [passwordUser, setpasswordUser] = useState("");

  // const dangnhapne = async () => {
  //   try {
  //     const response = await AxiosIntance().post("/auth/login",{email: emailUser, password: passwordUser});
    
  //     if(response.error == false){
  //       //console.log(response.data.token);
  //       await AsyncStorage.setItem("token", response.data.token);
  //       ToastAndroid.show("Đăng nhập thành công", ToastAndroid.SHORT);
  //       setisLogin(true);
  //     }else{
  //       ToastAndroid.show("Đăng nhập thất bại", ToastAndroid.SHORT);
  //     }
  //   }catch(e){
  //     console.log(e);
  //   }
  // }
  const dangnhapne = async () => {
    try {
      const response = await AxiosIntance().post('/loginStored',{email: emailUser, password: passwordUser});
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    
    dangnhapne();
   
  },)
  
  return (
    <View style={styles.container}>
      <View style={styles.container1}>
      <Text style={styles.textLogin}>Login{'\n'} Welcome back!</Text>
      <TextInput style={styles.textInput} placeholder='Enter Your Username / Email' onChangeText={setemailUser}/>
      <TextInput 
        style={[styles.textInput,{marginTop:28}]} 
        
    
        secureTextEntry={true} 
        placeholder='Enter Your Password' 
        onChangeText={setpasswordUser}/>
      
      <View style={[styles.viewRemember, {justifyContent: 'space-between', marginTop:18}]}>
        <View style={styles.viewRemember}>
          <BouncyCheckbox fillColor='black'/>
          <Text>Remember me</Text>
        </View>
        <Text style={styles.forgotPass}>Forgot Password?</Text>
      </View>

      <Pressable onPress={dangnhapne} style={styles.btnLogin}>
        <Text style={styles.btnTextLogin}>Login</Text>
      </Pressable>

      <View style={[styles.viewRemember,{justifyContent: 'center',marginTop: 16}]}>
        <Text>Don't have an account?</Text> 
        <Text onPress={clickSignUp} style={styles.signup}>  Signup</Text>
      </View>
      <View style={styles.orAndStrikethrough}>
        <Text style={styles.strikethrough}></Text>
        <Text style={styles.or}>Or</Text>
        <Text style={styles.strikethrough}></Text>
      </View>
      <Pressable style={styles.buttonFacebook}>
        <Image style={[styles.imageScoial,{marginTop:9}]} source={require('./images/ic_fb.png')}/>
        <Text style={styles.textFacebook}>Login with Facebook</Text>
      </Pressable>
      <Pressable style={styles.buttonGoogle}>
        <Image style={[styles.imageScoial,{marginTop:9}]} source={require('./images/ic_gg.png')}/>
        <Text style={styles.textGoogle}>Login with Google</Text>
      </Pressable>
      </View>
      
    </View>
  )
}

export default Login
