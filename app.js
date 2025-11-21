// SIE flashcards web app
// Flashcards only, with SIE-likely highlighting and mark-for-review

const FLASHCARDS = [
  // -----------------------------
  // Chapter 1 – Knowledge of Capital Markets
  // -----------------------------
  {
    id: "c1_markets_primary_secondary",
    unit: "U1",
    unitLabel: "Chapter 1: Knowledge of Capital Markets",
    section: "U1S1",
    sectionLabel: "Markets and Offerings",
    topic: "Primary vs secondary markets",
    sieLikely: true,
    question: "What is the key difference between the primary and secondary markets?",
    answer:
      "In the primary market, issuers sell new securities to investors and receive the proceeds. " +
      "In the secondary market, investors trade securities with one another and the issuer does not receive money from those trades."
  },
  {
    id: "c1_public_vs_private_offering",
    unit: "U1",
    unitLabel: "Chapter 1: Knowledge of Capital Markets",
    section: "U1S1",
    sectionLabel: "Markets and Offerings",
    topic: "Public vs private offerings",
    sieLikely: true,
    question:
      "How does a public offering differ from a private placement for corporate securities?",
    answer:
      "A public offering is registered with the SEC, uses a prospectus, and is sold to the general public through underwriters. " +
      "A private placement is exempt from registration, sold to a limited number of sophisticated investors, and uses an offering memorandum instead of a full prospectus."
  },
  {
    id: "c1_ipo_vs_followon",
    unit: "U1",
    unitLabel: "Chapter 1: Knowledge of Capital Markets",
    section: "U1S1",
    sectionLabel: "Markets and Offerings",
    topic: "IPO vs follow-on offering",
    sieLikely: true,
    question:
      "What is the difference between an initial public offering (IPO) and a follow-on offering?",
    answer:
      "An IPO is the first time an issuer sells equity securities to the public and lists on an exchange or market. " +
      "A follow-on offering is any subsequent public sale of new shares by a company that is already publicly traded."
  },
  {
    id: "c1_primary_secondary_markets_examples",
    unit: "U1",
    unitLabel: "Chapter 1: Knowledge of Capital Markets",
    section: "U1S1",
    sectionLabel: "Markets and Offerings",
    topic: "Market examples",
    sieLikely: false,
    question:
      "Give one example of a primary market transaction and one example of a secondary market transaction.",
    answer:
      "A corporation issuing new shares to investors in an underwritten offering is a primary market transaction. " +
      "An investor selling already issued shares to another investor on the NYSE is a secondary market transaction."
  },
  {
    id: "c1_broker_dealer_vs_investment_adviser",
    unit: "U1",
    unitLabel: "Chapter 1: Knowledge of Capital Markets",
    section: "U1S2",
    sectionLabel: "Market Participants and Regulations",
    topic: "Broker-dealer vs investment adviser",
    sieLikely: true,
    question:
      "How does a broker-dealer differ from an investment adviser in compensation and services?",
    answer:
      "Broker-dealers execute securities transactions and are typically paid commissions on trades. " +
      "Investment advisers provide ongoing securities advice and portfolio management for a fee, usually based on assets under management."
  },
  {
    id: "c1_institutional_vs_retail_investors",
    unit: "U1",
    unitLabel: "Chapter 1: Knowledge of Capital Markets",
    section: "U1S2",
    sectionLabel: "Market Participants and Regulations",
    topic: "Institutional vs retail investors",
    sieLikely: false,
    question:
      "What is the main distinction between institutional and retail investors?",
    answer:
      "Institutional investors are large organizations such as mutual funds, pension funds, or insurance companies that invest pooled assets. " +
      "Retail investors are individual investors who buy and sell securities for their own personal accounts."
  },
  {
    id: "c1_sros",
    unit: "U1",
    unitLabel: "Chapter 1: Knowledge of Capital Markets",
    section: "U1S2",
    sectionLabel: "Market Participants and Regulations",
    topic: "Self-regulatory organizations (SROs)",
    sieLikely: true,
    question: "What is an SRO and which SROs are most relevant to the SIE exam?",
    answer:
      "A self-regulatory organization creates and enforces rules for member firms under SEC oversight. " +
      "The main SROs tested on the SIE are FINRA, the Municipal Securities Rulemaking Board (MSRB), and the exchanges such as the NYSE."
  },
  {
    id: "c1_business_cycle_interest_rates",
    unit: "U1",
    unitLabel: "Chapter 1: Knowledge of Capital Markets",
    section: "U1S2",
    sectionLabel: "Market Participants and Regulations",
    topic: "Business cycles and interest rates",
    sieLikely: false,
    question:
      "How do interest rates typically behave during an economic expansion compared with a recession?",
    answer:
      "During an economic expansion, demand for credit increases and interest rates tend to rise. " +
      "During a recession, central banks often lower interest rates to stimulate borrowing and spending."
  },

  // -----------------------------
  // Chapter 2 – Understanding Products and Their Risks
  // -----------------------------
  {
    id: "c2_common_vs_preferred",
    unit: "U2",
    unitLabel: "Chapter 2: Understanding Products and Their Risks",
    section: "U2S1",
    sectionLabel: "Equity and Debt Securities",
    topic: "Common vs preferred stock",
    sieLikely: true,
    question:
      "What are two key differences between common stock and preferred stock for investors?",
    answer:
      "Common stock typically offers voting rights and greater potential for capital appreciation, but dividends are not guaranteed. " +
      "Preferred stock usually has no voting rights but pays a stated dividend rate and has priority over common stock for dividends and liquidation."
  },
  {
    id: "c2_debt_security_features",
    unit: "U2",
    unitLabel: "Chapter 2: Understanding Products and Their Risks",
    section: "U2S1",
    sectionLabel: "Equity and Debt Securities",
    topic: "Bond features",
    sieLikely: true,
    question:
      "Define par value, coupon rate, and yield to maturity for a bond.",
    answer:
      "Par value is the face amount repaid at maturity, typically 1,000 dollars per bond. " +
      "The coupon rate is the stated annual interest rate applied to par value to determine interest payments. " +
      "Yield to maturity is the total return expected if the bond is held until maturity, reflecting both coupon income and any gain or loss compared with par."
  },
  {
    id: "c2_premium_discount_par",
    unit: "U2",
    unitLabel: "Chapter 2: Understanding Products and Their Risks",
    section: "U2S1",
    sectionLabel: "Equity and Debt Securities",
    topic: "Premium, discount, and par",
    sieLikely: true,
    question:
      "When does a bond trade at a premium, a discount, or at par relative to its coupon rate and current yields?",
    answer:
      "A bond trades at a premium when its coupon rate is higher than current market yields, at a discount when its coupon rate is lower than current yields, and at par when the coupon rate equals current yields."
  },
  {
    id: "c2_zero_coupon_bonds",
    unit: "U2",
    unitLabel: "Chapter 2: Understanding Products and Their Risks",
    section: "U2S1",
    sectionLabel: "Equity and Debt Securities",
    topic: "Zero-coupon bonds",
    sieLikely: false,
    question:
      "How do zero-coupon bonds pay investors and what type of risk can be greater for them?",
    answer:
      "Zero-coupon bonds are issued at a deep discount and pay no periodic interest; the investor receives a single payment at maturity equal to par value. " +
      "Because they make no interim payments, zero-coupon bonds can be more sensitive to interest rate changes, increasing interest rate risk."
  },
  {
    id: "c2_mutual_fund_nav_forward_pricing",
    unit: "U2",
    unitLabel: "Chapter 2: Understanding Products and Their Risks",
    section: "U2S2",
    sectionLabel: "Pooled Investments and Options",
    topic: "Open-end mutual funds and NAV",
    sieLikely: true,
    question:
      "How are purchase and redemption prices for open-end mutual fund shares determined?",
    answer:
      "Open-end mutual fund transactions are executed at net asset value (NAV) per share using forward pricing, which means orders are filled at the next NAV calculated after the order is received."
  },
  {
    id: "c2_closed_end_funds",
    unit: "U2",
    unitLabel: "Chapter 2: Understanding Products and Their Risks",
    section: "U2S2",
    sectionLabel: "Pooled Investments and Options",
    topic: "Closed-end funds",
    sieLikely: false,
    question:
      "How do closed-end funds differ from open-end mutual funds in trading?",
    answer:
      "Closed-end fund shares are issued in a one-time offering, then trade on an exchange like stocks at market prices that can be above (premium) or below (discount) their NAV. " +
      "Open-end mutual funds continuously issue and redeem shares directly with the fund at NAV."
  },
  {
    id: "c2_etf_vs_mutual_fund",
    unit: "U2",
    unitLabel: "Chapter 2: Understanding Products and Their Risks",
    section: "U2S2",
    sectionLabel: "Pooled Investments and Options",
    topic: "ETFs compared with mutual funds",
    sieLikely: false,
    question:
      "What are two ways exchange-traded funds (ETFs) commonly differ from open-end mutual funds?",
    answer:
      "ETFs trade throughout the day on exchanges at market prices, while mutual funds trade once per day at NAV. " +
      "ETFs often have lower expense ratios and are generally more tax efficient than actively managed mutual funds."
  },
  {
    id: "c2_call_vs_put",
    unit: "U2",
    unitLabel: "Chapter 2: Understanding Products and Their Risks",
    section: "U2S2",
    sectionLabel: "Pooled Investments and Options",
    topic: "Basic call and put options",
    sieLikely: true,
    question:
      "What rights do call and put option buyers receive?",
    answer:
      "The buyer of a call option has the right, but not the obligation, to buy the underlying security at the strike price before or at expiration. " +
      "The buyer of a put option has the right, but not the obligation, to sell the underlying security at the strike price before or at expiration."
  },
  {
    id: "c2_option_in_out_at_the_money",
    unit: "U2",
    unitLabel: "Chapter 2: Understanding Products and Their Risks",
    section: "U2S2",
    sectionLabel: "Pooled Investments and Options",
    topic: "In-the-money, at-the-money, out-of-the-money",
    sieLikely: true,
    question:
      "For a call option, when is the contract in the money, at the money, or out of the money?",
    answer:
      "A call option is in the money when the underlying market price is above the strike price, at the money when the market price equals the strike price, and out of the money when the market price is below the strike price."
  },
  {
    id: "c2_systematic_vs_nonsystematic",
    unit: "U2",
    unitLabel: "Chapter 2: Understanding Products and Their Risks",
    section: "U2S3",
    sectionLabel: "Investment Risk Concepts",
    topic: "Systematic vs nonsystematic risk",
    sieLikely: true,
    question:
      "How do systematic and nonsystematic risk differ, and which type can be reduced through diversification?",
    answer:
      "Systematic risk affects the entire market or economy and cannot be eliminated by diversification. " +
      "Nonsystematic risk is specific to a company or industry and can be reduced or largely eliminated through diversification."
  },
  {
    id: "c2_capital_risk_inflation_risk",
    unit: "U2",
    unitLabel: "Chapter 2: Understanding Products and Their Risks",
    section: "U2S3",
    sectionLabel: "Investment Risk Concepts",
    topic: "Capital and inflation risk",
    sieLikely: false,
    question:
      "What is capital risk and what is inflation (purchasing power) risk?",
    answer:
      "Capital risk is the risk of losing some or all of the original investment. " +
      "Inflation risk, also called purchasing power risk, is the risk that rising prices will erode the real value of investment returns."
  },

  // -----------------------------
  // Chapter 3 – Trading and Customer Accounts
  // -----------------------------
  {
    id: "c3_market_vs_limit_orders",
    unit: "U3",
    unitLabel: "Chapter 3: Trading and Customer Accounts",
    section: "U3S1",
    sectionLabel: "Orders, Settlement, and Margin",
    topic: "Market vs limit orders",
    sieLikely: true,
    question:
      "What is the key difference between a market order and a limit order when placing a stock trade?",
    answer:
      "A market order is executed immediately at the best available price with priority on speed, while a limit order is executed only at a specified price or better, so execution is not guaranteed."
  },
  {
    id: "c3_stop_vs_stop_limit_orders",
    unit: "U3",
    unitLabel: "Chapter 3: Trading and Customer Accounts",
    section: "U3S1",
    sectionLabel: "Orders, Settlement, and Margin",
    topic: "Stop vs stop-limit orders",
    sieLikely: true,
    question:
      "How does a stop order differ from a stop-limit order?",
    answer:
      "A stop order becomes a market order once the stop price is reached, so it is executed at the next available price. " +
      "A stop-limit order becomes a limit order once the stop price is triggered and will only be executed at the limit price or better."
  },
  {
    id: "c3_regular_way_settlement",
    unit: "U3",
    unitLabel: "Chapter 3: Trading and Customer Accounts",
    section: "U3S1",
    sectionLabel: "Orders, Settlement, and Margin",
    topic: "Regular-way settlement",
    sieLikely: true,
    question:
      "What is the standard regular-way settlement cycle for most corporate securities?",
    answer:
      "For most corporate stocks and bonds, regular-way settlement occurs two business days after the trade date, known as T+2."
  },
  {
    id: "c3_margin_account_long",
    unit: "U3",
    unitLabel: "Chapter 3: Trading and Customer Accounts",
    section: "U3S1",
    sectionLabel: "Orders, Settlement, and Margin",
    topic: "Long margin account basics",
    sieLikely: true,
    question:
      "In a long margin account, what does it mean to buy on margin and what key risk does it create?",
    answer:
      "Buying on margin means borrowing part of the purchase price of securities from the broker-dealer and using the securities as collateral. " +
      "This leverage can amplify gains but also magnifies losses and can lead to margin calls if account equity falls below required levels."
  },
  {
    id: "c3_cash_vs_margin_account",
    unit: "U3",
    unitLabel: "Chapter 3: Trading and Customer Accounts",
    section: "U3S1",
    sectionLabel: "Orders, Settlement, and Margin",
    topic: "Cash vs margin accounts",
    sieLikely: false,
    question:
      "What is the basic difference between a cash account and a margin account for customers?",
    answer:
      "In a cash account, customers must pay the full purchase price of securities by settlement date. " +
      "In a margin account, customers can borrow part of the purchase price from the firm, subject to Regulation T and firm margin requirements."
  },
  {
    id: "c3_customer_profile_suitability",
    unit: "U3",
    unitLabel: "Chapter 3: Trading and Customer Accounts",
    section: "U3S2",
    sectionLabel: "Customer Accounts and Suitability",
    topic: "Customer profile and suitability",
    sieLikely: true,
    question:
      "What key elements of a customer’s profile must a registered representative consider to make a suitable recommendation?",
    answer:
      "Representatives must consider the customer’s investment objectives, time horizon, risk tolerance, financial situation and needs, tax status, investment experience, and any other relevant information in the customer’s investment profile."
  },
  {
    id: "c3_suitability_rule",
    unit: "U3",
    unitLabel: "Chapter 3: Trading and Customer Accounts",
    section: "U3S2",
    sectionLabel: "Customer Accounts and Suitability",
    topic: "FINRA suitability rule",
    sieLikely: true,
    question:
      "What does FINRA’s suitability rule require when a recommendation is made?",
    answer:
      "The suitability rule requires that the firm or registered representative have a reasonable basis to believe a recommendation is suitable for the customer based on the customer’s investment profile and the characteristics and risks of the recommended product or strategy."
  },
  {
    id: "c3_account_registration_types",
    unit: "U3",
    unitLabel: "Chapter 3: Trading and Customer Accounts",
    section: "U3S2",
    sectionLabel: "Customer Accounts and Suitability",
    topic: "Types of account registrations",
    sieLikely: false,
    question:
      "Name three common types of account registrations and a key feature of each.",
    answer:
      "Individual accounts have one owner who controls the assets. " +
      "Joint accounts have two or more owners; joint tenants with rights of survivorship pass assets to the surviving owner, while tenants in common do not. " +
      "Custodial accounts such as UGMA or UTMA are opened for a minor with an adult custodian managing the assets."
  },

  // -----------------------------
  // Chapter 4 – Overview of the Regulatory Framework
  // -----------------------------
  {
    id: "c4_sec_finra_msrp_roles",
    unit: "U4",
    unitLabel: "Chapter 4: Overview of the Regulatory Framework",
    section: "U4S1",
    sectionLabel: "Regulators and Registration",
    topic: "SEC, FINRA, and MSRB roles",
    sieLikely: true,
    question:
      "Briefly describe the roles of the SEC, FINRA, and the MSRB in the securities industry.",
    answer:
      "The SEC is the federal regulator that oversees U.S. securities markets and SROs. " +
      "FINRA is a self-regulatory organization that writes and enforces rules for broker-dealers and registered representatives. " +
      "The MSRB writes rules for municipal securities dealers and advisers; those rules are enforced by the SEC and FINRA."
  },
  {
    id: "c4_sie_and_topoff",
    unit: "U4",
    unitLabel: "Chapter 4: Overview of the Regulatory Framework",
    section: "U4S1",
    sectionLabel: "Regulators and Registration",
    topic: "SIE exam and representative registration",
    sieLikely: true,
    question:
      "What does the SIE exam qualify an individual to do and what else is required to become a registered representative?",
    answer:
      "The SIE exam demonstrates basic industry knowledge and can be taken without firm sponsorship, but it does not by itself permit securities business. " +
      "To become a registered representative, a person must be associated with a member firm and pass an appropriate top-off licensing exam, such as the Series 6 or Series 7."
  },
  {
    id: "c4_form_ust_and_crd",
    unit: "U4",
    unitLabel: "Chapter 4: Overview of the Regulatory Framework",
    section: "U4S1",
    sectionLabel: "Regulators and Registration",
    topic: "Form U4 and CRD",
    sieLikely: false,
    question:
      "What is Form U4 and what is the Central Registration Depository (CRD)?",
    answer:
      "Form U4 is the uniform application for securities industry registration or transfer; it is filed when an individual registers with a member firm and SROs. " +
      "The Central Registration Depository (CRD) is the FINRA-maintained database that contains registration and disciplinary information about registered persons and firms."
  },
  {
    id: "c4_insider_trading_basics",
    unit: "U4",
    unitLabel: "Chapter 4: Overview of the Regulatory Framework",
    section: "U4S2",
    sectionLabel: "Business Conduct and Key Rules",
    topic: "Insider trading basics",
    sieLikely: true,
    question:
      "What is insider trading and who can be liable in an insider trading case?",
    answer:
      "Insider trading is the illegal use of material nonpublic information to trade a security or to help others trade. " +
      "Both the tipper who improperly discloses the information and the tippee who knows or should know the information is material and nonpublic can be held liable."
  },
  {
    id: "c4_misappropriation_theory",
    unit: "U4",
    unitLabel: "Chapter 4: Overview of the Regulatory Framework",
    section: "U4S2",
    sectionLabel: "Business Conduct and Key Rules",
    topic: "Misappropriation theory",
    sieLikely: false,
    question:
      "Under the misappropriation theory, when can a person who is not a corporate insider be liable for insider trading?",
    answer:
      "A person can be liable under the misappropriation theory if they steal or misuse material nonpublic information in breach of a duty of trust or confidence and then trade or cause trades to be made based on that information."
  },
  {
    id: "c4_aml_and_cip",
    unit: "U4",
    unitLabel: "Chapter 4: Overview of the Regulatory Framework",
    section: "U4S2",
    sectionLabel: "Business Conduct and Key Rules",
    topic: "Anti-money-laundering and CIP",
    sieLikely: true,
    question:
      "What is the purpose of a broker-dealer’s Customer Identification Program (CIP) under anti-money-laundering rules?",
    answer:
      "The CIP requires firms to collect and verify specific identifying information, such as name, date of birth, address, and taxpayer identification number, before opening an account, helping to prevent money laundering and terrorist financing."
  },
  {
    id: "c4_sar_reporting",
    unit: "U4",
    unitLabel: "Chapter 4: Overview of the Regulatory Framework",
    section: "U4S2",
    sectionLabel: "Business Conduct and Key Rules",
    topic: "Suspicious Activity Reports (SARs)",
    sieLikely: true,
    question:
      "When must a broker-dealer file a Suspicious Activity Report (SAR)?",
    answer:
      "A broker-dealer must file a SAR with FinCEN within 30 calendar days of detecting suspicious activity involving at least 5,000 dollars where the firm knows, suspects, or has reason to suspect that the funds are derived from illegal activity or that the transaction is designed to evade reporting requirements."
  },
  {
    id: "c4_firm_element_ce",
    unit: "U4",
    unitLabel: "Chapter 4: Overview of the Regulatory Framework",
    section: "U4S2",
    sectionLabel: "Business Conduct and Key Rules",
    topic: "Continuing education – firm element",
    sieLikely: false,
    question:
      "What is the firm element of continuing education and whom does it cover?",
    answer:
      "The firm element requires broker-dealers to establish an annual training plan for covered registered persons that addresses products, services, and risks offered by the firm, as well as regulatory developments relevant to their roles."
  }
];

