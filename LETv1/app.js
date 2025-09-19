// Application data
const appData = {
  meetingStructure: {
    opening: {
      duration: 20,
      components: ["Holy Rosary", "Opening Song (optional)", "Prayer", "Spiritual Progress Review"]
    },
    formationTape: {
      duration: 30,
      description: "Formation programs include Peace of Heart Forum and Family Apostolate's Catechism on video"
    },
    insightsSharing: {
      duration: 30,
      questions: [
        "What are some points that interested you from the video and why?",
        "How did the readings from this week help you to live a more virtuous life? In what way did they strengthen your union with Christ?", 
        "What in the readings and/or video can you apply to your life? What is the Lord trying to teach you from the readings and/or video?"
      ]
    },
    closing: {
      duration: 10,
      components: ["Thanksgiving", "Prayer Petitions", "Closing Prayer"]
    }
  },
  spiritualProgressReview: {
    meeting1: [
      "Have I frequently asked the Holy Family for the grace to love God to such a degree that I would be ready to lose everything rather than offend Him through mortal or willful venial sins?",
      "Have I shown my love for God by the way I speak, think and act?",
      "Have I fulfilled my daily duties well with joyful fidelity as the best way of showing my love for God?",
      "Have I often reached outside of my family to evangelize others and to zealously seek to draw them to love God?",
      "Have I tried to transform my daily crosses into moments of growth in grace by accepting them joyfully?"
    ],
    meeting2: [
      "Have I tried to offer my aches and pains patiently and silently, prayerfully begging God's help to endure them, rather than fretting interiorly or complaining to others about them?",
      "Have I given in to inordinate self-love, manifested by self-pity, by neglecting or refusing to fulfill my responsibilities, or by becoming too anxious and preoccupied with self?",
      "Have I tended, out of inordinate pride, to draw undue attention to my successes? Do I, through this same inordinate pride, blame others when things are not successful?",
      "Have I practiced loving God more than myself by telling Him frequently and sincerely that I love Him, by giving Him my best efforts, and by giving Him the credit for any and all good fruits?",
      "Have I sought to consciously humble myself before God and others and to examine whether I am working to serve Him or myself?"
    ],
    meeting3: [
      "Have I put the greater needs of others before my own and tried to be forgetful of self?",
      "Have I tried to grow in the virtue of obedience by choosing God's will over my own will?",
      "Have I tried to grow in the virtue of mortification by self-denial?",
      "Have I tried to grow in the virtue of humility by giving God the credit for enabling me and helping me to do what I do?",
      "Have I tried to grow in the virtue of prayerfulness by acknowledging my total dependence on God, by striving to remain recollected and to listen to Him, and by frequent acts of adoration, praise, thanksgiving, reparation and petition?",
      "Have I sought to know God's will and conform myself to it, and aim in this way to grow in perfection?"
    ],
    meeting4: [
      "Have I tried to practice charity by always acting with goodness and by seeking perfection? Do I deceive myself by thinking I am maintaining a high spiritual standard while at the same time allowing myself to lack charity in my dealings with others?",
      "Have I failed to give a good example by my conduct?",
      "Have I fulfilled my duties and helped others to fulfill theirs, especially those who may be under my supervision?",
      "Do I frequently choose to love God, first and foremost, and myself and others in a wholesome way?",
      "Do I frequently make acts of faith in God's love for me and for my neighbor?",
      "Have I identified my primary faults and consciously tried to make progress against them by choosing to not give in to them and to practice the opposite virtues?",
      "Have I given in to the tendency to fall into imprudent practices of devotion, such as increasing the number of prayers or other pious acts to the point of neglecting my daily duties and mental prayer?",
      "Have I tried to keep in mind the spirit of the law rather than merely following the letter?",
      "Have I harmed someone's reputation through a lack of charity, calumny (telling a lie about someone), or detraction (revealing the truth about someone's faults or defects without just cause)? Have I tried to repair damages I have caused?"
    ],
    meeting5: [
      "Have I allowed courage to give me a false self-confidence leading to egoism?",
      "Have I been so prideful and self-determined that I have deliberately refused to accept advice?",
      "Am I so concerned with what others might think that I have kept silent when I should have spoken up?",
      "Have I given in to discouragement when my efforts to grow in holiness have seemed at times to be a slow, hard and gradual process?",
      "Have I allowed temptation to undermine my perseverance by not starting or continuing what I am called to do?"
    ],
    meeting6: [
      "Have I prayed for the grace to replace false or inordinate pride with humility? Have I in fact acted as though the gaining of a virtue depends on my human efforts alone?",
      "Have I asked for the light of the Holy Spirit's gift of knowledge to know myself and for the grace to believe and live according to that knowledge, which is what true humility is?",
      "Do I welcome and accept humiliations? Do I sincerely believe I can make no true progress in the virtue of humility if I refuse to accept humiliations?",
      "Do I study myself to see what circumstances cause me to fall into sins of pride?",
      "Have I failed to live in harmony with others because of an overbearing spirit?",
      "Have I failed to look for the good in others and to sincerely acknowledge and appreciate them? Have I instead given in to the temptation to criticize them destructively?",
      "Have I tried to discover what situations cause me to be overly sensitive? Have I ignored the fact that being overly sensitive is disordered, offends God, makes me unhappy and in turn spreads unhappiness?"
    ],
    meeting7: [
      "Have I failed to strictly but peacefully regulate my sense of touch, which is the most sensitive faculty that can so easily lead to sin?",
      "Have I failed to bring my sense of taste under control by regulating the quality and quantity of my eating and drinking in accord with right reason? Have I given in to excesses?",
      "Have I neglected to refine my speech and conform it to the spirit of our Lord? Have I said anything to anyone, or even to myself, that I could not say to God?",
      "Have I failed to guard my eyes by looking at things that are occasions of sin for me? Have I looked at immodest pictures or images from the computer or other social means of communication?",
      "Have I opened to anyone else the exclusive place in my heart that belongs only to my spouse?",
      "Have I neglected to acquire the virtue of perfect chastity by avoiding persons, places and things that I know from experience are, or are likely to be, occasions of sin for me?",
      "Have I examined my conscience daily and received the Sacrament of Confession frequently?",
      "Have I given in to cowardice in the hard spiritual battles God calls me to fight? Have I neglected to beg for the graces I need in order to make the many acts of virtue I constantly need to make?",
      "Have I failed to give my love to God by cultivating an abiding sorrow for sin and by frequently telling God sincerely that I love Him?",
      "Have I neglected to develop my knowledge of the Catholic Faith and to constantly grow in that Faith by telling God sincerely that I believe everything he has revealed and that the Church teaches?",
      "Have I neglected to share my Catholic Faith with others?"
    ],
    meeting8: [
      "Have I allowed myself to give in to disordered, unjust, or uncontrolled anger, and so to create discord and discontent, and even to partially or wholly tear down a happy family spirit?",
      "Have I tried to develop meekness by subjecting all of my emotions to the order of reason?",
      "Have I shown patience in bearing with the faults of others?",
      "Have I tried to get along well with everyone? Have I allowed myself to be easily wounded by my friends and to give vent to feelings that would hurt them?",
      "Have I neglected to take seriously the fact that each act of virtue, regardless of how small it may be, goes into the forming and final makeup of my character?",
      "Have I sincerely believed that when my acts of virtue outnumber my acts of sin, my character is that much holier, and that perfect character is formed by perfect virtue?"
    ]
  },
  prayers: {
    opening: "Come Holy Spirit; fill the hearts of your faithful. Enkindle in them the fire of Your Divine Love. Send forth Your Spirit, and they shall be created, and You will renew the face of the earth. Amen.",
    thanksgiving: {
      meeting1: [
        "Lord we thank You for your grace, which is more than enough for us each day.",
        "Lord we thank You for being patient and merciful towards us as sinners.",
        "Lord we thank You for providing us with the basic needs of food, clothes, and shelter.",
        "Lord we thank You for knowing our names on the cross."
      ],
      meeting2: [
        "Lord we thank You for the ability to love and be loved in return.",
        "Lord we thank You for all the opportunities we receive to glorify you through the act of suffering.",
        "Lord we thank You for blessing us to live in a country where we have freedom of religion.",
        "Lord we thank You for providing us with such an uplifting and supportive community"
      ],
      meeting3: [
        "Lord we thank You for continually breaking our hearts of stone.",
        "Lord we thank You for everything past, present, and future.",
        "Lord we thank You for opportunities each day to be a servant to others.",
        "Lord we thank You for being ever faithful to your promises."
      ],
      meeting4: [
        "Lord we thank You for your divine presence in our lives through the indwelling of the Holy Spirit.",
        "Lord we thank You for shedding your light in the midst of darkness.",
        "Lord we thank You for strength in every situation and temptation we are faced with.",
        "Lord we thank You for opposition and struggles that make us cling to You."
      ],
      meeting5: [
        "Lord we thank You for Mary and Joseph saying yes to a task that was so very difficult to live.",
        "Lord we thank You for giving us Your mother who holds us so close to Her mantle and brings us comfort in the midst of trials.",
        "Lord we thank You for all holy marriages and families.",
        "Lord we thank You for the people You put in our lives that lead us on our road to salvation."
      ],
      meeting6: [
        "Lord we thank You for using us as Your tools to build up Your church here on Earth.",
        "Lord we thank You for Your abiding presence in our lives.",
        "Lord we thank You for Your Son and the spiritual gifts He has given his people.",
        "Lord we thank You for Your word which brings hope, joy, wisdom, and love to our hearts."
      ],
      meeting7: [
        "Lord we thank You for creating us in Your own image and likeness.",
        "Lord we thank You for our vocations and states of life.",
        "Lord we thank You for every single breath we take.",
        "Lord we thank You for creating incredible beauty and variety in nature."
      ],
      meeting8: [
        "Lord we thank You for setting our hearts on eternity.",
        "Lord we thank You for giving us Your Son who took upon Himself the just penalty of our iniquity.",
        "Lord we thank You for being a faithful friend",
        "Lord we thank You for the privilege of prayer and the indwelling of the Holy Spirit."
      ]
    }
  }
};

