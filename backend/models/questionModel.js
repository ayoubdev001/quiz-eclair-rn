import questions from "../data/questions.json" with { type: "json" };

export function getCategories() {
          return Object.keys(questions)
}

export function getByCategory (category) {
    return questions[category];
}