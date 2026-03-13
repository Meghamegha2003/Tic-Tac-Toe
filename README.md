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

- **Player vs Computer Tic-Tac-Toe**
- Player plays as **X**
- Machine (AI) plays as **O**
- Tracks current player
- Automatically generates machine moves
- Checks for **winner or draw**
- Reset game functionality
- Game state persists in `localStorage`

### Clean Architecture Layers

- **Domain** → Core game logic and rules
- **Application** → Controller handling game flow
- **Infrastructure** → Storage implementation (`localStorage`)
- **Presentation** → React UI components
- **State Management** → React Context (`store.js`)

---

## 🤖 Player vs Machine

The game works as follows:

1. The **player clicks a square** to place **X**.
2. The game checks for a winner.
3. If the game is not finished, the **machine automatically places O**.
4. The game checks again for a winner or draw.

### Game Flow

```
Player Move (X)
↓
Check Winner
↓
Machine Move (O)
↓
Check Winner

```

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
