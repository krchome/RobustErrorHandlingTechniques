async function fetchUserData() {
    try {
      // Simulating a network failure or issue
      let response = await fetch('https://api.example.com/users');
      
      // Check if the fetch was successful
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      
      let data = await response.json();  // Wait for the JSON to be parsed
      console.log(data);
    } catch (error) {
      console.error("Failed to fetch user data:", error.message);
    }
  }
  
  fetchUserData();
  