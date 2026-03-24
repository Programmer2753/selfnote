const i18n = {
  en: {
    login: "Log in",
    logout: "Log out",
    divider: "or",
    getStarted: "Get started for free",
    welcomeBack: name => `Hi, ${name}! Glad to see you again.`,
    loginTitle: "Sign in",
    registerTitle: "Create account",
    resetTitle: "Reset password",

    email: "EMAIL",
    password: "PASSWORD",
    confirmPassword: "CONFIRM PASSWORD",

    continueGoogle: "Continue with Google",
    forgotPassword: "Forgot password?",
    noAccount: "No account?",
    createAccount: "Create account",
    haveAccount: "Already have an account?",
    resetPassword: "Reset password",
    cancelReset: "Cancel",

    heroTitle: "Your ideas. Your actions.",
    heroSubtitle:
      "The planner helps you organize your work, manage projects, and collaborate with your team.",

    footerTitle: "Start simple.\nWrite your first task.",
    exploreTemplates: "Explore all templates",

    products: "Products",
    solutions: "Solutions",
    community: "Community",
    resources: "Resources",
    aboutus: "About",

    notifications: {
      fillAll: "Please fill in all fields",
      passwordsMismatch: "Passwords do not match",
      userExists: "User with this email already exists",
      registerSuccess: name => `Registration successful! Hi, ${name}!`,
      loginError: "Incorrect email or password",
      loginSuccess: name => `Login successful! Hi, ${name}!`,
      loggedOut: "You have logged out",
      resetSent: "Password reset email has been sent"
    },

    profile: {
      title: "My Profile",
      nameLabel: "Profile Name",
      namePlaceholder: "Enter name",
      registrationDate: "Registration Date",
      language: "Interface Language",
      saveChanges: "Save changes",
      profileUpdated: "Profile updated!",
      enterName: "Enter profile name",
      totalTasks: "Total Tasks",
      completed: "Completed",
      productivity: "Productivity",
      myProfile: "My Profile",
      ukrainian: "Ukrainian",
      english: "English"
    },

    about: {
      heroTitle: "Our mission.",
      introTitle: "Save people time by making the world more productive.",
      introP1:
        "While we absolutely love productivity software, we believe productivity, in general, is broken. There's just too many tools to keep track of, too many things in entirely separate ecosystems. There has to be a better way to work. While we absolutely love productivity software, we believe productivity, in general, is broken. There's just too many tools to keep track of, too many things in entirely separate ecosystems. There has to be a better way to work - that's why we created Schedule, first an internal tool, now as a way to fulfill our vision of making the world more productive.",
      introP2:
        "Eventually, our goal is to have all work live in Schedule - thereby making people more productive and giving back at least 20% of time to dedicate to other things. One app to replace them all. We are just getting started and are very grateful to everyone who is working with our team."
    },

    menu: {
      myProfile: "My Profile",
      logout: "Log Out"
    },

    views: {
      list: "List",
      calendar: "Calendar",
      dashboard: "Dashboard"
    },

    table: {
      name: "Name",
      dueDate: "Due date",
      priority: "Priority",
      status: "Status",
      comments: "Comments",
      addTask: "Add task"
    },

    priorities: {
      urgent: "Urgent",
      high: "High",
      normal: "Normal",
      low: "Low",
      clear: "Clear"
    },

    statuses: {
      done: "DONE",
      inProgress: "IN PROGRESS",
      todo: "TO DO"
    },

    taskActions: {
      rename: "Rename",
      duplicate: "Duplicate",
      delete: "Delete",
      taskType: "Task Type",
      save: "Save",
      cancel: "Cancel"
    },

    dashboard: {
      title: "Dashboard Overview",
      subtitle: "Review of your projects and tasks",
      totalTasks: "Total Tasks",
      inProgress: "In Progress",
      completed: "Completed",
      productivity: "Productivity",
      progressTitle: "Task Progress",
      prioritiesTitle: "Priorities",
      recentTitle: "Recent Tasks",
      todoStatus: "TO DO",
      inProgressStatus: "IN PROGRESS",
      doneStatus: "DONE",
      noTasksYet: "No tasks yet. Create your first task!",
      now: "Now"
    },

    calendar: {
      addTask: "Add Task for Date",
      selectDate: "Select Date",
      tasksForDate: "Tasks for",
      noTasks: "No tasks for this date",
      addPlan: "Plan added!",
      enterTitle: "Enter task title",
      dateUpdated: "Date updated",
      dateRemoved: "Date removed",
      noDate: "✕ No date",
      weekdays: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      addTaskBtn: "+ Add plan",
      modalTitle: "Add Plan",
      noDateSelected: "No date selected",
      taskNamePlaceholder: "TASK NAME",
      descriptionPlaceholder: "DESCRIPTION (optional)",
      priorityLabel: "Priority:",
      noPriority: "No priority",
      emptyStateText: "Select a date to see planned tasks",
      saveBtn: "Save"
    },

    ai: {
      intro: "👋 Hello! I'm your AI task planning assistant.",
      introHelp: "I can help you with:",
      introAnalyze: "Analyze your tasks",
      introPlan: "Plan them over time",
      introPrioritize: "Prioritize important tasks",
      introRecommend: "Give organization tips",
      introHint: "Write \"Analyze tasks\" or ask your question!",
      greeting: "👋 Hello! I'm your AI planning assistant.",
      howCanHelp: "How can I help you today? 😊",
      noTasks: "You don't have any tasks yet. Create your first task by clicking the 'Add Task' button!",
      taskAnalysis: "📊 Task Analysis:",
      totalTasks: "📋 Total tasks:",
      inProgress: "🔄 In progress:",
      planned: "📝 Planned:",
      completed: "✅ Completed:",
      recommendations: "💡 Recommendations:",
      manyInProgress: "⚠️ You have many tasks in progress",
      focusRecommendation: "I recommend focusing on 2-3 important tasks.",
      setPriorities: "🎯 Set priorities for",
      tasks: "tasks. Use the Priority column.",
      startWithImportant: "⏰ Start the day with the most important task",
      setReminders: "🔔 Set reminders for urgent tasks",
      markCompleted: "🎉 Don't forget to mark completed tasks!",
      goodQuestion: "🤔 Good question! Here's what I can do for you:",
      analyzeCommand: "💬 'Analyze my tasks' - show statistics",
      planDay: "⏰ 'Plan the day' - create schedule",
      howToPrioritize: "🎯 'How to prioritize' - explain system",
      giveTips: "💡 'Give tips' - share productivity hacks",
      helpCommand: "❓ 'Help' - show all commands",
      justAsk: "Just write the command in your own words! 😊",
      great: "👌 Great! Just let me know if you need anything.",
      happyToHelp: "😊 Always happy to help!",
      imHere: "👌 Okay, I'm here if you need me.",
      gladYouLiked: "😄 Glad you liked it!",
      iAmAssistant: "🤖 I'm an AI assistant that helps:",
      planDay2: "⏰ plan your day",
      setPriorities2: "🎯 set priorities",
      workProductively: "📊 work more productively",
      dayPlanTitle: "⏰ Recommended day plan:",
      dayPlanHard: "Most difficult tasks (peak focus)",
      dayPlanMedium: "Medium difficulty tasks",
      dayPlanBreak: "Lunch break",
      dayPlanMeetings: "Meetings and communication",
      dayPlanLight: "Light tasks and planning",

      pomodoroTitle: "💡 Pomodoro technique:",
      pomodoroWork: "25 minutes of work",
      pomodoroRest: "5 minutes rest",
      pomodoroLong: "Long break after 4 cycles",

      priorityTitle: "🎯 How to prioritize correctly:",
      priorityUrgent: "Urgent",
      priorityUrgentDesc: "Do immediately",
      priorityHigh: "High",
      priorityHighDesc: "Plan it",
      priorityMedium: "Medium",
      priorityMediumDesc: "Can wait",
      priorityLow: "Low",
      priorityLowDesc: "Do when free",

      eisenhowerTitle: "📌 Eisenhower Matrix:",
      eisenhower1: "Urgent + Important = Do now",
      eisenhower2: "Not urgent + Important = Plan",
      eisenhower3: "Urgent + Not important = Delegate",
      eisenhower4: "Not urgent + Not important = Delete",

      priorityHint: "💡 Click the Priority column to set it",

      productivityTitle: "💡 Productivity tips:",
      rule2min: "2-minute rule — do it immediately",
      eatFrog: "Start with the hardest task",
      batchTasks: "Group similar tasks",
      noMultitasking: "Focus on one task",
      timeBlocking: "Use time blocks",
      noDistractions: "Disable notifications",
      rewardYourself: "Reward yourself after work",
      helpTitle: "🤖 I'm your AI planning assistant! Here's what I can do:",
      helpAnalyze: "Task analysis",
      helpAnalyzeCmd: "analyze my tasks",
      helpPlan: "Day planning",
      helpPlanCmd: "plan my day",
      helpPriority: "Priorities",
      helpPriorityCmd: "how to prioritize",
      helpTips: "Productivity tips",
      helpTipsCmd: "give productivity tips",

      helpExamples: "Command examples:",
      exampleAnalyze: "Analyze my tasks",
      examplePlan: "Plan my day",
      examplePriority: "Help with priorities",
      exampleTips: "Give me advice",

      helpFooter: "Just write what you need 😊"
    },

    languageChanged: "Language changed to English"
  },

  ua: {
    login: "Увійти",
    logout: "Вийти",
    divider: "або",
    getStarted: "Почати безкоштовно",
    welcomeBack: name => `Привіт, ${name}! Раді бачити вас знову.`,
    loginTitle: "Увійти в акаунт",
    registerTitle: "Створити акаунт",
    resetTitle: "Скинути пароль",

    email: "ЕЛЕКТРОННА ПОШТА",
    password: "ПАРОЛЬ",
    confirmPassword: "ПІДТВЕРДІТЬ ПАРОЛЬ",

    continueGoogle: "Продовжити з Google",
    forgotPassword: "Забули пароль?",
    noAccount: "Немає акаунту?",
    createAccount: "Створити акаунт",
    haveAccount: "Вже є акаунт?",
    resetPassword: "Скинути пароль",
    cancelReset: "Скасувати",

    heroTitle: "Ваші ідеї. Ваші дії.",
    heroSubtitle:
      "Планувальник допоможе організувати роботу, керувати проєктами та співпрацювати з командою.",

    footerTitle: "Почни з простого.\nНапиши своє перше завдання.",
    exploreTemplates: "Переглянути всі шаблони",

    products: "Продукти",
    solutions: "Рішення",
    community: "Спільнота",
    resources: "Ресурси",
    aboutus: "Про нас",

    notifications: {
      fillAll: "Будь ласка, заповніть всі поля",
      passwordsMismatch: "Паролі не співпадають",
      userExists: "Користувач з таким email вже існує",
      registerSuccess: name => `Реєстрація успішна! Привіт, ${name}!`,
      loginError: "Неправильний email або пароль",
      loginSuccess: name => `Вхід виконано! Привіт, ${name}!`,
      loggedOut: "Ви успішно вийшли з акаунту",
      resetSent: "На вашу пошту відправлено лист для скидання пароля"
    },

    profile: {
      title: "Мій профіль",
      nameLabel: "Ім'я профілю",
      namePlaceholder: "Введіть ім'я",
      registrationDate: "Дата реєстрації",
      language: "Мова інтерфейсу",
      saveChanges: "Зберегти зміни",
      profileUpdated: "Профіль оновлено!",
      enterName: "Введіть ім'я профілю",
      totalTasks: "Всього завдань",
      completed: "Виконано",
      productivity: "Продуктивність",
      myProfile: "Мій профіль",
      ukrainian: "Українська",
      english: "English"
    },

    about: {
      heroTitle: "Наша місія.",
      introTitle: "Зберігати час людей, роблячи світ більш продуктивним.",
      introP1:
        "Хоча ми дуже любимо програмне забезпечення для підвищення продуктивності, ми вважаємо, що продуктивність, загалом, не працює. Є занадто багато інструментів, за якими потрібно стежити, занадто багато речей у повністю відокремлених екосистемах. Повинно бути краще рішення для роботи. Хоча ми дуже любимо програмне забезпечення для підвищення продуктивності, ми вважаємо, що продуктивність, загалом, не працює. Занадто багато інструментів, за якими потрібно стежити, занадто багато речей у повністю відокремлених екосистемах. Повинно бути краще рішення для роботи — саме тому ми створили SelfNote, спочатку як внутрішній інструмент, а тепер як спосіб реалізувати нашу мрію про підвищення продуктивності у світі.",
      introP2:
        "Зрештою, наша мета полягає в тому, щоб вся робота відбувалася в SelfNote, що дозволить людям бути більш продуктивними та звільнить щонайменше 20% часу для інших справ. Один додаток замінить усі інші. Ми тільки починаємо і дуже вдячні всім, хто працює з нашою командою."
    },

    menu: {
      myProfile: "Мій профіль",
      logout: "Вийти"
    },

    views: {
      list: "Список",
      calendar: "Календар",
      dashboard: "Дашборд"
    },

    table: {
      name: "Назва",
      dueDate: "Дата",
      priority: "Пріоритет",
      status: "Статус",
      comments: "Коментарі",
      addTask: "Додати завдання"
    },

    priorities: {
      urgent: "Терміново",
      high: "Високий",
      normal: "Звичайний",
      low: "Низький",
      clear: "Очистити"
    },

    statuses: {
      done: "ВИКОНАНО",
      inProgress: "В ПРОЦЕСІ",
      todo: "ЗРОБИТИ"
    },

    taskActions: {
      rename: "Перейменувати",
      duplicate: "Дублювати",
      delete: "Видалити",
      taskType: "Тип завдання",
      save: "Зберегти",
      cancel: "Скасувати"
    },

    dashboard: {
      title: "Огляд панелі",
      subtitle: "Огляд ваших проєктів та завдань",
      totalTasks: "Всього завдань",
      inProgress: "У процесі",
      completed: "Завершено",
      productivity: "Продуктивність",
      progressTitle: "Прогрес завдань",
      prioritiesTitle: "Пріоритети",
      recentTitle: "Останні завдання",
      todoStatus: "ЗРОБИТИ",
      inProgressStatus: "У ПРОЦЕСІ",
      doneStatus: "ВИКОНАНО",
      noTasksYet: "Поки немає завдань. Створіть своє перше завдання!",
      now: "Зараз"
    },

    calendar: {
      addTask: "Додати завдання на дату",
      selectDate: "Виберіть дату",
      tasksForDate: "Завдання на",
      noTasks: "Немає завдань на цю дату",
      addPlan: "План додано!",
      enterTitle: "Введіть назву завдання",
      dateUpdated: "Дата оновлена",
      dateRemoved: "Дату видалено",
      noDate: "✕ Без дати",
      weekdays: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Нд"],
      addTaskBtn: "+ Додати план",
      modalTitle: "Додати план",
      noDateSelected: "Дата не вибрана",
      taskNamePlaceholder: "НАЗВА ЗАВДАННЯ",
      descriptionPlaceholder: "ОПИС (необов'язково)",
      priorityLabel: "Пріоритет:",
      noPriority: "Без пріоритету",
      emptyStateText: "Виберіть дату, щоб побачити заплановані справи",
      saveBtn: "Зберегти"
    },

    ai: {
      intro: "Привіт! Я AI асистент для планування завдань.",
      introHelp: "Я можу допомогти вам:",
      introAnalyze: "Проаналізувати ваші завдання",
      introPlan: "Розподілити їх за часом",
      introPrioritize: "Пріоритизувати важливі справи",
      introRecommend: "Дати рекомендації щодо організації",
      introHint: "Напишіть «проаналізуй завдання» або задайте своє питання!",
      greeting: "👋 Привіт! Я твій AI асистент для планування.",
      howCanHelp: "Чим можу допомогти сьогодні? 😊",
      noTasks: "У вас поки немає завдань. Створіть своє перше завдання, натиснувши кнопку 'Додати завдання'!",
      taskAnalysis: "📊 Аналіз ваших завдань:",
      totalTasks: "📋 Всього завдань:",
      inProgress: "🔄 У процесі:",
      planned: "📝 Заплановано:",
      completed: "✅ Завершено:",
      recommendations: "💡 Рекомендації:",
      manyInProgress: "⚠️ У вас багато завдань у процесі",
      focusRecommendation: "Рекомендую зосередитися на 2-3 важливих завданнях.",
      setPriorities: "🎯 Розставте пріоритети для",
      tasks: "завдань. Використовуйте колонку Priority.",
      startWithImportant: "⏰ Почніть день з найважливішого завдання",
      setReminders: "🔔 Встановіть нагадування для термінових завдань",
      markCompleted: "🎉 Не забувайте відмічати завершені завдання!",
      goodQuestion: "🤔 Гарне питання! Ось що я можу для вас зробити:",
      analyzeCommand: "💬 'Проаналізуй мої завдання' - покажу статистику",
      planDay: "⏰ 'Розподіли завдання на день' - складу розклад",
      howToPrioritize: "🎯 'Як розставити пріоритети' - поясню систему",
      giveTips: "💡 'Дай поради' - поділюся лайфхаками",
      helpCommand: "❓ 'Допомога' - покажу всі команди",
      justAsk: "Просто напишіть команду своїми словами! 😊",
      great: "👌 Чудово! Якщо щось знадобиться — просто напиши.",
      happyToHelp: "😊 Завжди радий допомогти!",
      imHere: "👌 Добре, я тут, якщо що.",
      gladYouLiked: "😄 Радію, що тобі зайшло!",
      iAmAssistant: "🤖 Я AI асистент, який допомагає:",
      planDay2: "⏰ планувати день",
      setPriorities2: "🎯 розставляти пріоритети",
      workProductively: "📊 працювати продуктивніше"
    },

    languageChanged: "Мову змінено на українську"
  },

  ru: {
    login: "Войти",
    logout: "Выйти",
    divider: "или",
    getStarted: "Начать бесплатно",
    welcomeBack: name => `Привет, ${name}! Рад снова тебя видеть.`,
    loginTitle: "Вход",
    registerTitle: "Создать аккаунт",
    resetTitle: "Сброс пароля",

    email: "EMAIL",
    password: "ПАРОЛЬ",
    confirmPassword: "ПОДТВЕРДИТЕ ПАРОЛЬ",

    continueGoogle: "Продолжить с Google",
    forgotPassword: "Забыли пароль?",
    noAccount: "Нет аккаунта?",
    createAccount: "Создать аккаунт",
    haveAccount: "Уже есть аккаунт?",
    resetPassword: "Сбросить пароль",
    cancelReset: "Отмена",

    heroTitle: "Ваши идеи. Ваши действия.",
    heroSubtitle:
      "Планировщик помогает организовать работу, управлять проектами и сотрудничать с командой.",

    footerTitle: "Начните с простого.\nСоздайте первую задачу.",
    exploreTemplates: "Посмотреть все шаблоны",

    products: "Продукты",
    solutions: "Решения",
    community: "Сообщество",
    resources: "Ресурсы",
    aboutus: "О нас",

    notifications: {
      fillAll: "Пожалуйста, заполните все поля",
      passwordsMismatch: "Пароли не совпадают",
      userExists: "Пользователь с таким email уже существует",
      registerSuccess: name => `Регистрация прошла успешно! Привет, ${name}!`,
      loginError: "Неверный email или пароль",
      loginSuccess: name => `Вход выполнен успешно! Привет, ${name}!`,
      loggedOut: "Вы вышли из аккаунта",
      resetSent: "Письмо для сброса пароля отправлено"
    },

    profile: {
      title: "Мой профиль",
      nameLabel: "Имя профиля",
      namePlaceholder: "Введите имя",
      registrationDate: "Дата регистрации",
      language: "Язык интерфейса",
      saveChanges: "Сохранить изменения",
      profileUpdated: "Профиль обновлён!",
      enterName: "Введите имя профиля",
      totalTasks: "Всего задач",
      completed: "Завершено",
      productivity: "Продуктивность",
      myProfile: "Мой профиль",
      ukrainian: "Украинский",
      english: "Английский",
      russian: "Русский"
    },

    about: {
      heroTitle: "Наша миссия.",
      introTitle: "Экономить время людей, делая мир более продуктивным.",
      introP1:
        "Хотя мы очень любим программное обеспечение для повышения производительности, мы считаем, что в целом производительность не работает. Существует слишком много инструментов, за которыми нужно следить, слишком много вещей в совершенно отдельных экосистемах. Должен быть лучший способ работы. Хотя мы очень любим программное обеспечение для повышения производительности, мы считаем, что в целом производительность не работает. Слишком много инструментов, за которыми нужно следить, слишком много вещей в совершенно отдельных экосистемах. Должен быть лучший способ работы — именно поэтому мы создали SelfNote, сначала как внутренний инструмент, а теперь как способ реализовать нашу идею сделать мир более продуктивным.",
      introP2:
        "В конечном итоге, наша цель состоит в том, чтобы вся работа велась в SelfNote, что позволит людям стать более продуктивными и освободить как минимум 20% времени для других дел. Одно приложение заменит все остальные. Мы только начинаем и очень благодарны всем, кто работает с нашей командой."
    },

    menu: {
      myProfile: "Мой профиль",
      logout: "Выйти"
    },

    views: {
      list: "Список",
      calendar: "Календарь",
      dashboard: "Дашборд"
    },

    table: {
      name: "Название",
      dueDate: "Срок",
      priority: "Приоритет",
      status: "Статус",
      comments: "Комментарии",
      addTask: "Добавить задачу"
    },

    priorities: {
      urgent: "Срочно",
      high: "Высокий",
      normal: "Обычный",
      low: "Низкий",
      clear: "Очистить"
    },

    statuses: {
      done: "ГОТОВО",
      inProgress: "В ПРОЦЕССЕ",
      todo: "К СДЕЛАТЬ"
    },

    taskActions: {
      rename: "Переименовать",
      duplicate: "Дублировать",
      delete: "Удалить",
      taskType: "Тип задачи",
      save: "Сохранить",
      cancel: "Отмена"
    },

    dashboard: {
      title: "Обзор дашборда",
      subtitle: "Обзор ваших проектов и задач",
      totalTasks: "Всего задач",
      inProgress: "В процессе",
      completed: "Завершено",
      productivity: "Продуктивность",
      progressTitle: "Прогресс задач",
      prioritiesTitle: "Приоритеты",
      recentTitle: "Последние задачи",
      todoStatus: "К СДЕЛАТЬ",
      inProgressStatus: "В ПРОЦЕССЕ",
      doneStatus: "ГОТОВО",
      noTasksYet: "Задач пока нет. Создайте первую!",
      now: "Сейчас"
    },

    calendar: {
      addTask: "Добавить задачу на дату",
      selectDate: "Выберите дату",
      tasksForDate: "Задачи на",
      noTasks: "На эту дату задач нет",
      addPlan: "План добавлен!",
      enterTitle: "Введите название задачи",
      dateUpdated: "Дата обновлена",
      dateRemoved: "Дата удалена",
      noDate: "✕ Без даты",
      weekdays: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"],
      addTaskBtn: "+ Добавить план",
      modalTitle: "Добавить план",
      noDateSelected: "Дата не выбрана",
      taskNamePlaceholder: "НАЗВАНИЕ ЗАДАЧИ",
      descriptionPlaceholder: "ОПИСАНИЕ (необязательно)",
      priorityLabel: "Приоритет:",
      noPriority: "Без приоритета",
      emptyStateText: "Выберите дату, чтобы увидеть запланированные задачи",
      saveBtn: "Сохранить"
    },

    ai: {
      intro: "Привет! Я AI ассистент для планирования задач.",
      introHelp: "Я могу помочь вам:",
      introAnalyze: "Проанализировать ваши задачи",
      introPlan: "Распределить их по времени",
      introPrioritize: "Расставить приоритеты",
      introRecommend: "Дать советы по организации",
      introHint: "Напишите «проанализируй задачи» или задайте свой вопрос!",
      greeting: "👋 Привет! Я твой AI-ассистент по планированию.",
      howCanHelp: "Чем я могу помочь сегодня? 😊",
      noTasks: "У тебя пока нет задач. Создай первую, нажав кнопку «Добавить задачу»!",
      taskAnalysis: "📊 Анализ задач:",
      totalTasks: "📋 Всего задач:",
      inProgress: "🔄 В процессе:",
      planned: "📝 Запланировано:",
      completed: "✅ Завершено:",
      recommendations: "💡 Рекомендации:",
      manyInProgress: "⚠️ У тебя слишком много задач в процессе",
      focusRecommendation: "Рекомендую сосредоточиться на 2–3 важных задачах.",
      setPriorities: "🎯 Установи приоритеты для",
      tasks: "задач. Используй колонку «Приоритет».",
      startWithImportant: "⏰ Начни день с самой важной задачи",
      setReminders: "🔔 Устанавливай напоминания для срочных задач",
      markCompleted: "🎉 Не забывай отмечать выполненные задачи!",
      goodQuestion: "🤔 Хороший вопрос! Вот что я умею:",
      analyzeCommand: "💬 «Проанализируй мои задачи» — показать статистику",
      planDay: "⏰ «Запланируй день» — составить расписание",
      howToPrioritize: "🎯 «Как расставить приоритеты» — объяснить систему",
      giveTips: "💡 «Дай советы» — советы по продуктивности",
      helpCommand: "❓ «Помощь» — показать все команды",
      justAsk: "Просто напиши команду своими словами! 😊",
      great: "👌 Отлично! Дай знать, если понадобится помощь.",
      happyToHelp: "😊 Всегда рад помочь!",
      imHere: "👌 Хорошо, я здесь, если понадоблюсь.",
      gladYouLiked: "😄 Рад, что понравилось!",
      iAmAssistant: "🤖 Я AI-ассистент, который помогает:",
      planDay2: "⏰ планировать день",
      setPriorities2: "🎯 расставлять приоритеты",
      workProductively: "📊 работать продуктивнее"
    },

    languageChanged: "Язык изменён на русский"
  }
};


