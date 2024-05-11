document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('ageForm');

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    const ageInput = document.getElementById('age');
    const nameInput = document.getElementById('name');

    const age = parseInt(ageInput.value);
    const name = nameInput.value;

    if (isNaN(age) || age < 1 || name.trim() === '') {
      alert('Please enter a valid age and name.');
      return;
    }
    const agePromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (age >= 18) {
          resolve(`Welcome, ${name}. You can vote.`);
        } else {
          reject(`Oh sorry ${name}. You aren't old enough.`);
        }
      }, 4000);
    });
    agePromise.then((message) => {
      alert(message);
    }).catch((error) => {
      alert(error);
    });
    form.reset();
  });
});