// Timer state
let timerState = {
  isRunning: false,
  isPaused: false,
  currentTime: 0,
  totalTime: 90 * 60, // 90 minutes in seconds
  interval: null,
  currentPhase: 'ready'
};

// Application initialization
document.addEventListener('DOMContentLoaded', function() {
  initializeApp();
});

function initializeApp() {
  setupNavigation();
  setupSpiritualReview();
  setupPrayers();
  setupTimer();
  loadSavedData();
}

// Navigation functionality
function setupNavigation() {
  const navLinks = document.querySelectorAll('.nav-link');
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.nav-menu');

  // Navigation link clicks
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      navigateToSection(targetId);
      
      // Close mobile menu
      if (navMenu) {
        navMenu.classList.remove('active');
      }
    });
  });

  // Mobile menu toggle
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active');
    });
  }
}

function navigateToSection(sectionId) {
  const sections = document.querySelectorAll('.section');
  const navLinks = document.querySelectorAll('.nav-link');
  
  // Hide all sections
  sections.forEach(section => section.classList.remove('active'));
  
  // Show target section
  const targetSection = document.getElementById(sectionId);
  if (targetSection) {
    targetSection.classList.add('active');
  }
  
  // Update active nav link
  navLinks.forEach(link => link.classList.remove('active'));
  const activeLink = document.querySelector(`[href="#${sectionId}"]`);
  if (activeLink) {
    activeLink.classList.add('active');
  }

  // Scroll to top
  window.scrollTo(0, 0);
}

