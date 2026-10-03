const supabase = require('./supabaseClient');

async function logIn(email, password) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password
  });

  if (error) {
    console.log("Login failed:", error.message);
    return;
  }

  console.log("Login successful!");
  console.log("User ID:", data.user.id);
  console.log("Access token:", data.session.access_token);
}

logIn("student3@example.com", "password123");