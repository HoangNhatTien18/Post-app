import { Image, StyleSheet, Text, View, FlatList, ToastAndroid, ActivityIndicator, RefreshControl } from 'react-native'
import React, { useEffect, useState } from 'react'
import ItemListNews from './ItemListNews'
import AxiosIntance from '../ultill/AxiosIntance'
import { SafeAreaView } from 'react-native-safe-area-context'

const Home = (props) => {
  const {navigation} = props;
  const [dataNe, setdataNe] = useState([]); 
  const [isLoading, setisLoading] = useState(true);
  const [refresh, setrefresh] = useState(false);
  useEffect(() => {
    
    getNews(); 

    return () => {

    }
  }, [])

  const getNews = async () => {
      const response = await AxiosIntance().get("/articles");
      console.log(response.error);
    
      if(response.error == false){
        setdataNe(response.data);
        setisLoading(false);
      }else{
        ToastAndroid.show("Lấy dữ liệu thất bại", ToastAndroid.SHORT);
      }
    }

  const onRefesh = () =>{
    setrefresh(true);
    setTimeout(() => {
      setrefresh(false);
    },1000)
    setdataNe([]);
    getNews();
  }
  
  return (
    <SafeAreaView style={{flex: 1, margin: 16}}>
      <View style={styles.container}>
      {
        isLoading == true ? (<View> 
          <Text style={styles.textLoading}>Loading...</Text>
          <ActivityIndicator style={styles.activityhIndicator} size='large' color='blue'/>
        </View>) : (
           <FlatList
           data={dataNe}
           renderItem={({item}) => <ItemListNews data={item} navigation={navigation}/>}
           keyExtractor={item => item._id}
           showsVerticalScrollIndicator={false}
           refreshControl={
             <RefreshControl
              refreshing={refresh}
              onRefresh={()=> onRefesh()}
             />
           }
         />
        )
      }
     
    </View>
    </SafeAreaView>
    
  )
}

export default Home

const styles = StyleSheet.create({
    container:{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
     
    },
   activityIndicator:{
     justifyContent: 'center',
     alignItems: 'center',
   },
   textLoading:{
     marginTop: 30,
   }
})