// Component toggle functionality
function toggleComponent(header) {
  const content = header.nextElementSibling;
  const expandBtn = header.querySelector('.expand-btn');
  
  if (content.classList.contains('expanded')) {
    content.classList.remove('expanded');
    expandBtn.textContent = '+';
  } else {
    content.classList.add('expanded');
    expandBtn.textContent = '-';
  }
}

// Spiritual review functionality
function setupSpiritualReview() {
  // Load initial questions
  loadReviewQuestions('meeting1');
}

function loadReviewQuestions(meetingKey) {
  const reviewQuestions = document.getElementById('review-questions');
  const questions = appData.spiritualProgressReview[meetingKey];
  
  if (!reviewQuestions || !questions) return;
  
  reviewQuestions.innerHTML = '';
  
  questions.forEach((question, index) => {
    const questionItem = document.createElement('div');
    questionItem.className = 'question-item';
    questionItem.innerHTML = `
      <h4>Question ${index + 1}</h4>
      <p>${question}</p>
      <div class="question-checkbox">
        <input type="checkbox" id="q${meetingKey}_${index}" data-meeting="${meetingKey}" data-question="${index}">
        <label for="q${meetingKey}_${index}">I have reflected on this question</label>
      </div>
      <textarea class="form-control question-notes" placeholder="Your personal notes..." rows="2" data-meeting="${meetingKey}" data-question="${index}"></textarea>
    `;
    
    reviewQuestions.appendChild(questionItem);
  });
  
  // Load saved responses
  loadSavedReviewData(meetingKey);
  
  // Add event listeners for saving data
  addReviewEventListeners(meetingKey);
}

