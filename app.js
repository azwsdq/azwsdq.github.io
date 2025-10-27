// Данные о правителях
const leaders = [
  {
    id: 1,
    name: 'Владимир Красное Солнышко',
    period: '980-1015',
    era: 'Древняя Русь',
    achievements: [
      'Крещение Руси в 988 году',
      'Укрепление связей с Византией',
      'Объединение славянских племен',
      'Строительство первых храмов'
    ],
    legacy: 'Принятие христианства стало переломным моментом в истории России',
    difficulty: 'easy'
  },
  {
    id: 2,
    name: 'Ярослав Мудрый',
    period: '1019-1054',
    era: 'Древняя Русь',
    achievements: [
      'Создание первого свода законов «Русская Правда»',
      'Победа над печенегами в 1036 году',
      'Строительство Софийского собора в Киеве',
      'Развитие образования и грамотности',
      'Династические браки с европейскими монархами'
    ],
    legacy: 'Заложил правовую основу государства и превратил Русь во влиятельную державу',
    difficulty: 'medium'
  },
  {
    id: 3,
    name: 'Александр Невский',
    period: '1236-1263',
    era: 'Древняя Русь',
    achievements: [
      'Невская битва 1240 года (победа над шведами)',
      'Ледовое побоище 1242 года (разгром Ливонского ордена)',
      'Защита Руси от западной экспансии',
      'Сохранение православия'
    ],
    legacy: 'Защитил западные рубежи Руси и сохранил православную веру народа',
    difficulty: 'easy'
  },
  {
    id: 4,
    name: 'Иван III Великий',
    period: '1462-1505',
    era: 'Московское царство',
    achievements: [
      'Свержение монголо-татарского ига в 1480 году',
      'Стояние на реке Угре',
      'Объединение русских земель вокруг Москвы',
      'Введение двуглавого орла как герба России',
      'Создание Судебника 1497 года'
    ],
    legacy: 'Освободил Русь от ордынского ига и создал единое государство',
    difficulty: 'medium'
  },
  {
    id: 5,
    name: 'Петр I Великий',
    period: '1682-1725',
    era: 'Российская империя',
    achievements: [
      'Основание Санкт-Петербурга в 1703 году',
      'Создание регулярной армии и флота',
      'Победа в Северной войне',
      'Провозглашение России империей в 1721 году',
      'Культурная модернизация страны'
    ],
    legacy: 'Превратил Россию в великую европейскую державу',
    difficulty: 'easy'
  },
  {
    id: 6,
    name: 'Екатерина II Великая',
    period: '1762-1796',
    era: 'Российская империя',
    achievements: [
      'Губернская реформа 1775 года',
      'Расширение территории империи',
      'Присоединение Крыма',
      'Развитие образования (Смольный институт)',
      'Основание Эрмитажа'
    ],
    legacy: 'Золотой век Российской империи, расцвет культуры и искусства',
    difficulty: 'medium'
  },
  {
    id: 7,
    name: 'Александр II Освободитель',
    period: '1855-1881',
    era: 'Российская империя',
    achievements: [
      'Отмена крепостного права в 1861 году',
      'Судебная реформа 1864 года',
      'Земская реформа',
      'Военная реформа (всеобщая воинская повинность)',
      'Освобождение Болгарии от турецкого ига'
    ],
    legacy: 'Великие реформы освободили крестьян и модернизировали Россию',
    difficulty: 'easy'
  },
  {
    id: 8,
    name: 'Александр III Миротворец',
    period: '1881-1894',
    era: 'Российская империя',
    achievements: [
      '13 лет без войн',
      'Строительство Транссибирской магистрали',
      'Развитие тяжелой промышленности',
      'Присоединение Средней Азии'
    ],
    legacy: 'Обеспечил мирное развитие России и промышленный рост',
    difficulty: 'hard'
  },
  {
    id: 9,
    name: 'Владимир Ленин',
    period: '1917-1924',
    era: 'СССР',
    achievements: [
      'Руководство Октябрьской революцией 1917 года',
      'Создание первого социалистического государства',
      'Новая экономическая политика (НЭП)',
      'Национализация промышленности',
      'Создание Советской власти'
    ],
    legacy: 'Основатель СССР и первого в мире социалистического государства',
    difficulty: 'medium'
  },
  {
    id: 10,
    name: 'Иосиф Сталин',
    period: '1924-1953',
    era: 'СССР',
    achievements: [
      'Индустриализация и коллективизация',
      'Победа в Великой Отечественной войне',
      'Создание ядерного щита СССР',
      'Превращение СССР в сверхдержаву',
      'Восстановление экономики после войны'
    ],
    legacy: 'Превратил СССР в индустриальную сверхдержаву и обеспечил победу над фашизмом',
    difficulty: 'medium'
  },
  {
    id: 11,
    name: 'Никита Хрущев',
    period: '1953-1964',
    era: 'СССР',
    achievements: [
      'Десталинизация и политическая оттепель',
      'Запуск первого спутника и полет Гагарина в космос',
      'Разоблачение культа личности Сталина',
      'Карибский кризис и его урегулирование',
      'Мирное сосуществование с Западом'
    ],
    legacy: 'Открыл космическую эру человечества и начал демократизацию СССР',
    difficulty: 'easy'
  },
  {
    id: 12,
    name: 'Михаил Горбачев',
    period: '1985-1991',
    era: 'СССР',
    achievements: [
      'Политика перестройки и гласности',
      'Окончание холодной войны',
      'Демократизация общественной жизни',
      'Вывод войск из Афганистана',
      'Роспуск СССР и мирный переход власти'
    ],
    legacy: 'Завершил холодную войну и открыл путь к демократическим преобразованиям',
    difficulty: 'medium'
  },
  {
    id: 13,
    name: 'Борис Ельцин',
    period: '1991-1999',
    era: 'Российская Федерация',
    achievements: [
      'Первый президент Российской Федерации',
      'Принятие Конституции РФ 1993 года',
      'Переход к рыночной экономике',
      'Ваучерная приватизация',
      'Становление многопартийной системы'
    ],
    legacy: 'Заложил основы современной российской государственности',
    difficulty: 'easy'
  },
  {
    id: 14,
    name: 'Владимир Путин',
    period: '2000-н.в.',
    era: 'Российская Федерация',
    achievements: [
      'Укрепление государственной власти',
      'Восстановление экономики после кризиса 1990-х',
      'Модернизация ядерных сил России',
      'Повышение международного авторитета страны',
      'Социальные программы и нацпроекты'
    ],
    legacy: 'Восстановил статус России как влиятельной мировой державы',
    difficulty: 'medium'
  }
];

