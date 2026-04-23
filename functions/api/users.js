export async function onRequestGet(context) {
  // Эта функция сработает, когда клиент вызовет GET /api/users
  
  // Достаем email из параметров запроса (?email=test@test.com)
  const url = new URL(context.request.url);
  const email = url.searchParams.get('email');

  if (!email) {
    return new Response('Email не указан', { status: 400 });
  }

  try {
    const { results } = await context.env.DB.prepare(
      "SELECT id, email, name, avatarColor FROM users WHERE email = ?"
    ).bind(email).all();

    if (results.length === 0) {
      return new Response('Пользователь не найден', { status: 404 });
    }

    return new Response(JSON.stringify(results[0]), {
      headers: { "Content-Type": "application/json" }
    });

  } catch (error) {
    return new Response('Ошибка сервера: ' + error.message, { status: 500 });
  }
}