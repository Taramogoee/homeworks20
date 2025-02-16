//?Now as a CTO of the company , you want to replace a person, so you need to change first name , last name and phone number of user with ID 1.

/**
 * new DATA:
 *  first name: Lufy
 *  last name: monkey. D
 *  phone number: (945) 635-3854
 */

//!PUT
/** WRITE YOUR CODE BELOW DOWN */



//*To be continue...
const newData = {
    firstName: "Lufy",
    lastName: "monkey. D",
    phoneNumber: "(945) 635-3854"
  };
  
  async function updateUser() {
    const apiUrl = "https://YOUR_MOCKAPI_ENDPOINT/users/1";
    YOUR_MOCKAPI_ENDPOINT 
    try {
        const response = await fetch(apiUrl, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(newData)});

          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
      
          const data = await response.json();
          console.log("User updated:", data);
          alert("User updated successfully!");
        } catch (error) {
          console.error("Error updating user:", error);
          alert("Failed to update user. Please try again.");
        }
      }
      updateUser();