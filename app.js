
// Early Constitutional Issues study app
// Single large flashcard deck with filters and quizzes by study check

const FLASHCARDS = [
  {
    "id": "ssc1_washington_precedents",
    "section": "SSC1",
    "topic": "Washington",
    "question": "What important precedents did George Washington establish as the first president?",
    "answer": "He created a cabinet of advisers, stepped down after two terms, and set a simple, non-royal style for the presidency.",
    "hint": "These are unwritten traditions later presidents followed.",
    "context": "These precedents became part of the unwritten Constitution and shaped how the executive branch operates."
  },
  {
    "id": "ssc1_unwritten_constitution_definition",
    "section": "SSC1",
    "topic": "Unwritten Constitution",
    "question": "What is meant by the 'unwritten Constitution'?",
    "answer": "It is the set of traditions and practices, like the cabinet and political parties, that are not in the written Constitution but are part of how the government works.",
    "hint": "Think customs that act like rules even though they are not written.",
    "context": "Washington\u2019s actions and later practices helped build this unwritten layer of government."
  },
  {
    "id": "ssc1_hamilton_four_parts",
    "section": "SSC1",
    "topic": "Hamilton",
    "question": "What were the four main parts of Alexander Hamilton\u2019s economic plan?",
    "answer": "Pay off national and state war debts, create a national bank, place a tax on whiskey, and support a high protective tariff on imports.",
    "hint": "Debt, bank, whiskey, tariff.",
    "context": "Hamilton wanted to build strong national credit, strengthen the federal government, and support American industry."
  },
  {
    "id": "ssc1_whiskey_rebellion_reason",
    "section": "SSC1",
    "topic": "Hamilton",
    "question": "Why did the Whiskey Rebellion occur in western Pennsylvania?",
    "answer": "Frontier farmers were angry about the federal tax on whiskey, which they often used as money, and refused to pay it.",
    "hint": "Farmers depended on whiskey to trade.",
    "context": "Washington sending troops to stop the rebellion showed that the new federal government could and would enforce its laws."
  },
  {
    "id": "ssc1_political_parties_emerge",
    "section": "SSC1",
    "topic": "Political Parties",
    "question": "Why did political parties emerge in the 1790s?",
    "answer": "Leaders disagreed over Hamilton\u2019s economic plan and the power of the federal government, which led to Federalists and Democratic-Republicans forming to promote their ideas.",
    "hint": "Disagreements over Hamilton and federal power.",
    "context": "These rival groups became the first political parties in the United States."
  },
  {
    "id": "ssc1_merchants_benefit_federalists",
    "section": "SSC1",
    "topic": "Federalists",
    "question": "How would merchants and manufacturers benefit from Federalist economic policies?",
    "answer": "Federalist policies such as a strong national bank and protective tariffs made American goods more competitive and gave businesses reliable credit.",
    "hint": "Tariffs and a strong bank help business.",
    "context": "Hamilton\u2019s Federalist approach mainly favored wealthy merchants, bankers, and urban business interests."
  },
  {
    "id": "ssc1_washington_foreign_policy",
    "section": "SSC1",
    "topic": "Foreign Policy",
    "question": "What foreign policy did Washington support at the end of his presidency?",
    "answer": "He supported neutrality, urging the United States to avoid permanent alliances and stay out of European wars.",
    "hint": "He did not want the young nation dragged into foreign conflicts.",
    "context": "Washington\u2019s Farewell Address warned against entangling alliances and guided U.S. foreign policy for many years."
  },
  {
    "id": "ssc2_marbury_decision",
    "section": "SSC2",
    "topic": "Marbury v. Madison",
    "question": "What was the decision in Marbury v. Madison and how did it affect federal power?",
    "answer": "The Supreme Court claimed the power of judicial review, allowing it to declare laws unconstitutional, which strengthened the federal judiciary.",
    "hint": "Think 'judicial review'.",
    "context": "This case made the Supreme Court an equal branch that can check Congress and the president."
  },
  {
    "id": "ssc2_why_buy_louisiana",
    "section": "SSC2",
    "topic": "Louisiana Purchase",
    "question": "Why did the United States want to purchase the Louisiana Territory?",
    "answer": "The U.S. wanted control of the Mississippi River and the port of New Orleans for trade and to provide land for westward expansion.",
    "hint": "Think river, port, and land.",
    "context": "The purchase doubled the size of the country and opened the West to settlement."
  },
  {
    "id": "ssc2_napoleon_sell_reason",
    "section": "SSC2",
    "topic": "Louisiana Purchase",
    "question": "Why did Napoleon decide to sell the Louisiana Territory to the United States?",
    "answer": "France needed money for wars in Europe and had trouble controlling its American lands after a slave revolt in Haiti.",
    "hint": "War costs and lost control in the Caribbean.",
    "context": "Napoleon\u2019s decision gave the United States a huge amount of land at a low price."
  },
  {
    "id": "ssc2_jefferson_constitution_problem",
    "section": "SSC2",
    "topic": "Jefferson",
    "question": "What constitutional problem did Jefferson face with the Louisiana Purchase and how did he solve it?",
    "answer": "The Constitution did not clearly say the president could buy land, but Jefferson used a treaty with France to approve the purchase anyway.",
    "hint": "He used the treaty power to justify it.",
    "context": "Jefferson had to bend his strict view of the Constitution to secure the deal."
  },
  {
    "id": "ssc2_effect_louisiana",
    "section": "SSC2",
    "topic": "Louisiana Purchase",
    "question": "What effect did the Louisiana Purchase have on the population of the United States?",
    "answer": "It encouraged people to move west from the crowded Atlantic coast into the Mississippi Valley and beyond.",
    "hint": "Look at the population maps for 1790 and 1820.",
    "context": "Westward movement increased pressure on Native American lands and led to new states being created."
  },
  {
    "id": "ssc2_lewis_clark_reason",
    "section": "SSC2",
    "topic": "Lewis and Clark",
    "question": "Why did Lewis and Clark lead an expedition into the Louisiana Territory and who helped them?",
    "answer": "They were sent to map the land, study plants and animals, and find a route to the Pacific; Sacagawea and other Native Americans helped guide and translate.",
    "hint": "Exploration and mapping of new territory.",
    "context": "Their journey increased knowledge of the West and strengthened U.S. claims there."
  },
  {
    "id": "ssc2_embargo_act",
    "section": "SSC2",
    "topic": "Embargo Act",
    "question": "What was Jefferson\u2019s Embargo Act of 1807 and why did he support it?",
    "answer": "It stopped American ships from trading with foreign nations to avoid war and punish Britain and France for attacking U.S. ships.",
    "hint": "Trade was cut off on purpose.",
    "context": "Instead of protecting the United States, the embargo badly hurt American merchants and sailors."
  },
  {
    "id": "ssc2_embargo_fail",
    "section": "SSC2",
    "topic": "Embargo Act",
    "question": "Why did the Embargo Act fail and what replaced it?",
    "answer": "The embargo damaged the American economy more than Britain or France, so it was repealed and replaced with a weaker law that only limited trade with certain nations.",
    "hint": "The punishment boomeranged back on the U.S.",
    "context": "The failure showed how difficult it was to stay neutral while protecting American shipping."
  },
  {
    "id": "ssc3_tecumseh_goal",
    "section": "SSC3",
    "topic": "Tecumseh",
    "question": "What was Tecumseh\u2019s main goal on the western frontier?",
    "answer": "He wanted Native American tribes to unite and resist further land loss to American settlers.",
    "hint": "He believed unity was the only way to protect their land.",
    "context": "Tecumseh argued that tribal lands were the common property of all Native peoples and could not be sold by a few chiefs."
  },
  {
    "id": "ssc3_tecumseh_treaty_meaningless",
    "section": "SSC3",
    "topic": "Tecumseh",
    "question": "Why did Tecumseh call the Treaty of Fort Wayne meaningless?",
    "answer": "He said that land belonged to all Native American tribes together, so a few chiefs had no right to sell millions of acres without everyone\u2019s consent.",
    "hint": "He rejected the idea that individual tribes could sell shared land.",
    "context": "His refusal to accept the treaty increased tensions between his followers and U.S. settlers."
  },
  {
    "id": "ssc3_battle_tippecanoe_effect",
    "section": "SSC3",
    "topic": "Tecumseh",
    "question": "What happened at the Battle of Tippecanoe and how did it affect Tecumseh\u2019s movement?",
    "answer": "While Tecumseh was away, U.S. troops attacked and defeated his followers at Tippecanoe, which badly weakened his confederation.",
    "hint": "His village was attacked when he was gone.",
    "context": "The defeat was a major setback but also increased American anger at Britain for arming Native Americans."
  },
  {
    "id": "ssc3_problems_western_territory",
    "section": "SSC3",
    "topic": "War of 1812",
    "question": "What problem did the United States face in the western territory before the War of 1812?",
    "answer": "American settlers were pushing onto Native American lands and facing attacks from groups who were supplied with British weapons.",
    "hint": "Think land conflict and British support.",
    "context": "These frontier clashes helped push the United States toward war with Britain."
  },
  {
    "id": "ssc3_why_war_hawks_wanted_war",
    "section": "SSC3",
    "topic": "War Hawks",
    "question": "Who were the War Hawks and why did they want war with Britain in 1812?",
    "answer": "They were members of Congress from the South and West who wanted to defend American honor, stop British attacks on ships, and possibly gain Canada and Florida.",
    "hint": "Young nationalists who were eager for land and respect.",
    "context": "Leaders like Henry Clay believed war would punish Britain and allow U.S. expansion."
  },
  {
    "id": "ssc3_us_unready_for_war",
    "section": "SSC3",
    "topic": "War of 1812",
    "question": "Why was the United States unready for war in 1812?",
    "answer": "The army was small and poorly trained, the navy had few ships, and the government lacked money and strong leadership for a long conflict.",
    "hint": "Think weak forces and limited funds.",
    "context": "Despite these weaknesses, Madison and Congress still declared war on Britain."
  },
  {
    "id": "ssc3_treaty_ghent_effect",
    "section": "SSC3",
    "topic": "War of 1812",
    "question": "What did the Treaty of Ghent do at the end of the War of 1812?",
    "answer": "It ended the fighting and restored prewar boundaries, but did not clearly settle issues like impressment.",
    "hint": "It was basically a return to how things were before the war.",
    "context": "Even without major territorial changes, many Americans felt the war proved the nation could defend itself."
  },
  {
    "id": "ssc3_effects_war_1812",
    "section": "SSC3",
    "topic": "War of 1812",
    "question": "What were two important effects of the War of 1812 on the United States?",
    "answer": "It increased national pride and made Andrew Jackson a hero, and it encouraged American manufacturing because trade with Britain had been cut off.",
    "hint": "Think pride and factories.",
    "context": "These effects helped start the Era of Good Feelings and a stronger sense of American identity."
  },
  {
    "id": "ssc4_jacksonian_democracy",
    "section": "SSC4",
    "topic": "Jacksonian Democracy",
    "question": "What is meant by 'Jacksonian Democracy'?",
    "answer": "It was the idea that government should represent the common man and expand political participation for white male voters.",
    "hint": "He said he spoke for ordinary people, not just the wealthy.",
    "context": "During Jackson\u2019s presidency, more white men were allowed to vote because property requirements were reduced in many states."
  },
  {
    "id": "ssc4_spoils_system",
    "section": "SSC4",
    "topic": "Spoils System",
    "question": "What was the spoils system under Andrew Jackson?",
    "answer": "Jackson rewarded his supporters with government jobs, often firing existing officials to replace them with loyal friends.",
    "hint": "To the victor go the spoils.",
    "context": "Critics said this practice led to unqualified people working in important positions."
  },
  {
    "id": "ssc4_kitchen_cabinet",
    "section": "SSC4",
    "topic": "Kitchen Cabinet",
    "question": "What was Jackson\u2019s 'Kitchen Cabinet'?",
    "answer": "It was an informal group of advisers and friends who met with him privately and influenced decisions more than the official cabinet.",
    "hint": "Unofficial advisers meeting outside formal rooms.",
    "context": "This practice worried critics who felt Jackson ignored normal checks and balances."
  },
  {
    "id": "ssc4_bank_veto",
    "section": "SSC4",
    "topic": "Bank War",
    "question": "Why did Jackson veto the bill to renew the charter of the Bank of the United States?",
    "answer": "He believed the bank was too powerful, favored the rich, and threatened democracy.",
    "hint": "He saw it as a tool of the wealthy.",
    "context": "His veto led to the Bank War and the rise of state banks that sometimes made risky loans."
  },
  {
    "id": "ssc4_tariff_abominations",
    "section": "SSC4",
    "topic": "Tariff and Nullification",
    "question": "What was the 'Tariff of Abominations' and how did South Carolina react to it?",
    "answer": "It was a very high tariff on imported goods that helped northern manufacturers but hurt southern planters; South Carolina called it unconstitutional and threatened to nullify it and leave the Union.",
    "hint": "Southern leaders talked about cancelling a federal law.",
    "context": "The nullification crisis tested whether a state could reject a national law, and Jackson responded firmly to preserve the Union."
  },
  {
    "id": "ssc4_indian_removal_act",
    "section": "SSC4",
    "topic": "Indian Removal",
    "question": "What did the Indian Removal Act of 1830 do?",
    "answer": "It authorized the government to move Native American nations east of the Mississippi River to lands west of the river.",
    "hint": "Think forced movement to new territory.",
    "context": "The policy especially targeted the Cherokee and other southeastern tribes who had lived on their lands for generations."
  },
  {
    "id": "ssc4_worcester_georgia",
    "section": "SSC4",
    "topic": "Worcester v. Georgia",
    "question": "What did the Supreme Court decide in Worcester v. Georgia and how did Jackson respond?",
    "answer": "The Court said Georgia\u2019s laws had no force in Cherokee territory, but Jackson refused to enforce the ruling.",
    "hint": "The Court defended Cherokee rights but the president ignored it.",
    "context": "Jackson\u2019s refusal weakened Native American protections and raised concerns about respect for the Supreme Court."
  },
  {
    "id": "ssc4_trail_of_tears",
    "section": "SSC4",
    "topic": "Trail of Tears",
    "question": "What was the Trail of Tears?",
    "answer": "It was the forced march of the Cherokee from their homes in Georgia to Indian Territory, during which thousands died from hunger, disease, and exhaustion.",
    "hint": "It was a deadly journey west.",
    "context": "The Trail of Tears is one of the most tragic results of Jackson\u2019s Indian Removal policies."
  },
  {
    "id": "ssc4_king_andrew_cartoon",
    "section": "SSC4",
    "topic": "Political Cartoon",
    "question": "In the 'King Andrew I' political cartoon, how is Andrew Jackson portrayed and what is the main message?",
    "answer": "He is shown as a king standing on torn laws and a shredded bank charter, suggesting he acted like a monarch who ignored the Constitution.",
    "hint": "Think royal robes and trampled documents.",
    "context": "The cartoon criticizes Jackson for using presidential power in a way that seemed to go beyond constitutional limits."
  },
  {
    "id": "monroe_doctrine_purpose",
    "section": "SSC3",
    "topic": "Monroe Doctrine",
    "question": "What was the main purpose of the Monroe Doctrine issued in 1823?",
    "answer": "It warned European nations not to build new colonies or interfere in the Western Hemisphere.",
    "hint": "It tried to keep Europe out of the Americas.",
    "context": "In return, the United States promised not to interfere in existing European colonies or in European affairs."
  }
];

