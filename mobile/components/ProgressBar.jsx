import { View, Text, StyleSheet } from "react-native";

export default function ProgressBar({ current, total }) {
  const progress = current / total;

  return (
    <View style={styles.wrapper}>
      <Text style={styles.label}>
        Question {current} / {total}
      </Text>

      <View style={styles.background}>
        <View
          style={[
            styles.fill,
            { width: `${progress * 100}%` },
          ]}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
    marginTop: 20,
    marginBottom: 10,
    paddingHorizontal:80,
    alignSelf:"center"

  },
  label: {
    color:"white",
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 8,
  },
  background: {
    height: 10,
    backgroundColor: "#ddd",
    borderRadius: 5,
    overflow: "hidden",
  },
  fill: {
    height: 10,
    backgroundColor: "#4CAF50",
    borderRadius: 5,
  },
});