function applyFullLanguage(lang) {
  const t = i18n[lang] || i18n['en'];
  localStorage.setItem('site_lang', lang);
  
  const setTextSafe = (selector, text) => {
    const el = document.querySelector(selector);
    if (el) el.textContent = text;
  };
  
  const setPlaceholderSafe = (selector, text) => {
    const el = document.querySelector(selector);
    if (el) el.placeholder = text;
  };

  setTextSafe('.login', t.login);
  
  document.querySelectorAll('.btn-start .text, .hero-btn .text')
    .forEach(el => el.textContent = t.getStarted);

  setTextSafe('.hero-title', t.heroTitle);
  setTextSafe('.hero-subtitle', t.heroSubtitle);

  setTextSafe('.modal-overlay-log h2', t.loginTitle);
  setTextSafe('.modal-overlay-start h2', t.registerTitle);
  setTextSafe('.reset-password h2', t.resetTitle);

  setPlaceholderSafe('#loginEmail', t.email);
  setPlaceholderSafe('#loginPassword', t.password);
  setPlaceholderSafe('#regEmail', t.email);
  setPlaceholderSafe('#regPassword', t.password);
  setPlaceholderSafe('#regConfirmPassword', t.confirmPassword);
  setPlaceholderSafe('#resetEmail', t.email);

  setTextSafe('#resetPasswordLink', t.forgotPassword);
  setTextSafe('#switchToLogin', t.login);
  setTextSafe('#cancelReset', t.cancelReset);
  setTextSafe('#loginButton .txt', t.login);
  setTextSafe('#registerButton .txt', t.createAccount);
  setTextSafe('#resetPasswordButton .txt', t.resetPassword);


  // ===== ABOUT PAGE =====
  setTextSafe('.about-title', t.about?.heroTitle);
  setTextSafe('.about-intro-title', t.about?.introTitle);
  setTextSafe('.about-intro-p1', t.about?.introP1);
  setTextSafe('.about-intro-p2', t.about?.introP2);

  const preTextLog = document.querySelector('.pre-link-text-log');
  if (preTextLog) preTextLog.textContent = t.noAccount;
  
  const preTextStart = document.querySelector('.pre-link-text-start');
  if (preTextStart) preTextStart.textContent = t.haveAccount;
  
  setTextSafe('#switchToRegister', t.createAccount);
  setTextSafe('#products', t.products);
  setTextSafe('#solutions', t.solutions);
  setTextSafe('#community', t.community);
  setTextSafe('#resources', t.resources);
  setTextSafe('#about', t.aboutus);
  
  setTextSafe('#ort-reg', t.divider);
  setTextSafe('#ort-log', t.divider);

  document.querySelectorAll('.google-btn')
    .forEach(btn => {
      if (btn.childNodes[2]) btn.childNodes[2].nodeValue = ' ' + t.continueGoogle;
    });

  const footerTitle = document.querySelector('.footer-title');
  if (footerTitle) footerTitle.innerHTML = t.footerTitle.replace('\n', '<br>');
  
  const footerBtnText = document.querySelector('.footer-btn .text');
  if (footerBtnText) footerBtnText.textContent = t.exploreTemplates;

  setTextSafe('.dark-title', t.profile?.title || 'Profile');
  const profileLabels = document.querySelectorAll('.profile-label');
  if (profileLabels[0]) profileLabels[0].textContent = t.profile?.nameLabel || 'Profile Name';
  if (profileLabels[1]) profileLabels[1].textContent = t.profile?.registrationDate || 'Registration Date';
  if (profileLabels[2]) profileLabels[2].textContent = t.profile?.language || 'Language';
  
  setPlaceholderSafe('#profileNameInput', t.profile?.namePlaceholder || 'Enter name');
  setTextSafe('#saveProfileBtn .txt', t.profile?.saveChanges || 'Save changes');

  const statsLabels = document.querySelectorAll('.profile-stat-label');
  if (statsLabels[0]) statsLabels[0].textContent = t.profile?.totalTasks || 'Total Tasks';
  if (statsLabels[1]) statsLabels[1].textContent = t.profile?.completed || 'Completed';
  if (statsLabels[2]) statsLabels[2].textContent = t.profile?.productivity || 'Productivity';

  const openProfileBtn = document.querySelector('#openProfileBtn .menu-text');
  if (openProfileBtn) openProfileBtn.textContent = t.profile?.myProfile || 'My Profile';

  const logoutMenuItem = document.querySelector('#logoutBtn .menu-text');
  if (logoutMenuItem) logoutMenuItem.textContent = t.menu?.logout || 'Log Out';

  const languageOptions = document.querySelectorAll('.language-option');
  languageOptions.forEach(option => {
    const langName = option.querySelector('.lang-name');
    if (option.dataset.lang === 'ua' && langName) {
      langName.textContent = t.profile?.ukrainian || 'Ukrainian';
    } else if (option.dataset.lang === 'en' && langName) {
      langName.textContent = t.profile?.english || 'English';
    } else if (option.dataset.lang === 'ru' && langName) {
      langName.textContent = t.profile?.russian || 'Russian';
    }
  });

  const selectedLangName = document.getElementById('selectedLangName');
  if (selectedLangName && lang === 'ua') {
    selectedLangName.textContent = t.profile?.ukrainian || 'Ukrainian';
  } else if (selectedLangName && lang === 'en') {
    selectedLangName.textContent = t.profile?.english || 'English';
  } else if (selectedLangName && lang === 'ru') {
    selectedLangName.textContent = t.profile?.russian || 'Russian';
  }

  const viewTabs = document.querySelectorAll('.view-tab');
  if (viewTabs[0]) {
    const listText = viewTabs[0].childNodes[1];
    if (listText) listText.nodeValue = ' ' + (t.views?.list || 'List');
  }
  if (viewTabs[1]) {
    const calText = viewTabs[1].childNodes[1];
    if (calText) calText.nodeValue = ' ' + (t.views?.calendar || 'Calendar');
  }
  if (viewTabs[2]) {
    const dashText = viewTabs[2].childNodes[1];
    if (dashText) dashText.nodeValue = ' ' + (t.views?.dashboard || 'Dashboard');
  }

  const tableHeaders = document.querySelectorAll('.table thead th');
  if (tableHeaders[0]) tableHeaders[0].textContent = t.table?.name || 'Name';
  if (tableHeaders[2]) tableHeaders[2].textContent = t.table?.dueDate || 'Due date';
  if (tableHeaders[3]) tableHeaders[3].textContent = t.table?.priority || 'Priority';
  if (tableHeaders[4]) tableHeaders[4].textContent = t.table?.status || 'Status';
  if (tableHeaders[5]) tableHeaders[5].textContent = t.table?.comments || 'Comments';

  const groupRows = document.querySelectorAll('.group-row');
  groupRows.forEach(row => {
    const status = row.dataset.status;
    const badge = row.querySelector('.group-badge');
    if (badge && status) {
      if (status === 'DONE') {
        badge.innerHTML = `<span class="group-dot dot-done"></span>${t.statuses?.done || 'DONE'}`;
      } else if (status === 'IN PROGRESS') {
        badge.innerHTML = `<span class="group-dot dot-progress"></span>${t.statuses?.inProgress || 'IN PROGRESS'}`;
      } else if (status === 'TO DO') {
        badge.innerHTML = `<span class="group-dot dot-todo"></span>${t.statuses?.todo || 'TO DO'}`;
      }
    }
  });

  document.querySelectorAll('.add-task-btn').forEach(btn => {
    btn.textContent = '+ ' + (t.table?.addTask || 'Add task');
  });

  document.querySelectorAll('.task-cancel').forEach(btn => {
    btn.textContent = t.taskActions?.cancel || 'Cancel';
  });

  document.querySelectorAll('.task-save').forEach(btn => {
    const arrow = btn.querySelector('.arrow');
    if (!arrow) {
      btn.textContent = (t.taskActions?.save || 'Save') + ' ↵';
    }
  });

  const weekdayElements = document.querySelectorAll('.calendar-weekdays .weekday');
  if (weekdayElements.length > 0 && t.calendar?.weekdays) {
    weekdayElements.forEach((el, index) => {
      if (t.calendar.weekdays[index]) {
        el.textContent = t.calendar.weekdays[index];
      }
    });
  }

  const addTaskForDateBtn = document.getElementById('addTaskForDateBtn');
  if (addTaskForDateBtn) {
    addTaskForDateBtn.innerHTML = `<span style="font-size: 20px; margin-right: 4px;">+</span> ${t.calendar?.addTaskBtn || '+ Add task'}`;
  }

  const dashboardTitle = document.querySelector('.dashboard-header h1');
  if (dashboardTitle) dashboardTitle.textContent = t.dashboard?.title || 'Dashboard Overview';
  
  const dashboardSubtitle = document.querySelector('.dashboard-subtitle');
  if (dashboardSubtitle) dashboardSubtitle.textContent = t.dashboard?.subtitle || 'Review of your projects and tasks';

  const statLabels = document.querySelectorAll('.stat-label');
  if (statLabels[0]) statLabels[0].textContent = t.dashboard?.totalTasks || 'Total Tasks';
  if (statLabels[1]) statLabels[1].textContent = t.dashboard?.inProgress || 'In Progress';
  if (statLabels[2]) statLabels[2].textContent = t.dashboard?.completed || 'Completed';
  if (statLabels[3]) statLabels[3].textContent = t.dashboard?.productivity || 'Productivity';

  const chartTitles = document.querySelectorAll('.chart-title');
  if (chartTitles[0]) chartTitles[0].textContent = t.dashboard?.progressTitle || 'Task Progress';
  if (chartTitles[1]) chartTitles[1].textContent = t.dashboard?.prioritiesTitle || 'Priorities';

  const progressLabels = document.querySelectorAll('.progress-label span:first-child');
  if (progressLabels[0]) progressLabels[0].textContent = t.dashboard?.todoStatus || 'TO DO';
  if (progressLabels[1]) progressLabels[1].textContent = t.dashboard?.inProgressStatus || 'IN PROGRESS';
  if (progressLabels[2]) progressLabels[2].textContent = t.dashboard?.doneStatus || 'DONE';

  const priorityBadges = document.querySelectorAll('.priority-badge');
  if (priorityBadges[0]) priorityBadges[0].textContent = `🔴 ${t.priorities?.urgent || 'Urgent'}`;
  if (priorityBadges[1]) priorityBadges[1].textContent = `🟡 ${t.priorities?.high || 'High'}`;
  if (priorityBadges[2]) priorityBadges[2].textContent = `🔵 ${t.priorities?.normal || 'Normal'}`;
  if (priorityBadges[3]) priorityBadges[3].textContent = `⚪ ${t.priorities?.low || 'Low'}`;

  const activityTitle = document.querySelector('.activity-title');
  if (activityTitle) activityTitle.textContent = t.dashboard?.recentTitle || 'Recent Tasks';

  setTextSafe('#dateTaskModalTitle', t.calendar?.modalTitle || 'Add Plan');
  setTextSafe('#selectedDateTitle', t.calendar?.selectDate || 'Select Date');
  
  const selectedDateDisplay = document.getElementById('selectedDateDisplay');
  if (selectedDateDisplay && (selectedDateDisplay.textContent === 'Дата не вибрана' || selectedDateDisplay.textContent === 'No date selected')) {
    selectedDateDisplay.textContent = t.calendar?.noDateSelected || 'No date selected';
  }
  
  setPlaceholderSafe('#taskTitleInput', t.calendar?.taskNamePlaceholder || 'TASK NAME');
  setPlaceholderSafe('#taskDescriptionInput', t.calendar?.descriptionPlaceholder || 'DESCRIPTION (optional)');
  
  const priorityLabel = document.querySelector('.option-label');
  if (priorityLabel) priorityLabel.textContent = t.calendar?.priorityLabel || 'Priority:';

  const priorityOptions = document.querySelectorAll('.priority-option');
  if (priorityOptions[0]) {
    const noPriorityText = priorityOptions[0].childNodes[1];
    if (noPriorityText) noPriorityText.nodeValue = ' ' + (t.calendar?.noPriority || 'No priority');
  }
  if (priorityOptions[1]) {
    const urgentText = priorityOptions[1].childNodes[1];
    if (urgentText) urgentText.nodeValue = ' ' + (t.priorities?.urgent || 'Urgent');
  }
  if (priorityOptions[2]) {
    const highText = priorityOptions[2].childNodes[1];
    if (highText) highText.nodeValue = ' ' + (t.priorities?.high || 'High');
  }
  if (priorityOptions[3]) {
    const normalText = priorityOptions[3].childNodes[1];
    if (normalText) normalText.nodeValue = ' ' + (t.priorities?.normal || 'Normal');
  }
  if (priorityOptions[4]) {
    const lowText = priorityOptions[4].childNodes[1];
    if (lowText) lowText.nodeValue = ' ' + (t.priorities?.low || 'Low');
  }

  setTextSafe('#saveDateTaskBtn .txt', t.calendar?.saveBtn || 'Save');

  const emptyStateText = document.querySelector('.empty-state p');
  if (emptyStateText && (emptyStateText.textContent.includes('обачити') || emptyStateText.textContent.includes('Select'))) {
    emptyStateText.textContent = t.calendar?.emptyStateText || 'Select a date to see planned tasks';
  }
}

