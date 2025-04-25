// Collect data from the user
const registrationForm = document.getElementById('registrationForm').addEventListener('submit', function (e) {
    
    // Control the browser behaviour
    e.preventDefault();

    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    const age = document.getElementById('age').value;
    const address = document.getElementById('address').value;
    const gender = document.getElementById('gender').value;


    // Assign Random ID
    const randomId = " A " + Math.floor(Math.random() * 99 + 1 ).toString();

    // Student Object
    const student = {

        id: randomId,
        firstName,
        lastName,
        email,
        phoneNumber,
        age,
        address,
        gender
    };
    
    displayStudent(student);

    // Reset the form data
    this.reset();
});

// To show the data
function displayStudent(student) {
    const newRegistration = document.getElementById('newRegistration');

    const studentCard = document.createElement('div');
    studentCard.className = 'student-card';

    // Use HTMl in JavaScript
    studentCard.innerHTML = `
    <p><span class="student-id">ID: ${student.id}</span></p>
    <p><strong>Full Name:</strong> ${student.firstName} ${student.lastName}</p>
    <p><strong>Email:</strong> ${student.email}</p>
    <p><strong>Phone:</strong> ${student.phoneNumber} </p>
    <p><strong>Age:</strong> ${student.age}</p>
    <p><strong>Address:</strong> ${student.address}</p>
    <p><strong>Gender:</strong> ${student.gender}</p>
    `;

    // List the new data on top
    newRegistration.insertBefore(studentCard, newRegistration.firstChild);
}




