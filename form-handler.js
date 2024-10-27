function handleForm(event) {
    event.preventDefault();

    const data = {
        name: document.getElementById('name').value,
        phone: document.getElementById('phone').value,
        email: document.getElementById('email').value,
        size: document.getElementById('size').value,
        door: document.getElementById('door').value,
        street: document.getElementById('street').value,
        village: document.getElementById('village').value,
        state: document.getElementById('state').value,
        pincode: document.getElementById('pincode').value,
    };

    fetch('https://script.google.com/macros/s/AKfycbwFsTLZcgVW5gx4ZA-JuKDQf5Mh34M4cRnxxyGo0Qpt8RZsaLfSNCtoULfWgmEdIXzPDg/exec
', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
        alert('Form submitted successfully!');
        document.getElementById('form').reset();
        document.getElementById('checkout-form').style.display = 'none';
    })
    .catch((error) => {
        console.error('Error:', error);
        alert('There was an error submitting the form.');
    });
}
