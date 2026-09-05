const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  spaceBetween: 20,

  // Konfigurasi jumlah slide berdasarkan lebar layar
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// ======= STATE =========
// key: nama produk, value: {price, qty}
const cart = {};
// ====== FORMAT RUPIAH =======
function formatRupiah(num) {
  return "Rp" + num.toLocaleString("id-ID");
}
// ======== UPDATE FLOATING CART ==========
function updateFloatingCart() {
  const items = Object.values(cart).filter((item) => item.qty > 0);
  const totalItems = items.reduce((sum, item) => sum + item.qty, 0);
  const totalPrice = items.reduce(
    (sum, item) => sum + item.qty * item.price,
    0,
  );

  const floatingCart = document.querySelector("#floating-cart");
  document.querySelector("#cart-count").textContent = `${totalItems} item`;
  document.querySelector("#cart-total").textContent = formatRupiah(totalPrice);

  // toggle cart
  floatingCart.classList.toggle("active", totalItems > 0);
  
  renderOrderSummary();
  //update WA link
  updateWALink(items, totalPrice);
}
// ========== BUILD PESAN WA =========
function updateWALink(items, totalPrice) {
  const checkOutBtn = document.querySelector("#cart-checkout");
  const phoneNumber = "6285876119992";

  let message = "Halo Arofah Taste, Saya mau order:\n";
  items.forEach((item) => {
    message += `- ${item.name} x${item.qty} = ${formatRupiah(item.qty * item.price)}\n`;
  });
  message += `\nTotal: ${formatRupiah(totalPrice)}`;
  checkOutBtn.href = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
}

// EVENT LISTENER TIAP CARD
document.querySelectorAll(".menu-card").forEach((card) => {
  const name = card.dataset.name;
  const price = parseInt(card.dataset.price, 10);
  const qtyDisplay = card.querySelector(".item-qty");

  cart[name] = { price, qty: 0, name };

  card.querySelector(".add-item").addEventListener("click", () => {
    cart[name].qty++;
    qtyDisplay.textContent = cart[name].qty;
    updateFloatingCart();
  });
  card.querySelector(".remove-item").addEventListener("click", () => {
    if (cart[name].qty > 0) {
      cart[name].qty--;
      qtyDisplay.textContent = cart[name].qty;
      updateFloatingCart();
    }
  });
});
// Update Total harga checkout
function renderOrderSummary() {
  const items = Object.values(cart).filter((item) => item.qty > 0);
  const totalPrice = items.reduce(
    (sum, item) => sum + item.qty * item.price,
    0,
  );
  const itemList = items.map((item) => {
    return `<li>${item.name} x${item.qty} = ${formatRupiah(item.qty * item.price)}</li>`;
  });
  const renderOrder = itemList.join("");
  document.querySelector("#orderSummaryList").innerHTML = renderOrder;
  const checkoutTotal = document.querySelector("#checkoutTotal");
  checkoutTotal.textContent`Total: ${formatRupiah(totalPrice)}`;
}
const checkout = document.querySelector("#cart-checkout");
checkOut.addEventListener("click", (e) => {
  e.preventDefault();
  renderOrderSummary();
});
