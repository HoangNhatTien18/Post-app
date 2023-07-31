import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  ToastAndroid,
  ActivityIndicator
} from "react-native";
import React,{useState} from "react";
import { launchCamera, launchImageLibrary } from "react-native-image-picker";
import * as ImagePicker from 'expo-image-picker';
import AxiosIntance from '../ultill/AxiosIntance'

const PostNews = () => {
    const [image, setimage] = useState(null);
    const [title, settitle] = useState("");
    const [content, setcontent] = useState("");
    const [isLoading, setisLoading] = useState(true);

    const capture = async () => {
       
          const result = await ImagePicker.launchImageLibraryAsync();
          console.log(result.assets[0].uri);

          const formdata = new FormData();
          formdata.append('image', {
            uri: result.assets[0].uri,
            type: 'image/jpeg',
            name: 'image.jpg',
          })
          const response = await AxiosIntance("multipart/form-data").post('/media/upload', formdata);
          console.log(response.data.path);
          if(response.error == false){
            setimage(response.data.path);
            ToastAndroid.show("Lấy ảnh thành công", ToastAndroid.SHORT);
            setisLoading(false);
          }else{
            ToastAndroid.show("Lấy ảnh thất bại", ToastAndroid.SHORT);
          }
    };

    const post = async () => {
        const response = await AxiosIntance().post("/articles", {title: title, content: content, image: image});
        if(response.error == false){
          ToastAndroid.show("Đăng tin thành công", ToastAndroid.SHORT);
        }else{
          ToastAndroid.show("Đăng tin thất bại", ToastAndroid.SHORT);
        }
    }

  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>Title: </Text>
      <TextInput style={styles.textInput} onChangeText={settitle} placeholder="Enter title" />
      <Text style={styles.textTitle}>Content: </Text>
      <TextInput style={styles.textInput} onChangeText={setcontent} placeholder="Enter content" />
      <Text style={styles.textTitle}>Chọn ảnh: </Text>
      <Button title="chọn ảnh" onPress={capture} />
      <View>
        {
          isLoading == true ? (<View style={styles.ActivityIndicator}>
            
          </View>) : (
            <View>
              <Image style={styles.images} source={{uri: image}}/> 
              <Button style={styles.btnPost} title="Post" onPress={post}/>
            </View>
            
          )
        }
      </View>
      
    </View>
  );
}

export default PostNews;

const styles = StyleSheet.create({
  container: {
    margin: 16,
    
  },
  textTitle: {
    fontWeight: "bold",
    fontSize: 20,
    marginTop: 20,
  },
  textInput: {
    marginStart: 30,
  },
  images:{
    width: '100%',
    height: 200,
    
  },
  btnPost:{
    marginTop: 100,
  },
  ActivityIndicator:{
    alignItems: 'center',
   
  }
  
});
