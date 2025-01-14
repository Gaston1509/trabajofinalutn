let video = document.querySelector(".video");
console.dir(video);

// const mostrar = () => {
//   let parrafoDuracion = document.querySelector("#duracion");

//   if (video.duration > 60) {
//     // 1 min y medio -> 90 min -> 01.30
//     // let min = 90/60 -> 1.5 -> 1
//     // segundos
//     // let segundos = 90 - 1*60 = 90 - 60 = 30
//     let minutos = video.duration.toFixed(0) / 60;
//     let segundos = video.duration.toFixed(0) * 60;
//     parrafoDuracion.innerText =
//       "0" + minutos.toFixed(0) + ":" + segundos.toFixed(0);
//   } else {
//     parrafoDuracion.innerText = video.duration.toFixed(0);
//   }
// };

const mostrar = () => {
  let parrafoDuracion = document.querySelector("#duracion");

  if (video.duration > 60) {
    let minutos = Math.floor(video.duration / 60); // Redondear hacia abajo
    let segundos = Math.floor(video.duration % 60); // Obtener el resto como segundos
    // Agregar ceros iniciales si es necesario
    let formatoSegundos = segundos < 10 ? "0" + segundos : segundos;
    let formatoMinutos = minutos < 10 ? "0" + minutos : minutos;

    parrafoDuracion.innerText = formatoMinutos + ":" + formatoSegundos;
  } else {
    parrafoDuracion.innerText = video.duration.toFixed(0); // Mostrar duración en segundos
  }
};
