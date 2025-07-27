function addToCart(productName, price, image) {
          let cart = JSON.parse(localStorage.getItem("cart")) || [];
          let existingItem = cart.find(item => item.name === productName);
          
          if (existingItem) {
            existingItem.quantity += 1;
          } else {
            cart.push({ name: productName, price: price, quantity: 1, image: image });
          }
    //feating data form local storage 
          localStorage.setItem("cart", JSON.stringify(cart));
          alert(productName + " added to cart!");
        }