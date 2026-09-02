import { View, StyleSheet, Image, ScrollView } from "react-native";
import QuizScreen from "../screens/QuizScreen"
import logo from "../assets/images/logo.png"

export default function Index() {
  return (
    <ScrollView style={styles.container}>
    <Image style={styles.logo}
        source={logo}/>
      <QuizScreen/>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:"#0f046d",
    flex: 1,
    
   
    
  },
  logo:{
    margin:40,
    height:150,
    width:250,
    alignSelf:"center",
  }
});
