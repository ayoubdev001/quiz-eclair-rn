import { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { getCategories, getQuestions } from "../services/api.js";
import CategorySelector from "../components/CategorySelector.jsx";
import QuestionCard from "../components/QuestionCard.jsx";
import ResultCard from "../components/ResultCard.jsx";
import ProgressBar from "../components/ProgressBar.jsx";
import AnswerFeedback from "../components/AnswerFeedback.jsx";






export default function QuizScreen() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [answerResult, setAnswerResult] = useState(null);





  useEffect(() => {
    async function loadCategories() {
      try {
        const data = await getCategories();
        setCategories(data);
        setLoading(false);
      } catch (error) {
        setError("Failed to load categories. Please try again.");
        setLoading(false);
      }
    }
    loadCategories();
  }, []);


  useEffect(() => {
    if (!selectedCategory) {
     return;}

      setCurrentQuestionIndex(0);
      setQuestions([]);
      setScore(0);
      setIsFinished(false);
  async function loadQuestions() {
    try {
      const data = await getQuestions(selectedCategory);
      setQuestions(data);
    } catch (error) {
      setError("Failed to load questions. Please try again.");
    }
  }
  loadQuestions();
}, [selectedCategory]);


  if (loading) {
    return (
      <View>
        <Text style={{color:"white", alignSelf:"center"}}>Loading...</Text>
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

    const currentQuestion = questions[currentQuestionIndex];

    function handleAnswer(answer) {
       if (!currentQuestion) {
     return;}
       if (answer === currentQuestion.answer) {
        setAnswerResult("correct");
    setScore((previousScore) => previousScore + 1);}
       else {
    setAnswerResult("wrong");}
    }


    function handleNext() {
  setAnswerResult(null);
  if (currentQuestionIndex < questions.length - 1) {
    setCurrentQuestionIndex((previousIndex) => previousIndex + 1);
  } else {
    setIsFinished(true);
  }
}


    function handleRestart() {
  setSelectedCategory(null);
  setQuestions([]);
  setCurrentQuestionIndex(0);
  setScore(0);
  setIsFinished(false);
  setAnswerResult(null);
  }


 if (isFinished) {
  return (
    <ResultCard
      score={score}
      total={questions.length}
      onRestart={handleRestart}
    />
  );
}

  return (
    <View>
        {!selectedCategory && (
      <CategorySelector
        categories={categories}
        onSelectCategory={setSelectedCategory}
      /> )}

    {currentQuestion && (
    <>
        <ProgressBar
           current={currentQuestionIndex + 1}
           total={questions.length}
        />

        <QuestionCard
           question={currentQuestion}
           onAnswer={handleAnswer}
           disabled={answerResult !== null}
        />
        {answerResult && (
        <AnswerFeedback result={answerResult} onNext={handleNext} />)}

    </>
      )}


    </View>
  );
}
