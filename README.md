# Character Counter Component

A simple and responsive character, word, and reading time counter built with React, TypeScript, and Tailwind CSS. This project demonstrates data flow, state management, and clear component separation.

🔗 **Live Demo:** https://natalymelnichuk.github.io/character-counter/

## 🚀 Features

* **Real-time Metrics:** Instant calculation of total characters, word count, and estimated reading time.
* **Limit Validation:** Visual status indicator for word counts (highlights count in red if outside the 25–100 word range).
* **Formatted Time Display:** Formats total reading time as `M:SS`.

## 🛠️ Architecture & Data Flow

Built following the "Thinking in React" methodology with three core components:

1. **`CharacterCounter.tsx` (State Manager / Parent)**
   * Holds the central text state via `useState`.
   * Executes statistic calculation logic (`calculateStats`).
   * Passes data down through **props** and receives user events back via **callback functions**.

2. **`TextInput.tsx` (Input Layer / Child)**
   * Presentational input component for user text entry.
   * Emits input updates to the parent component using the `onTextChange` callback.

3. **`StatsDisplay.tsx` (Presentation Layer / Child)**
   * Displays calculated metrics (Characters, Words, Reading Time).
   * Validates word count against bounds (`minWords={25}`, `maxWords={100}`) to dynamically apply styling.

## 📐 Tech Stack

* **React** (Hooks, Props, Component Composition)
* **TypeScript** (Strict typing for props and internal stats structures)
* **Tailwind CSS** (Utility-first styling and layout)


