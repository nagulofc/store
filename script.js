const products = {
    1: { name: "Product 1", price: 29.99, image: "product1.jpg" },
    2: { name: "Product 2", price: 39.99, image: "product2.jpg" },
    3: { name: "Product 3", price: 49.99, image: "product3.jpg" },
    4: { name: "Product 4", price: 59.99, image: "product4.jpg" },
    5: { name: "Product 5", price: 69.99, image: "product5.jpg" },
};

const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('product');

if (productId && products[productId]) {
    const product = products[productId];
    document.getElementById('product-title').innerText = `Details of ${product.name}`;
    document.getElementById('product-image').src = product.image;
    document.getElementById('product-name').innerText = product.name;
    document.getElementById('product-price').innerText = `$${product.price.toFixed(2)}`;
    
    document.getElementById('buy-now').onclick = () => {
        document.getElementById('checkout-form').style.display = 'block';
    };
}
