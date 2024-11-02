// class RegistrationValidator {

//     // Check if the name contains spaces
//     checkName(name) {
//       if (name.includes(" ")) {
//         console.log("Name contains spaces.");
//         return false;    
//       }
//       return true; // Valid if no spaces found
//     }
  
//     // Check if the password meets certain criteria
//     checkPassword(password) {
//       const regexSpecial = /[!@#$%^&*(),.?":{}|<>]/;
  
//       // Check for special characters
//       if (!regexSpecial.test(password)) {
//         console.log("Password must contain at least one special character.");
//         return false;
//       }
      
//       // Check for length
//       if (password.length < 7) {
//         console.log("Password must be at least 7 characters long.");
//         return false;
//       }
      
//       return true; // Valid if all checks pass
//     }
  
//     // Validate all registration inputs
//     validateAll({ name, username, password, confirmPassword, email }) {
//       if (!this.checkName(name)) {
//         return "Invalid name.";
//       }
      
//       if (!this.checkPassword(password)) {
//         return "Invalid password.";
//       }
      
//       if (password !== confirmPassword) {
//         return "Passwords do not match.";
//       }
  
//       // You can add more validation rules as necessary here.
  
//       return "Valid"; // All validations passed
//     }
//   }
  
 // module.exports = RegistrationValidator;
  