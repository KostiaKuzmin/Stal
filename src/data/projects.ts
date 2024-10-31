export const projectMappings: Record<string, string> = {
  "Project1": "Бизнес процесс 1 КЦ HR",
  "Project2": "Бизнес процесс 2 Инцидент менеджмент",
  "Project3": "Бизнес процесс 3 Управление персоналом",
  "Project4": "Бизнес процесс 4 ООЭП"
};

type TestData = {
  name: string;
  customName: string;
  description: string;
  status: string;
  lastRun?: string;
};

export const projectTests: Record<string, TestData[]> = {
  "Project1": [
    { 
      name: "bp1_1", 
      customName: "Создание тикета вручную", 
      description: "Проверка создания тикета через веб-интерфейс с заполнением всех обязательных полей", 
      status: "Пройдено",
      lastRun: "2023-12-10 15:30" 
    },
    { 
      name: "bp1_2", 
      customName: "Обработка срочного запроса", 
      description: "Проверка приоритизации и маршрутизации срочных запросов в системе", 
      status: "Не пройдено",
      lastRun: "2023-12-10 16:45" 
    },
    { 
      name: "bp1_3", 
      customName: "Автоматическое уведомление", 
      description: "Проверка отправки уведомлений при изменении статуса тикета", 
      status: "Пройдено",
      lastRun: "2023-12-10 17:20" 
    },
    { 
      name: "bp9_inwork", 
      customName: "Тест перевода в работу", 
      description: "Проверка процесса перевода заявки в работу", 
      status: "Не выполнено",
      lastRun: "2023-12-11 12:00" 
    }
  ],
  "Project2": [
    { 
      name: "bp2_1", 
      customName: "Регистрация инцидента", 
      description: "Создание нового инцидента с указанием уровня критичности", 
      status: "Пройдено",
      lastRun: "2023-12-09 10:15" 
    },
    { 
      name: "bp2_2", 
      customName: "Эскалация инцидента", 
      description: "Проверка процесса эскалации инцидента на следующий уровень поддержки", 
      status: "В работе",
      lastRun: "2023-12-09 11:30" 
    }
  ],
  "Project3": [
    { 
      name: "bp3_1", 
      customName: "Создание карточки сотрудника", 
      description: "Заполнение данных нового сотрудника в системе", 
      status: "Пройдено",
      lastRun: "2023-12-08 09:45" 
    },
    { 
      name: "bp3_2", 
      customName: "Обновление данных", 
      description: "Изменение контактной информации в карточке сотрудника", 
      status: "Пройдено",
      lastRun: "2023-12-08 10:20" 
    }
  ],
  "Project4": [
    { 
      name: "bp4_1", 
      customName: "Формирование отчета", 
      description: "Генерация ежемесячного отчета по эффективности", 
      status: "Не пройдено",
      lastRun: "2023-12-07 14:10" 
    },
    { 
      name: "bp4_2", 
      customName: "Экспорт данных", 
      description: "Выгрузка данных в Excel формат", 
      status: "Пройдено",
      lastRun: "2023-12-07 15:30" 
    }
  ]
};