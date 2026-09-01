import { useState, useEffect } from "react";
import { getCategories } from "../services/api.js";
import { View, Text } from "react-native";

export default function QuizScreen() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    async function loadCategories() {
      try {
        const data = await getCategories();
        setCategories(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setError("Failed to load categories. Please try again.");
        setLoading(false);
      }
    }

    loadCategories();
  }, []);

  if (loading) {
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View>
        <Text>{error}</Text>
      </View>
    );
  }

  return (
    <View>
      <Text>{JSON.stringify(categories)}</Text>
    </View>
  );
}