// Глобальные переменные для состояния игры
let currentScreen = 'main-menu';
let quizScore = 0;
let currentQuestionIndex = 0;
let quizQuestions = [];
let timelineProgress = 0;
let matchingProgress = 0;
let selectedAchievement = null;
let selectedRuler = null;
let connections = [];

// Утилитарные функции
function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function getRandomElements(array, count) {
  const shuffled = shuffleArray(array);
  return shuffled.slice(0, count);
}

function showScreen(screenId) {
  // Скрыть все экраны
  document.querySelectorAll('.screen').forEach(screen => {
    screen.classList.remove('active');
  });
  
  // Показать нужный экран
  document.getElementById(screenId).classList.add('active');
  currentScreen = screenId;
}

function addAnimation(element, animationClass) {
  element.classList.add(animationClass);
  setTimeout(() => {
    element.classList.remove(animationClass);
  }, 600);
}

// Инициализация приложения
function initApp() {
  setupEventListeners();
  showScreen('main-menu');
}

// Настройка обработчиков событий
function setupEventListeners() {
  // Кнопки режимов игры
  document.querySelectorAll('.mode-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const mode = e.currentTarget.getAttribute('data-mode');
      switchToMode(mode);
    });
  });
  
  // Кнопки возврата в главное меню
  document.querySelectorAll('.back-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      showScreen('main-menu');
    });
  });
  
  // Кнопки викторины
  document.querySelectorAll('.answer-btn').forEach(btn => {
    btn.addEventListener('click', handleQuizAnswer);
  });
  
  document.getElementById('next-question').addEventListener('click', nextQuizQuestion);
  
  // Кнопки временной линии
  document.getElementById('check-timeline').addEventListener('click', checkTimeline);
  
  // Кнопки сопоставления достижений
  document.getElementById('show-answers').addEventListener('click', showMatchingAnswers);
  document.getElementById('reset-matching').addEventListener('click', resetMatching);
  
  // Модальное окно энциклопедии
  document.querySelector('.modal-close').addEventListener('click', closeModal);
  document.getElementById('encyclopedia-modal').addEventListener('click', (e) => {
    if (e.target.id === 'encyclopedia-modal') {
      closeModal();
    }
  });
}

