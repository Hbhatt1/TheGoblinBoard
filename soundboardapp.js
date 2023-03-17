const sounds = [
    "DURKA",
    "APEXMOMENT",
    "UnIRoNiCAlLy",
    "BILLYMOMENT",
    "DARKER",
    "CDCDRIP",
    "ENEMYTHERE",
    "UnIRoNiCAlLy",
    "GARBJO",
    "DARKER",
    "HMKTFI",
    "HUHUHTRUST",
    "DURKA",
    "IMSORRYACHACKH",
    "UnIRoNiCAlLy",
    "KTFP",
    "MICGTHJ",
    "NOOOO",
    "UnIRoNiCAlLy",
    "OIGYC",
    "ONEOFTHOSEPLEBS",
    "DARKER",
    "OWILLYMOMENT",
    "SHHYCJORACSHH",
    "DURKA",
    "SUCKINGOFFJO",
    "UnIRoNiCAlLy",
    "TKDS",
    "WOOPOGGIES",
    "YSFG",
    "DARKER"
];

sounds.forEach((sound) => {
  const btn = document.createElement("button");
  btn.classList.add("btn");

  btn.innerText = sound;

  btn.addEventListener("click", () => {
    stopAudio();
    document.getElementById(sound).play();
  });

  document.getElementById("buttons").appendChild(btn);
});

function stopAudio() {
  sounds.forEach((sound) => {
    const clip = document.getElementById(sound);

    clip.pause();
    clip.currentTime = 0;
  });
}
