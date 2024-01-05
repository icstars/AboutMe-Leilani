// FORM
//firstName
const grabFirstNameInput = document.getElementById("firstNameInput");
console.log(grabFirstNameInput);

//lastName
const grabLastNameInput = document.getElementById("lastNameInput");
console.log(grabLastNameInput);

//birthDay
const grabDateInput = document.getElementById("dateInput");
console.log(grabDateInput);

//
const grabSubmitBtn = document.getElementById("submitBtn");
console.log(grabSubmitBtn);

grabSubmitBtn.addEventListener("click", (e) =>
{
    e.preventDefault();
 
    console.log(grabFirstNameInput.value);
    console.log(grabLastNameInput.value);
    console.log(grabDateInput.value);

    const paragraphElement = document.querySelector(".paragraph");
    console.log(paragraphElement);

    paragraphElement.textContent = `${grabFirstNameInput.value} ${grabLastNameInput.value} your birthday is ${grabDateInput.value}. Thank you for liking!`
    

    console.log(`${grabFirstNameInput.value} ${grabLastNameInput.value} your birthday is ${grabDateInput.value} Thank you for the LIKE!`);


    //when we click the like button the paragraph will appear
    // Leilani Caban, your birthday is 03/06/2000. Thank you for your LIKE!


    // clear values

    grabFirstNameInput.value = "";
    grabLastNameInput.value = "";
    grabDateInput.value = "";
})