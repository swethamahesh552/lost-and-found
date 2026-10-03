const supabase = require('./supabaseClient');

async function signUp(email, password, fullName, department) {
  const { data, error } = await supabase.auth.signUp({
    email: email,
    password: password
  });

  if (error) {
    console.log("Signup failed:", error.message);
    return;
  }

  const userId = data.user.id;
  console.log("User created with ID:", userId);

  const { error: profileError } = await supabase
    .from('profiles')
    .insert({
      id: userId,
      full_name: fullName,
      department: department
    });

  if (profileError) {
    console.log("Profile creation failed:", profileError.message);
    return;
  }

  console.log("Profile created successfully for:", fullName);
}

signUp("student3@example.com", "password123", "Rahul S", "CSE");