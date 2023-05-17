let time = dayjs();
let store;
const getStore = async () => {
  store = (await localStorage.hours) ? JSON.parse(localStorage.hours) : [];

  store.forEach((task, i) => {
    $("textarea").eq(i).val(task);
  });
};

getStore();

currentDay.innerHTML = time.format("MMM D YYYY, h:mm A ");
const hours = [
  "6AM",
  "7AM",
  "8AM",
  "9AM",
  "10AM",
  "11AM",
  "12PM",
  "1PM",
  "2PM",
  "3PM",
  "4PM",
  "5PM",
];

hours.forEach((hour, i) => {
  let cH = time.format("H");
  let rH = i + 6;

  main.innerHTML += `
  <div id="hour-9" class="row time-block ${
    rH < cH ? "past" : rH > cH ? "future" : "present"
  }">
    <div class="col-2 col-md-1 hour text-center py-3">${hour}</div>
    <textarea class="col-8 col-md-10 description" rows="3"> </textarea>
    <button onclick="saveStore()" class="btn saveBtn col-2 col-md-1" aria-label="save">
      <i class="fas fa-save" aria-hidden="true"></i>
    </button>
  </div>
  `;
});

const saveStore = () => {
  let areas = document.querySelectorAll("textarea");

  store = [];

  areas.forEach((area) => {
    store.push(area.value);
  });

  localStorage.hours = JSON.stringify(store);
};
