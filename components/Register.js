import { StyleSheet, Text, View, TextInput, Pressable, Image, ToastAndroid} from 'react-native'
import React, {useState} from 'react'
import { styles } from '../styles'
import AxiosIntance from '../ultill/AxiosIntance'

const Register = (props) => {
  const {navigation} = props
  const clickLogin = ()=>{
    navigation.navigate('Login')
  }
  const [nameUser, setnameUser] = useState("");
  const [emailUser, setemailUser] = useState("");
  const [passwordUser, setpasswordUser] = useState("");

  const dangkyne = async ()=> {
    console.log(nameUser,emailUser,passwordUser);
    try{
        const response = await AxiosIntance().post("/users/register", {email: emailUser, password: passwordUser});
        console.log(response);
        if(response.error == false){
          ToastAndroid.show("Đăng ký thành công", ToastAndroid.SHORT);
          navigation.navigate('Login')
        }else{
          ToastAndroid.show("Đăng ký thất bại", ToastAndroid.SHORT);
        }
    }catch{
      console.log("e");
    }
  }
  return (
    <View style={styles.container}>
      <View style={styles.container1}>
      <Text style={styles.textLogin}>Signup</Text>
      <TextInput style={styles.textInput} placeholder='Enter Your Username' onChangeText={setnameUser}/>
      <TextInput style={[styles.textInput,{marginTop:28}]} placeholder='Enter Your Email' onChangeText={setemailUser}/>
      <TextInput style={[styles.textInput,{marginTop:28}]} placeholder='Enter Your Password' onChangeText={setpasswordUser}/>
      
      <Pressable onPress={dangkyne} style={[styles.btnLogin,{marginTop: 25}]}>
        <Text style={styles.btnTextLogin}>Signup</Text>
      </Pressable>

      <View style={[styles.viewRemember,{justifyContent: 'center',marginTop: 16}]}>
        <Text>Already have an account? </Text> 
        <Text onPress={clickLogin} style={styles.signup}>  Login</Text>
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

export default Register

const styles1 = StyleSheet.create({
    
    
})