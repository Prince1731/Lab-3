// Add an event listener to the form to listen for the 'submit' event
document.getElementById('pizzaForm').addEventListener('submit', function (event) {
    // Prevent the form's default submit behavior (like refreshing the page)
    event.preventDefault();

    // Step 1: Gather form values (name, email, pizza count, and size)
    const name = document.getElementById('name').value; // Get the user's name
    const email = document.getElementById('email').value; // Get the user's email
    const pizzaCount = document.getElementById('pizzaCount').value; // Get the number of pizzas
    const size = document.getElementById('size').value; // Get the selected pizza size

    // Step 2: Gather the selected toppings (if any)
    let toppings = [];
    // Get all checked toppings (checkboxes with the name "topping")
    document.querySelectorAll('input[name="topping"]:checked').forEach((topping) => {
        toppings.push(topping.value); // Add each checked topping to the array
    });

    // Step 3: Display the confirmation section with order details
    const confirmationSection = document.getElementById('confirmation'); // Get the confirmation div
    const orderDetails = `
        Thank you, ${name}!<br>
        Your email: ${email}<br>
        Number of pizzas: ${pizzaCount}<br>
        Pizza size: ${size}<br>
        Toppings: ${toppings.length > 0 ? toppings.join(', ') : 'None'} <!-- Display toppings or 'None' if none are selected -->
    `;
    
    // Set the inner HTML of the orderDetails element with the formatted order details
    document.getElementById('orderDetails').innerHTML = orderDetails;

    // Make the confirmation section visible by setting its display style to 'block'
    confirmationSection.style.display = 'block';
});
