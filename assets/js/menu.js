// Products data for different sections
const sections = {
    "drinks-cards": [
        { name: "Citrus Juice", price: 200, img: "../assets/img/citrusjuice.jpg", info: "Freshly pressed citrus fruits served with ice and mint" },
        { name: "Iced Tea", price: 150, img: "../assets/img/icedtea.jpg", info: "Iced tea with refreshing mint" },
        { name: "Beer", price: 700, img: "../assets/img/beer.jpg", info: "Iced cold beer" },
        { name: "Red Wine", price: 1200, img: "../assets/img/redwine.jpg", info: "Roses are red and so as this wine." }
    ],
    "special-cards": [
        { name: "Grilled Beef Steak", price: 450, img: "../assets/img/grilledbeefsteak.jpg", info: "Grilled tender beef steak cut served with restaurant's special sauce" },
        { name: "Beef Steak", price: 750, img: "../assets/img/beefsteak.jpg", info: "Medium rare beef steak served with grilled vegetables and spices" },
        { name: "Grilled Pork Ribs", price: 550, img: "../assets/img/grilledporksteak.jpg", info: "Charred pork ribs smothered with barbecue sauce and served with grilled corn and French fries" },
        { name: "Grilled Chicken Steak", price: 250, img: "../assets/img/grilledchickensteak.jpg", info: "Grilled chicken breast with lemon, tomato, chili, and carrots" }
    ],
    "desserts-cards": [
        { name: "BlueBerry cheesecake", price: 1200, img: "../assets/img/blueberrycake.jpg", info: "Blueberry cheesecake with buttery graham crust" },
        { name: "Red Velvet cake", price: 950, img: "../assets/img/redvelvetcake.jpg", info: "Double layered red velvet topped with dark chocolate" },
        { name: "Brownies", price: 570, img: "../assets/img/brownies.jpg", info: "Chocolate brownies with alcapone nuts" },
        { name: "Apple pie with cinnamon", price: 750, img: "../assets/img/applepie.jpg", info: "Mini apple pie with sweet cinnamon filling" }
    ],
    "salad-cards": [
        { name: "Greek Salad", price: 450, img: "../assets/img/greeksalad.jpg", info: "Greek salad with tomato and cucumber, with red onion and feta cheese, sprinkled with black olives." },
        { name: "TFL Salad", price: 250, img: "../assets/img/TFLsalad.jpg", info: "Cherry tomato salad with fresh lettuce, bite sized cheese and mustard garlic oil." },
        { name: "Veggie Lemon Salad", price: 350, img: "../assets/img/veggielemonsalad.jpg", info: "Fresh vegetable salad with citrusy lemon slices and cherry tomato" },
        { name: "Fresh Chicken Salad", price: 550, img: "../assets/img/chickensalad.jpg", info: "Cherry tomato salad with fresh lettuce, bite sized cheese and mustard garlic oil." }
    ]
};

// Function to generate product cards dynamically
function generateCards(sectionId, products) {
    const container = document.getElementById(sectionId);
    container.innerHTML = ''; // Clear any existing content

    products.forEach((product, index) => {
        const card = `
            <div class="product-card">
                <img src="${product.img}" alt="${product.name}" />
                <div class="product-card-content">
                    <h4>${product.name}</h4>
                    <p>INR ${product.price.toFixed(2)}</p>
                    <button onclick="showPopup(${index}, '${sectionId}')">Add to Cart</button>
                </div>
            </div>
        `;
        container.innerHTML += card;
    });
}

// Function to show popup
function showPopup(index, sectionId) {
    const product = sections[sectionId][index];
    const popup = document.getElementById('popup');
    const popupOverlay = document.getElementById('popup-overlay');

    const popupContent = `
        <div class="popup-content">
            <img src="${product.img}" alt="${product.name}" />
            <h3>${product.name}</h3>
            <p>Price per unit: $${product.price.toFixed(2)}</p>
            <div class="quantity-control">
                <button onclick="changeQuantity(-1)">-</button>
                <span id="quantity">1</span>
                <button onclick="changeQuantity(1)">+</button>
            </div>
            <p>Total Price: $<span id="total-price">${product.price.toFixed(2)}</span></p>
            <button onclick="addToBag('${product.name}', ${product.price})">Add to Bag</button>
            <button class="close-btn" onclick="closePopup()">&#10005;</button>
            
        </div>
    `;
    popup.innerHTML = popupContent;
    popup.style.display = 'block';
    popupOverlay.style.display = 'block';
    popup.dataset.price = product.price; // Store the price for calculations
    popup.dataset.quantity = 1; // Initialize quantity
}

// Function to change quantity
function changeQuantity(amount) {
    const popup = document.getElementById('popup');
    const quantityElement = document.getElementById('quantity');
    const totalPriceElement = document.getElementById('total-price');
    const pricePerUnit = parseFloat(popup.dataset.price);

    let quantity = parseInt(popup.dataset.quantity) + amount;
    if (quantity < 1) quantity = 1; // Prevent quantity less than 1

    popup.dataset.quantity = quantity;
    quantityElement.textContent = quantity;
    totalPriceElement.textContent = (quantity * pricePerUnit).toFixed(2);
}

// Function to close popup
function closePopup() {
    const popup = document.getElementById('popup');
    const popupOverlay = document.getElementById('popup-overlay');
    popup.style.display = 'none';
    popupOverlay.style.display = 'none';
}

// Function to handle "Add to Bag"
function addToBag(productName, pricePerUnit) {
    const popup = document.getElementById('popup');
    const quantity = parseInt(popup.dataset.quantity);
    const totalPrice = quantity * pricePerUnit;

    alert(`${productName} added to bag!\nQuantity: ${quantity}\nTotal Price: $${totalPrice.toFixed(2)}`);
    closePopup();
}

// Generate cards for each section
Object.keys(sections).forEach(sectionId => {
    generateCards(sectionId, sections[sectionId]);
});


window.addEventListener("load", () => {
    const preloader = document.getElementById("preloader");
    const content = document.getElementById("content");

    preloader.style.display = "none"; // Hide the preloader
    content.style.display = "block"; // Show the content
});