// Переключение между режимами игры
function switchToMode(mode) {
  switch (mode) {
    case 'quiz':
      initQuiz();
      showScreen('quiz-screen');
      break;
    case 'timeline':
      initTimeline();
      showScreen('timeline-screen');
      break;
    case 'achievements':
      initAchievements();
      showScreen('achievements-screen');
      break;
    case 'encyclopedia':
      initEncyclopedia();
      showScreen('encyclopedia-screen');
      break;
  }
}

// === ВИКТОРИНА ===
function initQuiz() {
  quizScore = 0;
  currentQuestionIndex = 0;
  quizQuestions = generateQuizQuestions();
  
  document.getElementById('quiz-score').textContent = quizScore;
  document.getElementById('quiz-content').classList.remove('hidden');
  document.getElementById('quiz-results').classList.add('hidden');
  
  loadQuizQuestion();
}

function generateQuizQuestions() {
  const questions = [];
  const shuffledLeaders = shuffleArray(leaders);
  
  // Генерируем 14 вопросов (по одному на каждого правителя)
  for (let i = 0; i < 14 && i < shuffledLeaders.length; i++) {
    const correctLeader = shuffledLeaders[i];
    const wrongOptions = shuffleArray(leaders.filter(l => l.id !== correctLeader.id)).slice(0, 3);
    const allOptions = shuffleArray([correctLeader, ...wrongOptions]);
    
    questions.push({
      leader: correctLeader,
      options: allOptions,
      correctIndex: allOptions.findIndex(opt => opt.id === correctLeader.id)
    });
  }
  
  return questions;
}

function loadQuizQuestion() {
  if (currentQuestionIndex >= quizQuestions.length) {
    showQuizResults();
    return;
  }
  
  const question = quizQuestions[currentQuestionIndex];
  const achievementsList = document.getElementById('achievements-list');
  const answerButtons = document.querySelectorAll('.answer-btn');
  
  // Показываем достижения
  achievementsList.innerHTML = '<ul>' + 
    question.leader.achievements.slice(0, 4).map(achievement => 
      `<li>${achievement}</li>`
    ).join('') + 
    '</ul>';
  
  // Заполняем варианты ответов
  answerButtons.forEach((btn, index) => {
    if (index < question.options.length) {
      btn.textContent = question.options[index].name;
      btn.style.display = 'block';
      btn.classList.remove('correct', 'incorrect', 'disabled');
      btn.disabled = false;
    } else {
      btn.style.display = 'none';
    }
  });
  
  // Скрываем элементы обратной связи
  document.getElementById('quiz-feedback').classList.add('hidden');
  document.getElementById('next-question').classList.add('hidden');
}

function handleQuizAnswer(e) {
  const selectedIndex = parseInt(e.target.getAttribute('data-answer'));
  const question = quizQuestions[currentQuestionIndex];
  const isCorrect = selectedIndex === question.correctIndex;
  const feedback = document.getElementById('quiz-feedback');
  const answerButtons = document.querySelectorAll('.answer-btn');
  
  // Отключаем все кнопки
  answerButtons.forEach(btn => {
    btn.classList.add('disabled');
    btn.disabled = true;
  });
  
  // Подсвечиваем правильный и неправильный ответы
  answerButtons[question.correctIndex].classList.add('correct');
  if (!isCorrect) {
    answerButtons[selectedIndex].classList.add('incorrect');
  }
  
  // Показываем обратную связь
  if (isCorrect) {
    quizScore += 10;
    document.getElementById('quiz-score').textContent = quizScore;
    feedback.className = 'feedback correct';
    feedback.innerHTML = `
      <div>✅ <strong>Правильно! (+10 очков)</strong></div>
      <div>${question.leader.name} (${question.leader.period})</div>
      <div>${question.leader.legacy}</div>
    `;
    addAnimation(feedback, 'pulse');
  } else {
    feedback.className = 'feedback incorrect';
    feedback.innerHTML = `
      <div>❌ <strong>Неправильно!</strong></div>
      <div>Правильный ответ: ${question.leader.name} (${question.leader.period})</div>
      <div>${question.leader.legacy}</div>
    `;
  }
  
  feedback.classList.remove('hidden');
  document.getElementById('next-question').classList.remove('hidden');
}

