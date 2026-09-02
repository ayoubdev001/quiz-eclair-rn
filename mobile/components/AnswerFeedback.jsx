import { View, Text, Pressable, StyleSheet } from "react-native";

export default function AnswerFeedback({ result, onNext }) {
  const isCorrect = result === "correct";

  return (
    <View style={styles.wrapper}>
      <View style={[styles.card, isCorrect ? styles.correct : styles.wrong]}>
        <Text style={styles.title}>
          {isCorrect ? "CORRECT!" : "OOPS!"}
        </Text>

        <Text style={styles.subtitle}>
          {isCorrect
            ? "Awesome! Let's move to the next one!"
            : "That wasn't it — you'll get the next one!"}
        </Text>

        <Pressable onPress={onNext} style={styles.button}>
          <Text
            style={[
              styles.buttonText,
              isCorrect ? styles.correctText : styles.wrongText,
            ]}
          >
            NEXT QUESTION
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
    paddingHorizontal:15,
    alignItems: "center",

  },
  card: {
    width: "100%",
    borderRadius: 20,
    padding: 20,
    alignItems: "center",
  },
  correct: {
    backgroundColor: "#3DCB7A",
  },
  wrong: {
    backgroundColor: "#E8446B",
  },
  title: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "800",
    letterSpacing: 1,
    marginBottom: 6,
  },
  subtitle: {
    color: "#fff",
    fontSize: 14,
    opacity: 0.9,
    textAlign: "center",
    marginBottom: 18,
  },
  button: {
    backgroundColor: "#fff",
    width: "100%",
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    fontSize: 14,
    fontWeight: "700",
    letterSpacing: 0.5,
  },
  correctText: {
    color: "#3DCB7A",
  },
  wrongText: {
    color: "#E8446B",
  },
});