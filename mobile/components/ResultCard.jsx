import { View, Text, Pressable, StyleSheet } from "react-native";

export default function ResultCard({ score, total, onRestart }) {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>Quiz Complete!</Text>

      <Text style={styles.score}>
        Score: {score} / {total} </Text>

      <Pressable style={styles.button} onPress={onRestart}>
        <Text style={styles.buttonText}>Try Again</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
    alignItems: "center",
    marginTop: 40,
  },
  title: {
    color:"white",
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 10,
  },
  score: {
    color:"white",
    fontSize: 20,
    marginBottom: 25,
  },
  button: {
    backgroundColor: "#0011f8",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 10,
  },
  buttonText: {
    color: "#fdfcfc",
    fontSize: 18,
    fontWeight: "600",
  },
});