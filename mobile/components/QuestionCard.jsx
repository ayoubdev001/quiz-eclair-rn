import { View, Text, Pressable, StyleSheet } from "react-native";

export default function QuestionCard({ question, onAnswer, disabled }) {
  return (
    <View style={styles.container}>
      <Text style={styles.question}>
        {question.question}
      </Text>

      {question.options.map((option) => (
        <Pressable
          key={option}
          style={styles.answer}
          onPress={() => onAnswer(option)}
          disabled={disabled}
          >
          <Text style={styles.answerText}>{option}</Text>
        </Pressable>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginTop: 10,
    padding:19,  
  },

  question: {
    color:"white",
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
    
  },

  answer: {
    backgroundColor: "#eee",
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },

  answerText: {
    fontSize: 18,
  },
});
