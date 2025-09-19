// Application data
const appData = {
  currentDate: "2025-09-18",
  currentDay: "Thursday",
  currentMonth: new Date().getMonth(), // 0-based (September = 8)
  rosarySchedule: {
    "Monday": "Joyful Mysteries",
    "Tuesday": "Sorrowful Mysteries", 
    "Wednesday": "Glorious Mysteries",
    "Thursday": "Luminous Mysteries",
    "Friday": "Sorrowful Mysteries",
    "Saturday": "Joyful Mysteries",
    "Sunday": "Glorious Mysteries"
  },
  mysteries: {
    "Joyful Mysteries": [
      {
        "title": "The Annunciation",
        "description": "The Angel Gabriel announces to Mary that she will conceive Jesus"
      },
      {
        "title": "The Visitation", 
        "description": "Mary visits her cousin Elizabeth, who is pregnant with John the Baptist"
      },
      {
        "title": "The Nativity",
        "description": "Jesus is born in Bethlehem"
      },
      {
        "title": "The Presentation in the Temple",
        "description": "Mary and Joseph present the baby Jesus in the Temple"
      },
      {
        "title": "The Finding of the Child Jesus in the Temple",
        "description": "Mary and Joseph find the 12-year-old Jesus teaching in the Temple"
      }
    ],
    "Sorrowful Mysteries": [
      {
        "title": "The Agony in the Garden",
        "description": "Jesus prays in the Garden of Gethsemane, experiencing great sorrow"
      },
      {
        "title": "The Scourging at the Pillar",
        "description": "Jesus is brutally whipped at Pilate's command"
      },
      {
        "title": "The Crowning with Thorns",
        "description": "Soldiers mock Jesus by placing a crown of thorns on His head"
      },
      {
        "title": "The Carrying of the Cross",
        "description": "Jesus carries His cross to Calvary"
      },
      {
        "title": "The Crucifixion and Death of Jesus",
        "description": "Jesus is nailed to the cross and dies for our sins"
      }
    ],
    "Glorious Mysteries": [
      {
        "title": "The Resurrection",
        "description": "Jesus rises triumphantly from the dead"
      },
      {
        "title": "The Ascension",
        "description": "Jesus ascends into Heaven, returning to the Father"
      },
      {
        "title": "The Descent of the Holy Spirit",
        "description": "The Holy Spirit descends upon the Apostles at Pentecost"
      },
      {
        "title": "The Assumption of Mary",
        "description": "Mary is assumed body and soul into Heaven"
      },
      {
        "title": "The Coronation of Mary",
        "description": "Mary is crowned as Queen of Heaven and Earth"
      }
    ],
    "Luminous Mysteries": [
      {
        "title": "The Baptism of Jesus in the Jordan",
        "description": "God proclaims Jesus is His Son"
      },
      {
        "title": "The Wedding at Cana",
        "description": "Jesus performs His first miracle, turning water into wine"
      },
      {
        "title": "The Proclamation of the Kingdom",
        "description": "Jesus calls people to conversion and proclaims the Kingdom of God"
      },
      {
        "title": "The Transfiguration",
        "description": "Jesus is gloriously transformed on Mount Tabor"
      },
      {
        "title": "The Institution of the Eucharist",
        "description": "At the Last Supper, Jesus gives us His Body and Blood in the Eucharist"
      }
    ]
  },
  songs: {
    allSongs: [
      "Amazing Grace",
      "Alleluia Sing to Jesus",
      "America the Beautiful", 
      "As I Kneel",
      "At the Name of Jesus",
      "Dear Lady of Fatima",
      "Exodus 15",
      "Hail Holy Queen",
      "Hail Mary",
      "Holy is His Name",
      "Hymn to St. Joseph",
      "Immaculate Mary",
      "Mary, Multiplier of All Graces",
      "O Come, O Come Emmanuel",
      "O Mary Our Mother",
      "O Sacred Head Surrounded",
      "On this Day",
      "Prayer of St. Francis",
      "Seek Ye First",
      "Sing of Mary",
      "Singing Hallelujah",
      "The King of Glory",
      "To Jesus Christ",
      "Were You There",
      "What Child is This"
    ],
    monthlyRecommendations: {
      "January": ["Sing of Mary"],
      "February": ["As I Kneel"],
      "March": ["Hymn to St. Joseph", "Were You There (if Lent)", "O Sacred Head (if Lent)"],
      "April": ["Alleluia Sing to Jesus (if Easter)"],
      "May": ["Singing Hallelujah", "On this Day"],
      "June": ["At the Name of Jesus", "To Jesus Christ"],
      "July": ["Immaculate Mary", "Seek Ye First", "America the Beautiful"],
      "August": ["Hail Mary", "Hail Holy Queen", "Amazing Grace"],
      "September": ["Holy is His Name", "Exodus 15"],
      "October": ["Dear Lady of Fatima", "Prayer of St. Francis"],
      "November": ["O Come, O Come Emmanuel", "O Mary Our Mother"],
      "December": ["The King of Glory", "What Child is This"]
    },
    lyrics: {
      "Sing of Mary": `Sing of Mary, pure and lowly,
Virgin Mother undefiled.
Sing of God's own Son most holy,
Who became her little Child.

Fairest Child of fairest Mother,
God the Lord Who came to earth,
Word made flesh, our very Brother,
takes our nature by His birth.

Sing of Jesus, Son of Mary,
in the home at Nazareth.
Toil and labor cannot weary
love enduring unto death.

Constant was the love He gave her,
though He went forth from her side,
Forth to preach and heal and suffer,
till on Calvary He died.

Joyful Mother, full of gladness,
in your arms our Lord was borne.
Mournful Mother, full of sadness,
all your heart with pain was torn.

Glorious Mother, now rewarded
with a crown at Jesus hand,
Age to age, your name recorded
shall be blest in every land.

Glory be to God the Father,
glory be to God the Son
Glory to the Holy Spirit,
glory to the Three in One.

From the heart of blessed Mary,
from all saints the song ascends
And the Church the strain re-echoes
unto earth's remotest ends.`,
      "As I Kneel": `As I kneel before you,
As I bow my head in prayer,
Take this day, make it yours
and fill me with your love.

Ave Maria, Gratia plena,
Dominus tecum, Benedicta tu.

All I have I give you,
Every dream and wish are yours,
Mother of Christ, Mother of mine,
present them to my Lord.

Ave Maria, Gratia plena,
Dominus tecum, Benedicta tu.

As I kneel before you,
And I see your smiling face,
Every thought, every word
Is lost in your embrace.

Ave Maria, Gratia plena,
Dominus tecum, Benedicta tu.`,
      "Mary, Multiplier of All Graces": `Mary, our Mother, please take our merits
and feeble efforts each day.
Multiply them, according to your will
for the glory of your Son, we pray.

In order to create in this world
a tremendous spiritual power.
A force so strong to crush the head of Satan,
in this final hour.

Sin is the cause of unhappiness,
The cause of wars and division in family life.
Sin doesn't just hurt the sinner, but the innocent,
And the mystical Body of Christ.

Mary, our Mother, please take our merits
and feeble efforts each day.
Multiply them, according to your will
for the glory of your Son, we pray.

In order to create in this world
a tremendous spiritual power.
A force so strong to crush the head of Satan,
in this final hour.

We can spread our holiness to fight against
Unrepented sin dragging humanity down.
Let's consecrate ourselves, our families, to Jesus Christ,
Through Mary, multiplier of all graces.

Mary, our Mother, please take our merits
and feeble efforts each day.
Multiply them, according to your will
for the glory of your Son, we pray.

In order to create in this world
a tremendous spiritual power.
A force so strong to crush the head of Satan,
in this final hour.`
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

// Session storage for meeting selection
let selectedMeeting = 'meeting1';

// Application initialization
document.addEventListener('DOMContentLoaded', function() {
  initializeApp();
});

function initializeApp() {
  setupNavigation();
  setupRosary();
  setupSongs();
  setupSpiritualReview();
  setupThanksgiving();
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

// Rosary functionality
function setupRosary() {
  // Auto-select based on current day (Thursday = Luminous Mysteries)
  const mysterySelect = document.getElementById('mystery-select');
  if (mysterySelect) {
    const todaysMystery = appData.rosarySchedule[appData.currentDay];
    mysterySelect.value = todaysMystery;
    loadMysteries(todaysMystery);
  }
}

function loadMysteries(mysteryType) {
  const mysteriesContent = document.getElementById('mysteries-content');
  const mysteries = appData.mysteries[mysteryType];
  
  if (!mysteriesContent || !mysteries) return;
  
  mysteriesContent.innerHTML = '';
  
  mysteries.forEach((mystery, index) => {
    const mysteryItem = document.createElement('div');
    mysteryItem.className = 'mystery-item';
    mysteryItem.innerHTML = `
      <h4>${index + 1}. ${mystery.title}</h4>
      <p>${mystery.description}</p>
    `;
    
    mysteriesContent.appendChild(mysteryItem);
  });
}

// Songs functionality
function setupSongs() {
  setupSongDropdown();
  loadMonthlySongs();
}

function setupSongDropdown() {
  const songSelect = document.getElementById('song-select');
  if (!songSelect) return;
  
  // Clear existing options except the first one
  songSelect.innerHTML = '<option value="">Select a song...</option>';
  
  // Sort songs alphabetically
  const sortedSongs = [...appData.songs.allSongs].sort();
  
  sortedSongs.forEach(song => {
    const option = document.createElement('option');
    option.value = song;
    option.textContent = song;
    songSelect.appendChild(option);
  });
}

function loadMonthlySongs() {
  const songsGrid = document.getElementById('songs-grid');
  if (!songsGrid) return;
  
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  
  const currentMonth = 8; // September (0-based)
  
  songsGrid.innerHTML = '';
  
  months.forEach((month, index) => {
    const monthCard = document.createElement('div');
    monthCard.className = 'month-card';
    
    // Highlight current month with light yellow background
    if (index === currentMonth) {
      monthCard.classList.add('current-month');
    }
    
    const songs = appData.songs.monthlyRecommendations[month] || [];
    
    const songItems = songs.map(song => {
      // Use proper escaping for single quotes
      const escapedSong = song.replace(/'/g, "\\'");
      return `<li onclick="showSongLyrics('${escapedSong}')">${song}</li>`;
    }).join('');
    
    monthCard.innerHTML = `
      <h3>${month}</h3>
      <ul class="song-list">
        ${songItems}
      </ul>
    `;
    
    songsGrid.appendChild(monthCard);
  });
}

function showSongLyrics(songTitle) {
  // Clean song title to match lyrics key
  const cleanTitle = songTitle.replace(' (if Lent)', '').replace(' (if Easter)', '');
  const lyrics = appData.songs.lyrics[cleanTitle];
  
  if (!lyrics) {
    alert('Lyrics not available for this song.');
    return;
  }
  
  // Update song page content
  const songTitleElement = document.getElementById('song-title');
  const songLyricsElement = document.getElementById('song-lyrics');
  
  if (songTitleElement) songTitleElement.textContent = cleanTitle;
  if (songLyricsElement) {
    // Use the formatted lyrics with proper line breaks
    songLyricsElement.textContent = lyrics;
  }
  
  // Navigate to song page
  navigateToSection('song-page');
}

// Spiritual review functionality
function setupSpiritualReview() {
  // Load initial questions
  loadReviewQuestions('meeting1');
}

function loadReviewQuestions(meetingKey) {
  const reviewQuestions = document.getElementById('review-questions');
  const questions = appData.spiritualProgressReview[meetingKey];
  
  // Remember the meeting selection
  selectedMeeting = meetingKey;
  
  if (!reviewQuestions || !questions) return;
  
  reviewQuestions.innerHTML = '';
  
  questions.forEach((question, index) => {
    const questionItem = document.createElement('div');
    questionItem.className = 'question-item';
    // Removed checkboxes and notes sections as requested
    questionItem.innerHTML = `
      <h4>Question ${index + 1}</h4>
      <p>${question}</p>
    `;
    
    reviewQuestions.appendChild(questionItem);
  });
}

// Thanksgiving functionality
function setupThanksgiving() {
  // Pre-select based on remembered meeting from Spiritual Review
  const thanksgivingSelect = document.getElementById('thanksgiving-select');
  if (thanksgivingSelect) {
    thanksgivingSelect.value = selectedMeeting;
    loadThanksgivingPrayers(selectedMeeting);
  }
}

function loadThanksgivingPrayers(meetingKey) {
  const thanksgivingPrayers = document.getElementById('thanksgiving-prayers');
  const prayers = appData.thanksgiving[meetingKey];
  
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

// Data storage utilities (using memory storage as fallback)
function storeData(key, data) {
  try {
    // Store in memory as fallback since we can't use localStorage
    if (!window.peaceOfHeartData) {
      window.peaceOfHeartData = {};
    }
    window.peaceOfHeartData[key] = data;
  } catch (e) {
    console.log('Data storage not available');
  }
}

function getStoredData(key) {
  try {
    // Get from memory fallback
    return window.peaceOfHeartData ? window.peaceOfHeartData[key] : null;
  } catch (e) {
    console.log('Data retrieval not available');
    return null;
  }
}

function clearStoredData() {
  try {
    // Clear memory fallback
    if (window.peaceOfHeartData) {
      window.peaceOfHeartData = {};
    }
  } catch (e) {
    console.log('Data clearing not available');
  }
}

function loadSavedData() {
  // No longer needed since we removed petition text input
}

// Global functions for inline event handlers
window.navigateToSection = navigateToSection;
window.loadMysteries = loadMysteries;
window.showSongLyrics = showSongLyrics;
window.loadReviewQuestions = loadReviewQuestions;
window.loadThanksgivingPrayers = loadThanksgivingPrayers;