// State
let state = {
  mode: "home",
  filterType: "all",
  filterValue: "ALL",
  flashIndex: 0,
  showAnswer: false,
  reviewSet: new Set(),
  quizOrder: [],
  quizIndex: 0,
  quizScore: 0,
  quizAnswered: false,
  quizFinished: false,
  quizResponses: []
};

// Load review set from localStorage
(function loadReviewSet() {
  try {
    const raw = window.localStorage.getItem("eci_review_ids");
    if (raw) {
      const arr = JSON.parse(raw);
      state.reviewSet = new Set(arr);
    }
  } catch (e) {
    state.reviewSet = new Set();
  }
})();

function saveReviewSet() {
  try {
    const arr = Array.from(state.reviewSet);
    window.localStorage.setItem("eci_review_ids", JSON.stringify(arr));
  } catch (e) {
    // ignore
  }
}

// Helpers

function getFilteredCards(filterType, filterValue) {
  if (filterType === "all") {
    return FLASHCARDS.slice();
  }
  if (filterType === "section") {
    return FLASHCARDS.filter(c => c.section === filterValue);
  }
  if (filterType === "review") {
    return FLASHCARDS.filter(c => state.reviewSet.has(c.id));
  }
  return FLASHCARDS.slice();
}

function getFilterLabel(prefix, filterType, filterValue) {
  if (filterType === "all") {
    return prefix + "All topics";
  }
  if (filterType === "section") {
    if (filterValue === "SSC1") return prefix + "Study Check #1";
    if (filterValue === "SSC2") return prefix + "Study Check #2";
    if (filterValue === "SSC3") return prefix + "Study Check #3";
    if (filterValue === "SSC4") return prefix + "Study Check #4";
    return prefix + filterValue;
  }
  if (filterType === "review") {
    return prefix + "Marked for review";
  }
  return prefix + "All topics";
}