function addReviewEventListeners(meetingKey) {
  const checkboxes = document.querySelectorAll(`input[data-meeting="${meetingKey}"]`);
  const textareas = document.querySelectorAll(`textarea[data-meeting="${meetingKey}"]`);
  
  checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', () => saveReviewData(meetingKey));
  });
  
  textareas.forEach(textarea => {
    textarea.addEventListener('input', () => saveReviewData(meetingKey));
  });
}

function saveReviewData(meetingKey) {
  const reviewData = getStoredData('reviewData') || {};
  if (!reviewData[meetingKey]) {
    reviewData[meetingKey] = {};
  }
  
  const checkboxes = document.querySelectorAll(`input[data-meeting="${meetingKey}"]`);
  const textareas = document.querySelectorAll(`textarea[data-meeting="${meetingKey}"]`);
  
  checkboxes.forEach(checkbox => {
    const questionIndex = checkbox.dataset.question;
    reviewData[meetingKey][`q${questionIndex}_checked`] = checkbox.checked;
  });
  
  textareas.forEach(textarea => {
    const questionIndex = textarea.dataset.question;
    reviewData[meetingKey][`q${questionIndex}_notes`] = textarea.value;
  });
  
  storeData('reviewData', reviewData);
}

function loadSavedReviewData(meetingKey) {
  const reviewData = getStoredData('reviewData');
  if (!reviewData || !reviewData[meetingKey]) return;
  
  const meetingData = reviewData[meetingKey];
  
  Object.keys(meetingData).forEach(key => {
    if (key.includes('_checked')) {
      const questionIndex = key.split('_')[0].replace('q', '');
      const checkbox = document.querySelector(`input[data-meeting="${meetingKey}"][data-question="${questionIndex}"]`);
      if (checkbox) {
        checkbox.checked = meetingData[key];
      }
    } else if (key.includes('_notes')) {
      const questionIndex = key.split('_')[0].replace('q', '');
      const textarea = document.querySelector(`textarea[data-meeting="${meetingKey}"][data-question="${questionIndex}"]`);
      if (textarea) {
        textarea.value = meetingData[key];
      }
    }
  });
}

// Prayer functionality
function setupPrayers() {
  // Load initial prayers
  loadThanksgivingPrayers('meeting1');
}

function loadThanksgivingPrayers(meetingKey) {
  const thanksgivingPrayers = document.getElementById('thanksgiving-prayers');
  const prayers = appData.prayers.thanksgiving[meetingKey];
  
  if (!thanksgivingPrayers || !prayers) return;
  
  const prayerList = document.createElement('ul');
  prayerList.className = 'thanksgiving-list';
  
  prayers.forEach(prayer => {
    const listItem = document.createElement('li');
    listItem.textContent = prayer;
    prayerList.appendChild(listItem);
  });
  
  thanksgivingPrayers.innerHTML = '';
  thanksgivingPrayers.appendChild(prayerList);
}

// Timer functionality
function setupTimer() {
  const startBtn = document.getElementById('start-timer');
  const pauseBtn = document.getElementById('pause-timer');
  const resetBtn = document.getElementById('reset-timer');
  
  if (startBtn) startBtn.addEventListener('click', startTimer);
  if (pauseBtn) pauseBtn.addEventListener('click', pauseTimer);
  if (resetBtn) resetBtn.addEventListener('click', resetTimer);
  
  updateTimerDisplay();
}

