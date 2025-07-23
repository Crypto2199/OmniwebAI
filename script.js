
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

let score = 0;
let wave = 1;
let zombies = [];
let turrets = [];
let bullets = [];
let language = "en";
const waveDisplay = document.getElementById("waveDisplay");
const scoreDisplay = document.getElementById("scoreDisplay");

function drawZombies() {
  for (let z of zombies) {
    ctx.fillStyle = "green";
    ctx.beginPath();
    ctx.arc(z.x, z.y, 15, 0, Math.PI * 2);
    ctx.fill();
    z.x -= z.speed;
  }
}

function drawTurrets() {
  for (let t of turrets) {
    ctx.fillStyle = "blue";
    ctx.fillRect(t.x - 10, t.y - 10, 20, 20);
  }
}

function drawBullets() {
  for (let b of bullets) {
    ctx.fillStyle = "yellow";
    ctx.fillRect(b.x, b.y, 4, 4);
    b.x += b.speed;
  }
}

function detectHits() {
  bullets.forEach((b, bi) => {
    zombies.forEach((z, zi) => {
      if (Math.abs(b.x - z.x) < 15 && Math.abs(b.y - z.y) < 15) {
        zombies.splice(zi, 1);
        bullets.splice(bi, 1);
        score += 10;
      }
    });
  });
}

function gameLoop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawTurrets();
  drawZombies();
  drawBullets();
  detectHits();
  requestAnimationFrame(gameLoop);
  waveDisplay.textContent = (language === "ar" ? "الموجة" : "Wave") + ": " + wave;
  scoreDisplay.textContent = (language === "ar" ? "النقاط" : "Score") + ": " + score;
}

function spawnZombies() {
  zombies = [];
  for (let i = 0; i < wave * 3; i++) {
    zombies.push({ x: 800 + i * 60, y: 150 + (i % 3) * 100, speed: 0.5 + Math.random() });
  }
}

function placeTurrets() {
  turrets = [
    { x: 100, y: 150 },
    { x: 100, y: 250 },
    { x: 100, y: 350 },
  ];
  setInterval(() => {
    for (let t of turrets) {
      bullets.push({ x: t.x + 10, y: t.y, speed: 5 });
    }
  }, 1000);
}

document.getElementById("startBtn").onclick = () => {
  score = 0;
  wave = 1;
  spawnZombies();
  placeTurrets();
};

function switchLanguage(lang) {
  language = lang;
}
