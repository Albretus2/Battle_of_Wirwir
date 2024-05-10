// object pilihan card
const card = [
  {
    name: "cowo ghibli",
    atk: 99999,
    img: "cowoGhibli.jpeg",
  },
  {
    name: "si imut",
    atk: 888,
    img: "siImut.jpeg",
  },
  {
    name: "gilang Rujak",
    atk: 200,
    img: "gilangRujak.jpeg",
  },
  {
    name: "based amat",
    atk: 78,
    img: "basedAmat.jpeg",
  },
  {
    name: "bagas baterflai",
    atk: 47,
    hp: 2,
    img: "bagas.jpeg",
  },
  {
    name: "sigit rendang",
    atk: 36,
    hp: 1,
    img: "sigitRendang.jpeg",
  },
  {
    name: "broColi",
    atk: 34,
    img: "brocoli.jpeg",
  },
  {
    name: "kairi kumar",
    atk: 4,
    img: "kumar.jpeg",
  },
];

// animasi card ketika di click
const animasiClick = (p) => {
  p.classList.add("animasiClick");
  p.classList.remove("shadowCard");

  setTimeout(() => {
    p.classList.remove("animasiClick");
    p.classList.add("shadowCard");
  }, 100);
};

// function animasi acak pilihan Computer
const acakPilihanCom = (card) => {
  const imgCom = document.querySelector("#imgComp");
  let i = 0;
  const waktuMulai = new Date().getTime();
  setInterval(() => {
    if (new Date().getTime() - waktuMulai > 2000) {
      return clearInterval;
    }
    imgCom.setAttribute("src", `./img/${card[i++].img}`);
    if (i == card.length) i = 0;
  }, 100);
};

// function untuk pilihan komputer secara random
const pilihanComputer = (c) => {
  let pilihan = Math.floor(Math.random() * 22 + 1);
  if (pilihan <= 5) pilihan = c[0];
  if (pilihan <= 10) pilihan = c[1];
  if (pilihan <= 12) pilihan = c[2];
  if (pilihan <= 14) pilihan = c[3];
  if (pilihan <= 16) pilihan = c[4];
  if (pilihan <= 18) pilihan = c[5];
  if (pilihan <= 20) pilihan = c[6];
  if (pilihan <= 22) pilihan = c[7];
  return pilihan;
};

// pengkondisian hasil antara player dan computer
const hasil = (atkPlayer, atkComputer) => {
  const bgHasil = document.querySelector(".containerHasil");
  if (atkPlayer > atkComputer) {
    defaultHpComputer -= 1;
    bgHasil.classList.remove("bg-accent");
    bgHasil.classList.remove("bg-secondary");
    bgHasil.classList.add("bg-success");
    return "🔥🥳 YOU WIN 🥳🔥";
  }
  if (atkPlayer == atkComputer) {
    bgHasil.classList.remove("bg-success");
    bgHasil.classList.remove("bg-accent");
    bgHasil.classList.add("bg-secondary");
    return "🤫 DRAW 🤫";
  }
  if (atkPlayer < atkComputer) {
    defaultHpPlayer -= 1;
    bgHasil.classList.remove("bg-secondary");
    bgHasil.classList.remove("bg-success");
    bgHasil.classList.add("bg-accent");
    return "💩🤡 YOU LOSE 🤡💩";
  }
};

// pengkondisian info hasil akhir
const showModalInfoHasil = (hpCom, hpPly) => {
  if (hpCom.innerHTML == 0) {
    // hpCom.textContent = defaultHpComputer = 5;
    // hpPlayer.textContent = defaultHpPlayer = 5;

    const infoWin = document.querySelector("#win");
    infoWin.classList.remove("hidden");

    document.querySelector("#btnCloseWin").addEventListener("click", () => {
      infoWin.classList.add("hidden");
      location.reload();
    });
  }
  if (hpPly.innerHTML == 0) {
    // hpPlayer.textContent = defaultHpPlayer = 5;
    // hpCom.textContent = defaultHpComputer = 5;

    const infoLose = document.querySelector("#lose");
    infoLose.classList.remove("hidden");

    document.querySelector("#btnCloseLose").addEventListener("click", () => {
      infoLose.classList.add("hidden");
      location.reload();
    });
  }
};

let defaultHpComputer = 5;
let defaultHpPlayer = 5;
let hpCom = document.querySelector("#hpCom");
let hpPlayer = document.querySelector("#hpPlay");
const cardPlayer = document.querySelectorAll(".cardPlayer"); // result: nodelist (berarti harus di ambil satu persatu)

cardPlayer.forEach((player) => {
  // setiap element tambahkan even click
  player.addEventListener("click", () => {
    animasiClick(player); // memanggil fungsi animasiClick

    const atk = player.querySelector(".atk").innerHTML; // mengambil isi element atk
    // memanggil function pilihan komputer
    const pilCom = pilihanComputer(card); // atribut card di ambil dari object pilihan card

    const imgComp = document.querySelector("#imgComp");

    // memanggil fungsi acakPilihanComputer
    acakPilihanCom(card);

    setTimeout(() => {
      imgComp.setAttribute("src", `./img/${pilCom.img}`);
      document.querySelector(".atkCom").innerHTML = pilCom.atk;
      document.querySelector("#nameCom").innerHTML = pilCom.name;

      const result = hasil(atk, pilCom.atk);
      document.querySelector("#hasil").innerHTML = result;

      hpCom.textContent = defaultHpComputer;
      hpPlayer.textContent = defaultHpPlayer;

      // hasil akhir jika salah satu kalah
      showModalInfoHasil(hpCom, hpPlayer);

      if (result == "💩🤡 YOU LOSE 🤡💩") {
        let hpCard = player.querySelector(".hpCard");
        let hpDataSet = parseInt((hpCard.dataset.hp -= 1));
        hpCard.innerHTML = hpDataSet;
        if (hpCard.innerHTML == 0) {
          player.classList.add("hidden");
        }
      }
    }, 2000);
  });
});