function startTimer() {
  if (timerState.isPaused) {
    // Resume from pause
    timerState.isPaused = false;
  } else if (!timerState.isRunning) {
    // Start fresh
    timerState.isRunning = true;
    timerState.currentTime = 0;
  }
  
  timerState.interval = setInterval(() => {
    timerState.currentTime++;
    updateTimerDisplay();
    updateTimerPhase();
    
    if (timerState.currentTime >= timerState.totalTime) {
      completeTimer();
    }
  }, 1000);
  
  const startButton = document.getElementById('start-timer');
  const pauseButton = document.getElementById('pause-timer');
  
  if (startButton) startButton.disabled = true;
  if (pauseButton) pauseButton.disabled = false;
}

function pauseTimer() {
  timerState.isPaused = true;
  clearInterval(timerState.interval);
  
  const startButton = document.getElementById('start-timer');
  const pauseButton = document.getElementById('pause-timer');
  
  if (startButton) startButton.disabled = false;
  if (pauseButton) pauseButton.disabled = true;
}

function resetTimer() {
  timerState.isRunning = false;
  timerState.isPaused = false;
  timerState.currentTime = 0;
  timerState.currentPhase = 'ready';
  
  clearInterval(timerState.interval);
  
  const startButton = document.getElementById('start-timer');
  const pauseButton = document.getElementById('pause-timer');
  
  if (startButton) startButton.disabled = false;
  if (pauseButton) pauseButton.disabled = true;
  
  updateTimerDisplay();
  updatePhaseDisplay();
}

function completeTimer() {
  clearInterval(timerState.interval);
  timerState.isRunning = false;
  timerState.currentPhase = 'complete';
  
  const startButton = document.getElementById('start-timer');
  const pauseButton = document.getElementById('pause-timer');
  
  if (startButton) startButton.disabled = false;
  if (pauseButton) pauseButton.disabled = true;
  
  updateTimerDisplay();
  updatePhaseDisplay();
}

function updateTimerDisplay() {
  const minutes = Math.floor(timerState.currentTime / 60);
  const seconds = timerState.currentTime % 60;
  
  const minutesElement = document.getElementById('timer-minutes');
  const secondsElement = document.getElementById('timer-seconds');
  const progressFill = document.getElementById('progress-fill');
  
  if (minutesElement) {
    minutesElement.textContent = minutes.toString().padStart(2, '0');
  }
  
  if (secondsElement) {
    secondsElement.textContent = seconds.toString().padStart(2, '0');
  }
  
  if (progressFill) {
    const progressPercent = (timerState.currentTime / timerState.totalTime) * 100;
    progressFill.style.width = `${Math.min(progressPercent, 100)}%`;
  }
}

function updateTimerPhase() {
  const currentMinutes = Math.floor(timerState.currentTime / 60);
  let newPhase = 'opening';
  
  if (currentMinutes >= 80) {
    newPhase = 'closing';
  } else if (currentMinutes >= 50) {
    newPhase = 'sharing';
  } else if (currentMinutes >= 20) {
    newPhase = 'formation';
  }
  
  if (newPhase !== timerState.currentPhase) {
    timerState.currentPhase = newPhase;
    updatePhaseDisplay();
  }
}

function updatePhaseDisplay() {
  const phaseElement = document.getElementById('timer-phase');
  const phaseItems = document.querySelectorAll('.phase-item');
  
  // Remove all active classes
  phaseItems.forEach(item => item.classList.remove('active'));
  
  // Update phase text and highlight current phase
  let phaseText = 'Ready to Begin';
  
  switch (timerState.currentPhase) {
    case 'opening':
      phaseText = 'Opening - Rosary & Prayer';
      break;
    case 'formation':
      phaseText = 'Formation Tape/Video';
      break;
    case 'sharing':
      phaseText = 'Insights Sharing Time';
      break;
    case 'closing':
      phaseText = 'Thanksgiving & Closing';
      break;
    case 'complete':
      phaseText = 'Meeting Complete!';
      break;
  }
  
  if (phaseElement) {
    phaseElement.textContent = phaseText;
  }
  
  // Highlight current phase
  const currentPhaseItem = document.querySelector(`[data-phase="${timerState.currentPhase}"]`);
  if (currentPhaseItem) {
    currentPhaseItem.classList.add('active');
  }
}

