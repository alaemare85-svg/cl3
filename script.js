const searchForm = document.querySelector("#search-form");
const searchInput = document.querySelector("#search-input");
const searchMessage = document.querySelector("#search-message");

searchForm.addEventListener("submit", (event) => {
  const query = searchInput.value.trim();

  if (!query) {
    event.preventDefault();
    searchMessage.textContent = "اكتب كلمات البحث أولًا.";
    searchInput.focus();
    return;
  }

  searchInput.value = query;
  searchMessage.textContent = "";
});
