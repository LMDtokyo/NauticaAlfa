from flask import Blueprint, request, jsonify

main_routes = Blueprint('main_routes', __name__)

@main_routes.route('/')
def home():
    return jsonify({"message": "Welcome to Nautica!"})

@main_routes.route('/api/character/<character_id>')
def get_character(character_id):
    try:
        character_data = {
            "id": character_id,
            "name": "Captain Jack",
            "level": 10,
            "gold": 500
        }
        return jsonify(character_data)
    except Exception as e:
        print(f"Error: {e}")
        return jsonify({"error": str(e)}), 500

# Маршрут авторизации
@main_routes.route('/api/auth/signin', methods=['POST'])
def signin():
    data = request.get_json()
    login = data.get('login')
    password = data.get('password')

    # Пример проверки логина и пароля
    if login == 'admin' and password == 'password':
        return jsonify({"success": True, "access_token": "dummy_access_token", "refresh_token": "dummy_refresh_token"})
    else:
        return jsonify({"success": False, "message": "Неверный логин или пароль"}), 401

# Маршрут для получения данных пользователя
@main_routes.route('/api/auth/me', methods=['GET'])
def me():
    # Пример данных пользователя
    user_data = {
        "id": 1,
        "login": "admin",
        "email": "admin@example.com",
        "email_confirmed": True
    }
    return jsonify(user_data)
