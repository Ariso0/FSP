
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("volunteer-form");

  form.addEventListener("submit", async function (e) {
    e.preventDefault(); // Prevent page reload

    const data = {
      full_name: form.full_name.value,
      email: form.email.value,
      phone_number: form.phone_number.value,
      activity: form.activity.value,
      availability: Array.from(document.querySelectorAll("input[name='availability']:checked"))
        .map(cb => cb.value)
        .join(", ")
    };

    try {
      await fetch("https://script.google.com/macros/s/AKfycbzQfvIUMEo6bwbUWzabEyhcSefuT0EkbvG_RhwMlJwQosTUDjSQrAjKXOwKC3tXa_k61Q/exec", {
        method: "POST",
        mode: "no-cors", 
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });

      alert("Thank you! Your submission was received.");
      form.reset();
    } catch (error) {
      alert("There was an error submitting the form.");
      console.error("Submit Error:", error);
    }
  });
});
