# ⚡ Lightning Quiz (Quiz Éclair)

A single-screen, no-account mobile quiz app for quick knowledge reviews on the go — built for learners at an online training center to use during their breaks.

## 📖 Overview

No sign-up, no menus, no friction. The learner opens the app, picks one of three categories, answers 5 quick multiple-choice questions, and sees their score — all without navigating between screens.

**Key figures**
- 15 preset questions across 3 categories
- 5 questions per category
- 1 question displayed at a time
- 4 answer options per question
- Progress bar throughout (Question 1/5, Question 2/5, etc.)
- Instant green/red feedback after each answer
- Final score and encouragement message
- Start again button
- No account or authentication
- No navigation between multiple screens

## 🧩 Problem It Solves

Many educational apps require an account, profile, or persistent cloud connection for what should be a quick review exercise.

Lightning Quiz removes that friction:

**Open → Choose a category → Answer → Get your score.**

The goal is to provide a simple and fast learning experience that can be completed during a short break.

## 🛠️ Tech Stack

- **Frontend:** React Native + Expo
- **Backend:** Node.js + Express
- **API:** REST API
- **Architecture:** MVC-inspired backend + component-based frontend
- **Data:** JSON file — no database required for this MVP
- **State:** React useState
- **HTTP:** fetch or Axios
- **Authentication:** None
- **Persistence:** None required for the MVP

## 📁 Project Structure

```
quiz-eclair-rn/
│
├── backend/
│   ├── models/
│   │   └── questionModel.js
│   │
│   ├── controllers/
│   │   └── quizController.js
│   │
│   ├── routes/
│   │   └── quizRoutes.js
│   │
│   ├── data/
│   │   └── questions.json
│   │
│   ├── server.js
│   ├── package.json
│   └── .env
│
├── frontend/
│   ├── App.jsx
│   │
│   ├── screens/
│   │   └── QuizScreen.jsx
│   │
│   ├── components/
│   │   ├── CategorySelector.jsx
│   │   ├── QuestionCard.jsx
│   │   ├── ProgressBar.jsx
│   │   ├── AnswerFeedback.jsx
│   │   └── ResultCard.jsx
│   │
│   ├── services/
│   │   └── api.js
│   │
│   └── package.json
│
└── README.md
```

### Component responsibilities

| File | Responsibility |
|---|---|
| `App.jsx` | Application entry point and theme configuration |
| `QuizScreen.jsx` | Holds the quiz state and orchestrates the components |
| `CategorySelector.jsx` | Displays the 3 categories |
| `QuestionCard.jsx` | Displays the current question and 4 answer options |
| `ProgressBar.jsx` | Displays quiz progress |
| `AnswerFeedback.jsx` | Displays correct/incorrect feedback |
| `ResultCard.jsx` | Displays the final score and Start Again button |

## 🔌 API Endpoints

### Get available categories

```
GET /api/categories
```

Returns the three available quiz categories.

Example:
```json
[
  "general",
  "logic",
  "entertainment"
]
```

### Get questions by category

```
GET /api/questions/:category
```

Example:
```
GET /api/questions/logic
```

Returns the 5 questions belonging to the selected category.

Example response:
```json
[
  {
    "id": 1,
    "question": "What comes next in the sequence: 2, 4, 8, 16, ?",
    "options": [
      "18",
      "24",
      "32",
      "20"
    ]
  }
]
```

The API is responsible for providing the quiz content. The React Native application is responsible for displaying the questions, collecting answers, managing progress, and displaying the result.

## 🏗️ Architecture

### Backend — MVC-inspired

The backend separates responsibilities into three main layers:

**Model (`questionModel.js`)**
- Provides access to the question data.
- Retrieves all questions.
- Retrieves questions by category.
- Retrieves available categories.
- The JSON file contains the actual question data.

**Controller (`quizController.js`)**
- Contains the application/business logic.
- Validates the requested category.
- Calls the model.
- Shapes and returns API responses.
- Handles errors.

**Routes (`quizRoutes.js`)**
- Defines the API endpoints.
- Connects HTTP requests to controller functions.
- Contains no business logic.

There is no traditional MVC View because the backend provides JSON responses consumed by the React Native application.

### Frontend — Component-based

`QuizScreen.jsx` acts as the main source of truth for the quiz state.

It manages:
- category
- questions
- currentQuestionIndex
- score
- selectedAnswer
- isLoading
- isFinished
- showFeedback

The screen conditionally renders:

```
CategorySelector
       ↓
QuestionCard
+ ProgressBar
+ AnswerFeedback
       ↓
ResultCard
```

