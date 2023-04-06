function typeWriter(e, t, n) {
  inputDialog.disabled = !0;
  let i = 0;
  response.classList.remove("hide"), answer.classList.remove("hide");
  const a = setInterval(() => {
    const s = e[i];
    if (
      ("<" === s && (i = e.indexOf(">", i)),
      (t.innerHTML = e.slice(0, i)),
      ++i === e.length + 1)
    ) {
      clearInterval(a),
        (inputDialog.disabled = !1),
        inputDialog.focus(),
        n[0].picture &&
          (t.innerHTML += `<div><img src="${n[0].picture}"/></div>`),
        n[0].link && (t.innerHTML += `<div>${n[0].link}</div>`);
      const e = new Date(),
        i = `${e.toLocaleDateString("fr-FR")} ${e.toLocaleTimeString("fr-FR")}`;
      t.innerHTML += `<p class="text-right"><small>${i}</small></p>`;
    }
  }, 100);
}
import dialog from "./answers.js";
const apiKey = "0a023285b89104b62d53d5e1166678ad",
  latLon = [50.570559, 2.1551699],
  url = `https://api.openweathermap.org/data/2.5/weather?lat=${latLon[0]}&lon=${latLon[1]}&appid=${apiKey}&lang=fr&units=metric`,
  inputDialog = document.getElementById("search"),
  dataList = document.getElementById("options"),
  response = document.getElementById("response"),
  answer = document.getElementById("answer"),
  getWeather = async () => {
    const e = await fetch(url),
      t = await e.json(),
      n = Math.round(t.main.temp).toString(),
      i = t.weather[0].description,
      a = t.main.humidity,
      s = Math.round(t.wind.speed);
    return (
      dialog.push({
        id: dialog.length + 1,
        answer: "Quel temps fait-il à Dennlys Parc ?",
        response: `Il fait actuellment <b>${n}°,</b><br>${i}.<br>Humidité : <b>${a}%</b><br>Vent : <b>${s}km/h</b>`,
        picture: `http://openweathermap.org/img/wn/${t.weather[0].icon}@2x.png`,
        keywords: ["météo", "meteo", "temps"],
      }),
      t
    );
  };
getWeather();
const clearDom = () => {
  (answer.innerHTML = ""),
    (response.innerHTML = ""),
    (dataList.innerHTML = ""),
    response.classList.add("hide"),
    answer.classList.add("hide");
};
inputDialog.addEventListener("input", (e) => {
  clearDom();
  const t = e.target.value.toLowerCase().split(" "),
    n = dialog.filter((e) =>
      e.keywords.some((e) => t.includes(e.toLowerCase()))
    );
  n.length > 0 &&
    (console.log(`y a ${n.length} proposition.s`),
    n.forEach((e) => {
      dataList.innerHTML += `<div><button class="suggestion" data-id="${e.id}"><small>${e.answer}</small></button></div>`;
      const t = document.querySelectorAll("button");
      t.forEach((e) => {
        e.addEventListener("click", function () {
          const e = Number(this.dataset.id),
            t = dialog.filter((t) => t.id === e);
          (dataList.innerHTML = ""),
            (answer.innerHTML = t[0].answer),
            typeWriter(t[0].response, response, t);
        });
      });
    }));
});
