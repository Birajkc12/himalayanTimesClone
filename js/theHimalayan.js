function updateDate() {
  let today = new Date();
  let options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  let date = today.toLocaleDateString("en-US", options);
  document.getElementById("date").innerHTML = date;
}

updateDate(); // Call the function to update the date initially

setInterval(updateDate, 1000); // Call the function every second to update the date
