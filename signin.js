document.addEventListener('DOMContentLoaded', function () {
  // VOLUNTEER FORM HANDLING
  const volunteerForm = document.querySelector('.form-box form');
  volunteerForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const fullName = this.querySelector('input[name="full_name"]').value.trim();
    const email = this.querySelector('input[name="email"]').value.trim();
    const phone = this.querySelector('input[name="phone_number"]').value.trim();
    const activity = this.querySelector('select[name="activity"]').value;
    const availabilityInputs = this.querySelectorAll('input[name="availability"]:checked');
    const availability = Array.from(availabilityInputs).map(input => input.value);

    if (!fullName || !email || !phone || !activity || availability.length === 0) {
      alert('Please complete all required fields.');
      return;
    }

    const formData = {
      fullName,
      email,
      phone,
      activity,
      availability
    };

    // Send to a fake API
    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(res => res.json())
    .then(data => {
      console.log("Fake API Response:", data);
      alert(`Thank you, ${fullName}! Your registration was submitted (to a fake API).`);
      volunteerForm.reset();
    })
    .catch(error => {
      console.error('Error:', error);
      alert('Oops! Something went wrong.');
    });
  });

  // FEEDBACK FORM HANDLING
  const feedbackForm = document.querySelector('.feedback-box form');
  feedbackForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const feedback = this.querySelector('textarea[name="feedback"]').value.trim();

    if (!feedback) {
      alert('Please enter your feedback before submitting.');
      return;
    }

    const feedbackData = { feedback };

    fetch('https://jsonplaceholder.typicode.com/comments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(feedbackData)
    })
    .then(res => res.json())
    .then(data => {
      console.log("Fake Feedback Response:", data);
      alert('Thank you for your feedback (sent to a fake API)!');
      feedbackForm.reset();
    })
    .catch(error => {
      console.error('Error:', error);
      alert('Unable to send feedback. Please try again.');
    });
  });
});
