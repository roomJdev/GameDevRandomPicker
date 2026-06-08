const DATA = {
  // Console 제외: 인증/SDK 비용 부담. VR 제외: 하드웨어 의존성 높음
  platform: ['PC', 'Mobile', 'Web'],

  camera: ['Top-down', 'Side-view', 'Isometric', 'Third-person', 'First-person'],

  // MMO/대규모 멀티 제외. Roguelike·Idle·Card는 1인 개발 성공 사례 많음
  genre: ['Shooter', 'Survival', 'Puzzle', 'Platformer', 'Runner', 'Tower Defense',
          'Roguelike', 'Idle', 'Card Game', 'Arena Combat', 'Collection', 'Stealth'],

  role: ['Soldier', 'Robot', 'Wizard', 'Animal', 'Survivor', 'Thief',
         'Explorer', 'Farmer', 'Monster', 'Knight', 'Spaceship', 'Slime'],

  // VR Controller 제외: 하드웨어 의존성 높음
  control: ['Keyboard & Mouse', 'Gamepad', 'Touch'],

  action: ['Shoot', 'Dodge', 'Collect', 'Build', 'Run', 'Defend',
           'Jump', 'Attack', 'Craft', 'Explore', 'Farm', 'Sneak'],
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