Child components remain focused on presentation and user interaction. API requests are handled through the shared `services/api.js` layer.

## 🔄 Quiz Flow

```
Launch App
    ↓
Choose Category
    ↓
Load Questions from Backend
    ↓
Loading Indicator
    ↓
Display Question 1/5
    ↓
User Selects Answer
    ↓
Green / Red Feedback
    ↓
Automatically Move to Next Question
    ↓
Display Question 2/5
    ↓
        ...
    ↓
Display Question 5/5
    ↓
Calculate Final Score
    ↓
Display Result
    ↓
Start Again
```

## 🚀 Getting Started

### Prerequisites

Make sure you have installed:
- Node.js
- npm
- Expo CLI / Expo tooling
- Expo Go on a physical device, or an Android/iOS simulator

### 1. Clone the repository

```bash
git clone <repository-url>
cd quiz-eclair-rn
```

### 2. Start the backend

```bash
cd backend
npm install
npm start
```

The API should run on:

```
http://localhost:3000
```

For development with Nodemon:

```bash
npm run dev
```

### 3. Start the frontend

Open another terminal:

```bash
cd frontend
npm install
npx expo start
```

Then scan the QR code with Expo Go or launch the application on a simulator.

### ⚠️ Physical device configuration

When testing the React Native application on a physical phone, do not use:

```
http://localhost:3000
```

Your phone's localhost refers to the phone itself.

Instead, use your computer's local network IP address:

```
http://192.168.1.20:3000
```

Update the API base URL in:

```
frontend/services/api.js
```

Example:

```js
const API_URL = "http://192.168.1.20:3000";
```

Your computer and phone must be connected to the same local network.

## 🎨 UI / UX Requirements

The application follows the Figma design created before implementation.

### Design states

The interface contains three main states:

**Category Selection**
- App title
- Short description
- Three category buttons
- Start quiz action

**Current Question**
- Progress indicator
- Question text
- Four answer options
- Correct/incorrect visual feedback
- Automatic transition to the next question

**Result**
- Final score
- Encouragement message
- Start Again button

### Design principles
- Warm and minimal visual style
- Three-color palette
- Strong accent colors for correct/incorrect answers
- Clear typography
- Large touch targets
- Simple interaction
- No unnecessary navigation

## ✅ MVP Scope Checklist

### Frontend
- [ ] Category selector with 3 categories
- [ ] Question card
- [ ] 4 answer options
- [ ] Correct/incorrect feedback
- [ ] Automatic transition to next question
- [ ] Progress bar
- [ ] Question X/5 indicator
- [ ] Score calculation
- [ ] Result card
- [ ] Encouragement message
- [ ] Start Again button
- [ ] Loading indicator
- [ ] API error handling

### Backend
- [ ] Express server
- [ ] REST API
- [ ] 3 categories
- [ ] 15 questions
- [ ] 5 questions per category
- [ ] Categories endpoint
- [ ] Questions-by-category endpoint
- [ ] Input/category validation
- [ ] JSON question data
- [ ] CORS configuration

### General
- [ ] No authentication
- [ ] No account creation
- [ ] No database required
- [ ] No multi-screen navigation
- [ ] Responsive mobile UI
- [ ] Android testing
- [ ] iOS testing where available
- [ ] GitHub repository
- [ ] README documentation

## 📦 Out of Scope

The following features are intentionally excluded from the MVP:
- User accounts
- Authentication
- User profiles
- Database
- Admin dashboard
- Question management interface
- Leaderboards
- Online user statistics
- Persistent score history
- Cloud synchronization
- Push notifications

### Optional Bonus

If the core MVP is completed ahead of schedule, local score persistence can be added using AsyncStorage.

This is not required for the initial version.

## 📅 Development Plan

### Day 1 — Setup & Design
- GitHub repository
- React Native / Expo setup
- Backend initialization
- Figma design
- Project architecture

### Day 2 — Backend & API
- Express server
- Question JSON data
- Model
- Controllers
- Routes
- Categories endpoint
- Questions endpoint

### Day 3 — Quiz Core
- Quiz screen
- Category selector
- Question card
- Progress bar
- API integration
- Score logic

### Day 4 — Feedback & Results
- Answer feedback
- Automatic question transition
- Result card
- Start Again
- Loading states
- Error handling
- Final UI styling

### Day 5 — Testing & Delivery
- Functional testing
- Edge-case testing
- Android/iOS testing
- UI cleanup
- Code cleanup
- README update
- Final GitHub delivery

## 📌 Project Status

**Status:** MVP Development

**Stack:** React Native (Expo) + Node.js + Express

**Target:** Simple, fast, no-account quiz experience for learners.
