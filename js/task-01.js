const allCategories = document.querySelectorAll(".item");
console.log(`Number of categories ${allCategories.length}`);

allCategories.forEach((category) => {
  const itemName = category.querySelector("h2").textContent;
  const itemElements = category.querySelectorAll("ul li").length;
  console.log(`\nCategory: ${itemName}`);
  console.log(`Elements ${itemElements}`);
});
