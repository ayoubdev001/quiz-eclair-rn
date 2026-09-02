import { View, Text, Pressable, StyleSheet } from "react-native";

export default function CategorySelector({ categories, onSelectCategory }) {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>Choose a category</Text>

      {categories.map((category) => (
        <Pressable
          key={category}
          style={styles.categoryButton}
          onPress={() => onSelectCategory(category)}
        >
          <Text style={styles.categoryText}>{category}</Text>
        </Pressable>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
    alignItems: "center",
    marginTop: 20,
  },
  title: {
    color:"white",
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
  },
  categoryButton: {
    backgroundColor: "#e6e5e5",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginBottom: 10,
    width: "90%",
    alignItems: "center",
  },
  categoryText: {
    fontSize: 18,
    fontWeight: "600",
  },
});