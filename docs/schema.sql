CREATE TABLE profiles (
  id SERIAL PRIMARY KEY,
  full_name TEXT NOT NULL,
  department TEXT,
  role TEXT NOT NULL DEFAULT 'student'
);

CREATE TABLE items (
  id SERIAL PRIMARY KEY,
  user_id INT REFERENCES profiles(id),
  type TEXT NOT NULL CHECK (type IN ('lost', 'found')),
  title TEXT NOT NULL,
  category TEXT NOT NULL,
  location TEXT NOT NULL,
  event_date DATE NOT NULL,
  status TEXT NOT NULL DEFAULT 'open',
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE claims (
  id SERIAL PRIMARY KEY,
  item_id INT REFERENCES items(id),
  claimant_id INT REFERENCES profiles(id),
  answer TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'pending',
  created_at TIMESTAMP DEFAULT NOW()
);