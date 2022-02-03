let lessonsAvarageFizik = classA.map((person) => person.Fizik);
let lessonsAvarageMatematik = classA.map((person) => person.Matematik);
let lessonsAvarageKimya = classA.map((person) => person.Kimya);
let lessonsAvarageGeometri = classA.map((person) => person.Geometri);

let avarageLessons = (eleman, toplam) => eleman + toplam;
let resultFizik = lessonsAvarageFizik.reduce(avarageLessons) / lessonsAvarageFizik.length;
let resultMatematik = lessonsAvarageMatematik.reduce(avarageLessons) / lessonsAvarageMatematik.length;
let resultKimya = lessonsAvarageKimya.reduce(avarageLessons) / lessonsAvarageKimya.length;
let resultGeometri = lessonsAvarageGeometri.reduce(avarageLessons) / lessonsAvarageGeometri.length;



function createTotalAvarage() {
  return `
  <p class="text-primary">CLASS AVERAGES</p>
  <hr class="text-primary">
  <div class="col mb-5 align-items-center">
    <span class="col-lg-6 m-3">Matematik : ${resultMatematik}</span>
    <span class="col-lg-6 m-3">Fizik : ${resultFizik}</span>
    <span class="col-lg-6 m-3">Kimya : ${resultKimya}</span>
    <span class="col-lg-6 m-3">Geometri : ${resultGeometri}</span>
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


function createMainFragment(pClass) {
  return `
  <div class="container-fluid m-2 p-3 bg-primary">
  <ul class="nav justify-content-end">
    <li class="nav-item">
      <a class="nav-link active text-white" aria-current="page" href="#"
        >GVS</a
      >
    </li>
    <li class="nav-item">
      <a class="nav-link text-white" aria-current="page" href="#">Home</a>
    </li>
    <li class="nav-item">
      <a class="nav-link text-white" onclick="getPage(${classA})" href="#">Class A</a>
    </li>
    <li class="nav-item">
      <a class="nav-link text-white" onclick="getPage(${classB})" href="#">Class B</a>
    </li>
    <li class="nav-item">
      <a class="nav-link text-white" onclick="getPage(${classC})" href="#">Class C</a>
    </li>
  </ul>
</div>

<!-- Navbar End -->

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

function getPage(pClass) {
  const appContainer = document.querySelector("#app");
  appContainer.innerHTML = createMainFragment(pClass)
}