# 🌊 NauticaAlfa 🌊

🏴‍☠️ **Pirate-Themed Browser Game**

**NauticaAlfa** — это увлекательная браузерная игра на пиратскую тематику, построенная с использованием современных веб-технологий. Игроки могут выбирать классы, сражаться с монстрами и другими игроками, собирать ресурсы и управлять кораблем.

## 🚀 Основные особенности

- ⚔️ Сражения с реальными игроками
- 🐉 Борьба с монстрами
- ⛵ Улучшение кораблей и экипажа
- 🌍 Торговля и обмен
- 🎖️ Система достижений и титулов

## 💻 Используемые технологии

### Frontend

- **Framework**: Vue.js, TypeScript
- **Styles**: Tailwind CSS
- **State Management**: Pinia, Vuex
- **Build Tool**: Vite
- **Animations**: Framer Motion, CSS Animations

### Backend

- **Framework**: Flask (Python)
- **Database**: SQLite (development), PostgreSQL/MySQL (production)
- **API**: RESTful API using Flask
- **Deployment**: Docker, GitHub Actions

## 🛠️ Установка и запуск

### 1. Клонирование репозитория

Клонируйте репозиторий на ваш локальный компьютер:

```bash
git clone https://github.com/LMDtokyo/NauticaAlfa.git
cd NauticaAlfa
```
2.Установка зависимостей 
```bash 
npm install
```

3. Настройка окружения
```bash
NODE_ENV=development
BASE_API_URL=http://localhost:3000/api
```
5. Запуск сервера разработки
```bash
npm run dev
```
7. Сборка проекта для продакшена
```bash
npm run build
```
9. Запуск продакшн-сервера
```bash
npm run start
```
11. Docker
```bash
docker build -t nauticaalfa .
```
Затем запустите контейнер:

```bash
docker run -p 3000:3000 nauticaalfa
```

Backend



```bash
cd pirateworld-server-master
python3 -m venv venv
source venv/bin/activate   # On Windows: venv\Scripts\activate
pip install -r requirements.txt
```

3. Настройка окружения

```bash
DATABASE_URL="sqlite:///pirateworld.db"
SECRET_KEY="your-secret-key"
```
Сервер будет доступен по адресу http://127.0.0.1:5000/
```bash
flask run
```
5. Сборка проекта для продакшена
```bash
docker build -t pirateworld-server .
docker run -d -p 5000:5000 pirateworld-server
```

🔧 Разработка и деплой
Проект настроен для работы с CI/CD, используя GitHub Actions. Внесите изменения и создайте pull request, чтобы автоматически задеплоить изменения.

📝 Документация
```Nuxt 3 Documentation```
```Deployment Guide```
🧑‍💻 Вклад в проект
Если вы хотите внести вклад, пожалуйста, создайте pull request или откройте issue.

📄 Лицензия
Этот проект лицензирован по лицензии MIT.
Этот `README.md` файл предоставит полное руководство для пользователей и разработчиков, желающих работать с вашим проектом **NauticaAlfa**.
