import { StyleSheet } from "react-native"
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: 'white',
        flexDirection: 'column'
    },
    container1:{
      backgroundColor: 'white',
      marginStart:24,
      marginEnd:24,
      flexDirection: 'column'
    },
    textLogin:{
        
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: 34,
        lineHeight: 50, 
        textAlign: 'center',
        marginTop: 100,
        color: '#000000CC'
        
    },
    textInput:{
      height:48,
      borderRadius:10,
      borderWidth:1,
      padding:10,
      marginTop:50,
      color:'#000000'
    },
    forgotPass:{
      fontWeight: '500',
      marginStart: 100,
      color:'#2F89FC',
      fontStyle: 'normal',
      fontSize: 14,
      lineHeight:21,
    },
    viewRemember:{
      flexDirection: 'row'
    },
    btnLogin:{
      height: 48,
      borderRadius: 5,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#0E64D2',
      marginTop: 15
    },
    btnTextLogin:{
      color:'#FFFFFF',
      fontWeight: 'bold'
    },
    signup:{
      color: '#2F89FC',
      fontWeight: '500'
    },
    strikethrough:{
      borderRadius: 0.5,
      height: 1,
      marginTop: 10,
      width: '40%',
      backgroundColor:'#000000'
    },
    or:{
      fontWeight: '400',
      fontSize: 14
    },
    orAndStrikethrough:{
      marginTop: 17,
      justifyContent: 'space-between',
      flexDirection: 'row'
    },
    imageScoial:{
      width: 26,
      height: 26,
    },
    buttonFacebook:{
      flexDirection: 'row',
      borderRadius:10,
      backgroundColor:'#1877F2',
      height: 48,
      marginTop: 15,
      justifyContent: 'center',
      textAlign: 'center'
    },
    buttonGoogle:{
      flexDirection: 'row',
      borderRadius:10,
      backgroundColor:'#FFFFFF',
      height: 48,
      marginTop: 15,
      borderWidth: 1,
      borderColor: '#000000',
      justifyContent: 'center',
      textAlign: 'center'
    },
    textFacebook:{
      fontSize: 15,
      width: 312,
      paddingLeft: 75,
      marginTop:13,
      fontWeight: '600',
      color: '#FFFFFF'
    },
    textGoogle:{
      fontSize: 15,
      width: 312,
      paddingLeft: 81,
      marginTop:13,
      fontWeight: '600',
      color: '#000000'
    },
    
})
export {styles}