// Navigation

function showView(viewId) {
  document.getElementById("homeView").classList.add("hidden");
  document.getElementById("flashcardsView").classList.add("hidden");
  document.getElementById("quizView").classList.add("hidden");
  document.getElementById(viewId).classList.remove("hidden");
}

// Flashcards

function startFlashcards(filterType, filterValue) {
  state.mode = "flash";
  state.filterType = filterType;
  state.filterValue = filterValue;
  state.flashIndex = 0;
  state.showAnswer = false;

  showView("flashcardsView");
  renderFlashcard();
}

function renderFlashcard() {
  const cards = getFilteredCards(state.filterType, state.filterValue);
  const topicEl = document.getElementById("cardTopic");
  const qEl = document.getElementById("cardQuestion");
  const aEl = document.getElementById("cardAnswer");
  const ctxEl = document.getElementById("cardContext");
  const hintEl = document.getElementById("cardHint");
  const counterEl = document.getElementById("flashCounter");
  const filterLabelEl = document.getElementById("flashFilterLabel");
  const markBtn = document.getElementById("markReviewBtn");

  filterLabelEl.textContent = getFilterLabel("Deck: ", state.filterType, state.filterValue);

  if (cards.length === 0) {
    topicEl.textContent = "";
    qEl.textContent = "No cards available for this selection yet.";
    aEl.textContent = "";
    aEl.classList.remove("visible");
    ctxEl.textContent = "";
    hintEl.textContent = "";
    counterEl.textContent = "";
    markBtn.disabled = true;
    markBtn.textContent = "Mark for review";
    return;
  }

  if (state.flashIndex < 0) state.flashIndex = 0;
  if (state.flashIndex >= cards.length) state.flashIndex = cards.length - 1;

  const card = cards[state.flashIndex];

  topicEl.textContent = card.topic;
  qEl.textContent = card.question;
  aEl.textContent = card.answer;
  ctxEl.textContent = card.context || "";
  hintEl.textContent = card.hint ? "Memory tip: " + card.hint : "";

  counterEl.textContent = "Card " + (state.flashIndex + 1) + " of " + cards.length;

  if (state.showAnswer) {
    aEl.classList.add("visible");
  } else {
    aEl.classList.remove("visible");
  }

  markBtn.disabled = false;
  if (state.reviewSet.has(card.id)) {
    markBtn.textContent = "Unmark review";
  } else {
    markBtn.textContent = "Mark for review";
  }
}