// Application state
const state = {
  filterType: "all",   // "all", "unit", "review", "sie"
  filterValue: "ALL",
  flashIndex: 0,
  showAnswer: false,
  reviewSet: new Set()
};

// Load review set from localStorage
(function loadReviewSet() {
  try {
    const raw = window.localStorage.getItem("sie_flash_review_ids");
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
    window.localStorage.setItem("sie_flash_review_ids", JSON.stringify(arr));
  } catch (e) {
    // ignore
  }
}

// Filtering helpers

function getFilteredCards(filterType, filterValue) {
  if (filterType === "all") {
    return FLASHCARDS.slice();
  }
  if (filterType === "unit") {
    return FLASHCARDS.filter(c => c.unit === filterValue);
  }
  if (filterType === "review") {
    return FLASHCARDS.filter(c => state.reviewSet.has(c.id));
  }
  if (filterType === "sie") {
    return FLASHCARDS.filter(c => c.sieLikely);
  }
  return FLASHCARDS.slice();
}

function getFilterLabel(prefix, filterType, filterValue) {
  if (filterType === "all") {
    return prefix + "All chapters";
  }
  if (filterType === "sie") {
    return prefix + "SIE exam-likely topics";
  }
  if (filterType === "review") {
    return prefix + "Marked for review";
  }
  if (filterType === "unit") {
    if (filterValue === "U1") return prefix + "Chapter 1 – Knowledge of Capital Markets";
    if (filterValue === "U2") return prefix + "Chapter 2 – Understanding Products and Risks";
    if (filterValue === "U3") return prefix + "Chapter 3 – Trading and Customer Accounts";
    if (filterValue === "U4") return prefix + "Chapter 4 – Regulatory Framework";
    return prefix + filterValue;
  }
  return prefix + "All chapters";
}

// View helpers

function showView(viewId) {
  document.getElementById("homeView").classList.add("hidden");
  document.getElementById("flashcardsView").classList.add("hidden");
  document.getElementById(viewId).classList.remove("hidden");
}

// Flashcards

function startFlashcards(filterType, filterValue) {
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
  const subtopicEl = document.getElementById("cardSubtopic");
  const qEl = document.getElementById("cardQuestion");
  const aEl = document.getElementById("cardAnswer");
  const counterEl = document.getElementById("flashCounter");
  const filterLabelEl = document.getElementById("flashFilterLabel");
  const markBtn = document.getElementById("markReviewBtn");
  const sieBadge = document.getElementById("sieBadge");
  const reviewBadge = document.getElementById("reviewBadge");
  const cardContainer = document.getElementById("flashcard");

  filterLabelEl.textContent = getFilterLabel("Deck: ", state.filterType, state.filterValue);

  if (cards.length === 0) {
    topicEl.textContent = "";
    subtopicEl.textContent = "";
    qEl.textContent = "No flashcards available for this selection yet.";
    aEl.textContent = "";
    aEl.classList.remove("visible");
    counterEl.textContent = "";
    markBtn.disabled = true;
    markBtn.textContent = "Mark for review";
    sieBadge.classList.add("hidden");
    reviewBadge.classList.add("hidden");
    cardContainer.classList.remove("sie-likely", "review-marked");
    return;
  }

  if (state.flashIndex < 0) state.flashIndex = 0;
  if (state.flashIndex >= cards.length) state.flashIndex = cards.length - 1;

  const card = cards[state.flashIndex];

  topicEl.textContent = card.unitLabel;
  subtopicEl.textContent = card.sectionLabel + " – " + card.topic;
  qEl.textContent = card.question;
  aEl.textContent = card.answer;

  counterEl.textContent = "Card " + (state.flashIndex + 1) + " of " + cards.length;

  if (state.showAnswer) {
    aEl.classList.add("visible");
  } else {
    aEl.classList.remove("visible");
  }

  // Badges and card highlighting
  if (card.sieLikely) {
    sieBadge.classList.remove("hidden");
    cardContainer.classList.add("sie-likely");
  } else {
    sieBadge.classList.add("hidden");
    cardContainer.classList.remove("sie-likely");
  }

  if (state.reviewSet.has(card.id)) {
    reviewBadge.classList.remove("hidden");
    cardContainer.classList.add("review-marked");
    markBtn.textContent = "Unmark review";
  } else {
    reviewBadge.classList.add("hidden");
    cardContainer.classList.remove("review-marked");
    markBtn.textContent = "Mark for review";
  }

  markBtn.disabled = false;
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
    } else {
      state.flashIndex = 0; // wrap around
    }
    state.showAnswer = false;
    renderFlashcard();
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
    showView("homeView");
  });
}

// Menu handlers

function setupMenuHandlers() {
  const buttons = document.querySelectorAll(".menu-btn");
  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      const filterType = btn.dataset.filterType;
      const filterValue = btn.dataset.filterValue;
      startFlashcards(filterType, filterValue);
    });
  });
}

// Initialize

document.addEventListener("DOMContentLoaded", () => {
  setupMenuHandlers();
  setupFlashcardHandlers();
  showView("homeView");
});
