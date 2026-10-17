const registrationForm = document.querySelector("#registrationForm");
const nameInput = document.querySelector("#nameInput");
const ageInput = document.querySelector("#ageInput");
const errorMessage = document.querySelector("#errorMessage");
const userList = document.querySelector("#userList");

const userManager = createUserManager();

function displayUsers(users) {
    userList.replaceChildren();

    users.forEach(function ({ name, age }) {
        const userCard = document.createElement("div");

        userCard.classList.add("user-card");
        userCard.textContent = `${name}, ${age} years old`;

        userList.append(userCard);
    });
}

registrationForm.addEventListener("submit", function (event) {
    event.preventDefault();

    try {
        const name = nameInput.value;
        const age = ageInput.value;

        if (age.trim() === "") {
            throw new Error("Age is required");
        }

        const user = createUser({
            name: name,
            age: Number(age)
        });

        userManager.addUser(user);

        const users = userManager.getUsers();

        displayUsers(users);

        console.log("User registered:", user);

        errorMessage.textContent = "";
        nameInput.value = "";
        ageInput.value = "";
    } catch (error) {
        console.error(error.message);
        errorMessage.textContent = error.message;
    } finally {
        console.log("Registration attempt completed");
    }
});