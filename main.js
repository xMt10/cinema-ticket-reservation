const container = document.querySelector(".container");
const select = document.querySelector("#movie");
const amount = document.querySelector(".amount");
const count = document.querySelector(".count");

container.addEventListener("click", function (e) {
  console.log(e);
  if (
    e.target.classList.contains("seat") &&
    !e.target.classList.contains("reserved")
  ) {
    e.target.classList.toggle("selected");
  }

  calculateTotal();
});

select.addEventListener("change", calculateTotal());

function calculateTotal() {
  let selectedSeatCount = container.querySelectorAll(".seat.selected").length;
  let price = select.value;
  count.innerText = selectedSeatCount;
  amount.innerText = price * selectedSeatCount;
}
