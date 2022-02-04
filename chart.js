/**
 * DOM API
 */

const a = [80, 90, 70, 100, 0];
const b = [50, 90, 70, 100, 0];
const c = [80, 90, 60, 100, 0];
const all = [80, 90, 70, 80, 0];

const labels = ["Matematik", "Fizik", "Kimya", "Geometri"];

const renderChart = (pId, pData) => {
  const myChart = new Chart(document.getElementById(pId), {
    type: "bar",
    data: {
      labels: labels,
      datasets: [
        {
          backgroundColor: "rgb(77, 186, 133)",
          data: pData,
        },
      ],
    },
    options: {
      legend: { display: false },
    },
  });
};

renderChart("chart-class-a", a);
renderChart("chart-class-b", b);
renderChart("chart-class-c", c);
renderChart("chart-class-all", all);

function createPFragment() {
  return `
  <p style="font-size: xx-small;" >Toplam Öğrenci: <br> Matematik Ortalaması:<br> Fizik Ortalaması: <br> Kimya Ortalaması:<br> Geometri Ortalaması:<br>
  </p>
  `;
}
function renderChartData() {
  const classAAverageContainer = document.querySelector(
    "#chart-class-a-average"
  );
  const classBAverageContainer = document.querySelector(
    "#chart-class-b-average"
  );
  const classCAverageContainer = document.querySelector(
    "#chart-class-c-average"
  );
  const classAllAverageContainer = document.querySelector(
    "#chart-class-all-average"
  );
  classAAverageContainer.innerHTML = createPFragment();
  classBAverageContainer.innerHTML = createPFragment();
  classCAverageContainer.innerHTML = createPFragment();
  classAllAverageContainer.innerHTML = createPFragment();
}
renderChartData();
