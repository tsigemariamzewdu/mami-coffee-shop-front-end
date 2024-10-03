document.querySelector(".change-design").addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
});

// Select the items
const coffeeItems = document.querySelectorAll('.single-item');
const popup = document.getElementById('popup');
const closeBtn = document.getElementById('close-btn');
const popupImage = document.getElementById('popup-image');
const popupDetails = document.getElementById('popup-details');

coffeeItems.forEach(item => {
    const button = item.querySelector('button'); // Get the button directly

    button.addEventListener('click', function() {
        const coffeeName = item.querySelector('p').textContent.split(':')[0]; // Extract coffee name
        const imageSrc = item.querySelector('img').src; // Get the image source from the current item
        const detailsText = `Details about ${coffeeName}`; // Customize your details as needed

        // Set the popup content
        popupImage.src = imageSrc;
        popupDetails.textContent = detailsText;

        // Show the popup
        popup.classList.remove('hidden');
    });
});

// Close the popup
closeBtn.addEventListener('click', function() {
    popup.classList.add('hidden');
});

// Close the popup when clicking outside of the content
popup.addEventListener('click', function(event) {
    if (event.target === popup) {
        popup.classList.add('hidden');
    }
});
// here i am trying to make working contact form meaning that whenever someone hits the submit button we will recieve an email



// document.getElementById("contactForm").addEventListener('submit',function(event){
//     event.preventDefault();
//     const name=document.getElementById("name").value;
//     const email=document.getElementById('email').value;
//     const message=document.getElementById('message').value;
//     console.log("Submitting form with:", { name, email, message });
//     if (name && email && message){
//         Email.send({
//             Host: "smtp.gmail.com",
//             Username: "tsigemariamzewdutadesse13@gmail.com",
//             Password: "@Bbirhan2121",
//             To: "tsigemariamzewdutadesse13@gmail.com",
//             From: email,
//             Subject: "Contact Form Inquiry",
//             Body: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
//         }).then(response => {
//             console.log("Email sent successfully:", response); 
//             document.getElementById("responseMessage").innerText = "Thank you for your message!";
//         }).catch(error => {
//             console.error("Error sending email:", error); // Debugging line
//             document.getElementById("responseMessage").innerText = "Error sending message.";
//             if (error.response) {
//                 console.error("Server response:", error.response);
//             }
//             console.error(error);
//         });
//     } else {
//         document.getElementById("responseMessage").innerText = "Please fill out all required fields.";
//     }
// })
document.getElementById("contactForm").addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    fetch('http://localhost:3000/send-email', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, message })
    })
    .then(response => response.text())
    .then(data => {
        document.getElementById("responseMessage").innerText = data;
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById("responseMessage").innerText = "Error sending message.";
    });
});
