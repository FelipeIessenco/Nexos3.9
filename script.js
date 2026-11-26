const demoLoginKey = "nexo-demo-authenticated";

if (document.body.dataset.requiresLogin === "true" && sessionStorage.getItem(demoLoginKey) !== "true") {
  window.location.replace("index.html");
}

const loginForm = document.querySelector("#loginForm");

if (loginForm) {
  loginForm.addEventListener("submit", (event) => {
    event.preventDefault();
    sessionStorage.setItem(demoLoginKey, "true");
    window.location.assign("inicio.html");
  });
}

const logoutLink = document.querySelector("#logout");

if (logoutLink) {
  logoutLink.addEventListener("click", (event) => {
    event.preventDefault();
    sessionStorage.removeItem(demoLoginKey);
    window.location.assign("index.html");
  });
}