function setupFlashcardHandlers() {
  document.getElementById("prevCard").addEventListener("click", () => {
    const cards = getFilteredCards(state.filterType, state.filterValue);
    if (cards.length === 0) return;
    if (state.flashIndex > 0) {
      state.flashIndex -= 1;
      state.showAnswer = false;
      renderFlashcard();
    }
  });

  document.getElementById("nextCard").addEventListener("click", () => {
    const cards = getFilteredCards(state.filterType, state.filterValue);
    if (cards.length === 0) return;
    if (state.flashIndex < cards.length - 1) {
      state.flashIndex += 1;
      state.showAnswer = false;
      renderFlashcard();
    }
  });

  document.getElementById("toggleAnswer").addEventListener("click", () => {
    state.showAnswer = !state.showAnswer;
    renderFlashcard();
  });

  document.getElementById("markReviewBtn").addEventListener("click", () => {
    const cards = getFilteredCards(state.filterType, state.filterValue);
    if (cards.length === 0) return;
    const card = cards[state.flashIndex];
    if (state.reviewSet.has(card.id)) {
      state.reviewSet.delete(card.id);
    } else {
      state.reviewSet.add(card.id);
    }
    saveReviewSet();
    renderFlashcard();
  });

  document.getElementById("backFromFlash").addEventListener("click", () => {
    state.mode = "home";
    showView("homeView");
  });
}