function nextQuizQuestion() {
  currentQuestionIndex++;
  loadQuizQuestion();
}

function showQuizResults() {
  document.getElementById('quiz-content').classList.add('hidden');
  document.getElementById('quiz-results').classList.remove('hidden');
  
  const finalScoreElement = document.getElementById('final-score');
  const ratingElement = document.querySelector('.score-rating');
  
  finalScoreElement.textContent = quizScore;
  
  // Определяем рейтинг (из 140 возможных очков)
  let rating = '';
  if (quizScore >= 120) {
    rating = '🏆 Превосходно! Вы настоящий знаток истории!';
  } else if (quizScore >= 90) {
    rating = '🥈 Хорошо! Вы неплохо знаете российскую историю.';
  } else if (quizScore >= 60) {
    rating = '🥉 Неплохо! Есть над чем поработать.';
  } else {
    rating = '📚 Рекомендуем изучить энциклопедию!';
  }
  
  ratingElement.textContent = rating;
}

function restartQuiz() {
  initQuiz();
}

// === ВРЕМЕННАЯ ЛИНИЯ ===
function initTimeline() {
  timelineProgress = 0;
  document.getElementById('timeline-progress').textContent = timelineProgress;
  
  setupRulerCards();
  setupTimelineSlots();
}

function setupRulerCards() {
  const container = document.getElementById('ruler-cards');
  const shuffledLeaders = shuffleArray(leaders);
  
  container.innerHTML = shuffledLeaders.map(leader => `
    <div class="ruler-card" draggable="true" data-id="${leader.id}" data-period="${leader.period}">
      ${leader.name}
    </div>
  `).join('');
  
  // Добавляем обработчики drag and drop
  container.querySelectorAll('.ruler-card').forEach(card => {
    card.addEventListener('dragstart', handleDragStart);
    card.addEventListener('dragend', handleDragEnd);
  });
}

function setupTimelineSlots() {
  const container = document.querySelector('.timeline-slots');
  const timelineSlots = [
    { period: '980-1100', years: '980-1100' },
    { period: '1100-1300', years: '1100-1300' },
    { period: '1300-1500', years: '1300-1500' },
    { period: '1500-1700', years: '1500-1700' },
    { period: '1700-1800', years: '1700-1800' },
    { period: '1800-1900', years: '1800-1900' },
    { period: '1900-1950', years: '1900-1950' },
    { period: '1950-1970', years: '1950-1970' },
    { period: '1970-1985', years: '1970-1985' },
    { period: '1985-1992', years: '1985-1992' },
    { period: '1992-2000', years: '1992-2000' },
    { period: '2000-2010', years: '2000-2010' },
    { period: '2010-2020', years: '2010-2020' },
    { period: '2020-2025', years: '2020-2025' }
  ];
  
  container.innerHTML = timelineSlots.map((slot, index) => `
    <div class="timeline-slot" data-slot="${index}" data-period="${slot.period}">
      <span class="slot-label">${slot.years}</span>
    </div>
  `).join('');
  
  // Добавляем обработчики drop
  container.querySelectorAll('.timeline-slot').forEach(slot => {
    slot.addEventListener('dragover', handleDragOver);
    slot.addEventListener('drop', handleDrop);
    slot.addEventListener('dragleave', handleDragLeave);
  });
}

let draggedElement = null;

function handleDragStart(e) {
  draggedElement = e.target;
  e.target.classList.add('dragging');
}

function handleDragEnd(e) {
  e.target.classList.remove('dragging');
  draggedElement = null;
}

function handleDragOver(e) {
  e.preventDefault();
  e.target.classList.add('drop-target');
}

function handleDragLeave(e) {
  e.target.classList.remove('drop-target');
}

function handleDrop(e) {
  e.preventDefault();
  e.target.classList.remove('drop-target');
  
  if (!draggedElement) return;
  
  // Проверяем, свободен ли слот
  if (e.target.querySelector('.ruler-card')) {
    return; // Слот занят
  }
  
  // Получаем данные
  const leaderId = parseInt(draggedElement.getAttribute('data-id'));
  const leader = leaders.find(l => l.id === leaderId);
  const slotPeriod = e.target.getAttribute('data-period');
  
  // Перемещаем карточку в слот
  e.target.appendChild(draggedElement);
  e.target.classList.add('occupied');
  
  // Проверяем правильность размещения
  const isCorrect = checkTimelinePlacement(leader, slotPeriod);
  
  if (isCorrect) {
    e.target.classList.add('correct');
    timelineProgress++;
    document.getElementById('timeline-progress').textContent = timelineProgress;
    addAnimation(e.target, 'pulse');
  } else {
    // Возвращаем карточку обратно
    setTimeout(() => {
      document.getElementById('ruler-cards').appendChild(draggedElement);
      e.target.classList.remove('occupied');
      addAnimation(draggedElement, 'pulse');
    }, 500);
  }
}

