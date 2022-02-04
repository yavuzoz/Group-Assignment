

let allFizikNot = classA.map((person) => person.Fizik);
let allMatematikNot = classA.map((person) => person.Matematik);
let allKimyaNot = classA.map((person) => person.Kimya);
let allGeometriNot = classA.map((person) => person.Geometri);

let avarageLessons = (eleman, toplam) => eleman + toplam;
let resultFizik = allFizikNot.reduce(avarageLessons) / allFizikNot.length;
let resultMatematik = allMatematikNot.reduce(avarageLessons) / allMatematikNot.length;
let resultKimya = allKimyaNot.reduce(avarageLessons) / allKimyaNot.length;
let resultGeometri = allGeometriNot.reduce(avarageLessons) / allGeometriNot.length;



function createTotalAvarage() {
  return  `
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
function createNavbar(){
  return `
  
  <ul class="nav justify-content-end">
    <li class="nav-item">
      <a class="nav-link active text-white" aria-current="page" href="#"
        >GVS</a
      >
    </li>
    <li class="nav-item">
      <a class="nav-link text-white" aria-current="page" onclick="getPageHome()" href="#">Home</a>
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
  <div class="container-fluid m-2 p-3 bg-primary">
            
        </div>
        <div class="container mt-8">
            <p class="text-primary">ALL REPORTS</p>
            <hr class="text-primary">
        </div>
        <div class="row mt-8 align-items-center m-10 " id="html-container">
            <div class="col-lg-5 " style="text-align: center;">
                <div id="chart-class-a-average">
                </div>
                <canvas id="chart-class-a" style="width:25%;max-width:600px"></canvas>

                <p style="color:rgb(172, 199, 254) ;">REPORT OF CLASS A</p>
            </div>

            <div class="col-lg-5 " style="text-align: center;">
                <div id="chart-class-b-average">
                </div>
                    <canvas id="chart-class-b" style="width:25%;max-width:600px"></canvas>
                    <p style="color:rgb(172, 199, 254) ;">REPORT OF CLASS B</p>
            </div>
            <div class="col-lg-5" style="text-align: center;">
                <div id="chart-class-c-average">
                </div>
                    <canvas id="chart-class-c" style="width:25%;max-width:600px"></canvas>
                    <p style="color:rgb(172, 199, 254) ;">REPORT OF CLASS C</p>       
            </div> 
            <div class="col-lg-5 " style="text-align: center;">
                <div id="chart-class-all-average">
                </div>
                    <canvas id="chart-class-all" style="width:25%;max-width:600px"></canvas>
                    <p style="color:rgb(172, 199, 254) ;">REPORT OF ALL CLASSES</p>
            </div>
        </div>
  `
}

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

function getPageHome() {
  const appHomeContainer = document.querySelector("#container-main");
  appHomeContainer.innerHTML = createHomePage()
}
getPageHome
