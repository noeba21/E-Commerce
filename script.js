fetch('shop.json')
    .then(response => response.json())
    .then(products => {
        const container = document.getElementById('product-container');
        products.forEach(product => {
            container.innerHTML +=
                <div id="product-container">
                    <img src="${product.images}" alt="${product.name}" />
                    <h3>${product.name}</h3>
                    <p>${product.desrciption}</p>
                    <p>Price: $${product.price}</p>
                </div>

                ;

        });
    })

    .catch(error => {
        console.log('Error loading the products:', error);
    });