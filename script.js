const DATA = {
  platform: ['PC', 'Mobile', 'Web', 'Console'],
  camera: ['First-person', 'Third-person', 'Top-down', 'Side-view', 'Isometric'],
  genre: ['Shooter', 'Survival', 'Puzzle', 'Platformer', 'Runner', 'Defense', 'Collection', 'Arena Combat'],
  role: ['Soldier', 'Robot', 'Wizard', 'Drone', 'Animal', 'Delivery Worker', 'Spaceship', 'Survivor'],
  control: ['Keyboard & Mouse', 'Gamepad', 'Touch', 'VR Controller'],
  action: ['Shoot', 'Dodge', 'Collect', 'Build', 'Throw', 'Run', 'Escape', 'Defend'],
};

function pick(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function generate() {
  document.getElementById('r-platform').textContent = pick(DATA.platform);
  document.getElementById('r-camera').textContent = pick(DATA.camera);
  document.getElementById('r-genre').textContent = pick(DATA.genre);
  document.getElementById('r-role').textContent = pick(DATA.role);
  document.getElementById('r-control').textContent = pick(DATA.control);
  document.getElementById('r-action').textContent = pick(DATA.action);
}

document.getElementById('generateBtn').addEventListener('click', generate);
