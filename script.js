const header = document.querySelector("header");
const h1 = document.querySelector("h1");
console.log(h1);

console.log(header);
window.addEventListener("scroll", () => {
  console.log(window.scrollY);
  if (window.scrollY >= 40) {
    header.style.height = "60px";
    h1.style.lineHeight = "60px";
    h1.style.fontSize = "25px";
  } else {
    header.style.height = "80px";
    h1.style.lineHeight = "80px";
    h1.style.fontSize = "32px";
  }
});
