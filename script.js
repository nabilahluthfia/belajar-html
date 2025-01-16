function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

async function fetchData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();

    const cardContainer = document.querySelector(".home-card");

    users.forEach((user) => {
      const card = document.createElement("div");
      card.classList.add("card");

      card.innerHTML = `
      <h2 class="user-cardName">${user.name}</h2>
      <p class="user-cardEmail">${user.email}</p>
      <p class="user-cardCity">${user.address.city}</p>
      <a class="user-cardWeb" href="http://${user.website}">${user.website}</a>
      `
      cardContainer.appendChild(card)
    });

  } catch(err) {
    console.error("Error when fetching data", err)
  }
}

fetchData();
