import { StyleSheet } from 'react-native'
import Constants from 'expo-constants';

const HomeCardStyle = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      paddingTop: Constants.statusBarHeight,
      //backgroundColor: '#ecf0f1',
      padding: 8,
      alignItems:"center"
    },
    card:{
      height:'auto',
      width:"95%",
      backgroundColor:"white",
      borderColor: '#ecf0f1',
      borderWidth: 5,
      borderRadius:15,
      elevation:10,
      padding:10,
      marginTop: 10,
    },
    profileImg:{
      width:30,
      height:30,
      borderRadius:50,
      marginRight:10,
    },
    header: {
      flexDirection:"row",
    },
    title:{
      textDecorationLine: "underline",
      textDecorationStyle: "solid",
      textDecorationColor: "#000",
      fontWeight:"bold",
      fontSize:18
    }
  });

  export default HomeCardStyle;