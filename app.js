// Question bank.
// Edit or add entries to match his study packet.

const QUESTIONS = [
  {
    topic: "Articles of Confederation",
    question: "What was one major weakness of the Articles of Confederation?",
    answer: "The national government could not tax, which made it hard to raise money or pay debts.",
    hint: "Think money and power."
  },
  {
    topic: "Articles of Confederation",
    question: "Under the Articles of Confederation, how many branches of government existed?",
    answer: "Only one branch, a legislative branch called Congress.",
    hint: "No separate president or courts yet."
  },
  {
    topic: "Constitutional Convention",
    question: "Where and when was the Constitutional Convention held?",
    answer: "In Philadelphia in 1787.",
    hint: "City of Brotherly Love."
  },
  {
    topic: "Constitutional Convention",
    question: "What was the original goal of the Constitutional Convention?",
    answer: "To revise the Articles of Confederation, but it ended with a new Constitution.",
    hint: "Started as a fix, became a rewrite."
  },
  {
    topic: "Great Compromise",
    question: "What problem did the Great Compromise solve?",
    answer: "It balanced representation between large and small states by creating a Senate with equal representation and a House based on population.",
    hint: "Two houses."
  },
  {
    topic: "Three Fifths Compromise",
    question: "How did the Three Fifths Compromise count enslaved people?",
    answer: "Three of every five enslaved people counted toward a state’s population for representation and taxes.",
    hint: "Not all, not none."
  },
  {
    topic: "Federalists vs Anti-Federalists",
    question: "What did Federalists want?",
    answer: "A stronger national government and ratification of the Constitution as written.",
    hint: "Federal equals national."
  },
  {
    topic: "Federalists vs Anti-Federalists",
    question: "Why did Anti-Federalists oppose the Constitution at first?",
    answer: "They feared a strong central government and wanted a Bill of Rights to protect individual freedoms.",
    hint: "Worried about lost rights."
  },
  {
    topic: "Bill of Rights",
    question: "What is the Bill of Rights?",
    answer: "The first ten amendments to the Constitution that protect individual rights and freedoms.",
    hint: "First ten."
  },
  {
    topic: "Bill of Rights",
    question: "Why was the Bill of Rights added to the Constitution?",
    answer: "To win support from Anti-Federalists by guaranteeing key rights such as speech, religion, and fair trials.",
    hint: "A promise of protections."
  }
];

let state = {
  currentIndex: 0,
  showAnswer: false,
  quizIndex: 0,
  quizOrder: [],
  quizScore: 0,
  quizAnswered: false,
  selectedTopic: "All Topics"
};

// Helpers

function getTopics() {
  const set = new Set(QUESTIONS.map(q => q.topic));
  return ["All Topics", ...Array.from(set).sort()];
}

function getFilteredQuestions() {
  if (state.selectedTopic === "All Topics") return QUESTIONS;
  return QUESTIONS.filter(q => q.topic === state.selectedTopic);
}

// Flashcards

function renderTopicFilter() {
  const select = document.getElementById("topicFilter");
  select.innerHTML = "";
  getTopics().forEach(topic => {
    const opt = document.createElement("option");
    opt.value = topic;
    opt.textContent = topic;
    if (topic === state.selectedTopic) opt.selected = true;
    select.appendChild(opt);
  });

  select.addEventListener("change", () => {
    state.selectedTopic = select.value;
    state.currentIndex = 0;
    state.showAnswer = false;
    renderFlashcard();
  });
}

function renderFlashcard() {
  const list = getFilteredQuestions();
  const cardTopic = document.getElementById("cardTopic");
  const cardQuestion = document.getElementById("cardQuestion");
  const cardAnswer = document.getElementById("cardAnswer");
  const cardHint = document.getElementById("cardHint");
  const counter = document.getElementById("cardCounter");

  if (list.length === 0) {
    cardTopic.textContent = "";
    cardQuestion.textContent = "No cards for this topic yet.";
    cardAnswer.textContent = "";
    cardAnswer.classList.remove("visible");
    cardHint.textContent = "";
    counter.textContent = "";
    return;
  }

  const item = list[state.currentIndex];

  cardTopic.textContent = item.topic;
  cardQuestion.textContent = item.question;
  cardAnswer.textContent = item.answer;
  cardHint.textContent = item.hint ? "Memory tip: " + item.hint : "";
  counter.textContent = `Card ${state.currentIndex + 1} of ${list.length}`;

  if (state.showAnswer) {
    cardAnswer.classList.add("visible");
  } else {
    cardAnswer.classList.remove("visible");
  }
}

