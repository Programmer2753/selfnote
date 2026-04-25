CREATE TABLE users (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT UNIQUE NOT NULL,
  name TEXT,
  avatarColor TEXT,
  language TEXT DEFAULT 'en',
  registeredAt TIMESTAMP DEFAULT NOW()
);

CREATE TABLE tasks (
  id TEXT PRIMARY KEY,
  user_id UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  status TEXT DEFAULT 'TO DO',
  type TEXT DEFAULT 'task',
  priority TEXT DEFAULT 'none',
  date DATE,
  description TEXT,
  createdAt TIMESTAMP DEFAULT NOW()
);