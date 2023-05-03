const tabs = document.querySelectorAll(".tab-item");
const tabContents = document.querySelectorAll(".tab-content");

function selectItem(e) {
  removeBoarder();
  this.classList.add("tab-border");

  removeContent();

  const tabContents = document.querySelector(`#${this.id}-content`);
  tabContents.classList.add("item-show");
}

tabs.forEach((item) => item.addEventListener("click", selectItem));

function removeBoarder() {
  tabs.forEach((item) => item.classList.remove("tab-border"));
}

function removeContent() {
  tabContents.forEach((item) => item.classList.remove("item-show"));
}
