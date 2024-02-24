
document.getElementById('submitBtn').addEventListener('click', function() {
    // Constants for each food item
    const constants = {
        "cold coffi": 2,
        "Pani Puri": 3,
        "veg cheese Roll": 4,
        "Frankii": 5,
        "VeG Pulao": 6,
        "Idlli": 2,
        "Dosa": 3,
        "Momos": 4,
        "Green Tea": 2,
        "Tea": 1,
        "Gadbad": 5,
        "Faluda": 4
    };

    // Get all food item boxes
    const foodItemBoxes = document.querySelectorAll('.food_item_box');

    // Initialize arrays to hold data
    let foodNames = [];
    let innerHTMLValues = [];
    let constantValues = [];
    let costsForItems = [];

    // Iterate through each food item box
    foodItemBoxes.forEach(box => {
        const foodName = box.querySelector('.food_name p').textContent.trim();
        const innerHTMLValue = parseInt(box.querySelector('.counter').textContent);
        const constantValue = constants[foodName];

        if (innerHTMLValue > 0) {
            foodNames.push(foodName);
            innerHTMLValues.push(innerHTMLValue);
            constantValues.push(constantValue);

            // Calculate cost for current item
            const costForItem = innerHTMLValue * constantValue;
            costsForItems.push(costForItem);
        }
    });

    // Calculate total cost
    const totalCost = costsForItems.reduce((acc, curr) => acc + curr, 0);
    // Your existing code for calculating the total cost

    if (totalCost > 0) {
        // Create the bill table
        let billTable = '<table><tr><th>Food Name</th><th>Counter Value</th><th>Constant Value</th><th>Cost</th></tr>';

        for (let i = 0; i < foodNames.length; i++) {
            billTable += `<tr><td>${foodNames[i]}</td><td>${innerHTMLValues[i]}</td><td>${constantValues[i]}</td><td>${costsForItems[i]}</td></tr>`;
        }

        billTable += '</table>';
        // Create the bill table

        // Your existing code for creating the bill table

        // Save totalCost to local storage
        localStorage.setItem('totalCost', totalCost);
        // Display the bill table and total cost
        document.getElementById('bill').innerHTML = billTable;
        document.getElementById('bill').innerHTML += `<p style="font-weight: bold;margin:2rem 0rem;">
        Total Cost: ${totalCost}₹</p>`;
        





        document.getElementById('bill').innerHTML += `<p style="font-size:15px; text-align:center;font-family: 'Times New Roman', Times, serif;">Thank you for dining with us. Your presence brightened our day.</p>`;
        
        // Hide food items section
        document.querySelector('.food_items').style.display = 'none';
        document.querySelector('.submission').style.display = 'block';
    document.querySelector('.print').style.display = 'block';

        // Display the bill table and total cost
        // Your existing code for displaying the bill table and total cost

        // Hide food items section
        // Your existing code for hiding food items section
    } else {
        // If total cost is 0, don't display the table
        document.getElementById('bill').innerHTML = '';
    }
});

document.querySelector('.printbtn').addEventListener('click', function() {
    const element = document.querySelector('.submission');
    
    html2pdf()
        .from(element)
        .save('bill.pdf');
});

// Check if totalCost is stored in local storage and display it
window.addEventListener('DOMContentLoaded', function() {
    const totalCost = localStorage.getItem('totalCost');
    if (totalCost) {
        document.getElementById('totalCost').textContent = totalCost;
    }
});