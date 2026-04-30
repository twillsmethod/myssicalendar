const benefitData = {
  ssi: {
    heroTitle: "Find Your SSI Payment Date Instantly",
    heroSubtext:
      "Fast, free payment dates for SSI, SSDI, and Social Security benefits in one clean dashboard.",
    nextPayment: "May 1, 2026",
    daysAway: "19 days away",
    todayStatus: "Today: No payment scheduled",
    whyTitle: "Why Two Payments Sometimes Happen",
    whyText:
      "When the 1st falls on a weekend or holiday, SSI payments may arrive early.",
    whyList: [
      "June payment → May 29",
      "July payment → July 1"
    ],
    upcomingTitle: "Upcoming Payments",
    payments: [
      "May 1, 2026",
      "May 29, 2026",
      "July 1, 2026",
      "August 1, 2026"
    ]
  },
  ssdi: {
    heroTitle: "Find Your SSDI Payment Date Instantly",
    heroSubtext:
      "Track upcoming SSDI deposit dates based on the regular monthly payment schedule.",
    nextPayment: "May 13, 2026",
    daysAway: "31 days away",
    todayStatus: "Today: No SSDI payment scheduled",
    whyTitle: "How SSDI Payment Dates Work",
    whyText:
      "SSDI payments are usually based on birth date and sent on Wednesdays.",
    whyList: [
      "Birth date 1st–10th → 2nd Wednesday",
      "Birth date 11th–20th → 3rd Wednesday",
      "Birth date 21st–31st → 4th Wednesday"
    ],
    upcomingTitle: "Upcoming SSDI Payments",
    payments: [
      "May 13, 2026",
      "May 20, 2026",
      "May 27, 2026",
      "June 10, 2026"
    ]
  },
  retirement: {
    heroTitle: "Find Your Social Security Payment Date",
    heroSubtext:
      "See upcoming retirement benefit payment dates in a simple, easy-to-read view.",
    nextPayment: "May 13, 2026",
    daysAway: "31 days away",
    todayStatus: "Today: No retirement payment scheduled",
    whyTitle: "How Retirement Benefit Dates Are Scheduled",
    whyText:
      "Most retirement benefits are paid based on your birth date unless you receive both SSI and Social Security.",
    whyList: [
      "1st–10th → 2nd Wednesday",
      "11th–20th → 3rd Wednesday",
      "21st–31st → 4th Wednesday"
    ],
    upcomingTitle: "Upcoming Retirement Payments",
    payments: [
      "May 13, 2026",
      "May 20, 2026",
      "May 27, 2026",
      "June 10, 2026"
    ]
  },
  survivor: {
    heroTitle: "Find Your Survivor Benefit Payment Date",
    heroSubtext:
      "Check survivor benefit payment timing using the same Social Security schedule.",
    nextPayment: "May 20, 2026",
    daysAway: "38 days away",
    todayStatus: "Today: No survivor payment scheduled",
    whyTitle: "How Survivor Benefit Dates Work",
    whyText:
      "Survivor benefits generally follow the Social Security payment schedule tied to eligibility and timing rules.",
    whyList: [
      "Most payments follow Wednesday schedules",
      "Timing may vary for some combined benefit cases"
    ],
    upcomingTitle: "Upcoming Survivor Payments",
    payments: [
      "May 20, 2026",
      "May 27, 2026",
      "June 10, 2026",
      "June 17, 2026"
    ]
  }
};

const heroTitle = document.getElementById("hero-title");
const heroSubtext = document.getElementById("hero-subtext");
const nextPaymentDate = document.getElementById("next-payment-date");
const daysAway = document.getElementById("days-away");
const todayStatus = document.getElementById("today-status");
const whyTitle = document.getElementById("why-title");
const whyText = document.getElementById("why-text");
const whyList = document.getElementById("why-list");
const upcomingTitle = document.getElementById("upcoming-title");
const paymentList = document.getElementById("payment-list");
const tabs = document.querySelectorAll(".tab");
const toolMessage = document.getElementById("tool-message");
const calendarButton = document.getElementById("calendar-button");
const printButton = document.getElementById("print-button");
const emailButton = document.getElementById("email-button");
const pdfButton = document.getElementById("pdf-button");

function renderBenefit(benefitKey) {
  const data = benefitData[benefitKey];
  if (!data) return;

  heroTitle.textContent = data.heroTitle;
  heroSubtext.textContent = data.heroSubtext;
  nextPaymentDate.textContent = data.nextPayment;
  daysAway.textContent = data.daysAway;
  todayStatus.textContent = data.todayStatus;
  whyTitle.textContent = data.whyTitle;
  whyText.textContent = data.whyText;
  upcomingTitle.textContent = data.upcomingTitle;

  whyList.innerHTML = "";
  data.whyList.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    whyList.appendChild(li);
  });

  paymentList.innerHTML = "";
  data.payments.forEach((payment) => {
    const li = document.createElement("li");
    li.textContent = payment;
    paymentList.appendChild(li);
  });

  tabs.forEach((tab) => {
    tab.classList.toggle("active", tab.dataset.benefit === benefitKey);
  });

  calendarButton.dataset.benefit = benefitKey;
}

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    renderBenefit(tab.dataset.benefit);
  });
});

calendarButton.addEventListener("click", () => {
  const benefit = calendarButton.dataset.benefit || "ssi";
  window.location.href = `calendar.html?benefit=${benefit}`;
});

printButton.addEventListener("click", () => {
  window.print();
});

emailButton.addEventListener("click", () => {
  toolMessage.textContent = "Email reminders coming soon.";
});

pdfButton.addEventListener("click", () => {
  toolMessage.textContent = "PDF download coming soon.";
});

renderBenefit("ssi");