// Notes and data management
function saveNotes() {
  // This function saves all current form data
  const discussionNotes = document.querySelectorAll('.discussion-notes');
  const petitionText = document.getElementById('petition-text');
  
  const notesData = {};
  
  // Save discussion notes
  discussionNotes.forEach((textarea, index) => {
    notesData[`discussion_${index}`] = textarea.value;
  });
  
  // Save petition text
  if (petitionText) {
    notesData.petitions = petitionText.value;
  }
  
  storeData('notes', notesData);
  
  // Show confirmation
  showNotification('Notes saved successfully!');
}

function clearNotes() {
  if (confirm('Are you sure you want to clear all notes? This action cannot be undone.')) {
    // Clear all textareas
    const textareas = document.querySelectorAll('textarea');
    textareas.forEach(textarea => {
      textarea.value = '';
    });
    
    // Clear all checkboxes in review section
    const checkboxes = document.querySelectorAll('#review input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
      checkbox.checked = false;
    });
    
    // Clear stored data
    clearStoredData();
    
    showNotification('All notes cleared!');
  }
}

function loadSavedData() {
  // Load saved notes
  const notesData = getStoredData('notes');
  if (notesData) {
    // Load discussion notes
    const discussionNotes = document.querySelectorAll('.discussion-notes');
    discussionNotes.forEach((textarea, index) => {
      if (notesData[`discussion_${index}`]) {
        textarea.value = notesData[`discussion_${index}`];
      }
    });
    
    // Load petition text
    const petitionText = document.getElementById('petition-text');
    if (petitionText && notesData.petitions) {
      petitionText.value = notesData.petitions;
    }
  }
}

// Data storage utilities (using session storage as fallback)
function storeData(key, data) {
  try {
    const dataString = JSON.stringify(data);
    // Try sessionStorage as a temporary solution
    if (typeof(Storage) !== "undefined" && sessionStorage) {
      sessionStorage.setItem(`peaceOfHeart_${key}`, dataString);
    } else {
      // Store in memory as fallback
      if (!window.peaceOfHeartData) {
        window.peaceOfHeartData = {};
      }
      window.peaceOfHeartData[key] = data;
    }
  } catch (e) {
    console.log('Data storage not available');
  }
}

function getStoredData(key) {
  try {
    if (typeof(Storage) !== "undefined" && sessionStorage) {
      const dataString = sessionStorage.getItem(`peaceOfHeart_${key}`);
      return dataString ? JSON.parse(dataString) : null;
    } else {
      // Get from memory fallback
      return window.peaceOfHeartData ? window.peaceOfHeartData[key] : null;
    }
  } catch (e) {
    console.log('Data retrieval not available');
    return null;
  }
}

function clearStoredData() {
  try {
    if (typeof(Storage) !== "undefined" && sessionStorage) {
      const keys = Object.keys(sessionStorage);
      keys.forEach(key => {
        if (key.startsWith('peaceOfHeart_')) {
          sessionStorage.removeItem(key);
        }
      });
    } else {
      // Clear memory fallback
      if (window.peaceOfHeartData) {
        window.peaceOfHeartData = {};
      }
    }
  } catch (e) {
    console.log('Data clearing not available');
  }
}

// Utility functions
function showNotification(message) {
  // Create a simple notification
  const notification = document.createElement('div');
  notification.style.cssText = `
    position: fixed;
    top: 100px;
    right: 20px;
    background: var(--color-success);
    color: white;
    padding: 12px 20px;
    border-radius: 6px;
    z-index: 9999;
    font-weight: 500;
    box-shadow: var(--shadow-lg);
  `;
  notification.textContent = message;
  
  document.body.appendChild(notification);
  
  setTimeout(() => {
    notification.remove();
  }, 3000);
}

// Auto-save functionality for discussion notes and petitions
document.addEventListener('input', function(e) {
  if (e.target.classList.contains('discussion-notes') || e.target.id === 'petition-text') {
    // Debounced auto-save
    clearTimeout(window.autoSaveTimeout);
    window.autoSaveTimeout = setTimeout(saveNotes, 2000);
  }
});

// Global functions for inline event handlers
window.navigateToSection = navigateToSection;
window.saveNotes = saveNotes;
window.clearNotes = clearNotes;
window.toggleComponent = toggleComponent;
window.loadReviewQuestions = loadReviewQuestions;
window.loadThanksgivingPrayers = loadThanksgivingPrayers;