// Quiz

function shuffleArray(arr) {
  const copy = arr.slice();
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const tmp = copy[i];
    copy[i] = copy[j];
    copy[j] = tmp;
  }
  return copy;
}

function startQuiz(filterType, filterValue) {
  state.mode = "quiz";
  state.filterType = filterType;
  state.filterValue = filterValue;

  const cards = getFilteredCards(filterType, filterValue);
  const indices = cards.map((_, idx) => idx);
  state.quizOrder = shuffleArray(indices);
  state.quizIndex = 0;
  state.quizScore = 0;
  state.quizAnswered = false;
  state.quizFinished = false;
  state.quizResponses = [];

  const nextBtn = document.getElementById("nextQuestion");
  nextBtn.textContent = "Next";

  showView("quizView");
  renderQuizQuestion();
}

function renderQuizQuestion() {
  const cards = getFilteredCards(state.filterType, state.filterValue);
  const labelEl = document.getElementById("quizFilterLabel");
  const progressEl = document.getElementById("quizProgress");
  const qEl = document.getElementById("quizQuestion");
  const ctxEl = document.getElementById("quizContext");
  const optionsEl = document.getElementById("quizOptions");
  const feedbackEl = document.getElementById("quizFeedback");
  const scoreEl = document.getElementById("quizScore");
  const reviewEl = document.getElementById("quizReview");

  labelEl.textContent = getFilterLabel("Quiz: ", state.filterType, state.filterValue);

  optionsEl.innerHTML = "";
  feedbackEl.textContent = "";
  reviewEl.innerHTML = "";

  if (cards.length === 0) {
    qEl.textContent = "No questions available for this selection yet.";
    ctxEl.textContent = "";
    progressEl.textContent = "";
    scoreEl.textContent = "";
    return;
  }

  if (state.quizIndex >= state.quizOrder.length) {
    state.quizIndex = state.quizOrder.length - 1;
  }

  const indexInCards = state.quizOrder[state.quizIndex];
  const item = cards[indexInCards];

  qEl.textContent = item.question;
  ctxEl.textContent = item.context || "";
  progressEl.textContent = "Question " + (state.quizIndex + 1) + " of " + state.quizOrder.length;
  scoreEl.textContent = "Score: " + state.quizScore;

  const wrongChoices = shuffleArray(
    cards
      .map(c => c.answer)
      .filter(ans => ans !== item.answer)
  ).slice(0, 3);

  const allChoices = shuffleArray([item.answer, ...wrongChoices]);

  state.quizAnswered = false;

  allChoices.forEach(choiceText => {
    const btn = document.createElement("button");
    btn.textContent = choiceText;
    btn.addEventListener("click", () => handleQuizChoice(btn, choiceText, item));
    optionsEl.appendChild(btn);
  });
}