function setupFlashcardControls() {
  document.getElementById("prevCard").addEventListener("click", () => {
    const list = getFilteredQuestions();
    if (state.currentIndex > 0) {
      state.currentIndex -= 1;
      state.showAnswer = false;
      renderFlashcard();
    }
  });

  document.getElementById("nextCard").addEventListener("click", () => {
    const list = getFilteredQuestions();
    if (state.currentIndex < list.length - 1) {
      state.currentIndex += 1;
      state.showAnswer = false;
      renderFlashcard();
    }
  });

  document.getElementById("toggleAnswer").addEventListener("click", () => {
    state.showAnswer = !state.showAnswer;
    renderFlashcard();
  });
}

// Quiz

function shuffleArray(arr) {
  const copy = arr.slice();
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function startQuiz() {
  const list = getFilteredQuestions();
  state.quizOrder = shuffleArray(list.map((_, index) => index));
  state.quizIndex = 0;
  state.quizScore = 0;
  state.quizAnswered = false;
  renderQuizQuestion();
}

function renderQuizQuestion() {
  const list = getFilteredQuestions();
  const quizQuestion = document.getElementById("quizQuestion");
  const quizOptions = document.getElementById("quizOptions");
  const quizFeedback = document.getElementById("quizFeedback");
  const quizProgress = document.getElementById("quizProgress");
  const quizTopic = document.getElementById("quizTopic");
  const quizScore = document.getElementById("quizScore");

  quizOptions.innerHTML = "";
  quizFeedback.textContent = "";

  if (list.length === 0) {
    quizQuestion.textContent = "No questions available for this topic.";
    quizProgress.textContent = "";
    quizTopic.textContent = "";
    quizScore.textContent = "";
    return;
  }

  const indexInList = state.quizOrder[state.quizIndex];
  const item = list[indexInList];

  quizQuestion.textContent = item.question;
  quizTopic.textContent = item.topic;
  quizProgress.textContent = `Question ${state.quizIndex + 1} of ${state.quizOrder.length}`;
  quizScore.textContent = `Score: ${state.quizScore}`;

  // Build answer choices
  const wrongChoices = shuffleArray(
    list.filter((q, i) => i !== indexInList).map(q => q.answer)
  ).slice(0, 3);

  const allChoices = shuffleArray([item.answer, ...wrongChoices]);

  state.quizAnswered = false;

  allChoices.forEach(choiceText => {
    const btn = document.createElement("button");
    btn.textContent = choiceText;
    btn.addEventListener("click", () => handleQuizChoice(btn, choiceText, item.answer));
    quizOptions.appendChild(btn);
  });
}

function handleQuizChoice(button, chosenText, correctAnswer) {
  if (state.quizAnswered) return;

  const optionsContainer = document.getElementById("quizOptions");
  const buttons = optionsContainer.querySelectorAll("button");
  buttons.forEach(btn => btn.disabled = true);

  const quizFeedback = document.getElementById("quizFeedback");

  if (chosenText === correctAnswer) {
    button.classList.add("selected", "correct");
    quizFeedback.textContent = "Nice work. That is correct.";
    state.quizScore += 1;
  } else {
    button.classList.add("selected", "incorrect");
    quizFeedback.textContent = "Not quite. Correct answer: " + correctAnswer;
  }

  state.quizAnswered = true;
  document.getElementById("quizScore").textContent =
    `Score: ${state.quizScore}`;
}

function setupQuizControls() {
  document.getElementById("nextQuestion").addEventListener("click", () => {
    const list = getFilteredQuestions();
    if (list.length === 0) return;

    state.quizIndex += 1;
    if (state.quizIndex >= state.quizOrder.length) {
      // Restart
      startQuiz();
    } else {
      renderQuizQuestion();
    }
  });
}

// Tabs

function setupTabs() {
  const flashTab = document.getElementById("flashcardsTab");
  const quizTab = document.getElementById("quizTab");
  const flashView = document.getElementById("flashcardsView");
  const quizView = document.getElementById("quizView");

  flashTab.addEventListener("click", () => {
    flashTab.classList.add("active");
    quizTab.classList.remove("active");
    flashView.classList.remove("hidden");
    quizView.classList.add("hidden");
  });

  quizTab.addEventListener("click", () => {
    quizTab.classList.add("active");
    flashTab.classList.remove("active");
    flashView.classList.add("hidden");
    quizView.classList.remove("hidden");
    startQuiz();
  });
}

// Initialize

document.addEventListener("DOMContentLoaded", () => {
  renderTopicFilter();
  setupFlashcardControls();
  setupQuizControls();
  setupTabs();
  renderFlashcard();
});
