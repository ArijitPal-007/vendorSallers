const prices = {
    supplier1: 20,
    supplier2: 22,
    supplier3: 21,
    supplier4: 19
};
function updatePrice() {
    const quantity = document.getElementById('quantity').value;
    document.getElementById('price').innerText = "₹" + prices[quantity] + "/kg";

}
const tomatos = {
    tomato1: 25,
    tomato2: 32,
    tomato3: 31,
    tomato4: 29
};
function updateTomatoPrice() {
    const quantity = document.getElementById('quantity1').value;
    document.getElementById('price1').innerText = "₹" + tomatos[quantity] + "/kg";
}
const redchili = {
    redchili1: 180,
    redchili2: 170,
    redchili3: 150,
    redchili4: 200
};
function updateRedchiliPrice() {
    const quantity = document.getElementById('quantity2').value;
    document.getElementById('price2').innerText = "₹" + redchili[quantity] + "/kg";
}
const onions = {
    onions1: 20,
    onions2: 22,
    onions3: 21,
    onions4: 19
};
function updateOnionsPrice() {
    const quantity = document.getElementById('quantity3').value;
    document.getElementById('price3').innerText = "₹" + onions[quantity] + "/kg";
}
const greenchili = {
    greenchili1: 20,
    greenchili2: 25,
    greenchili3: 30,
    greenchili4: 32
};
function updateGreenchiliPrice() {
    const quantity = document.getElementById('quantity4').value;
    document.getElementById('price4').innerText = "₹" + greenchili[quantity] + "/kg";
}
const cabbage = {
    cabbage1: 20,
    cabbage2: 22,
    cabbage3: 21,
    cabbage4: 19
};
function updateCabbagePrice() {
    const quantity = document.getElementById('quantity5').value;
    document.getElementById('price5').innerText = "₹" + cabbage[quantity] + "/kg";
}
const fish = {
    fish1: 200,
    fish2: 220,
    fish3: 210,
    fish4: 190
};
function updateFishPrice() {
    const quantity = document.getElementById('quantity6').value;
    document.getElementById('price6').innerText = "₹" + fish[quantity] + "/kg";
}
const garlic = {
    garlic1: 20,
    garlic2: 22,
    garlic3: 21,
    garlic4: 19
};
function updateGarlicPrice() {
    const quantity = document.getElementById('quantity7').value;
    document.getElementById('price7').innerText = "₹" + garlic[quantity] + "/kg";
}
const ginger = {
    ginger1: 30,
    ginger2: 32,
    ginger3: 31,
    ginger4: 29
};
function updateGingerPrice() {
    const quantity = document.getElementById('quantity8').value;
    document.getElementById('price8').innerText = "₹" + ginger[quantity] + "/kg";
}
const honey = {
    honey1: 500,
    honey2: 550,
    honey3: 600,
    honey4: 520
};
function updateHoneyPrice() {
    const quantity = document.getElementById('quantity9').value;
    document.getElementById('price9').innerText = "₹" + honey[quantity] + "/kg";
}
const sugar = {
    sugar1: 40,
    sugar2: 42,
    sugar3: 38,
    sugar4: 45
};
function updateSugarPrice() {
    const quantity = document.getElementById('quantity10').value;
    document.getElementById('price10').innerText = "₹" + sugar[quantity] + "/kg";
}
const rice = {
    rice1: 50,
    rice2: 55,
    rice3: 52,
    rice4: 48
};
function updateRicePrice() {
    const quantity = document.getElementById('quantity11').value;
    document.getElementById('price11').innerText = "₹" + rice[quantity] + "/kg";
}
const wheat = {
    wheat1: 40,
    wheat2: 42,
    wheat3: 38,
    wheat4: 45
};
function updateWheatPrice() {
    const quantity = document.getElementById('quantity12').value;
    document.getElementById('price12').innerText = "₹" + wheat[quantity] + "/kg";
}
const potatoes = {
    potatoes1: 20,
    potatoes2: 22,
    potatoes3: 21,
    potatoes4: 19
};
function updatePotatoesPrice() {
    const quantity = document.getElementById('quantity13').value;
    document.getElementById('price13').innerText = "₹" + potatoes[quantity] + "/kg";
}
const carrots = {
    carrots1: 30,
    carrots2: 32,
    carrots3: 31,
    carrots4: 29
};
function updateCarrotsPrice() {
    const quantity = document.getElementById('quantity14').value;
    document.getElementById('price14').innerText = "₹" + carrots[quantity] + "/kg";
}
const peas = {
    peas1: 25,
    peas2: 27,
    peas3: 30,
    peas4: 22
};
function updatePeasPrice() {
    const quantity = document.getElementById('quantity15').value;
    document.getElementById('price15').innerText = "₹" + peas[quantity] + "/kg";
}
const cauliflower = {
    cauliflower1: 20,
    cauliflower2: 22,
    cauliflower3: 21,
    cauliflower4: 19
};
function updateCauliflowerPrice() {
    const quantity = document.getElementById('quantity16').value;
    document.getElementById('price16').innerText = "₹" + cauliflower[quantity] + "/kg";
}


//funtion to send alert to user when the support and contact form is submitted
 document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Thank you for contacting us! We'll get back to you soon.");
    this.reset();
  });

  //footer toggle section
   function toggleAccordion() {
    const content = document.getElementById("aboutContent");
    content.classList.toggle("open");
  }