function checkTimelinePlacement(leader, slotPeriod) {
  const [startPeriod, endPeriod] = leader.period.split('-').map(y => parseInt(y));
  const [slotStart, slotEnd] = slotPeriod.split('-').map(y => parseInt(y));
  
  // Проверяем, попадает ли период правления в слот
  return startPeriod >= slotStart && startPeriod <= slotEnd;
}

function checkTimeline() {
  const slots = document.querySelectorAll('.timeline-slot');
  let correct = 0;
  let total = 0;
  
  slots.forEach(slot => {
    const card = slot.querySelector('.ruler-card');
    if (card) {
      total++;
      const leaderId = parseInt(card.getAttribute('data-id'));
      const leader = leaders.find(l => l.id === leaderId);
      const slotPeriod = slot.getAttribute('data-period');
      
      if (checkTimelinePlacement(leader, slotPeriod)) {
        correct++;
        slot.classList.add('correct');
      } else {
        slot.classList.add('incorrect');
      }
    }
  });
  
  alert(`Результат: ${correct} из ${total} правильно размещены`);
}

// === СОПОСТАВЛЕНИЕ ДОСТИЖЕНИЙ ===
function initAchievements() {
  matchingProgress = 0;
  selectedAchievement = null;
  selectedRuler = null;
  connections = [];
  
  document.getElementById('achievements-progress').textContent = matchingProgress;
  
  setupAchievementsItems();
  setupRulersItems();
  
  // Очищаем SVG линии
  document.getElementById('connection-lines').innerHTML = '';
}

function setupAchievementsItems() {
  const container = document.getElementById('achievements-items');
  const shuffledLeaders = shuffleArray(leaders).slice(0, 14); // Берем всех 14 правителей
  
  container.innerHTML = shuffledLeaders.map((leader, index) => {
    const achievement = leader.achievements[0]; // Берем первое достижение
    return `
      <div class="matching-item achievement-item" data-leader-id="${leader.id}" data-index="${index}">
        ${achievement}
      </div>
    `;
  }).join('');
  
  container.querySelectorAll('.achievement-item').forEach(item => {
    item.addEventListener('click', selectAchievement);
  });
}

function setupRulersItems() {
  const container = document.getElementById('rulers-items');
  const shuffledLeaders = shuffleArray(leaders).slice(0, 14); // Те же 14 правителей, но в другом порядке
  
  container.innerHTML = shuffledLeaders.map((leader, index) => `
    <div class="matching-item ruler-item" data-leader-id="${leader.id}" data-index="${index}">
      ${leader.name}
    </div>
  `).join('');
  
  container.querySelectorAll('.ruler-item').forEach(item => {
    item.addEventListener('click', selectRuler);
  });
}

function selectAchievement(e) {
  // Убираем предыдущий выбор
  document.querySelectorAll('.achievement-item').forEach(item => {
    item.classList.remove('selected');
  });
  
  selectedAchievement = e.target;
  e.target.classList.add('selected');
}

function selectRuler(e) {
  // Убираем предыдущий выбор
  document.querySelectorAll('.ruler-item').forEach(item => {
    item.classList.remove('selected');
  });
  
  selectedRuler = e.target;
  e.target.classList.add('selected');
  
  // Если выбраны и достижение, и правитель, проверяем соответствие
  if (selectedAchievement && selectedRuler) {
    checkMatch();
  }
}

function checkMatch() {
  const achievementLeaderId = parseInt(selectedAchievement.getAttribute('data-leader-id'));
  const rulerLeaderId = parseInt(selectedRuler.getAttribute('data-leader-id'));
  
  const isCorrect = achievementLeaderId === rulerLeaderId;
  
  // Создаем линию соединения
  drawConnectionLine(selectedAchievement, selectedRuler, isCorrect);
  
  if (isCorrect) {
    // Правильное соответствие
    selectedAchievement.classList.add('matched');
    selectedRuler.classList.add('matched');
    matchingProgress++;
    document.getElementById('achievements-progress').textContent = matchingProgress;
    
    addAnimation(selectedAchievement, 'pulse');
    addAnimation(selectedRuler, 'pulse');
  } else {
    // Неправильное соответствие - линия исчезнет через секунду
    setTimeout(() => {
      removeLastConnectionLine();
    }, 1000);
  }
  
  // Сбрасываем выбор
  selectedAchievement.classList.remove('selected');
  selectedRuler.classList.remove('selected');
  selectedAchievement = null;
  selectedRuler = null;
}

