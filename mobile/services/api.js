

const API_URL = "http://192.168.1.137:3000/api";

export async function getCategories() {
    const response = await fetch(`${API_URL}/categories`);
    if(!response.ok) {
        throw new Error("Failed to fetch categories");
    }
    const data = await response.json();
    return data;
}

export async function getQuestions(category) {
    const response = await fetch(`${API_URL}/questions/${category}`);
    if(!response.ok) {
        throw new Error("Failed to fetch questions");
    }
    const data = await response.json();
    return data;
}