//!DELETE
//?1-The CEO found out your plan of adding your family to the company, so now he want to delete them from company. he need to right a function to delete these people from company.

/** WRITE YOUR CODE BELOW DOWN */

//******************************************************************************** */
//?2-The CEO of company got crazy because of financial problems, so he decided to fire employees with even ID's.
//todo: write a function to delete them.

/** WRITE YOUR CODE BELOW DOWN */
const familyMemberIds = [1, 2, 3];
async function deleteFamilyMembers() {
    const apiUrl = "https://YOUR_MOCKAPI_ENDPOINT/users";
    OUR_MOCKAPI_ENDPOINT
    try {
        for (const id of familyMemberIds) {
          const response = await fetch(`${apiUrl}/${id}`, {
            method: "DELETE"

        });

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
  
        console.log(`User with ID ${id} deleted successfully`);
      }
      alert("Family members deleted successfully!");
    } catch (error) {
      console.error("Error deleting family members:", error);
      alert("Failed to delete family members. Please try again.");
    }
  }
  deleteFamilyMembers();

  async function deleteEmployeesWithEvenIds() {
    const apiUrl = "https://YOUR_MOCKAPI_ENDPOINT/users";
    YOUR_MOCKAPI_ENDPOINT
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
    
        const users = await response.json();

        for (const user of users) {
            if (user.id % 2 === 0) { 
              const deleteResponse = await fetch(`${apiUrl}/${user.id}`, {
                method: "DELETE"
              });
      
              if (!deleteResponse.ok) {
                throw new Error("Network response was not ok");
              }
      
              console.log(`User with ID ${user.id} deleted successfully`);
            }
          }
          alert("Employees with even IDs deleted successfully!");
        } catch (error) {
          console.error("Error deleting employees:", error);
          alert("Failed to delete employees. Please try again.");
        }
      }
      
      deleteEmployeesWithEvenIds();






//*End of story :)

