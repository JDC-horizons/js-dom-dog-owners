console.log(data);

// WRITE YOUR CODE BELOW!

// initial state
let state = {
  dogData: data,
};

// create buttons for each dog in array

// add new item to list, rest of code will auto-fill!
// let newObj = {
//   id: 8,
//   name: "Charlie",
//   bio: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum,
//             minima voluptates libero cumque rerum consequatur optio aliquid sint
//             eum maxime illo laborum omnis quo ab rem cupiditate nulla
//             perspiciatis ipsum!`,
//   isGoodDog: true,
//   image: "https://curriculum-content.s3.amazonaws.com/js/woof-woof/dog_1.jpg",
// };

// stateData.push(newObj);

function navBarConstructor(currentData) {
  let dogsListBar = document.querySelector(".dogs-list");

  for (let i = 0; i < currentData.length; i++) {
    let doggieButton = document.createElement("li");
    doggieButton.classList.add("dogs-list__button");
    doggieButton.textContent = data[i].name;
    let idClass = "dog-" + data[i].id;
    doggieButton.classList.add(idClass);
    dogsListBar.appendChild(doggieButton);
  }
}
navBarConstructor(state.dogData);

//function to create form element and render in page

function renderForm() {
  let newDogForm = document.createElement("section");
  newDogForm.classList.add("main__dog-section");
  let formHeading = document.createElement("h2");
  formHeading.textContent = "Add a new Dog";
  newDogForm.appendChild(formHeading);

  let formProper = document.createElement("form");
  formProper.classList.add("form");

  let formName = document.createElement("label");
  formName.setAttribute("for", "name");
  formName.textContent = "Dog's name";
  formProper.appendChild(formName);
  let formNameInput = document.createElement("input");
  formNameInput.setAttribute("type", "text");
  formNameInput.setAttribute("id", "name");
  formNameInput.setAttribute("name", "name");
  formProper.appendChild(formNameInput);
  let formImg = document.createElement("label");
  formImg.setAttribute("for", "image");
  formImg.textContent = "Dog's picture";
  formProper.appendChild(formImg);
  let formImgInput = document.createElement("input");
  formImgInput.setAttribute("type", "url");
  formImgInput.setAttribute("id", "image");
  formImgInput.setAttribute("name", "image");
  formProper.appendChild(formImgInput);
  let formBio = document.createElement("label");
  formBio.setAttribute("for", "bio");
  formBio.textContent = "Dog's bio";
  formProper.appendChild(formBio);
  let formBioText = document.createElement("textarea");
  formBioText.setAttribute("rows", "5");
  formBioText.setAttribute("id", "bio");
  formBioText.setAttribute("name", "bio");
  formProper.appendChild(formBioText);
  let FormBioInput = document.createElement("input");
  FormBioInput.setAttribute("type", "submit");
  FormBioInput.setAttribute("id", "submit");
  FormBioInput.setAttribute("name", "submit");
  FormBioInput.setAttribute("value", "Let's add a dog!");
  FormBioInput.classList.add("form__button");
  formProper.appendChild(FormBioInput);

  newDogForm.appendChild(formProper);

  document.querySelector(".main__dog-section").appendChild(newDogForm);
}

// function to create card for dog in array and display in page
function render(dogID) {
  let newCard = document.createElement("section"); //section element
  newCard.classList.add(".main__dog-section");
  //create heading
  let heading = document.createElement("h2");
  heading.textContent = dogID.name;
  newCard.appendChild(heading);
  //create image
  let image = document.createElement("img");
  image.setAttribute("src", dogID.image);
  newCard.appendChild(image);

  //create div
  let mainSection = document.createElement("div");
  mainSection.classList.add(".main__dog-section__desc");
  //create heading for bio section
  let descHeading = document.createElement("h3");
  descHeading.textContent = "Bio";
  mainSection.appendChild(descHeading);
  //create text area for bio section
  let descText = document.createElement("p");
  descText.textContent = dogID.bio;
  mainSection.appendChild(descText);
  newCard.appendChild(mainSection);

  //create good dog button heading
  let buttonLabel = document.createElement("p");
  let buttonLabelInner = document.createElement("em");
  buttonLabelInner.textContent = "Is naughty?";
  buttonLabel.appendChild(buttonLabelInner);
  newCard.appendChild(buttonLabel);
  //create good dog button
  let buttonActual = document.createElement("button");
  buttonActual.textContent = "Good Dog";
  newCard.appendChild(buttonActual);

  const dogSection = document.querySelector(".main__dog-section");
  dogSection.innerHTML = "";
  dogSection.appendChild(newCard);
}

//event listeners

for (let i = 1; i <= state.dogData.length; i++) {
  document.querySelector(`.dog-${i}`).addEventListener("click", () => {
    render(state.dogData[i - 1]);
  });
}
