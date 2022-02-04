






let avarageLessons = (eleman, toplam) => eleman + toplam;

function createTotalAvarage(pClass) {
  return `
  <p class="text-primary">CLASS AVERAGES</p>
  <hr class="text-primary">
  <div class="col mb-5 align-items-center">
    <span class="col-lg-6 m-3">Matematik : ${pClass.map((person) => person.Matematik).reduce(avarageLessons)/pClass.length}</span>
    <span class="col-lg-6 m-3">Fizik : ${pClass.map((person) => person.Fizik).reduce(avarageLessons)/pClass.length}</span>
    <span class="col-lg-6 m-3">Kimya : ${pClass.map((person) => person.Kimya).reduce(avarageLessons)/pClass.length}</span>
    <span class="col-lg-6 m-3">Geometri : ${pClass.map((person) => person.Geometri).reduce(avarageLessons)/pClass.length}</span>
  </div>
  `;
}

function createLessons(pClass) {
  return pClass
    .map((person) =>
      `
        <div class="col-lg-6 m-3" style="max-width: 18rem; height: 12rem;">
          <div class="card-header bg-primary">${person.Name} (${Object.keys(person).length-1})</div>
          <div class="card-body">
            <p class="card-text">Matematik : ${person.Matematik}</p>
            <p class="card-text"> Fizik: ${person.Fizik} </p>
            <p class="card-text">Kimya : ${person.Kimya} </p>
            <p class="card-text">Geometri : ${person.Geometri}</p>
          </div>
        </div>
    `).join("");
}

function createNavbar() {
  return `
  
  <ul class="nav justify-content-end">
    <li class="nav-item">
      <a class="nav-link active text-white" aria-current="page" href="#"
        >GVS</a
      >
    </li>
    <li class="nav-item">
      <a class="nav-link text-white" onclick="getPageHome()" href="#">Home</a>
    </li>
    <li class="nav-item">
      <a class="nav-link text-white" onclick="getPage(classA)" href="#">Class A</a>
    </li>
    <li class="nav-item">
      <a class="nav-link text-white" onclick="getPage(classB)" href="#">Class B</a>
    </li>
    <li class="nav-item">
      <a class="nav-link text-white" onclick="getPage(classC)" href="#">Class C</a>
    </li>
  </ul>

  `
}

function createMainFragment(pClass) {
  return `
  <div id="navbar" class="container-fluid m-2 p-3 bg-primary">
  ${createNavbar()}
  </div>
<!-- Main Start -->
<section class="container">
  <div id="classNames" class="container mt-5">
    <!--sinif bilgisi-->
  </div>
  <div id="studentInfo" class="row mt-5 align-items-center m-2">
    ${createLessons(pClass)}
  </div>
</section>
<!-- Main End -->
<div id="lessonsAvarage" class="container mt-5">
  ${createTotalAvarage(pClass)}
</div>
  `;
}

function createHomePage() {
  return `
  <div id="navbarhome" class="container-fluid m-2 p-3 bg-primary">
  ${createNavbar()}  
  </div>
  `
}


function getPageHome() {
  const HomeContainer = document.querySelector("#navbarhome");
  HomeContainer.innerHTML = createHomePage()
}

getPageHome();

function getPage(pClass) {
  const appContainer = document.querySelector("#app");
  appContainer.innerHTML = createMainFragment(pClass);

}
getPage(classA)

function getPage(pClass) {
  const appContainer = document.querySelector("#app");
  appContainer.innerHTML = createMainFragment(pClass)
}
getPage(classB)

function getPage(pClass) {
  const appContainer = document.querySelector("#app");
  appContainer.innerHTML = createMainFragment(pClass)
}
getPage(classC)

