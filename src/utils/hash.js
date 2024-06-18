// Function to hash a string
const hash = (str) => {
  // Create a hash
  let hash = 0;
  // If the string is empty return the hash
  if (str.length === 0) {
    return hash;
  }
  // Loop through the string
  for (let i = 0; i < str.length; i++) {
    // Get the character code of the character
    const char = str.charCodeAt(i);
    // Bitwise left shift with 5 positions
    hash = (hash << 5) - hash + char;
    // Convert to 32-bit integer
    hash &= hash;
  }

  // Return the hash
  return hash;
};

export default hash;
