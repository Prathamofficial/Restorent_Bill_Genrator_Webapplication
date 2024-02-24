document.getElementById('submitBtn').addEventListener('click', function() {
    // Constants for each food item
    const constants = {
        "cold coffi": 80,
        "Pani Puri": 30,
        "veg cheese Roll": 120,
        "Frankii": 50,
        "VeG Pulao": 50,
        "Idlli": 45,
        "Dosa": 40,
        "Momos": 120,
        "Green Tea": 30,
        "Tea": 10,
        "Gadbad": 80,
        "Faluda": 80
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
    const finalCalculatedCost = costsForItems.reduce((acc, curr) => acc + curr, 0);
    
    // Retrieve previous total cost from local storage
    let previousFinalCalculatedCost = parseFloat(localStorage.getItem('finalcalculatedcost')) || 0;
    
    // Update total cost with the new entry
    const updatedFinalCalculatedCost = previousFinalCalculatedCost + finalCalculatedCost;
    
    // Save updated total cost to local storage
    localStorage.setItem('finalcalculatedcost', updatedFinalCalculatedCost);
    
    if (finalCalculatedCost > 0) {
        // Display the total cost
        // document.getElementById('bill').innerHTML = `<p style="font-weight: bold;margin:2rem 0rem;">Total Cost: ${updatedFinalCalculatedCost}₹</p>`;
        // document.getElementById('bill').innerHTML += `<p style="font-size:15px; text-align:center;font-family: 'Times New Roman', Times, serif;">Thank you for dining with us. Your presence brightened our day.</p>`;
        
        // Hide food items section
        document.querySelector('.food_items').style.display = 'none';
        document.querySelector('.submission').style.display = 'block';
        document.querySelector('.print').style.display = 'block';
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

// Check if finalCalculatedCost is stored in local storage and display it
window.addEventListener('DOMContentLoaded', function() {
    const finalCalculatedCost = localStorage.getItem('finalcalculatedcost');
    if (finalCalculatedCost) {
        document.getElementById('totalCost').textContent = finalCalculatedCost;
    }
});


window.addEventListener('DOMContentLoaded', function() {
    const finalCalculatedCost = localStorage.getItem('finalcalculatedcost');
    if (finalCalculatedCost) {
        // Select the element with the class name 'cost'
        const costElement = document.querySelector('.cost');
        
        // Set the innerHTML of the selected element to the value of finalCalculatedCost
        costElement.innerHTML = finalCalculatedCost;
    }
});