function drawConnectionLine(achievement, ruler, isCorrect) {
  const svg = document.getElementById('connection-lines');
  const achievementRect = achievement.getBoundingClientRect();
  const rulerRect = ruler.getBoundingClientRect();
  const svgRect = svg.getBoundingClientRect();
  
  // Вычисляем координаты относительно SVG
  const x1 = achievementRect.right - svgRect.left;
  const y1 = achievementRect.top + achievementRect.height / 2 - svgRect.top;
  const x2 = rulerRect.left - svgRect.left;
  const y2 = rulerRect.top + rulerRect.height / 2 - svgRect.top;
  
  // Создаем линию
  const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
  line.setAttribute('x1', x1);
  line.setAttribute('y1', y1);
  line.setAttribute('x2', x2);
  line.setAttribute('y2', y2);
  line.classList.add('connection-line');
  line.classList.add(isCorrect ? 'correct' : 'incorrect');
  
  svg.appendChild(line);
  connections.push({ line, isCorrect });
}

function removeLastConnectionLine() {
  const lastConnection = connections.pop();
  if (lastConnection && !lastConnection.isCorrect) {
    lastConnection.line.remove();
  }
}

function showMatchingAnswers() {
  // Показываем все правильные соединения
  const achievementItems = document.querySelectorAll('.achievement-item');
  const rulerItems = document.querySelectorAll('.ruler-item');
  
  // Очищаем все линии
  document.getElementById('connection-lines').innerHTML = '';
  connections = [];
  
  achievementItems.forEach(achievementItem => {
    const leaderId = parseInt(achievementItem.getAttribute('data-leader-id'));
    const correspondingRuler = Array.from(rulerItems).find(ruler => 
      parseInt(ruler.getAttribute('data-leader-id')) === leaderId
    );
    
    if (correspondingRuler) {
      drawConnectionLine(achievementItem, correspondingRuler, true);
      achievementItem.classList.add('matched');
      correspondingRuler.classList.add('matched');
    }
  });
  
  matchingProgress = 14;
  document.getElementById('achievements-progress').textContent = matchingProgress;
}

function resetMatching() {
  initAchievements();
}

// === ЭНЦИКЛОПЕДИЯ ===
function initEncyclopedia() {
  const container = document.getElementById('encyclopedia-grid');
  
  container.innerHTML = leaders.map(leader => `
    <div class="encyclopedia-card" data-leader-id="${leader.id}">
      <div class="card-header">
        <div class="card-name">${leader.name}</div>
        <div class="card-period">${leader.period}</div>
        <div class="card-era">${leader.era}</div>
      </div>
      <div class="card-body">
        <div class="achievements-preview">
          ${leader.achievements.slice(0, 2).join(', ')}...
        </div>
      </div>
    </div>
  `).join('');
  
  // Добавляем обработчики кликов
  container.querySelectorAll('.encyclopedia-card').forEach(card => {
    card.addEventListener('click', (e) => {
      const leaderId = parseInt(e.currentTarget.getAttribute('data-leader-id'));
      openEncyclopediaModal(leaderId);
    });
  });
}

function openEncyclopediaModal(leaderId) {
  const leader = leaders.find(l => l.id === leaderId);
  if (!leader) return;
  
  document.getElementById('modal-name').textContent = leader.name;
  document.getElementById('modal-period').textContent = leader.period;
  document.getElementById('modal-era').textContent = leader.era;
  
  const achievementsList = document.getElementById('modal-achievements');
  achievementsList.innerHTML = leader.achievements.map(achievement => 
    `<li>${achievement}</li>`
  ).join('');
  
  document.getElementById('modal-legacy').textContent = leader.legacy;
  
  document.getElementById('encyclopedia-modal').classList.add('active');
}

function closeModal() {
  document.getElementById('encyclopedia-modal').classList.remove('active');
}

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', initApp);