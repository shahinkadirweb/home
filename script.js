// Optional: Search alert
document.getElementById("searchInput").addEventListener("input", function () {
  const value = this.value.toLowerCase();
  console.log("Search triggered: " + value);
});
