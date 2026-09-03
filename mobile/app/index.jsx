import { StyleSheet, Image, ScrollView } from "react-native";
import QuizScreen from "../screens/QuizScreen"
import logo from "../assets/images/logo.png"
import { LinearGradient } from 'expo-linear-gradient';

export default function Index() {
  return (
    <LinearGradient colors={["#190b3b",  "#5c35aa"]} style={styles.background}>
    <ScrollView style={styles.container}>
    <Image style={styles.logo}
        source={logo}/>
      <QuizScreen/>
    </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: { 
    flexGrow: 1,
  },
  logo:{
    margin:30,
    height:150,
    width:250,
    alignSelf:"center",
  }
});