function handleQuizChoice(button, chosenText, item) {
  if (state.quizAnswered) return;

  const optionsContainer = document.getElementById("quizOptions");
  const buttons = optionsContainer.querySelectorAll("button");
  buttons.forEach(btn => (btn.disabled = true));

  const feedbackEl = document.getElementById("quizFeedback");
  const correctAnswer = item.answer;

  let isCorrect = false;

  if (chosenText === correctAnswer) {
    button.classList.add("selected", "correct");
    feedbackEl.textContent = "Nice work. That is correct.";
    state.quizScore += 1;
    isCorrect = true;
  } else {
    button.classList.add("selected", "incorrect");
    feedbackEl.textContent = "Not quite. Correct answer: " + correctAnswer;
  }

  state.quizAnswered = true;
  document.getElementById("quizScore").textContent = "Score: " + state.quizScore;

  state.quizResponses.push({
    question: item.question,
    chosenText,
    correctAnswer,
    isCorrect
  });
}

function showQuizSummary() {
  const total = state.quizOrder.length;
  const qEl = document.getElementById("quizQuestion");
  const ctxEl = document.getElementById("quizContext");
  const optionsEl = document.getElementById("quizOptions");
  const feedbackEl = document.getElementById("quizFeedback");
  const progressEl = document.getElementById("quizProgress");
  const scoreEl = document.getElementById("quizScore");
  const reviewEl = document.getElementById("quizReview");
  const nextBtn = document.getElementById("nextQuestion");

  const percent = total ? Math.round((state.quizScore / total) * 100) : 0;

  qEl.textContent = "Quiz complete.";
  ctxEl.textContent = "";
  optionsEl.innerHTML = "";
  progressEl.textContent = "You answered " + state.quizScore + " of " + total + " correctly (" + percent + "%).";
  scoreEl.textContent = "";
  feedbackEl.textContent = "Review the questions you missed below.";

  reviewEl.innerHTML = "";
  const incorrect = state.quizResponses.filter(r => !r.isCorrect);

  if (incorrect.length === 0) {
    const p = document.createElement("p");
    p.textContent = "You answered every question correctly. Great work.";
    reviewEl.appendChild(p);
  } else {
    incorrect.forEach((item, idx) => {
      const div = document.createElement("div");
      div.className = "quiz-review-item";

      const q = document.createElement("strong");
      q.textContent = (idx + 1) + ". " + item.question;
      const yourAns = document.createElement("div");
      yourAns.textContent = "Your answer: " + item.chosenText;
      const correct = document.createElement("div");
      correct.textContent = "Correct answer: " + item.correctAnswer;

      div.appendChild(q);
      div.appendChild(yourAns);
      div.appendChild(correct);
      reviewEl.appendChild(div);
    });
  }

  state.quizFinished = true;
  nextBtn.textContent = "Restart quiz";
}

