import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  ToastAndroid,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import AxiosIntance from "../ultill/AxiosIntance";

const NewDetails = (props) => {
  const { route } = props;
  const { params } = route;
  const [title, settitle] = useState("");
  const [content, setcontent] = useState("");
  const [imageUrl, setimageUrl] = useState("");
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    const getDetails = async () => {
      const response = await AxiosIntance().get(
        "/articles/" + params.id + "/detail"
      );
      console.log(response.data[0].image);
      if (response.error == false) {
        settitle(response.data[0].title);
        setcontent(response.data[0].content);
        setimageUrl(response.data[0].image);
        setisLoading(false);
      } else {
        ToastAndroid.show("Lấy dữ liệu thất bại", ToastAndroid.SHORT);
      }
    };
    getDetails();
    return () => {};
  }, []);

  return (
    <>
      {isLoading == true ? (
        <View>
          <ActivityIndicator style={styles.loading} size="large" color='blue'/>
        </View>
      ) : (
        <ScrollView style={styles.container}>
          <Image style={styles.image} source={{ uri: imageUrl }} />
          <Text style={styles.textTitle}>{title}</Text>
          <Text>{content}</Text>
        </ScrollView>
      )}
    </>
  );
};

export default NewDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    marginTop: 20,
    width: 500,
    height: 200,
  },
  textTitle: {
    margin: 10,
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
  },
  loading:{
    marginTop: 300
  }
});
