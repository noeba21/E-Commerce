let products = [];

function fetchProducts() {
    fetch('shop.json')
        .then(response => response.json())
        .then(data => {
            products = data; // Store the fetched data in the global variable
            renderProducts(products); // Call the render function
        })
        .catch(error => {
            console.error('Error loading the products:', error);
        });
}

function sortAndRenderProducts() {
    const sortOption = document.getElementById('sortOptions').value;
    let sortedProducts = [...products]; // Create a copy of the products array for sorting
    switch (sortOption) {
        case 'priceAsc':
            sortedProducts.sort((a, b) => parseFloat(a.Price.replace('$', '')) - parseFloat(b.Price.replace('$', '')));
            break;
    }
    renderProducts(sortedProducts); // Render the sorted products
}

function renderProducts(products) {
    const container = document.querySelector('.product-container'); // Use querySelector with class
    if (!container) {
        console.error('Product container not found');
        return; // Exit the function if the container is not found
    }
    container.innerHTML = ''; // Clear previous contents
    products.forEach(product => {
        container.innerHTML +=
            `<div class="product-container-item">
                <img src="${product.Photo}" alt="${product.Name}"/>
                <h3>${product.Name}</h3>
                <p>${product.Description}</p>
                <p>Price: ${product.Price}</p>
                <p>Size: ${product.Size}</p>
                <button onclick="addToCart('${product.ID}')">Add to Cart</button>
            </div>`;
    });
}

document.addEventListener('DOMContentLoaded', () => {
    fetchProducts();
    document.getElementById('sortOptions').addEventListener('change', sortAndRenderProducts);
});
