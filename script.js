document.addEventListener('DOMContentLoaded', () => {
    const signupForm = document.getElementById('signupForm');
    const signupButton = document.getElementById('signupButton');
    const userList = document.getElementById('userList');
    const users = [];

    signupButton.addEventListener('click', () => {
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (username && password) {
            users.push({ username, password });
            displayUsers();
            signupForm.reset();

        } else {
            alert('Please fill in both fields.');
        }
    });

    function displayUsers() {
        userList.innerHTML = '';
        users.forEach((user, index) => {
            const userDiv = document.createElement('div');
            userDiv.textContent = `User ${index + 1}: ${user.username}`;
            userList.appendChild(userDiv);
        });
    }
});