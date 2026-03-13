# Tic-Tac-Toe Game (React + Clean Architecture)

A modular Tic-Tac-Toe game built with **React** following **Clean Architecture principles**, including a simple `store.js` for state management and `localStorage` persistence.  

---

## 📂 Project Structure
```
src
│
├── domain
│ ├── entities
│ │ └── Game.js
│ └── usecases
│ ├── makeMove.js
│ ├── checkWinner.js
│ └── resetGame.js
│
├── application
│ └── GameController.js
│
├── infrastructure
│ └── storage.js
│
├── presentation
│ ├── components
│ │ ├── Board.jsx
│ │ └── Square.jsx
│ └── pages
│ └── GamePage.jsx
│
├── store.js
└── App.jsx

```
---

## ⚙ Features

- Two-player Tic-Tac-Toe game (X and O)
- Tracks current player
- Checks for winner and draw
- Reset game functionality
- Game state persists in `localStorage`
- Follows **Clean Architecture**:
  - **Domain**: core game logic
  - **Application**: controller handling actions and storage
  - **Infrastructure**: storage integration
  - **Presentation**: React UI components
- State managed with React Context (`store.js`)

---

## 🛠 Tech Stack

- React 18+
- JavaScript (ES6 modules)
- LocalStorage for persistence
- React Context for state management

---

## 🚀 Getting Started

1. **Clone the repo**  
```bash
git clone https://github.com/Meghamegha2003/Tic-Tac-Toe.git

```