function applyLang(lang) {
  applyFullLanguage(lang);
}

(function(){
  function $(sel){ return document.querySelector(sel); }
  function $all(sel){ return Array.from(document.querySelectorAll(sel)); }

  function showNotification(message, type = 'info') {
    const container = $('#notificationContainer');
    if (!container) return;

    const notification = document.createElement('div');
    notification.className = `custom-notification ${type}`;
    
    const icons = {
      success: '✓',
      error: '✕',
      info: 'ℹ'
    };

    notification.innerHTML = `
      <div class="custom-notification-icon">${icons[type] || icons.info}</div>
      <div class="custom-notification-message">${message}</div>
      <div class="custom-notification-close">✕</div>
    `;

    container.appendChild(notification);

    const closeBtn = notification.querySelector('.custom-notification-close');
    closeBtn.addEventListener('click', () => {
      notification.classList.add('removing');
      setTimeout(() => notification.remove(), 300);
    });

    setTimeout(() => {
      if (notification.parentElement) {
        notification.classList.add('removing');
        setTimeout(() => notification.remove(), 300);
      }
    }, 4000);
  }

  window.showNotification = showNotification;

  let quickCalendarDate = new Date(); 
  let activeTaskIdForQuickDate = null;

  let currentCalendarDate = new Date();
  let activeTaskIdForDate = null;

  let selectedDate = null;
  let selectedDateForTask = null;

  const monthNames = {
    en: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    ua: ['Січень', 'Лютий', 'Березень', 'Квітень', 'Травень', 'Червень', 'Липень', 'Серпень', 'Вересень', 'Жовтень', 'Листопад', 'Грудень'],
    ru: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь']
  };

  function renderQuickCalendarContent() {
    const grid = document.getElementById('quickCalendarGrid');
    const title = document.getElementById('quickMonthTitle');
    if (!grid || !title) return;

    const year = quickCalendarDate.getFullYear();
    const month = quickCalendarDate.getMonth();
    const lang = localStorage.getItem('site_lang') || 'en';
    const t = i18n[lang];
    
    title.textContent = `${monthNames[lang][month]} ${year}`;

    grid.innerHTML = '';

    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    let startDay = firstDay.getDay(); 
    startDay = startDay === 0 ? 6 : startDay - 1;

    const prevLastDay = new Date(year, month, 0).getDate();
    for (let i = startDay - 1; i >= 0; i--) {
        const div = document.createElement('div');
        div.className = 'quick-day other-month';
        div.textContent = prevLastDay - i;
        grid.appendChild(div);
    }

    const today = new Date();
    for (let d = 1; d <= lastDay.getDate(); d++) {
        const div = document.createElement('div');
        const isToday = d === today.getDate() && month === today.getMonth() && year === today.getFullYear();
        
        const user = getCurrentUserData();
        const currentTask = user.tasks.find(t => t.id === activeTaskIdForQuickDate);
        const isSelected = currentTask && currentTask.date === `${year}-${String(month + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`;

        div.className = `quick-day ${isToday ? 'today' : ''} ${isSelected ? 'selected' : ''}`;
        div.textContent = d;
        
        div.onclick = () => {
            const selectedDate = `${year}-${String(month + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
            applyDateToTask(selectedDate);
        };
        grid.appendChild(div);
    }

    let picker = document.getElementById('quickDatePicker');
    let footer = picker.querySelector('.quick-calendar-footer');

    if (!footer) {
        footer = document.createElement('div');
        footer.className = 'quick-calendar-footer';
        picker.appendChild(footer);
    }

     footer.innerHTML = `<button class="clear-date-btn" type="button">${t.calendar?.noDate || '✕ No date'}</button>`;
         footer.querySelector('.clear-date-btn').onclick = (e) => {
         e.stopPropagation();
         applyDateToTask(null);
     };
  }

  function statusClass(s) {
    return s === 'DONE' ? 'done' : s === 'IN PROGRESS' ? 'progress' : 'todo';
  }

  function dotClass(s) {
    return s === 'DONE' ? 'dot-done' : s === 'IN PROGRESS' ? 'dot-progress' : 'dot-todo';
  }

  function getUsers() {
    return JSON.parse(localStorage.getItem('users') || '[]');
  }

  function saveUsers(users) {
    localStorage.setItem('users', JSON.stringify(users));
  }

  function getCurrentUser() {
    return localStorage.getItem('currentUser');
  }

  function getCurrentUserData() {
    const email = getCurrentUser();
    const users = getUsers();
    return users.find(u => u.email === email);
  }

  function updateCurrentUserData(updateFn) {
    const users = getUsers();
    const email = getCurrentUser();
    const index = users.findIndex(u => u.email === email);
    if (index === -1) return;

    updateFn(users[index]);
    saveUsers(users);
  }

  function removeAllMenus() {
    document.querySelectorAll('.context-menu, .status-menu, .priority-menu').forEach(m => m.remove());
  }

  function showContextMenu(e, taskId) {
    e.preventDefault();
    removeAllMenus();

    const currentLang = localStorage.getItem('site_lang') || 'en';
    const t = i18n[currentLang];

    const menu = document.createElement('div');
    menu.className = 'context-menu';
    
    menu.style.top = `${e.pageY}px`;
    menu.style.left = `${e.pageX}px`;

    menu.innerHTML = `
      <div class="menu-item" onclick="handleRename('${taskId}')">
        <span class="menu-icon"><img src="rename_icon.png" alt=""></span>
        <span class="menu-text">${t.taskActions?.rename || 'Rename'}</span>
      </div>
      
      <div class="menu-item sub-menu-trigger">
        <span class="menu-icon"><img src="type_icon.png" alt=""></span>
        <span class="menu-text">${t.taskActions?.taskType || 'Task Type'}</span>
        <span class="arrow-icon">▶</span>
      </div>
      
      <div class="menu-item" onclick="handleDuplicate('${taskId}')">
        <span class="menu-icon"><img src="duplicate_icon.png" alt=""></span>
        <span class="menu-text">${t.taskActions?.duplicate || 'Duplicate'}</span>
      </div>
      
      <div class="menu-item delete-item" onclick="handleDelete('${taskId}')">
        <span class="menu-icon"><img src="delete_icon.png" alt=""></span>
        <span class="menu-text">${t.taskActions?.delete || 'Delete'}</span>
      </div>
    `;

    document.body.appendChild(menu);

    const typeTrigger = menu.querySelector('.sub-menu-trigger');
    typeTrigger.onmouseenter = (e) => {
      console.log('Show task type options for:', taskId);
    };

    typeTrigger.onmouseenter = () => {
      showTaskTypeSubMenu(typeTrigger, taskId);
    };

    menu.querySelectorAll('.menu-item:not(.sub-menu-trigger)').forEach(item => {
      item.onmouseenter = () => {
        const sub = document.querySelector('.task-type-sub-menu');
        if (sub) sub.remove();
      };
    });
  }

  function showTaskTypeSubMenu(parentItem, taskId) {
    const oldSub = document.querySelector('.task-type-sub-menu');
    if (oldSub) oldSub.remove();

    const currentLang = localStorage.getItem('site_lang') || 'en';
    const t = i18n[currentLang];

    const subMenu = document.createElement('div');
    subMenu.className = 'task-type-menu task-type-sub-menu';

    const rect = parentItem.getBoundingClientRect();

    subMenu.style.position = 'fixed';
    subMenu.style.top = `${rect.top}px`;
    subMenu.style.left = `${rect.left - 160}px`;

    const types = ['task', 'milestone', 'form', 'meeting'];
    
    subMenu.innerHTML = types.map(type => `
      <button class="task-type-sub-menu-btn" onclick="handleUpdateType('${taskId}', '${type}')">
        <span class="task-type-icon type-${type}"></span>
        ${t.taskTypes?.[type] || type.charAt(0).toUpperCase() + type.slice(1)}
      </button>
    `).join('');

    document.body.appendChild(subMenu);

    subMenu.onmouseleave = () => subMenu.remove();
  }

  function saveTask(task) {
    console.log('saveTask called', task);

    const user = getCurrentUser();
    console.log('currentUser', user);
    if (!user) {
      console.error('NO USER');
      showNotification('User not logged in', 'error');
      return;
    }

    updateCurrentUserData(user => {
      user.tasks.push(task);
    });
  }

  function updateTask(id, changes) {
    updateCurrentUserData(user => {
      const task = user.tasks.find(t => t.id === id);
      if (!task) return;
      Object.assign(task, changes);
    });
  }

  function saveUser(email, password) {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    users.push({
      email,
      password,
      registeredAt: new Date().toISOString(),
      tasks: [],
      profile: {
        name: email.split('@')[0],
        avatarColor: null
      }
    });
    localStorage.setItem('users', JSON.stringify(users));
  }

  function findUser(email, password) {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    return users.find(u => u.email === email && u.password === password);
  }

  function setCurrentUser(email) {
    localStorage.setItem('currentUser', email);
  }

  function logout() {
    localStorage.removeItem('currentUser');
  }

  function getEmailName(email) {
    return email.split('@')[0];
  }

  function restoreAddRow(row) {
    row.innerHTML = `<td colspan="7"><button class="add-task-btn">+ Add task</button></td>`;
    row.classList.remove('active');
    const input = row.querySelector('.task-name-input');
    if (input) input.value = '';

    const priorityBtn = row.querySelector('.priority-btn');
    if (priorityBtn) {
      setPriority(priorityBtn, 'none');
    }
  }

  function moveRowToGroup(row, status) {
    const tbody = document.querySelector('.table tbody');
    const group = tbody.querySelector(`.group-row[data-status="${status}"]`);
    if (!group) return;

    let insertBefore = group.nextElementSibling;
    while (
      insertBefore &&
      !insertBefore.classList.contains('group-row') &&
      !insertBefore.classList.contains('add-task-row')
    ) {
      insertBefore = insertBefore.nextElementSibling;
    }

    tbody.insertBefore(row, insertBefore);
  }

  function removeMenus() {
    document.querySelectorAll('.status-menu').forEach(m => m.remove());
  }

  function removeTypeMenu() {
    document.querySelectorAll('.task-type-menu').forEach(m => m.remove());
  }

  function removePriorityMenu() {
    document.querySelectorAll('.priority-menu').forEach(m => m.remove());
  }

  function renderCalendar() {
    const calendarGrid = document.getElementById('calendarGrid');
    const calendarTitle = document.getElementById('calendarTitle');
      
    if (!calendarGrid || !calendarTitle) return;

    const lang = localStorage.getItem('site_lang') || 'en';
    const year = currentCalendarDate.getFullYear();
    const month = currentCalendarDate.getMonth();

    calendarTitle.textContent = `${monthNames[lang][month]} ${year}`;

    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const prevLastDay = new Date(year, month, 0);

    let firstDayOfWeek = firstDay.getDay();
    firstDayOfWeek = firstDayOfWeek === 0 ? 6 : firstDayOfWeek - 1;

    const daysInMonth = lastDay.getDate();
    const daysInPrevMonth = prevLastDay.getDate();

    calendarGrid.innerHTML = '';

    for (let i = firstDayOfWeek - 1; i >= 0; i--) {
      const day = daysInPrevMonth - i;
      const dayEl = createDayElement(day, 'prev-month', year, month - 1);
      calendarGrid.appendChild(dayEl);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const dayEl = createDayElement(day, 'current-month', year, month);
      calendarGrid.appendChild(dayEl);
    }

    const totalCells = calendarGrid.children.length;
    const remainingCells = 42 - totalCells;
    for (let day = 1; day <= remainingCells; day++) {
      const dayEl = createDayElement(day, 'next-month', year, month + 1);
      calendarGrid.appendChild(dayEl);
    }
  }

  function createDayElement(day, className, year, month) {
    const dayEl = document.createElement('div');
    dayEl.className = `calendar-day ${className}`;
    dayEl.textContent = day;

    const dateStr = formatDate(new Date(year, month, day));
    dayEl.dataset.date = dateStr;

    const today = new Date();
    if (year === today.getFullYear() && month === today.getMonth() && day === today.getDate() && className === 'current-month') {
      dayEl.classList.add('today');
    }

    if (selectedDate === dateStr) {
      dayEl.classList.add('selected');
    }

    const tasksForDate = getTasksForDate(dateStr);
    if (tasksForDate.length > 0 && className === 'current-month') {
      const badge = document.createElement('div');
      badge.className = 'task-count-badge';
      badge.textContent = tasksForDate.length;
      dayEl.appendChild(badge);
    }

    dayEl.addEventListener('click', () => {
      if (className === 'current-month') {
        selectDate(dateStr);
      } else if (className === 'prev-month') {
        currentCalendarDate.setMonth(currentCalendarDate.getMonth() - 1);
        renderCalendar();
        selectDate(dateStr);
      } else if (className === 'next-month') {
        currentCalendarDate.setMonth(currentCalendarDate.getMonth() + 1);
        renderCalendar();
        selectDate(dateStr);
      }
    });

    return dayEl;
  }

  function formatDate(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  function selectDate(dateStr) {
    selectedDate = dateStr;
      
    document.querySelectorAll('.calendar-day').forEach(day => day.classList.remove('selected'));
    const selectedDay = document.querySelector(`[data-date="${dateStr}"]`);
    if (selectedDay) selectedDay.classList.add('selected');

    if (activeTaskIdForDate) {
        updateTask(activeTaskIdForDate, { date: dateStr });
          
        console.log(`Task ${activeTaskIdForDate} updated with date ${dateStr}`);
          
        document.getElementById('calendarPopup').style.display = 'none';
        activeTaskIdForDate = null;
    }

    displayTasksForDate(dateStr);
  }

  function getTasksForDate(dateStr) {
    const user = getCurrentUserData();
    if (!user || !user.tasks) return [];
      
    return user.tasks.filter(task => task.date === dateStr);
  }

  function displayTasksForDate(dateStr) {
    const selectedDateTitle = document.getElementById('selectedDateTitle');
    const dateTasksList = document.getElementById('dateTasksList');
    const addTaskForDateBtn = document.getElementById('addTaskForDateBtn');
      
    if (!selectedDateTitle || !dateTasksList || !addTaskForDateBtn) return;

    const date = new Date(dateStr);
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const lang = localStorage.getItem('site_lang') || 'en';
    const locale = lang === 'ua' || lang === 'uk' ? 'uk-UA' : 'en-US';
    const t = i18n[lang];
      
    selectedDateTitle.textContent = date.toLocaleDateString(locale, options);
    addTaskForDateBtn.style.display = 'flex';
    addTaskForDateBtn.innerHTML = `<span style="font-size: 20px; margin-right: 4px;">+</span> ${t.calendar?.addTaskBtn || '+ Add task'}`;

    const tasks = getTasksForDate(dateStr);
      
    if (tasks.length === 0) {
      const currentLang = localStorage.getItem('site_lang') || 'en';
      const t = i18n[currentLang];
      dateTasksList.innerHTML = `
        <div class="empty-state">
          <div class="empty-icon">📝</div>
          <p>${t.calendar?.noTasks || 'No tasks for this date'}</p>
        </div>
      `;
    } else {
      dateTasksList.innerHTML = tasks.map(task => `
        <div class="date-task-card" data-task-id="${task.id}">
          <div class="task-card-header">
            <div class="task-card-status">
              <span class="task-status-dot ${dotClass(task.status)} type-task"></span>
              <span class="task-card-title">${task.name}</span>
            </div>
            <button class="task-delete-btn" onclick="deleteTask('${task.id}')">✕</button>
          </div>
          ${task.description ? `<p class="task-card-description">${task.description}</p>` : ''}
          <div class="task-card-footer">
            <span class="status ${statusClass(task.status)}">${task.status}</span>
            ${task.priority && task.priority !== 'none' ? `<span class="priority-badge-small ${task.priority}">${task.priority}</span>` : ''}
          </div>
        </div>
      `).join('');
    }
  }

  function attachStatusMenu(row) {
    const statusEl = row.querySelector('.status');
    if (!statusEl) return;

    statusEl.onclick = e => {
      e.stopPropagation();
      removeMenus();

      const menu = document.createElement('div');
      menu.className = 'status-menu';
      menu.innerHTML = `
        <div class="status-item" data-status="TO DO"><span class="task-status-dot dot-todo type-task"></span> TO DO</div>
        <div class="status-item" data-status="IN PROGRESS"><span class="task-status-dot dot-progress type-task"></span> IN PROGRESS</div>
        <div class="status-item" data-status="DONE"><span class="task-status-dot dot-done type-task"></span> DONE</div>
      `;

      document.body.appendChild(menu);
      const r = statusEl.getBoundingClientRect();
      menu.style.top = r.bottom + 6 + 'px';
      menu.style.left = r.left + 'px';

      menu.querySelectorAll('.status-item').forEach(item => {
        item.onclick = () => {
          setStatus(row, item.dataset.status);
          removeMenus();
        };
      });
    };
  }

  function setStatus(row, status) {
    const badge = row.querySelector('.status');
    const dot = row.querySelector('.task-status-dot');

    badge.textContent = status;
    badge.className = 'status ' + statusClass(status);

    dot.classList.remove('dot-todo', 'dot-progress', 'dot-done');
    dot.classList.add(dotClass(status));

    moveRowToGroup(row, status);
    updateTask(row.dataset.id, { status });
  }

  function setTaskType(row, type) {
    const dot = row.querySelector('.task-status-dot');

    dot.classList.remove(
      'type-task',
      'type-milestone',
      'type-form',
      'type-meeting'
    );

    dot.classList.add(`type-${type}`);
    row.dataset.type = type;
  }

  function setPriority(cell, priority) {
    const img = cell.querySelector('img');
    const label = cell.querySelector('.priority-label');
    const row = cell.closest('tr');

    cell.dataset.priority = priority;

    const map = {
      urgent: { icon: 'urgent_icon.png', text: 'Urgent' },
      high:   { icon: 'high_icon.png',   text: 'High' },
      normal: { icon: 'normal_icon.png', text: 'Normal' },
      low:    { icon: 'low_icon.png',    text: 'Low' },
      none:   { icon: 'priority_icon.png', text: '' }
    };

    if (img) img.src = map[priority].icon;
    if (label) label.textContent = map[priority].text;

    updateTask(row.dataset.id, { priority });

    if (row && row.dataset.id) {
      updateTask(row.dataset.id, { priority });
    }
  }

  function formatShortDate(dateStr) {
    if (!dateStr) return '';
    const d = new Date(dateStr);
    if (isNaN(d.getTime())) return '';
    return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  }

  function openCalendarForTask(taskId, targetElement) {
    activeTaskIdForDate = taskId;
    
    const calendarView = document.getElementById('calendarView'); 
    if (!calendarView) return;

    calendarView.style.display = 'flex'; 
    
    calendarView.style.position = 'fixed';
    calendarView.style.top = '50%';
    calendarView.style.left = '50%';
    calendarView.style.transform = 'translate(-50%, -50%)';
    calendarView.style.zIndex = '10000';

    if (typeof renderCalendar === 'function') {
        renderCalendar(); 
    }
  }

  function openQuickCalendar(taskId, targetElement) {
    activeTaskIdForQuickDate = taskId;
    const picker = document.getElementById('quickDatePicker');
    if (!picker) return;

    const rect = targetElement.getBoundingClientRect();
    picker.style.display = 'block';
    picker.style.top = `${rect.bottom + window.scrollY + 5}px`;
    picker.style.left = `${rect.left}px`;

    renderQuickCalendarContent();
  }

  function applyDateToTask(dateStr) {
    if (activeTaskIdForQuickDate) {
        updateTask(activeTaskIdForQuickDate, { date: dateStr });

        const row = document.querySelector(`tr[data-id="${activeTaskIdForQuickDate}"]`);
        if (row) {
            const dateBtn = row.querySelector('.date-btn');
            if (dateBtn) {
                if (dateStr) {
                    dateBtn.innerHTML = `<span class="date-text">${formatShortDate(dateStr)}</span>`;
                } else {
                    dateBtn.innerHTML = `<img src="date_icon.png">`;
                }
            }
        }

        if (typeof renderCalendar === 'function') {
            renderCalendar(); 
        }

        if (typeof showNotification === 'function') {
            const currentLang = localStorage.getItem('site_lang') || 'en';
            const t = i18n[currentLang];
            showNotification(dateStr ? (t.calendar?.dateUpdated || 'Date updated') : (t.calendar?.dateRemoved || 'Date removed'), 'success');
        }
    }
    
    const picker = document.getElementById('quickDatePicker');
    if (picker) picker.style.display = 'none';
  }

  function createTaskRow(task) {
    const row = document.createElement('tr');
    row.dataset.id = task.id;
    row.dataset.status = task.status;

    const dateHtml = task.date 
        ? `<span class="date-text">${formatShortDate(task.date)}</span>` 
        : `<img src="date_icon.png">`;

    row.innerHTML = `
      <td>
        <div class="name-cell">
          <span class="task-status-dot ${dotClass(task.status)} type-task"></span>
          ${task.name}
        </div>
      </td>
      <td class="icon-cell"></td>
      <td class="icon-cell date-btn">${dateHtml}</td>
      <td class="icon-cell priority-btn" data-priority="${task.priority || 'none'}">
        <img src="priority_icon.png">
        <span class="priority-label"></span>
      </td>
      <td><span class="status ${statusClass(task.status)}">${task.status}</span></td>
      <td class="icon-cell"><img src="comment_icon.png"></td>
      <td class="icon-cell">
        <button class="task-menu-btn" style="color: #666; background: none; border: none;">···</button>
      </td>
    `;
    return row;
  }

  function renderTask(task, addRow) {
    const row = createTaskRow(task);

    const dateBtn = row.querySelector('.date-btn');
    if (dateBtn) {
        dateBtn.onclick = (e) => {
            e.stopPropagation();
            openQuickCalendar(task.id, dateBtn); 
        };
    }

    if (addRow) {
        addRow.parentNode.insertBefore(row, addRow);
    }

    attachStatusMenu(row);
    setTaskType(row, task.type || 'task');

    const priorityCell = row.querySelector('.priority-btn');
    if (priorityCell) {
        setPriority(priorityCell, task.priority || 'none');
    }

    row.oncontextmenu = (e) => showContextMenu(e, task.id);
    
    const menuBtn = row.querySelector('.task-menu-btn');
    if (menuBtn) {
        menuBtn.onclick = (e) => {
            e.stopPropagation();
            showContextMenu(e, task.id);
        };
    }
  }

  function loadUserTasks() {
    const user = getCurrentUserData();
    if (!user || !user.tasks) return;

    document
      .querySelectorAll('.table tbody tr:not(.group-row):not(.add-task-row)')
      .forEach(r => r.remove());

    user.tasks.forEach(task => {
      const addRow = document.querySelector(
        `.add-task-row[data-status="${task.status}"]`
      );
      renderTask(task, addRow);
    });
  }

  window.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('site_lang') || 'en';
    applyFullLanguage(savedLang);
    const header = $('.home-header');
    const modalLog = $('.modal-overlay-log');
    const modalStart = $('.modal-overlay-start');
    const modalReset = $('.reset-password');
    const btnStart = $('.btn-start');
    const btnHero = $('.hero-btn');
    const heroSection = $('.hero-section')
    const btnLogin = $('.login');
    const userInfo = $('#userInfo');
    const authButtons = $('#authButtons');
    const userName = $('#userName');
    const logoutBtn = $('#logoutBtn');
    const footer = $('.footer');
    const avatarLetter = document.getElementById('avatarLetter');
    const userAvatar = document.getElementById('userAvatar');

    function updateUIForUser() {
      const currentUser = getCurrentUser();
      const landing = document.getElementById('landingPage');
      const dashboard = document.getElementById('dashboardPage');

      if (currentUser) {
        if (landing) {
          landing.style.display = 'none';
          dashboard.style.display = 'flex';
        }
        if (location.pathname.includes('about')) {
          window.location.href = '/index.html';
        }
        if (userInfo) {
          userInfo.style.display = 'flex';
          const userData = getCurrentUserData();
          const displayName = userData?.profile?.name || getEmailName(currentUser);
          
          if (userName) userName.textContent = displayName;
          if (avatarLetter && userAvatar) {
            avatarLetter.textContent = displayName[0].toUpperCase();
            const avatarColor = userData?.profile?.avatarColor || generateColor(displayName);
            userAvatar.style.background = avatarColor;
          }
        }
      } else {
        if (landing) {
          landing.style.display = 'flex';
          dashboard.style.display = 'none';
          if (userInfo) userInfo.style.display = 'none';
        }
      }
    }

    function generateColor(str) {
        let hash = 0;
        for (let i = 0; i < str.length; i++) {
            hash = str.charCodeAt(i) + ((hash << 5) - hash);
        }
        return `hsl(${hash % 360}, 55%, 45%)`;
    }

    const modalProfile = document.getElementById('modalProfile');
    const closeProfileModal = document.getElementById('closeProfileModal');
    const openProfileBtn = document.getElementById('openProfileBtn');
    const saveProfileBtn = document.getElementById('saveProfileBtn');

    function openProfileModal() {
      const user = getCurrentUserData();
      if (!user) return;

      const profileName = document.getElementById('profileName');
      const profileEmail = document.getElementById('profileEmail');
      const profileLetter = document.getElementById('profileLetter');
      const profileAvatarLarge = document.getElementById('profileAvatarLarge');
      const profileNameInput = document.getElementById('profileNameInput');
      const profileRegistered = document.getElementById('profileRegistered');
      
      const totalTasks = user.tasks ? user.tasks.length : 0;
      const completedTasks = user.tasks ? user.tasks.filter(t => t.status === 'DONE').length : 0;
      const productivity = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;

      const displayName = user.profile?.name || user.email.split('@')[0];
      
      if (profileName) profileName.textContent = displayName;
      if (profileEmail) profileEmail.textContent = user.email;
      if (profileNameInput) profileNameInput.value = displayName;
      
      if (profileLetter && profileAvatarLarge) {
        profileLetter.textContent = displayName[0].toUpperCase();
        const color = user.profile?.avatarColor || generateColor(displayName);
        profileAvatarLarge.style.background = color;
      }

      if (profileRegistered && user.registeredAt) {
        const date = new Date(user.registeredAt);
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const lang = localStorage.getItem('site_lang') || 'en';
        const locale = lang === 'ua' || lang === 'uk' ? 'uk-UA' : 'en-US';
        profileRegistered.textContent = date.toLocaleDateString(locale, options);
      }

      document.getElementById('profileTotalTasks').textContent = totalTasks;
      document.getElementById('profileCompletedTasks').textContent = completedTasks;
      document.getElementById('profileProductivity').textContent = productivity + '%';

      openOverlay(modalProfile);
    }

    if (openProfileBtn) {
      openProfileBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const userMenu = document.getElementById('userMenu');
        if (userMenu) userMenu.classList.remove('open');
        openProfileModal();
      });
    }

    if (closeProfileModal) {
      closeProfileModal.addEventListener('click', () => {
        closeOverlay(modalProfile);
      });
    }

    if (modalProfile) {
      modalProfile.addEventListener('click', (e) => {
        if (e.target === modalProfile) {
          closeOverlay(modalProfile);
        }
      });
    }

    if (saveProfileBtn) {
      saveProfileBtn.addEventListener('click', () => {
        const profileNameInput = document.getElementById('profileNameInput');
        const newName = profileNameInput?.value.trim();
        const currentLang = localStorage.getItem('site_lang') || 'en';
        const t = i18n[currentLang];
        
        if (!newName) {
          showNotification(t.profile?.enterName || 'Enter profile name', 'error');
          return;
        }

        updateCurrentUserData(user => {
          if (!user.profile) user.profile = {};
          user.profile.name = newName;
          user.profile.avatarColor = generateColor(newName);
        });

        const user = getCurrentUserData();
        const userName = document.getElementById('userName');
        const avatarLetter = document.getElementById('avatarLetter');
        const userAvatar = document.getElementById('userAvatar');
        
        if (userName) userName.textContent = newName;
        if (avatarLetter) avatarLetter.textContent = newName[0].toUpperCase();
        if (userAvatar) userAvatar.style.background = generateColor(newName);

        closeOverlay(modalProfile);
        showNotification(t.profile?.profileUpdated || 'Profile updated!', 'success');
      });
    }

    const languageDropdownBtn = document.getElementById('languageDropdownBtn');
    const languageDropdownMenu = document.getElementById('languageDropdownMenu');
    const selectedLangFlag = document.getElementById('selectedLangFlag');
    const selectedLangName = document.getElementById('selectedLangName');

    if (languageDropdownBtn && languageDropdownMenu) {
      languageDropdownBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        languageDropdownBtn.classList.toggle('open');
        languageDropdownMenu.classList.toggle('open');
      });

      document.addEventListener('click', (e) => {
        if (!e.target.closest('.language-dropdown')) {
          languageDropdownBtn.classList.remove('open');
          languageDropdownMenu.classList.remove('open');
        }
      });

      const languageOptions = document.querySelectorAll('.language-option');
      languageOptions.forEach(option => {
        option.addEventListener('click', () => {
          const selectedLang = option.dataset.lang;
          const flag = option.querySelector('.lang-flag')?.textContent || '';
          const name = option.querySelector('.lang-name')?.textContent || '';

          if (selectedLangFlag) selectedLangFlag.textContent = flag;
          if (selectedLangName) selectedLangName.textContent = name;

          languageDropdownBtn.classList.remove('open');
          languageDropdownMenu.classList.remove('open');

          applyFullLanguage(selectedLang);

          updateCurrentUserData(user => {
            if (!user.profile) user.profile = {};
            user.profile.language = selectedLang;
          });

          const aiChat = document.getElementById('aiChat');
          if (aiChat) {
            aiChat.innerHTML = '';
            initAIGreeting();
          }

          const t = i18n[selectedLang];
          showNotification(t.languageChanged || 'Language changed', 'success');
        });
      });
    }

    function initLanguageDropdown() {
      const user = getCurrentUserData();
      const currentLang =
        user?.profile?.language ||
        localStorage.getItem('site_lang') ||
        'en';

      const t = i18n[currentLang];

      const langData = {
        uk: { flag: '🇺🇦', name: t.profile?.ukrainian || 'Українська' },
        en: { flag: '🇬🇧', name: t.profile?.english || 'English' },
        ru: { flag: '🇷🇺', name: t.profile?.russian || 'Русский' }
      };

      if (selectedLangFlag && selectedLangName && langData[currentLang]) {
        selectedLangFlag.textContent = langData[currentLang].flag;
        selectedLangName.textContent = langData[currentLang].name;
      }

      const languageOptions = document.querySelectorAll('.language-option');
      languageOptions.forEach(option => {
        const lang = option.dataset.lang;
        const langName = option.querySelector('.lang-name');

        if (!langName) return;

        if (lang === 'ua' || lang === 'uk') {
          langName.textContent = t.profile?.ukrainian || 'Українська';
        } else if (lang === 'en') {
          langName.textContent = t.profile?.english || 'English';
        } else if (lang === 'ru') {
          langName.textContent = t.profile?.russian || 'Русский';
        }
      });

      applyFullLanguage(currentLang);
    }
    if (modalProfile) {
      const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          if (mutation.attributeName === 'style') {
            const display = modalProfile.style.display;
            if (display === 'flex') {
              initLanguageDropdown();
            }
          }
        });
      });
      
      observer.observe(modalProfile, { attributes: true });
    }

    updateUIForUser(true);

    const userEmail = getCurrentUser();
    if (userEmail) {
      loadUserTasks();
    }

    if (logoutBtn) {
      logoutBtn.addEventListener('click', () => {
        logout();
        updateUIForUser();
        const t = i18n[localStorage.getItem('site_lang') || 'en'];
        showNotification(t.notifications.loggedOut, 'info');
      });
    }

    try {
      if (header) header.style.display = 'flex';
      if (modalLog) modalLog.style.display = 'none';
      if (modalStart) modalStart.style.display = 'none';
      if (modalReset) modalReset.style.display = 'none';
    } catch(e){
      console.warn('init display error', e);
    }

    function openOverlay(overlay){
      if (!overlay) return;
      overlay.style.display = 'flex';
      const first = overlay.querySelector('input, button, a, [tabindex]'); 
      if (first) first.focus();
      document.body.style.overflow = 'hidden';
    }
    function closeOverlay(overlay){
      if (!overlay) return;
      overlay.style.display = 'none';
      document.body.style.overflow = '';
    }

    if (btnStart) {
      btnStart.addEventListener('click', (e) => {
        e.preventDefault();
        openOverlay(modalStart);
      });
    }
    if (btnHero) {
      btnHero.addEventListener('click', (e) => {
        e.preventDefault();
        openOverlay(modalStart);
      });
    }
    if (btnLogin) {
      btnLogin.addEventListener('click', (e) => {
        e.preventDefault();
        openOverlay(modalLog);
      });
    }

    $all('.close-btn').forEach(cb => {
      cb.addEventListener('click', (e) => {
        const modal = e.target.closest('.modal');
        if (!modal) return;
        const overlay = modal.closest('.modal-overlay-log') || modal.closest('.modal-overlay-start') || modal.closest('.reset-password');
        if (overlay) closeOverlay(overlay);
      });
    });

    [modalLog, modalStart, modalReset].forEach(ov => {
      if (!ov) return;
      ov.addEventListener('click', (e) => {
        if (e.target === ov) closeOverlay(ov);
      });
    });

    if (modalLog) {
      const resetLink = modalLog.querySelector('.dop-links a[href=""]') || Array.from(modalLog.querySelectorAll('a')).find(a => /reset/i.test(a.textContent));
      if (resetLink) {
        resetLink.addEventListener('click', (e) => {
          e.preventDefault();
          closeOverlay(modalLog);
          openOverlay(modalReset);
        });
      }
    }

    if (modalReset) {
      const cancelLink = modalReset.querySelector('.dop-links a[href=""]') || Array.from(modalReset.querySelectorAll('a')).find(a => /cancel/i.test(a.textContent));
      if (cancelLink) {
        cancelLink.addEventListener('click', (e) => {
          e.preventDefault();
          closeOverlay(modalReset);
        });
      }
    }

    $all('.modal .email-btn').forEach(b => {
      b.addEventListener('click', (e) => {
        const overlay = b.closest('.modal').closest('.modal-overlay-log') || b.closest('.modal').closest('.modal-overlay-start') || b.closest('.modal').closest('.reset-password');
        if (overlay) {
          setTimeout(()=> closeOverlay(overlay), 120);
        }
      });
    });

    const langBtn = $('.lang-btn');
    const dropdown = $('.lang-dropdown');
    const wrapper = $('.language-selector');

    if (langBtn && dropdown && wrapper) {
      langBtn.setAttribute('aria-haspopup','listbox');
      langBtn.setAttribute('aria-expanded','false');

      function toggleLang(){
        const shown = dropdown.classList.toggle('show');
        langBtn.setAttribute('aria-expanded', shown ? 'true' : 'false');
        const arrow = langBtn.querySelector('.arrow');
        if (arrow) arrow.style.transform = shown ? 'rotate(180deg)' : '';
        if (shown) {
          const first = dropdown.querySelector('li');
          if (first) first.focus();
        } else {
          langBtn.focus();
        }
      }

      langBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleLang();
      });

      langBtn.addEventListener('keydown', (e) => {
        if (['ArrowDown','Enter',' '].includes(e.key)) {
          e.preventDefault();
          toggleLang();
        } else if (e.key === 'Escape') {
          dropdown.classList.remove('show');
          langBtn.setAttribute('aria-expanded','false');
          langBtn.focus();
        }
      });

      dropdown.addEventListener('click', (e) => {
        const li = e.target.closest('li');
        if (!li) return;
        const lang = li.dataset.lang;
        if (lang) {
            langBtn.childNodes[0].nodeValue = '🌐 ' + li.textContent + ' ';
            try { localStorage.setItem('site_lang', lang); } catch(e){}
            
            applyLang(lang);
        }
        dropdown.classList.remove('show');
        langBtn.setAttribute('aria-expanded','false');
        const arrow = langBtn.querySelector('.arrow');
        if (arrow) arrow.style.transform = '';
      });

      document.addEventListener('click', (e) => {
        if (!wrapper.contains(e.target)) {
          dropdown.classList.remove('show');
          langBtn.setAttribute('aria-expanded','false');
          const arrow = langBtn.querySelector('.arrow'); if (arrow) arrow.style.transform = '';
        }
      });

      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
          dropdown.classList.remove('show');
          langBtn.setAttribute('aria-expanded','false');
          const arrow = langBtn.querySelector('.arrow'); if (arrow) arrow.style.transform = '';
        }
      });

      dropdown.querySelectorAll('li').forEach(li => {
        li.setAttribute('tabindex','0');
        li.addEventListener('keydown', (e) => {
          if (['Enter',' '].includes(e.key)) { e.preventDefault(); li.click(); }
          else if (e.key === 'ArrowDown') { e.preventDefault(); (li.nextElementSibling || dropdown.querySelector('li')).focus(); }
          else if (e.key === 'ArrowUp') { e.preventDefault(); (li.previousElementSibling || dropdown.querySelector('li:last-child')).focus(); }
          else if (e.key === 'Escape') { dropdown.classList.remove('show'); langBtn.setAttribute('aria-expanded','false'); langBtn.focus(); }
        });
      });

      try {
        const saved = localStorage.getItem('site_lang');
        if (saved) {
          const li = dropdown.querySelector(`li[data-lang="${saved}"]`);
          if (li) langBtn.childNodes[0].nodeValue = '🌐 ' + li.textContent + ' ';
        }
      } catch(e){}
    }

    const registerButton = $('#registerButton');
    const loginButton = $('#loginButton');
    const resetPasswordButton = $('#resetPasswordButton');
    const switchToLogin = $('#switchToLogin');
    const switchToRegister = $('#switchToRegister');
    const resetPasswordLinkBtn = $('#resetPasswordLink');
    const cancelReset = $('#cancelReset');

    if (switchToLogin) {
      switchToLogin.addEventListener('click', (e) => {
        e.preventDefault();
        closeOverlay(modalStart);
        openOverlay(modalLog);
      });
    }

    if (switchToRegister) {
      switchToRegister.addEventListener('click', (e) => {
        e.preventDefault();
        closeOverlay(modalLog);
        openOverlay(modalStart);
      });
    }

    if (resetPasswordLinkBtn) {
      resetPasswordLinkBtn.addEventListener('click', (e) => {
        e.preventDefault();
        closeOverlay(modalLog);
        openOverlay(modalReset);
      });
    }

    if (cancelReset) {
      cancelReset.addEventListener('click', (e) => {
        e.preventDefault();
        closeOverlay(modalReset);
        openOverlay(modalLog);
      });
    }

    if (registerButton) {
      registerButton.addEventListener('click', (e) => {
        e.preventDefault();
        const email = $('#regEmail')?.value;
        const password = $('#regPassword')?.value;
        const confirmPassword = $('#regConfirmPassword')?.value;
        
        if (!email || !password || !confirmPassword) {
          const t = i18n[localStorage.getItem('site_lang') || 'en'];
          showNotification(t.notifications.fillAll, 'error');
          return;
        }

        if (password !== confirmPassword) {
          const t = i18n[localStorage.getItem('site_lang') || 'en'];
          showNotification(t.notifications.passwordsMismatch, 'error');
          return;
        }

        const users = JSON.parse(localStorage.getItem('users') || '[]');
        if (users.find(u => u.email === email)) {
          const t = i18n[localStorage.getItem('site_lang') || 'en'];
          showNotification(t.notifications.userExists, 'error');
          return;
        }

        saveUser(email, password);
        setCurrentUser(email);
        loadUserTasks();
        window.location.href = '/index';

        const t = i18n[localStorage.getItem('site_lang') || 'en'];
        showNotification(t.notifications.registerSuccess(getEmailName(email)), 'success');
        
        $('#regEmail').value = '';
        $('#regPassword').value = '';
        $('#regConfirmPassword').value = '';
        
        updateUIForUser();
        
        closeOverlay(modalStart);
      });
    }

    if (loginButton) {
      loginButton.addEventListener('click', (e) => {
        e.preventDefault();
        const email = $('#loginEmail')?.value;
        const password = $('#loginPassword')?.value;

        if (!email || !password) {
          const t = i18n[localStorage.getItem('site_lang') || 'en'];
          showNotification(t.notifications.fillAll, 'error');
          return;
        }

        const user = findUser(email, password);
        if (!user) {
          const t = i18n[localStorage.getItem('site_lang') || 'en'];
          showNotification(t.notifications.loginError, 'error');
          return;
        }

        setCurrentUser(email);
        loadUserTasks();

        const t = i18n[localStorage.getItem('site_lang') || 'en'];
        showNotification(t.notifications.loginSuccess(getEmailName(email)), 'success');
        
        $('#loginEmail').value = '';
        $('#loginPassword').value = '';
        
        updateUIForUser();
        
        closeOverlay(modalLog);
      });
    }

    if (resetPasswordButton) {
      resetPasswordButton.addEventListener('click', (e) => {
        e.preventDefault();
        const email = $('#resetEmail')?.value;

        if (!email) {
          const t = i18n[localStorage.getItem('site_lang') || 'en'];
          showNotification(t.notifications.resetSent, 'info');
          return;
        }

        console.log('Reset password for:', email);
        const t = i18n[localStorage.getItem('site_lang') || 'en'];
        showNotification(t.notifications.resetSent, 'info');
        
        closeOverlay(modalReset);
      });
    }

    const viewTabs = document.querySelectorAll('.view-tab');
    const listView = document.getElementById('listView');
    const boardView = document.getElementById('boardView');

    const sidebarItems = document.querySelectorAll('.sidebar-item');
    const mainWindow = document.querySelector('.main-window');
    const aiAssistant = document.getElementById('aiAssistant');
    
    sidebarItems.forEach((item, index) => {
      item.addEventListener('click', () => {
        sidebarItems.forEach(i => i.classList.remove('active'));
        item.classList.add('active');
        
        if (index === 2) {
          if (mainWindow) mainWindow.style.display = 'none';
          if (aiAssistant) aiAssistant.style.display = 'flex';
          setTimeout(() => initAIGreeting(), 100);
        } else {
          if (mainWindow) mainWindow.style.display = 'flex';
          if (aiAssistant) aiAssistant.style.display = 'none';
        }
      });
    });







    const TASK_TYPES = {
      task: {
        label: 'Task',
        class: 'type-task'
      },
      milestone: {
        label: 'Milestone',
        class: 'type-milestone'
      },
      form: {
        label: 'Form Response',
        class: 'type-form'
      },
      meeting: {
        label: 'Meeting Note',
        class: 'type-meeting'
      }
    };

    const checkboxes = document.querySelectorAll('.check');
    checkboxes.forEach(check => {
      check.addEventListener('click', function() {
        this.style.background = this.style.background === 'rgb(59, 130, 246)' ? '' : '#3b82f6';
        this.innerHTML = this.style.background ? '✓' : '';
        this.style.color = 'white';
        this.style.display = 'flex';
        this.style.alignItems = 'center';
        this.style.justifyContent = 'center';
        this.style.fontSize = '10px';
      });
    });

    document.querySelector('.table tbody').addEventListener('click', e => {
      const btn = e.target.closest('.add-task-btn');
      if (!btn) return;

      const row = btn.closest('.add-task-row');
      const status = row.dataset.status;

      row.innerHTML = `
        <td colspan="7">
          <div class="add-task-input">
            <span class="task-status-dot ${dotClass(status)} type-task"></span>

            <input
              class="task-name-input"
              placeholder="Task Name or type '/' for commands"
            >

            <div class="add-task-actions">
              <div class="task-type-btn" data-type="task">
                <span class="task-status-dot type-task"></span>
                <span class="task-type-label">Task</span>
              </div>

              <button class="add-task-icon" title="Due date">
                  <img src="assets/images/date_icon.png">
              </button>

              <div class="priority-btn" data-priority="none">
                <img src="assets/images/priority_icon.png">
                <span class="priority-label"></span>
              </div>

              <span class="task-cancel">Cancel</span>
              <button type="button" class="task-save">Save ↵</button>
            </div>
          </div>
        </td>
      `;

      row.querySelector('.task-name-input').focus();
    });

    document.addEventListener('click', e => {
      if (!e.target.classList.contains('task-cancel')) return;

      const row = e.target.closest('.add-task-row');
      restoreAddRow(row);
    });

    document.addEventListener('click', e => {
      const saveBtn = e.target.closest('.task-save');
      if (!saveBtn) return;
      
      console.log('SAVE BUTTON CLICKED', saveBtn);

      const row = saveBtn.closest('.add-task-row');
      const input = row.querySelector('.task-name-input');
      if (!input) return;

      const name = input.value.trim();
      if (!name) return;

      const status = row.dataset.status;
      const type = row.dataset.type || 'task';

      const priorityBtn = row.querySelector('.priority-btn');
      const currentPriority = priorityBtn ? priorityBtn.dataset.priority : 'none';

      const task = {
        id: 'task-' + Date.now() + '-' + Math.floor(Math.random() * 1000),
        name,
        status,
        type,
        priority: currentPriority
      };
      const taskRow = createTaskRow(task);

      console.log('TASK TO SAVE', task);

      saveTask(task);

      renderTask(task, row); 

      input.value = '';
      if (typeof restoreAddRow === 'function') {
        restoreAddRow(row);
      }
    });

    document.addEventListener('click', e => {
      const btn = e.target.closest('.task-type-btn');
      if (!btn) return;

      e.stopPropagation();
      removeTypeMenu();

      const menu = document.createElement('div');
      menu.className = 'task-type-menu';

      menu.innerHTML = Object.entries(TASK_TYPES)
        .map(([key, t]) => `
          <button data-type="${key}">
            <span class="task-status-dot ${t.class}"></span>
            ${t.label}
          </button>
        `).join('');

      document.body.appendChild(menu);

      const r = btn.getBoundingClientRect();
      menu.style.top = r.bottom + 6 + 'px';
      menu.style.left = r.left + 'px';

      menu.onclick = ev => {
        const item = ev.target.closest('button');
        if (!item) return;

        const addRow = btn.closest('.add-task-row');

        addRow.dataset.type = item.dataset.type;

        btn.querySelector('.task-type-label').textContent =
          TASK_TYPES[item.dataset.type].label;

        const dot = btn.querySelector('.task-status-dot');
        dot.className = 'task-status-dot ' + TASK_TYPES[item.dataset.type].class;

        removeTypeMenu();
      };
    });

    document.addEventListener('click', e => {
      if (
        e.target.closest('.task-type-menu') ||
        e.target.closest('.task-type-btn')
      ) return;

      removeTypeMenu();
    });

    document.addEventListener('keydown', e => {
      if (e.key === 'Enter' && e.target.classList.contains('task-name-input')) {
        const row = e.target.closest('.add-task-row');
        const saveBtn = row.querySelector('.task-save');
        if (saveBtn) {
          saveBtn.click();
        }
      }
      
      if (e.key === 'Escape' && e.target.classList.contains('task-name-input')) {
        const row = e.target.closest('.add-task-row');
        restoreAddRow(row);
      }
    });
    
    document.addEventListener('click', e => {
      const btn = e.target.closest('.priority-btn');
      if (!btn) return;

      e.stopPropagation();
      removePriorityMenu();

      const menu = document.createElement('div');
      menu.className = 'priority-menu';

      menu.innerHTML = `
        <button data-p="urgent"><img src="assets/images/urgent_icon.png"> Urgent</button>
        <button data-p="high"><img src="assets/images/high_icon.png"> High</button>
        <button data-p="normal"><img src="assets/images/normal_icon.png"> Normal</button>
        <button data-p="low"><img src="assets/images/low_icon.png"> Low</button>
        <button data-p="none"><img src="assets/images/clear_icon.png"> Clear</button>
      `;

      document.body.appendChild(menu);

      const r = btn.getBoundingClientRect();
      menu.style.top = r.bottom + 6 + 'px';
      menu.style.left = r.left + 'px';

      menu.onclick = ev => {
        const item = ev.target.closest('button');
        if (!item) return;

        setPriority(btn, item.dataset.p);
        removePriorityMenu();
      };
    });

    document.addEventListener('click', e => {
      if (
        e.target.closest('.priority-menu') ||
        e.target.closest('.priority-btn')
      ) {
        return;
      }

      removePriorityMenu();
    });

    document.addEventListener('click', removeMenus);

    document
      .querySelectorAll('.table tbody tr:not(.group-row):not(.add-task-row)')
      .forEach(row => attachStatusMenu(row));


    document.addEventListener('click', e => {
      if (
          e.target.closest('.context-menu') || 
          e.target.closest('.status-menu') || 
          e.target.closest('.priority-menu') || 
          e.target.closest('.priority-btn') ||
          e.target.closest('.status') ||
          e.target.closest('.task-menu-btn')
      ) {
          return;
      }
      removeAllMenus();
    });


    




    const userTrigger = document.getElementById('userTrigger');
    const userMenu = document.getElementById('userMenu');
    const avatarArrow = document.getElementById('avatarArrow');

    userTrigger.addEventListener('click', (e) => {
        e.stopPropagation();
        userMenu.classList.toggle('open');
        avatarArrow.style.transform =
            userMenu.classList.contains('open')
                ? 'rotate(0deg)'
                : 'rotate(180deg)';
    });

    document.addEventListener('click', () => {
        userMenu.classList.remove('open');
        avatarArrow.style.transform = 'rotate(180deg)';
    });


    const aiInput = document.getElementById('aiInput');
    const aiSendBtn = document.getElementById('aiSendBtn');
    const aiChat = document.getElementById('aiChat');
    let chatContext = JSON.parse(localStorage.getItem('ai_chat_history') || '[]');
    window.chatContext = chatContext;

    function addAIMessage(message, isUser = false) {
      const messageDiv = document.createElement('div');
      messageDiv.className = `ai-message ${isUser ? 'ai-message-user' : 'ai-message-bot'}`;
      
      messageDiv.innerHTML = `
        <div class="ai-avatar">${isUser ? '👤' : '🤖'}</div>
        <div class="ai-bubble">${message}</div>
      `;
      
      aiChat.appendChild(messageDiv);
      aiChat.scrollTop = aiChat.scrollHeight;
    }

    function analyzeTasksAI() {
      const tasks = [];
      const rows = document.querySelectorAll('.table tbody tr:not(.group-row):not([class*="add-task"])');
      
      rows.forEach(row => {
        const nameCell = row.querySelector('.name-cell');
        const statusCell = row.querySelector('.status');
        const priorityCell = row.querySelectorAll('td')[3];
        
        if (nameCell && statusCell) {
          const taskName = nameCell.textContent.trim();
          const status = statusCell.textContent.trim();
          const priority = priorityCell.querySelector('.icon')?.textContent || 'Not set';
          
          tasks.push({ name: taskName, status, priority });
        }
      });

      return tasks;
    }

    function generateAIResponse(userMessage) {
      const lowerMsg = userMessage.toLowerCase().trim();
      const currentLang = localStorage.getItem('site_lang') || 'en';
      const t = i18n[currentLang];
      
      const hasWords = (words) => words.some(word => lowerMsg.includes(word));
      
      if (hasWords(['проанал', 'анал', 'завдан', 'analyze', 'task', 'статус', 'скільки'])) {
        const tasks = analyzeTasksAI();
        
        if (tasks.length === 0) {
          return `<p>${t.ai?.noTasks || 'No tasks yet'}</p>`;
        }

        const inProgress = tasks.filter(task => task.status === 'IN PROGRESS').length;
        const todo = tasks.filter(task => task.status === 'TO DO').length;
        const done = tasks.filter(task => task.status === 'DONE').length;
        
        let response = `<p><strong>${t.ai?.taskAnalysis || '📊 Task Analysis:'}</strong></p>`;
        response += `<ul>`;
        response += `<li>${t.ai?.totalTasks || '📋 Total tasks:'} <strong>${tasks.length}</strong></li>`;
        response += `<li>${t.ai?.inProgress || '🔄 In progress:'} <strong>${inProgress}</strong></li>`;
        response += `<li>${t.ai?.planned || '📝 Planned:'} <strong>${todo}</strong></li>`;
        response += `<li>${t.ai?.completed || '✅ Completed:'} <strong>${done}</strong></li>`;
        response += `</ul>`;
        
        response += `<p><strong>${t.ai?.recommendations || '💡 Recommendations:'}</strong></p><ul>`;
        
        if (inProgress > 3) {
          response += `<li>${t.ai?.manyInProgress || 'Many tasks in progress'} (${inProgress}). ${t.ai?.focusRecommendation || 'Focus on important tasks.'}</li>`;
        }
        
        if (todo > 5) {
          response += `<li>${t.ai?.setPriorities || 'Set priorities for'} ${todo} ${t.ai?.tasks || 'tasks.'}</li>`;
        }
        
        if (tasks.length > 0) {
          response += `<li>${t.ai?.startWithImportant || 'Start with important task'}</li>`;
          response += `<li>${t.ai?.setReminders || 'Set reminders'}</li>`;
          response += `<li>${t.ai?.markCompleted || 'Mark completed tasks!'}</li>`;
        }
        
        response += `</ul>`;
        
        return response;
      }

      if (hasWords(['прив', 'даро', 'хай', 'hello', 'hi', 'yo'])) {
        return `<p>${t.ai?.greeting || '👋 Hello!'}</p>
                <p>${t.ai?.howCanHelp || 'How can I help? 😊'}</p>`;
      }
      
      if (hasWords(['ок', 'fine', 'nice', 'okay', 'пон', 'добре', 'чудово', 'круто', 'зрозумі', 'ясно'])) {
        return `<p>${t.ai?.great || '👌 Great!'}</p>`;
      }

      if (hasWords(['дякую', 'благодар', 'спасиб', 'спс', 'thanks', 'thx'])) {
        return `<p>${t.ai?.happyToHelp || '😊 Always happy to help!'}</p>`;
      }

      if (hasWords(['нічого', 'пока', 'ничего', 'поки', 'пот', 'не треба'])) {
        return `<p>${t.ai?.imHere || '👌 Okay, I\'m here if you need me.'}</p>`;
      }

      if (hasWords(['ахах', 'лол', 'хех', '😂', 'хаха'])) {
        return `<p>${t.ai?.gladYouLiked || '😄 Glad you liked it!'}</p>`;
      }

      if (hasWords(['хто ти', 'що ти', 'ти хто', 'who', 'what', 'ты'])) {
        return `<p>${t.ai?.iAmAssistant || '🤖 I\'m an AI assistant that helps:'}</p>
                <ul>
                  <li>${t.ai?.planDay2 || '⏰ plan your day'}</li>
                  <li>${t.ai?.setPriorities2 || '🎯 set priorities'}</li>
                  <li>${t.ai?.workProductively || '📊 work more productively'}</li>
                </ul>`;
      }

      if (hasWords(['розподіли', 'план', 'schedule', 'розклад', 'день', 'час', 'time', 'day'])) {
        return `
                <p><strong>${t.ai.dayPlanTitle}</strong></p>
                <ul>
                  <li>🌅 <strong>09:00–11:00</strong> — ${t.ai.dayPlanHard}</li>
                  <li>☕ <strong>11:00–13:00</strong> — ${t.ai.dayPlanMedium}</li>
                  <li>🍽️ <strong>13:00–14:00</strong> — ${t.ai.dayPlanBreak}</li>
                  <li>📞 <strong>14:00–16:00</strong> — ${t.ai.dayPlanMeetings}</li>
                  <li>📝 <strong>16:00–18:00</strong> — ${t.ai.dayPlanLight}</li>
                </ul>
                <p><strong>${t.ai.pomodoroTitle}</strong></p>
                <ul>
                  <li>🍅 ${t.ai.pomodoroWork}</li>
                  <li>☕ ${t.ai.pomodoroRest}</li>
                  <li>🎯 ${t.ai.pomodoroLong}</li>
                </ul>`;
      }
      
      if (hasWords(['пріоритет', 'важлив', 'priority', 'терміно', ' important'])) {
        return `
                <p><strong>${t.ai.priorityTitle}</strong></p>
                <ul>
                  <li>🔴 <strong>${t.ai.priorityUrgent}</strong> — ${t.ai.priorityUrgentDesc}</li>
                  <li>🟠 <strong>${t.ai.priorityHigh}</strong> — ${t.ai.priorityHighDesc}</li>
                  <li>🟡 <strong>${t.ai.priorityMedium}</strong> — ${t.ai.priorityMediumDesc}</li>
                  <li>🟢 <strong>${t.ai.priorityLow}</strong> — ${t.ai.priorityLowDesc}</li>
                </ul>
                <p><strong>${t.ai.eisenhowerTitle}</strong></p>
                <ul>
                  <li>${t.ai.eisenhower1}</li>
                  <li>${t.ai.eisenhower2}</li>
                  <li>${t.ai.eisenhower3}</li>
                  <li>${t.ai.eisenhower4}</li>
                </ul>
                <p>${t.ai.priorityHint}</p>`;
      }
      
      if (hasWords(['допомога', 'help', 'що ти', 'команд', 'можеш', 'can', 'command'])) {
        return `
                <p><strong>${t.ai.helpTitle}</strong></p>
                <ul>
                  <li>📊 <strong>${t.ai.helpAnalyze}</strong> — "${t.ai.helpAnalyzeCmd}"</li>
                  <li>⏰ <strong>${t.ai.helpPlan}</strong> — "${t.ai.helpPlanCmd}"</li>
                  <li>🎯 <strong>${t.ai.helpPriority}</strong> — "${t.ai.helpPriorityCmd}"</li>
                  <li>💡 <strong>${t.ai.helpTips}</strong> — "${t.ai.helpTipsCmd}"</li>
                </ul>
                <p><strong>${t.ai.helpExamples}</strong></p>
                <ul>
                  <li>"${t.ai.exampleAnalyze}"</li>
                  <li>"${t.ai.examplePlan}"</li>
                  <li>"${t.ai.examplePriority}"</li>
                  <li>"${t.ai.exampleTips}"</li>
                </ul>
                <p>${t.ai.helpFooter}</p>
        `;
      }
      
      if (hasWords(['prod', 'effect', 'advice', 'совет', 'порад', 'продуктивніст', 'ефективн', 'productivity'])) {
        return `
                <p><strong>${t.ai.productivityTitle}</strong></p>
                <ul>
                  <li>🎯 ${t.ai.rule2min}</li>
                  <li>🐸 ${t.ai.eatFrog}</li>
                  <li>📝 ${t.ai.batchTasks}</li>
                  <li>🚫 ${t.ai.noMultitasking}</li>
                  <li>⏰ ${t.ai.timeBlocking}</li>
                  <li>📱 ${t.ai.noDistractions}</li>
                  <li>🎉 ${t.ai.rewardYourself}</li>
                </ul>`;
      }
      
      return `<p>${t.ai?.goodQuestion || '🤔 Good question! Here\'s what I can do for you:'}</p>
              <ul>
                <li>${t.ai?.analyzeCommand || '💬 "Analyze my tasks" - show statistics'}</li>
                <li>${t.ai?.planDay || '⏰ "Plan the day" - create schedule'}</li>
                <li>${t.ai?.howToPrioritize || '🎯 "How to prioritize" - explain system'}</li>
                <li>${t.ai?.giveTips || '💡 "Give tips" - share productivity hacks'}</li>
                <li>${t.ai?.helpCommand || '❓ "Help" - show all commands'}</li>
              </ul>
              <p>${t.ai?.justAsk || 'Just write the command in your own words! 😊'}</p>`;
    }

    async function sendAIMessage() {
      const message = aiInput.value.trim();
      if (!message) return;

      addAIMessage(message, true);
      aiInput.value = '';
      chatContext.push({ role: "user", content: message });

      const allUsers = JSON.parse(localStorage.getItem('users') || '[]');
      const currentUserEmail = localStorage.getItem('currentUser');
      let userTasks = [];

      if (currentUserEmail) {
        const currentUser = allUsers.find(u => u.email === currentUserEmail);
        if (currentUser && currentUser.tasks) {
          userTasks = currentUser.tasks.map(t => 
          typeof t === 'object' ? (t.name || t.text || JSON.stringify(t)) : t
          );
        }
      }

      try {
        const response = await fetch('/api/ai_chat', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ message: message, history: chatContext, notes: userTasks })
        });

        if (!response.ok) {
          const errorData = await response.json();
          console.error("Server Error:", errorData);
          addAIMessage("Error on server. Check console.", false);
          return;
        };

        const data = await response.json();
        addAIMessage(data.answer, false);
        chatContext.push({ role: "assistant", content: data.answer });
        if (chatContext.length > 10) chatContext.shift();
        localStorage.setItem('ai_chat_history', JSON.stringify(chatContext));

      } catch (err) {
        console.error("Request error:", err);
        addAIMessage("Unable to connect to the AI.", false);
      }
    }
    

    if (aiSendBtn) {
      aiSendBtn.addEventListener('click', sendAIMessage);
    }

    if (aiInput) {
      aiInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
          sendAIMessage();
        }
      });
    }

    function initAIGreeting() {
      const aiChat = document.getElementById('aiChat');
      if (!aiChat) return;

      const savedLang = localStorage.getItem('site_lang');
      const currentLang = i18n[savedLang] ? savedLang : 'en';
      const t = i18n[currentLang];

      if (!t.ai) {
        console.warn(`Переводы для AI (язык: ${currentLang}) не найдены.`);
        return; 
      }

      if (aiChat.children.length > 0) return;

      const greeting = `
        <p>${t.ai?.intro}</p>
        <p>${t.ai?.introHelp}</p>
        <ul>
          <li>📋 ${t.ai?.introAnalyze}</li>
          <li>⏰ ${t.ai?.introPlan}</li>
          <li>🎯 ${t.ai?.introPrioritize}</li>
          <li>💡 ${t.ai?.introRecommend}</li>
        </ul>
        <p>${t.ai?.introHint}</p>
      `;

      addAIMessage(greeting, false);
    }

    function updateDashboardStats() {
      const tasks = [];
      const rows = document.querySelectorAll('.table tbody tr:not(.group-row):not([class*="add-task"])');
      
      rows.forEach(row => {
        const nameCell = row.querySelector('.name-cell');
        const statusCell = row.querySelector('.status');
        const priorityBtn = row.querySelector('.priority-btn');

        if (!nameCell || !statusCell) return;

        tasks.push({
          name: nameCell.textContent.trim(),
          status: statusCell.textContent.trim(),
          priority: priorityBtn?.dataset.priority || ''
        });
      });

      const totalTasks = tasks.length;
      const inProgress = tasks.filter(t => t.status === 'IN PROGRESS').length;
      const completed = tasks.filter(t => t.status === 'DONE').length;
      const todo = tasks.filter(t => t.status === 'TO DO').length;
      const productivity = totalTasks > 0 ? Math.round((completed / totalTasks) * 100) : 0;

      const urgent = tasks.filter(t => t.priority.toLowerCase().includes('urgent')).length;
      const high = tasks.filter(t => t.priority.toLowerCase().includes('high')).length;
      const normal = tasks.filter(t => t.priority.toLowerCase().includes('normal')).length;
      const low = tasks.filter(t => t.priority.toLowerCase().includes('low')).length;

      const setTextSafe = (id, text) => {
        const el = document.getElementById(id);
        if (el) el.textContent = text;
      };

      setTextSafe('totalTasks', totalTasks);
      setTextSafe('inProgressTasks', inProgress);
      setTextSafe('completedTasks', completed);
      setTextSafe('productivity', productivity + '%');

      setTextSafe('todoCount', todo);
      setTextSafe('progressCount', inProgress);
      setTextSafe('doneCount', completed);

      setTextSafe('urgentCount', urgent);
      setTextSafe('highCount', high);
      setTextSafe('mediumCount', normal);
      setTextSafe('lowCount', low);

      const setBarWidth = (id, percentage) => {
        const el = document.getElementById(id);
        if (el) el.style.width = percentage + '%';
      };

      if (totalTasks > 0) {
        setBarWidth('todoBar', (todo / totalTasks) * 100);
        setBarWidth('progressBar', (inProgress / totalTasks) * 100);
        setBarWidth('doneBar', (completed / totalTasks) * 100);
      }

      const recentTasksContainer = document.getElementById('recentTasks');
      if (recentTasksContainer && tasks.length > 0) {
        recentTasksContainer.innerHTML = '';
        
        const recentTasks = tasks.slice(-5).reverse();
        
        recentTasks.forEach(task => {
          const activityItem = document.createElement('div');
          activityItem.className = 'activity-item';
          
          let icon = '📝';
          let bgColor = '#3b82f6';
          
          if (task.status === 'DONE') {
            icon = '✅';
            bgColor = '#10b981';
          } else if (task.status === 'IN PROGRESS') {
            icon = '🔄';
            bgColor = '#f59e0b';
          } else if (task.status === 'BLOCKED') {
            icon = '🚫';
            bgColor = '#ef4444';
          }
          
          activityItem.innerHTML = `
            <div class="activity-icon" style="background: ${bgColor};">${icon}</div>
            <div class="activity-content">
              <p class="activity-text">${task.name}</p>
              <span class="activity-time">${task.status}${task.priority ? ' • ' + task.priority : ''}</span>
            </div>
          `;
          
          recentTasksContainer.appendChild(activityItem);
        });
      }
    }

    window.updateDashboardStats = updateDashboardStats;

    window.handleDelete = function(taskId) {
      if (confirm('Are you sure you want to delete this task?')) {
        updateCurrentUserData(user => {
          user.tasks = user.tasks.filter(t => t.id !== taskId);
        });
        
        const row = document.querySelector(`tr[data-id="${taskId}"]`);
        if (row) row.remove();
        
        removeAllMenus();
      }
    };

    window.handleUpdateType = function(taskId, type) {
      const row = document.querySelector(`tr[data-id="${taskId}"]`);
      if (row) {
        setTaskType(row, type);
        updateTask(taskId, { type: type });
      }
      removeAllMenus();
    };

    window.handleDuplicate = function(taskId) {
      const user = getCurrentUserData();
      const originalTask = user.tasks.find(t => t.id === taskId);
      if (!originalTask) return;

        const newTask = {
            ...originalTask,
            id: 'task-' + Date.now(),
            name: originalTask.name + ' (copy)'
        };

        saveTask(newTask);
        
        const originalRow = document.querySelector(`tr[data-id="${taskId}"]`);
        
        renderTask(newTask, originalRow.nextSibling);
      
      removeAllMenus();
    };

    window.handleRename = function(taskId) {
      removeAllMenus();
      const row = document.querySelector(`tr[data-id="${taskId}"]`);
      if (!row) return;

      const nameCell = row.querySelector('.name-cell');
      const originalName = nameCell.innerText.trim();
      
      const dot = nameCell.querySelector('.task-status-dot');

      nameCell.innerHTML = '';
      if (dot) nameCell.appendChild(dot);

      const input = document.createElement('input');
      input.type = 'text';
      input.className = 'rename-input';
      input.value = originalName;
      nameCell.appendChild(input);

      input.focus();
      input.select();

      const saveName = () => {
        const newName = input.value.trim() || originalName;
        
        updateTask(taskId, { name: newName });

        nameCell.innerHTML = '';
        if (dot) nameCell.appendChild(dot);
        nameCell.append(` ${newName}`);
      };

      input.onkeydown = (e) => {
        if (e.key === 'Enter') saveName();
        if (e.key === 'Escape') {
          input.value = originalName;
          saveName();
        }
      };

      input.onblur = saveName;
    };


    window.deleteTask = function(taskId) {
      if (!confirm('Видалити цю задачу?')) return;
      
      updateCurrentUserData(user => {
        user.tasks = user.tasks.filter(t => t.id !== taskId);
      });
      
      if (selectedDate) {
        displayTasksForDate(selectedDate);
        renderCalendar();
      }
      
      showNotification('Задачу видалено', 'success');
    };

    const prevMonthBtn = document.getElementById('prevMonth');
    const nextMonthBtn = document.getElementById('nextMonth');

    if (prevMonthBtn) {
      prevMonthBtn.addEventListener('click', () => {
        currentCalendarDate.setMonth(currentCalendarDate.getMonth() - 1);
        renderCalendar();
      });
    }

    if (nextMonthBtn) {
      nextMonthBtn.addEventListener('click', () => {
        currentCalendarDate.setMonth(currentCalendarDate.getMonth() + 1);
        renderCalendar();
      });
    }

    const addTaskForDateBtn = document.getElementById('addTaskForDateBtn');
    const modalDateTask = document.getElementById('modalDateTask');
    const closeDateTaskModal = document.getElementById('closeDateTaskModal');
    const saveDateTaskBtn = document.getElementById('saveDateTaskBtn');

    if (addTaskForDateBtn) {
      addTaskForDateBtn.addEventListener('click', () => {
        if (!selectedDate) return;
        
        selectedDateForTask = selectedDate;
        const date = new Date(selectedDate);
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const lang = localStorage.getItem('site_lang') || 'en';
        const locale = lang === 'ua' || lang === 'uk' ? 'uk-UA' : 'en-US';
        
        document.getElementById('selectedDateDisplay').textContent = date.toLocaleDateString(locale, options);
        document.getElementById('taskTitleInput').value = '';
        document.getElementById('taskDescriptionInput').value = '';
        
        document.querySelectorAll('.priority-option').forEach(btn => {
          btn.classList.remove('active');
        });
        document.querySelector('.priority-option[data-priority="none"]').classList.add('active');
        
        openOverlay(modalDateTask);
      });
    }

    if (closeDateTaskModal) {
      closeDateTaskModal.addEventListener('click', () => {
        closeOverlay(modalDateTask);
      });
    }

    if (modalDateTask) {
      modalDateTask.addEventListener('click', (e) => {
        if (e.target === modalDateTask) {
          closeOverlay(modalDateTask);
        }
      });
    }

    document.querySelectorAll('.priority-option').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelectorAll('.priority-option').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
      });
    });

    document.getElementById('prevMonth').onclick = () => {
      currentCalendarDate.setMonth(currentCalendarDate.getMonth());
      renderCalendar();
    };

    document.getElementById('nextMonth').onclick = () => {
      currentCalendarDate.setMonth(currentCalendarDate.getMonth());
      renderCalendar();
    };

    document.getElementById('quickPrevMonth').onclick = (e) => {
      e.stopPropagation();
      quickCalendarDate.setMonth(quickCalendarDate.getMonth() - 1);
      renderQuickCalendar();
    };

    document.getElementById('quickNextMonth').onclick = (e) => {
      e.stopPropagation();
      quickCalendarDate.setMonth(quickCalendarDate.getMonth() + 1);
      renderQuickCalendar();
    };

    if (saveDateTaskBtn) {
      saveDateTaskBtn.addEventListener('click', (e) => {
        e.preventDefault();
        
        const title = document.getElementById('taskTitleInput').value.trim();
        const description = document.getElementById('taskDescriptionInput').value.trim();
        const selectedPriority = document.querySelector('.priority-option.active');
        const priority = selectedPriority ? selectedPriority.dataset.priority : 'none';
        const currentLang = localStorage.getItem('site_lang') || 'en';
        const t = i18n[currentLang];
        
        if (!title) {
          showNotification(t.calendar?.enterTitle || 'Enter task title', 'error');
          return;
        }
        
        const task = {
          id: 'task-' + Date.now() + '-' + Math.floor(Math.random() * 1000),
          name: title,
          description: description,
          date: selectedDateForTask,
          status: 'TO DO',
          type: 'task',
          priority: priority
        };
        
        saveTask(task);
        
        closeOverlay(modalDateTask);
        displayTasksForDate(selectedDateForTask);
        renderCalendar();
        
        showNotification(t.calendar?.addPlan || 'Plan added!', 'success');
      });
    }
    const qPrev = document.getElementById('quickPrevMonth');
    const qNext = document.getElementById('quickNextMonth');
    
    if (qPrev) qPrev.onclick = (e) => {
        e.stopPropagation();
        quickCalendarDate.setMonth(quickCalendarDate.getMonth() - 1);
        renderQuickCalendarContent();
    };
    
    if (qNext) qNext.onclick = (e) => {
        e.stopPropagation();
        quickCalendarDate.setMonth(quickCalendarDate.getMonth() + 1);
        renderQuickCalendarContent();
    };

    document.addEventListener('mousedown', (e) => {
        const picker = document.getElementById('quickDatePicker');
        if (picker && !picker.contains(e.target) && !e.target.closest('.date-btn')) {
            picker.style.display = 'none';
        }
    });

    viewTabs.forEach((tab, index) => {
      const oldHandler = tab.onclick;
      tab.onclick = null;
      
      tab.addEventListener('click', () => {
        viewTabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        
        const calendarView = document.getElementById('calendarView');
        
        if (index === 0) {
          if (listView) listView.style.display = 'block';
          if (boardView) boardView.style.display = 'none';
          if (calendarView) calendarView.style.display = 'none';
        } else if (index === 1) {
          if (listView) listView.style.display = 'none';
          if (boardView) boardView.style.display = 'none';
          if (calendarView) {
            calendarView.style.display = 'flex';
            renderCalendar();
          }
        } else if (index === 2) {
          if (listView) listView.style.display = 'none';
          if (boardView) boardView.style.display = 'flex';
          if (calendarView) calendarView.style.display = 'none';
          updateDashboardStats();
        } else {
          if (listView) listView.style.display = 'none';
          if (boardView) boardView.style.display = 'none';
          if (calendarView) calendarView.style.display = 'none';
        }
      });
    });


  });
})();
