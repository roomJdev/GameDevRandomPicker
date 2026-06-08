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

const ENGINE_DATA = {
  'Unreal Engine 5': {
    language: 'C++ / Blueprints',
    ides: ['Rider', 'Visual Studio', 'VS Code'],
  },
  'Unity': {
    language: 'C#',
    ides: ['Rider', 'Visual Studio', 'VS Code'],
  },
  'Godot': {
    language: 'GDScript / C#',
    ides: ['Godot Built-in Editor', 'VS Code', 'Rider'],
  },
  'GameMaker Studio 2': {
    language: 'GML (GameMaker Language)',
    ides: ['GameMaker Studio 2 Built-in Editor'],
  },
  'Defold': {
    language: 'Lua',
    ides: ['Defold Editor', 'VS Code'],
  },
  'Pygame': {
    language: 'Python',
    ides: ['VS Code', 'PyCharm'],
  },
};

function onEngineChange() {
  const engineSelect = document.getElementById('f-engine');
  const data = ENGINE_DATA[engineSelect.value];
  const langInput = document.getElementById('f-language');
  const ideSelect = document.getElementById('f-ide');

  if (!data) {
    langInput.value = '';
    ideSelect.innerHTML = '<option value="">엔진을 먼저 선택하세요</option>';
    ideSelect.disabled = true;
    return;
  }

  langInput.value = data.language;
  ideSelect.disabled = false;
  ideSelect.innerHTML = data.ides
    .map(ide => `<option value="${ide}">${ide}</option>`)
    .join('');
}

document.getElementById('f-engine').addEventListener('change', onEngineChange);

document.getElementById('generateBtn').addEventListener('click', () => {
  generate();
  document.getElementById('readmeForm').classList.remove('hidden');
  onEngineChange(); // 현재 선택된 엔진 값 즉시 반영
});

document.getElementById('downloadBtn').addEventListener('click', downloadReadme);

function val(id) {
  return document.getElementById(id).value.trim();
}

function downloadReadme() {
  const control = {
    Platform:        document.getElementById('r-platform').textContent,
    'Camera View':   document.getElementById('r-camera').textContent,
    Genre:           document.getElementById('r-genre').textContent,
    'Player Role':   document.getElementById('r-role').textContent,
    'Control Method':document.getElementById('r-control').textContent,
    'Main Action':   document.getElementById('r-action').textContent,
  };

  const title       = val('f-title')        || 'Untitled Game';
  const gameplay    = val('f-gameplay')     || '(미작성)';
  const sfx         = val('f-sfx')          || '(미작성)';
  const mechanics   = val('f-mechanics')    || '(미작성)';
  const ui          = val('f-ui')           || '(미작성)';
  const others      = val('f-others')       || '(미작성)';
  const engine   = document.getElementById('f-engine').value  || '—';
  const language = val('f-language') || '—';
  const ide      = document.getElementById('f-ide').value     || '—';

  const controlTable = Object.entries(control)
    .map(([k, v]) => `| ${k} | ${v} |`)
    .join('\n');

  const md = `# ${title}

> This document describes the game design and development environment for **${title}**.
> It is intended to provide context for AI assistants (LLMs) and collaborators.

---

## Player Control

| Category | Value |
|---|---|
${controlTable}

---

## Basic Gameplay

${gameplay}

---

## SFX / VFX

${sfx}

---

## Mechanics

${mechanics}

---

## UI

${ui}

---

## Others

${others}

---

## Development Environment

| Item | Value |
|---|---|
| Engine | ${engine} |
| Language | ${language} |
| IDE / Editor | ${ide} |
| Developer | Solo |
`;

  const a = document.createElement('a');
  a.href = 'data:text/markdown;charset=utf-8,' + encodeURIComponent(md);
  a.download = 'README.md';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}

const THEMES = {
  dark: {
    '--bg': '#1a1a2e', '--card-bg': '#16213e', '--card-border': '#0f3460',
    '--accent': '#e94560', '--accent-hover': '#c73652',
    '--text': '#e0e0e0', '--text-muted': '#a0a0b0', '--text-value': '#ffffff', '--footer': '#555570',
  },
  synthwave: {
    '--bg': '#0d0015', '--card-bg': '#1a0030', '--card-border': '#6a0572',
    '--accent': '#f72585', '--accent-hover': '#c41e6a',
    '--text': '#e8d5f5', '--text-muted': '#b48ec9', '--text-value': '#ffffff', '--footer': '#6a4a80',
  },
  forest: {
    '--bg': '#0d1f13', '--card-bg': '#132a1c', '--card-border': '#1e4a2a',
    '--accent': '#52b788', '--accent-hover': '#3a8f6a',
    '--text': '#d8f0e0', '--text-muted': '#8ab89a', '--text-value': '#ffffff', '--footer': '#4a7a58',
  },
  mono: {
    '--bg': '#111111', '--card-bg': '#1e1e1e', '--card-border': '#333333',
    '--accent': '#cccccc', '--accent-hover': '#999999',
    '--text': '#dddddd', '--text-muted': '#888888', '--text-value': '#ffffff', '--footer': '#555555',
  },
};

function applyTheme(name) {
  const theme = THEMES[name];
  const root = document.documentElement;
  Object.entries(theme).forEach(([k, v]) => root.style.setProperty(k, v));
  document.querySelectorAll('.theme-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.theme === name);
  });
}

document.querySelectorAll('.theme-btn').forEach(btn => {
  btn.addEventListener('click', () => applyTheme(btn.dataset.theme));
});
