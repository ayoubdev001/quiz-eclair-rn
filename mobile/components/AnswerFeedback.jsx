import { View, Text, Pressable, StyleSheet } from "react-native";

export default function AnswerFeedback({ result, onNext }) {
  const isCorrect = result === "correct";

  return (
    <View style={styles.wrapper}>
      <View style={[styles.feedbackBox, isCorrect ? styles.correct : styles.wrong]}>
        <Text style={styles.text}>
          {isCorrect ? "Correct!" : "Wrong!"}
        </Text>
      </View>

      <Pressable onPress={onNext} style={styles.nextButton}>
        <Text style={styles.buttonText}>Next Question</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 15,
    alignItems: "center",
  },
  feedbackBox: {
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    width: "100",
  },
  correct: {
    backgroundColor: "#4CAF50",
  },
  wrong: {
    backgroundColor: "#F44336",
  },
  text: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  nextButton: {
    backgroundColor: "#0011f8",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    marginTop: 10,
  },
  buttonText: {
    color: "#fdfcfc",
    fontSize: 16,
    fontWeight: "600",
  },
});