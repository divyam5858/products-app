let url = "https://dummyjson.com/users";
let data = fetch(url)
  .then((d) => {
    return d.json();
  })
  .then((fd) => {
    let user = fd.users;
    user.map((element) => {
      let cards = document.getElementsByClassName("cards")[0];
      cards.innerHTML += ` <div class="card">
            <h1 class="id"><span class="span1">Id: </span>${element.id}</h1>
            <h2 class="Name"><span class="span1">Name: </span>${element.firstName} ${element.lastName} ${element.maidenName}</h2>
            <h3 class="age"><span class="span1">Age: </span>${element.age}</h3>
            <h3 class="gender"><span class="span1">Gender: </span>${element.gender}</h3>
            <h3 class="birthDate"><span class="span1">BirthDate: </span>${element.birthDate}</h3>
            <h3 class="bloodGroup"><span class="span1">BloodGroup: </span>${element.bloodGroup}</h3>
            <p class="address"><span class="span1">Address: </span>${element.address.address}</p>
            <h4 class="country"><span class="span1">Country: </span>${element.address.country}</h4>
            <h5 class="role"><span class="span1">Role: </span>${element.role}</h5>
        </div>`;
    });
  });

