function typeWriter(e, cible, reponse) {
  inputDialog.disabled = !0;
  let i = 0;
  response.classList.remove("hide"), answer.classList.remove("hide");
  const a = setInterval(() => {
    const s = e[i];
    if (
      ("<" === s && (i = e.indexOf(">", i)),
      (cible.innerHTML = e.slice(0, i)),
      ++i === e.length + 1)
    ) {
      clearInterval(a),
        (inputDialog.disabled = !1),
        inputDialog.focus(),
        reponse[0].picture &&
          (cible.innerHTML += `<div><img src="${reponse[0].picture}"/></div>`),
        reponse[0].link && (cible.innerHTML += `<div>${reponse[0].link}</div>`);
      const e = new Date(),
        i = `${e.toLocaleDateString("fr-FR")} ${e.toLocaleTimeString("fr-FR")}`;
      cible.innerHTML += `<p class="text-right"><small>${i}</small></p>`;
    }
  }, 100);
}
import dialog from "./answers.js";
const apiKey = "",
  latLon = [50.570559, 2.1551699],
  url = `https://api.openweathermap.org/data/2.5/weather?lat=${latLon[0]}&lon=${latLon[1]}&appid=${apiKey}&lang=fr&units=metric`,
  inputDialog = document.getElementById("search"),
  dataList = document.getElementById("options"),
  response = document.getElementById("response"),
  answer = document.getElementById("answer"),
  getWeather = async () => {
    const result = await fetch(url),
      data = await result.json(),
      temp = Math.round(data.main.temp).toString(),
      desc = data.weather[0].description,
      humidity = data.main.humidity,
      windSpeed = Math.round(data.wind.speed);
    return (
      dialog.push({
        id: dialog.length + 1,
        answer: "Quel temps fait-il à Dennlys Parc ?",
        response: `Il fait actuellment <b>${temp}°,</b><br>${desc}.<br>Humidité : <b>${humidity}%</b><br>Vent : <b>${windSpeed}km/h</b>`,
        picture: `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
        keywords: ["météo", "meteo", "temps"],
      }),
      data
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
  const question = e.target.value.toLowerCase().split(" "),
    responses = dialog.filter((e) =>
      e.keywords.some((e) => question.includes(e.toLowerCase()))
    );
  responses.length > 0 &&
    (console.log(`y a ${responses.length} proposition.s`),
    responses.forEach((e) => {
      dataList.innerHTML += `<div><button class="suggestion" data-id="${e.id}"><small>${e.answer}</small></button></div>`;
      const allBtn = document.querySelectorAll("button");
      allBtn.forEach((e) => {
        e.addEventListener("click", function () {
          const e = Number(this.dataset.id),
            question = dialog.filter((t) => t.id === e);
          (dataList.innerHTML = ""),
            (answer.innerHTML = question[0].answer),
            typeWriter(question[0].response, response, question);
        });
      });
    }));
});