function setupQuizHandlers() {
  document.getElementById("nextQuestion").addEventListener("click", () => {
    const cards = getFilteredCards(state.filterType, state.filterValue);
    if (cards.length === 0) return;

    if (state.quizFinished) {
      startQuiz(state.filterType, state.filterValue);
      return;
    }

    if (!state.quizAnswered) return;

    state.quizIndex += 1;
    if (state.quizIndex >= state.quizOrder.length) {
      showQuizSummary();
      return;
    }
    state.quizAnswered = false;
    renderQuizQuestion();
  });

  document.getElementById("backFromQuiz").addEventListener("click", () => {
    state.mode = "home";
    showView("homeView");
  });
}

// Home menu handlers

function setupHomeMenu() {
  const buttons = document.querySelectorAll(".menu-btn");
  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      const mode = btn.getAttribute("data-mode");
      const filterType = btn.getAttribute("data-filter-type");
      const filterValue = btn.getAttribute("data-filter-value");

      if (mode === "flash") {
        startFlashcards(filterType, filterValue);
      } else if (mode === "quiz") {
        startQuiz(filterType, filterValue);
      }
    });
  });
}

// Initialize

document.addEventListener("DOMContentLoaded", () => {
  setupHomeMenu();
  setupFlashcardHandlers();
  setupQuizHandlers();
  showView("homeView");
});
