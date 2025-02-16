// To make a request to an endpoint, you can use the website https://mockapi.io/
// To use this website, you need to sign up first.

// !POST
//?1-Imagine you are CTO of a company, and you want to add three people of your family (pull strings :) ) so you have to use 'POST Method' to add these people that are in given array to the MockAPI.
// const users = [
//     {
//         firstName: "Grattan",
//         lastName: "Dalton"
//     },
//     {
//         firstName: "William",
//         lastName: "Dalton"
//     },
//     {
//         firstName: "Robert",
//         lastName: "Dalton"
//     },

// ];

/** WRITE YOUR CODE BELOW DOWN */

//****************************************************************************************** */
//?2-So your company should have a signup form for the people that saw the Employment Announcement,The signup form should get first name , last name and the phone number to admission inside the company.

/** WRITE YOUR CODE BELOW DOWN */

//*To be continue...

const users = [
    {
      firstName: "Grattan",
      lastName: "Dalton"
    },
    {
      firstName: "William",
      lastName: "Dalton"
    },
    {
      firstName: "Robert",
      lastName: "Dalton"
    }
  ];
  
  async function addFamilyMembers() {
    const apiUrl = "https://YOUR_MOCKAPI_ENDPOINT/users"; 
    try {
      for (const user of users) {
        const response = await fetch(apiUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(user)
        });
  
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
  
        const data = await response.json();
        console.log("User added:", data);
      }
    } catch (error) {
      console.error("Error adding users:", error);
    }
  }
  
  
  addFamilyMembers();