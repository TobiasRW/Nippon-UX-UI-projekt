// // Video funktion 
// function playPauseVideo() {
//     let videos = document.querySelectorAll("video"); // Her tages fat i alle <video> elementer i HTML'en (her er kun en video på forsiden)
//     videos.forEach((video) => { // Laver en array med alle videoer kaldet 'videos'
//       video.muted = true; // Man kan kun kontrollere playback (uden video controls) på videoer hvis videoen er muted
  
//       let playPromise = video.play(); // Variabel som afspiller video ved hjælp af play() metoden --> dette returnerer et promise
//       if (playPromise !== undefined) { // Tjekker om playPromise variablen er defineret
//         playPromise.then((_) => { // hvis variablen er defineret så gør...
//           let observer = new IntersectionObserver( // Her tilføjes en ny IntersectionObserver opbevaret i en variabel med navn 'observer'
//             (entries) => {
//               entries.forEach((entry) => {
//                 if (entry.intersectionRatio !== 1 && !video.paused) { // Hvis videoen ikke er synig og hvis videoen ikke er sat på pause
//                   video.pause(); // Så sæt sæt videoen på pause
//                 } else if (video.paused) { // Ellers hvis videoen er sat på pause (ellers hvis den førgivne if-statement ikke er sand - så hvis videoen sat på pause og er synlig)
//                   video.play(); // Så afspil video
//                 }
//               });
//             }, {
//               threshold: 0.2 // Videon vil starte med at afspille når den er 20% synlig
//             }
//           );
//           observer.observe(video); // sætter vores IntersectionObserver til at observere vores video
//         });
//       }
//     });
//   }
  
//   playPauseVideo(); // Til sidst kaldes funktionen, hvilket starter processen

const howTo = document.getElementById('how-to-vid');
var element = document.getElementById('info');

// window.addEventListener('scroll', function() {
//   if (elFllVsbl(element)) {
//     console.log("play video");
//     howTo.play(); // with player you can manipulate the video
//   } else {
//     console.log("pause video")
//     howTo.pause();
//   }
// });

// function elFllVsbl(el) {
//   return (el.getBoundingClientRect().top >= 0 && el.getBoundingClientRect().bottom < window.innerHeight);
// }

window.addEventListener('scroll', function() {
  if(element.getBoundingClientRect().top < window.innerHeight && element.getBoundingClientRect().bottom > window.innerHeight ) {
    howTo.play();
  }
  else {
    howTo.pause();
  }
})