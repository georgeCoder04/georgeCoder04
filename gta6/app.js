import './styles.css'

const iconPaths = {
  grid: '<rect x="4" y="4" width="6" height="6" rx="1"/><rect x="14" y="4" width="6" height="6" rx="1"/><rect x="4" y="14" width="6" height="6" rx="1"/><rect x="14" y="14" width="6" height="6" rx="1"/>',
  map: '<path d="m3 6 6-3 6 3 6-3v15l-6 3-6-3-6 3V6Z"/><path d="M9 3v15m6-12v15"/>',
  mission: '<path d="M12 3 3 8l9 5 9-5-9-5Z"/><path d="m3 13 9 5 9-5M3 18l9 5 9-5"/>',
  collection: '<path d="M5 4h14v16H5z"/><path d="M8 8h8m-8 4h8m-8 4h5"/>',
  profile: '<circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/>',
  pin: '<path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  chevron: '<path d="m9 18 6-6-6-6"/>',
  route: '<path d="M4 17c3-8 5-10 8-6s5 2 8-4"/><path d="m16 4 4 3-2 5"/><circle cx="4" cy="18" r="2"/>',
  check: '<path d="m5 12 4 4L19 6"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
  minus: '<path d="M5 12h14"/>',
  search: '<circle cx="11" cy="11" r="6"/><path d="m16 16 5 5"/>',
  bolt: '<path d="m13 2-8 12h7l-1 8 8-12h-7l1-8Z"/>',
  coin: '<ellipse cx="12" cy="12" rx="8" ry="9"/><path d="M9 8.5c1-1 5-1 6 0s0 3-3 3-4 2-3 3 5 1 6 0"/>',
  flag: '<path d="M5 22V4m0 1c5-3 9 3 14 0v9c-5 3-9-3-14 0"/>',
  close: '<path d="m6 6 12 12M6 18 18 6"/>',
  refresh: '<path d="M20 7V3l-3 3a8 8 0 1 0 2 9"/><path d="M20 3h-5"/>',
  info: '<circle cx="12" cy="12" r="9"/><path d="M12 11v6m0-10v.01"/>',
  star: '<path d="m12 3 2.7 5.5 6 .9-4.3 4.2 1 6-5.4-2.9-5.4 2.9 1-6-4.3-4.2 6-.9L12 3Z"/>',
  camera: '<path d="M4 7h4l2-3h4l2 3h4v12H4V7Z"/><circle cx="12" cy="13" r="3"/>',
  archive: '<path d="M3 6h18v5H3V6Zm2 5v10h14V11M9 15h6"/>',
  sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5M17.5 17.5 19 19M19 5l-1.5 1.5M6.5 17.5 5 19"/>',
}

const icon = (name, label = '') => `<svg class="icon" viewBox="0 0 24 24" aria-hidden="${label ? 'false' : 'true'}"${label ? ` aria-label="${label}"` : ''}>${iconPaths[name] || ''}</svg>`

const locations = [
  { id: 'dockline', name: 'Dockline Yards', district: 'Port Mercier', type: 'missions', label: 'Story', x: 342, y: 288, detail: 'A floodgate crew needs a clean transfer before first light.', action: 'Review the job', color: 'coral' },
  { id: 'satelline', name: 'Satelline Plaza', district: 'Vice North', type: 'missions', label: 'Story', x: 482, y: 174, detail: 'Meet Imani near the mirrored observatory after dark.', action: 'Plan approach', color: 'coral' },
  { id: 'bayside', name: 'Bayside Garage', district: 'Coconut Strand', type: 'jobs', label: 'Side job', x: 566, y: 323, detail: 'A compact car with a loud paint job is waiting for a new route.', action: 'Start side job', color: 'gold' },
  { id: 'marsh', name: 'Sable Marsh', district: 'Gator County', type: 'collectibles', label: 'Collectible', x: 214, y: 410, detail: 'One field recorder lies beyond the raised boardwalk.', action: 'Mark collectible', color: 'teal' },
  { id: 'rooftop', name: 'Solarium Roofs', district: 'Little Vela', type: 'collectibles', label: 'Collectible', x: 438, y: 358, detail: 'A rooftop cache overlooks the old hotel strip.', action: 'Mark collectible', color: 'teal' },
  { id: 'key', name: 'Salt Key Overlook', district: 'Coral Keys', type: 'jobs', label: 'Side job', x: 622, y: 466, detail: 'A coastal courier wants one passenger carried south.', action: 'Start side job', color: 'gold' },
  { id: 'market', name: 'Verde Market', district: 'West Ambers', type: 'collectibles', label: 'Collectible', x: 276, y: 164, detail: 'A local history stamp is hidden near the produce stalls.', action: 'Mark collectible', color: 'teal' },
]

const missions = [
  { id: 'tide', title: 'Tide Turning', district: 'Dockline Yards', type: 'Story mission', time: '28 min', reward: '$8,400', difficulty: 'Focused', description: 'Intercept a repair crew shipment before it leaves the east causeway.', steps: ['Scout the floodgate', 'Acquire the manifest', 'Reach the safehouse'], color: 'coral' },
  { id: 'mirror', title: 'Mirror District', district: 'Satelline Plaza', type: 'Story mission', time: '35 min', reward: '$12,000', difficulty: 'Demanding', description: 'Find out who keeps redirecting calls through the city relay.', steps: ['Meet Imani', 'Trace the call', 'Secure the relay room'], color: 'coral' },
  { id: 'cold', title: 'Cold Open', district: 'Coconut Strand', type: 'Side job', time: '12 min', reward: '$2,600', difficulty: 'Easy', description: 'Deliver a custom coupe before the garage owner changes their mind.', steps: ['Collect the coupe', 'Lose the tail', 'Deliver intact'], color: 'gold' },
  { id: 'postcard', title: 'Wish You Were Here', district: 'Salt Key', type: 'Side job', time: '16 min', reward: '$3,100', difficulty: 'Easy', description: 'Photograph three overlooks for a very nostalgic client.', steps: ['Sunrise pier', 'Marsh road', 'Old hotel roof'], color: 'gold' },
]

const collectibles = [
  { id: 'recorder-1', title: 'Field Recorder 08', area: 'Sable Marsh', category: 'Recorders', rarity: 'Uncommon', glyph: 'voice' },
  { id: 'stamp-4', title: 'County Stamp No. 4', area: 'Verde Market', category: 'Stamps', rarity: 'Common', glyph: 'stamp' },
  { id: 'tape-2', title: 'Mixtape: Heatwave', area: 'Solarium Roofs', category: 'Mixtapes', rarity: 'Rare', glyph: 'tape' },
  { id: 'photo-7', title: 'Instant: Pink Motel', area: 'Coconut Strand', category: 'Photos', rarity: 'Common', glyph: 'photo' },
  { id: 'recorder-3', title: 'Field Recorder 03', area: 'Port Mercier', category: 'Recorders', rarity: 'Rare', glyph: 'voice' },
  { id: 'stamp-6', title: 'County Stamp No. 6', area: 'Salt Key', category: 'Stamps', rarity: 'Uncommon', glyph: 'stamp' },
]

const defaultState = {
  view: 'overview',
  mapFilter: 'all',
  selectedLocation: 'dockline',
  selectedMission: 'tide',
  route: null,
  completedMissions: ['cold'],
  completedCollectibles: ['stamp-4'],
  prioritized: ['tide'],
  profile: { callsign: 'NIGHTSHIFT', district: 'South Leonida', accent: 'coral' },
  collectionFilter: 'All',
  collectionQuery: '',
  activities: [
    { label: 'Dispatch updated', detail: 'Tide Turning moved to the top of the queue', time: '18 min ago' },
    { label: 'Stamp collected', detail: 'County Stamp No. 4 • Verde Market', time: '1 hr ago' },
  ],
}

let storageAvailable = true
let state
try {
  const stored = JSON.parse(localStorage.getItem('vice-desk-demo-v1') || 'null')
  state = { ...defaultState, ...stored, profile: { ...defaultState.profile, ...(stored?.profile || {}) } }
} catch {
  state = structuredClone(defaultState)
  storageAvailable = false
}

const save = () => {
  try {
    localStorage.setItem('vice-desk-demo-v1', JSON.stringify(state))
    storageAvailable = true
  } catch {
    storageAvailable = false
  }
}

const escapeHTML = (value) => String(value).replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' }[char]))
const selectedLocation = () => locations.find((place) => place.id === state.selectedLocation) || locations[0]
const selectedMission = () => missions.find((mission) => mission.id === state.selectedMission) || missions[0]
const isDone = (id) => state.completedMissions.includes(id)
const completionPercent = () => Math.round(((state.completedMissions.length + state.completedCollectibles.length) / (missions.length + collectibles.length)) * 100)
const formatProgress = () => Math.min(100, 14 + completionPercent() * 2)

function logActivity(label, detail) {
  state.activities.unshift({ label, detail, time: 'Just now' })
  state.activities = state.activities.slice(0, 5)
}

function iconTile(glyph) {
  const glyphs = {
    voice: '<path d="M18 8c0-3.3-2.7-6-6-6S6 4.7 6 8v7a6 6 0 0 0 12 0V8Z"/><path d="M9 8h6M9 12h6M9 16h4"/>',
    stamp: '<path d="M6 3h12v18H6z"/><path d="m9 13 3-7 3 7-3 5-3-5Z"/>',
    tape: '<rect x="3" y="5" width="18" height="14" rx="2"/><circle cx="8" cy="12" r="2.5"/><circle cx="16" cy="12" r="2.5"/><path d="M6 17h12"/>',
    photo: '<rect x="3" y="4" width="18" height="16"/><circle cx="9" cy="9" r="2"/><path d="m4 17 6-5 4 4 3-3 3 4"/>',
  }
  return `<svg viewBox="0 0 24 24" aria-hidden="true">${glyphs[glyph]}</svg>`
}

function appShell() {
  const currentView = state.view
  const viewTitles = {
    overview: ['Command overview', 'Everything in reach, nothing in the way.'],
    map: ['Live field map', 'Explore fictional South Leonida and build a route.'],
    missions: ['Mission board', 'Plan the next job, then mark the field work complete.'],
    collection: ['Field collection', 'Find the pieces, keep the story.'],
    profile: ['Local profile', 'A small record of a very long night.'],
  }

  return `
    <div class="app-frame">
      <aside class="sidebar" aria-label="Primary navigation">
        <button class="brand" data-action="navigate" data-view="overview" aria-label="Vice Desk home">
          <span class="brand-mark">V<span>D</span></span>
          <span class="brand-name">VICE<br>DESK</span>
        </button>
        <nav class="nav-list">
          ${navButton('overview', 'grid', 'Overview')}
          ${navButton('map', 'map', 'Map')}
          ${navButton('missions', 'mission', 'Missions')}
          ${navButton('collection', 'collection', 'Collection')}
        </nav>
        <div class="sidebar-bottom">
          ${navButton('profile', 'profile', 'Profile')}
          <div class="availability"><span></span><span>LOCAL DEMO</span></div>
        </div>
      </aside>
      <div class="workspace">
        <header class="topbar">
          <div class="title-block">
            <p>VICE DESK / <strong>${currentView.toUpperCase()}</strong></p>
            <h1>${viewTitles[currentView][0]}</h1>
            <span>${viewTitles[currentView][1]}</span>
          </div>
          <div class="topbar-tools">
            <div class="weather"><i>${icon('sun')}</i><span>28°<small>CLEAR / SOUTH LEONIDA</small></span></div>
            <button class="profile-chip" data-action="navigate" data-view="profile" aria-label="Open local profile">
              <span class="avatar avatar-small">${escapeHTML(state.profile.callsign.slice(0, 2))}</span>
              <span>${escapeHTML(state.profile.callsign)}<small>LEVEL ${Math.floor(formatProgress() / 10) + 1}</small></span>
              ${icon('chevron')}
            </button>
          </div>
        </header>
        ${storageAvailable ? '' : `
          <div class="system-alert" role="alert">
            ${icon('info')}
            <span><strong>Local progress is unavailable.</strong> Browser storage could not be read or written. Progress will last for this visit only.</span>
            <button data-action="retry-storage">Retry storage</button>
          </div>`}
        <main id="main-content" class="content ${currentView === 'overview' ? 'overview-content' : ''}">
          ${renderView(currentView)}
        </main>
        <footer class="legal-strip">
          <span>UNOFFICIAL FAN-MADE COMPANION · SYNTHETIC DEMO DATA</span>
          <span>NO LIVE GAME CONNECTION · NO AFFILIATION WITH ROCKSTAR GAMES</span>
        </footer>
      </div>
    </div>
    <div class="toast-region" aria-live="polite" aria-atomic="true"></div>
  `
}

function navButton(view, iconName, label) {
  return `<button class="nav-button ${state.view === view ? 'active' : ''}" data-action="navigate" data-view="${view}" aria-current="${state.view === view ? 'page' : 'false'}">
    ${icon(iconName)}<span>${label}</span>
  </button>`
}

function renderView(view) {
  switch (view) {
    case 'map': return renderMapView()
    case 'missions': return renderMissionsView()
    case 'collection': return renderCollectionView()
    case 'profile': return renderProfileView()
    default: return renderOverview()
  }
}

function renderOverview() {
  const activeMission = selectedMission()
  const done = isDone(activeMission.id)
  return `
    <section class="overview-grid">
      <div class="map-column">
        <div class="section-heading">
          <div><h2>Field map</h2><p>Choose a marker to inspect the city.</p></div>
          ${filterButtons()}
        </div>
        ${renderMap(true)}
      </div>
      <aside class="plan-column">
        <div class="next-label"><span class="signal-dot"></span><span>NEXT MOVE</span><span class="dispatch-code">VC-${activeMission.id.toUpperCase().slice(0, 3)}</span></div>
        <div class="mission-focus">
          <p class="mission-type">${activeMission.type} · ${activeMission.district}</p>
          <h2>${activeMission.title}</h2>
          <p>${activeMission.description}</p>
          <div class="mission-meta">
            <span>${icon('clock')}${activeMission.time}</span>
            <span>${icon('coin')}${activeMission.reward}</span>
            <span>${activeMission.difficulty}</span>
          </div>
          <div class="steps">
            ${activeMission.steps.map((step, index) => `<div class="${index === 0 && !done ? 'current' : ''}"><span>${done ? icon('check') : String(index + 1).padStart(2, '0')}</span><p>${step}</p></div>`).join('')}
          </div>
          <button class="button primary full" data-action="${done ? 'reopen-mission' : 'complete-mission'}" data-id="${activeMission.id}">
            ${icon(done ? 'refresh' : 'check')} ${done ? 'Reopen mission' : 'Mark mission complete'}
          </button>
          <button class="button quiet full" data-action="prioritize" data-id="${activeMission.id}">
            ${icon('flag')} ${state.prioritized.includes(activeMission.id) ? 'Remove from priority list' : 'Add to priority list'}
          </button>
        </div>
        <div class="mini-plan">
          <div class="mini-header"><h3>Queued objectives</h3><button data-action="navigate" data-view="missions">View board ${icon('chevron')}</button></div>
          ${missions.filter((mission) => !isDone(mission.id) && mission.id !== activeMission.id).slice(0, 2).map((mission) => missionRow(mission, true)).join('') || `<div class="empty-inline">${icon('check')} The mission queue is clear.</div>`}
        </div>
      </aside>
    </section>
    <section class="lower-grid">
      <div class="collection-preview">
        <div class="section-heading compact">
          <div><h2>Collection in progress</h2><p>${state.completedCollectibles.length} of ${collectibles.length} pieces secured</p></div>
          <button class="text-button" data-action="navigate" data-view="collection">Open collection ${icon('chevron')}</button>
        </div>
        <div class="collection-track">
          ${collectibles.slice(0, 4).map((item) => collectionTile(item, false)).join('')}
        </div>
      </div>
      <div class="activity-panel">
        <div class="section-heading compact"><div><h2>Recent activity</h2><p>Saved in this browser</p></div></div>
        <div class="activity-list">
          ${state.activities.slice(0, 3).map((activity) => `<div class="activity-item"><span></span><div><strong>${escapeHTML(activity.label)}</strong><p>${escapeHTML(activity.detail)}</p></div><time>${escapeHTML(activity.time)}</time></div>`).join('')}
        </div>
      </div>
    </section>
  `
}

function filterButtons() {
  const filters = [['all', 'All'], ['missions', 'Missions'], ['jobs', 'Jobs'], ['collectibles', 'Collectibles']]
  return `<div class="filter-group" aria-label="Map filters">${filters.map(([value, label]) => `<button class="${state.mapFilter === value ? 'active' : ''}" data-action="map-filter" data-filter="${value}">${label}</button>`).join('')}</div>`
}

function renderMap(compact = false) {
  const visibleLocations = locations.filter((place) => state.mapFilter === 'all' || place.type === state.mapFilter)
  const place = selectedLocation()
  return `
    <div class="map-panel ${compact ? 'compact-map' : ''}">
      <div class="map-toolbar">
        <div class="map-search">${icon('search')}<span>LEONIDA / VICE DISTRICT</span></div>
        <div class="map-tools">
          <button data-action="refresh-map" aria-label="Refresh demo map">${icon('refresh')}</button>
          <button data-action="zoom" data-delta="-1" aria-label="Zoom out">${icon('minus')}</button>
          <button data-action="zoom" data-delta="1" aria-label="Zoom in">${icon('plus')}</button>
        </div>
      </div>
      <div class="map-stage ${state.mapZoomed ? 'zoomed' : ''}">
        <svg class="map-illustration" viewBox="0 0 720 560" role="img" aria-label="Illustrated fictional map of South Leonida">
          <defs>
            <pattern id="map-grid" width="28" height="28" patternUnits="userSpaceOnUse"><path d="M28 0H0v28" fill="none" stroke="currentColor" stroke-width=".55"/></pattern>
            <pattern id="water-lines" width="15" height="15" patternUnits="userSpaceOnUse" patternTransform="rotate(20)"><path d="M0 15 15 0" stroke="currentColor" stroke-width=".4"/></pattern>
          </defs>
          <rect width="720" height="560" class="water-bg"/>
          <path d="M66 0H544l-5 54 44 36-16 53-49 33 31 47-21 64-51 23-10 74-39 29 11 96-39 50H126l-37-69 32-67-54-56 22-73-48-57 54-54-29-55 42-49Z" class="land"/>
          <path d="m544 0 63 0-4 86 44 44-30 62-84-17 10-75 40-46Z" class="island"/>
          <path d="m523 421 81-27 53 35-16 58-56 19-58-33Z" class="island"/>
          <path d="M0 0h720v560H0z" fill="url(#map-grid)" class="grid-overlay"/>
          <path d="M0 0h720v560H0z" fill="url(#water-lines)" class="water-lines"/>
          <g class="district-lines">
            <path d="M117 126Q258 83 383 123T558 105M78 288q162-53 318 11t153-8M109 430q160 36 333-36"/>
            <path d="m190 60 45 150-18 94 48 124-17 96M335 50l-27 119 35 123-16 91 59 139M474 84l-29 126 45 78-35 111 50 75"/>
          </g>
          <g class="minor-roads">
            <path d="m111 0 27 87 63 29 45 89-42 75 42 99-31 86 37 94"/>
            <path d="m399 0-37 72 42 93-28 106 53 88-12 86 54 115"/>
            <path d="M79 218h486M74 355l459-19M121 480l387-35"/>
          </g>
          <g class="waterway"><path d="M232 0c23 85 3 144 25 188 23 46 14 90-5 144-16 48-3 117-17 164"/><path d="M543 0c-31 72-4 130-27 180-20 44-3 98 5 134"/></g>
          <g class="district-labels">
            <text x="140" y="116">WEST AMBERS</text><text x="395" y="112">VICE NORTH</text>
            <text x="325" y="244">PORT MERCIER</text><text x="122" y="349">SABLE MARSH</text>
            <text x="424" y="331">LITTLE VELA</text><text x="501" y="390">COCONUT STRAND</text>
            <text x="548" y="508">CORAL KEYS</text><text x="255" y="508">GATOR COUNTY</text>
          </g>
          ${state.route ? `<path class="route-path" d="M${selectedLocation().x} ${selectedLocation().y} C${selectedLocation().x - 70} ${selectedLocation().y - 40} 460 300 566 323"/>` : ''}
          ${visibleLocations.map((location) => `
            <g class="map-pin pin-${location.color} ${state.selectedLocation === location.id ? 'selected' : ''}" data-location="${location.id}" role="button" tabindex="0" aria-label="${location.name}, ${location.label}">
              <circle class="pin-pulse" cx="${location.x}" cy="${location.y}" r="19"/>
              <path d="M${location.x} ${location.y - 13}c-8 0-14 6-14 14 0 9 14 22 14 22s14-13 14-22c0-8-6-14-14-14Z"/>
              <circle cx="${location.x}" cy="${location.y + 1}" r="4"/>
            </g>
          `).join('')}
        </svg>
        ${visibleLocations.length === 0 ? `<div class="map-empty"><strong>No matching locations</strong><span>Choose another filter to return to the field map.</span><button data-action="map-filter" data-filter="all">Show all locations</button></div>` : ''}
        <div class="location-preview">
          <span class="location-icon ${place.color}">${icon('pin')}</span>
          <div><p>${place.label} · ${place.district}</p><h3>${place.name}</h3><span>${place.detail}</span></div>
          <button class="map-action" data-action="${state.route === place.id ? 'clear-route' : 'set-route'}" data-id="${place.id}">${state.route === place.id ? 'Clear route' : 'Set route'} ${icon('route')}</button>
        </div>
        <div class="map-compass"><span>N</span><i></i></div>
        <div class="map-scale"><span></span> 2 KM</div>
      </div>
      <div class="map-legend">
        <span><i class="legend-dot coral"></i>STORY</span><span><i class="legend-dot gold"></i>SIDE JOB</span><span><i class="legend-dot teal"></i>COLLECTIBLE</span>
        <span class="map-data">ILLUSTRATIVE GRID / 04:26 AM</span>
      </div>
    </div>
  `
}

function missionRow(mission, small = false) {
  const done = isDone(mission.id)
  return `<button class="mission-row ${small ? 'small' : ''} ${state.selectedMission === mission.id ? 'selected' : ''}" data-action="select-mission" data-id="${mission.id}">
    <span class="mission-status ${done ? 'done' : ''}">${done ? icon('check') : icon('mission')}</span>
    <span class="mission-row-copy"><strong>${mission.title}</strong><small>${mission.district} · ${mission.time}</small></span>
    <span class="row-reward">${done ? 'DONE' : mission.reward}</span>
    ${icon('chevron')}
  </button>`
}

function renderMapView() {
  return `
    <section class="map-page">
      <div class="page-tools">${filterButtons()}<button class="button secondary" data-action="${state.route ? 'clear-route' : 'set-route'}" data-id="${selectedLocation().id}">${icon('route')}${state.route ? 'Clear active route' : 'Route selected marker'}</button></div>
      ${renderMap()}
      <div class="map-detail-strip">
        <div><span>${selectedLocation().label}</span><h2>${selectedLocation().name}</h2><p>${selectedLocation().detail}</p></div>
        <div class="detail-stat"><span>DISTRICT</span><strong>${selectedLocation().district}</strong></div>
        <div class="detail-stat"><span>TRAVEL</span><strong>${state.route === selectedLocation().id ? 'ROUTED' : '4–12 MIN'}</strong></div>
        <button class="button primary" data-action="open-location-mission" data-id="${selectedLocation().id}">Open related objective ${icon('chevron')}</button>
      </div>
    </section>
  `
}

function renderMissionsView() {
  const mission = selectedMission()
  const incomplete = missions.filter((item) => !isDone(item.id))
  return `
    <section class="missions-layout">
      <div class="mission-list-panel">
        <div class="section-heading"><div><h2>Dispatch queue</h2><p>${incomplete.length} objectives remaining in this demo.</p></div><span class="count-badge">${missions.length}</span></div>
        <div class="mission-list">${missions.map((item) => missionRow(item)).join('')}</div>
        <div class="queue-status">${icon('info')} Completing a job adds it to local activity. Reopen it any time to reset the demo.</div>
      </div>
      <article class="mission-detail">
        <div class="detail-banner ${mission.color}">
          <div><span>${mission.type}</span><strong>${mission.district}</strong></div>
          ${icon('mission')}
        </div>
        <div class="detail-body">
          <p class="mission-id">VC-${mission.id.toUpperCase()} / LOCAL JOB</p>
          <h2>${mission.title}</h2>
          <p>${mission.description}</p>
          <div class="mission-meta large"><span>${icon('clock')}${mission.time}</span><span>${icon('coin')}${mission.reward}</span><span>${mission.difficulty}</span></div>
          <h3>Approach checklist</h3>
          <div class="checklist">${mission.steps.map((step, index) => `<div><span>${isDone(mission.id) ? icon('check') : index + 1}</span><p>${step}</p></div>`).join('')}</div>
          <div class="detail-actions">
            <button class="button primary" data-action="${isDone(mission.id) ? 'reopen-mission' : 'complete-mission'}" data-id="${mission.id}">${icon(isDone(mission.id) ? 'refresh' : 'check')}${isDone(mission.id) ? 'Reopen mission' : 'Complete mission'}</button>
            <button class="button secondary" data-action="prioritize" data-id="${mission.id}">${icon('flag')}${state.prioritized.includes(mission.id) ? 'Priority set' : 'Prioritize'}</button>
          </div>
        </div>
      </article>
    </section>
  `
}

function collectionTile(item, full = true) {
  const done = state.completedCollectibles.includes(item.id)
  return `<button class="collection-tile ${full ? 'full' : ''} ${done ? 'secured' : ''}" data-action="toggle-collectible" data-id="${item.id}" aria-pressed="${done}">
    <span class="tile-visual">${iconTile(item.glyph)}<i>${done ? icon('check') : icon('plus')}</i></span>
    <span class="tile-content"><small>${item.category} · ${item.rarity}</small><strong>${item.title}</strong><span>${item.area}</span></span>
    ${full ? `<span class="tile-state">${done ? 'SECURED' : 'MARK FOUND'}</span>` : ''}
  </button>`
}

function renderCollectionView() {
  const filter = state.collectionFilter
  const query = state.collectionQuery.toLowerCase()
  const filtered = collectibles.filter((item) => (filter === 'All' || item.category === filter) && `${item.title} ${item.area}`.toLowerCase().includes(query))
  const categories = ['All', 'Recorders', 'Stamps', 'Mixtapes', 'Photos']
  return `
    <section class="collection-page">
      <div class="collection-controls">
        <div class="collection-stats"><strong>${state.completedCollectibles.length}<span>/${collectibles.length}</span></strong><p>pieces secured</p><div class="progress-line"><i style="width:${(state.completedCollectibles.length / collectibles.length) * 100}%"></i></div></div>
        <label class="search-field">${icon('search')}<input type="search" id="collection-search" placeholder="Search the collection" value="${escapeHTML(state.collectionQuery)}" aria-label="Search collectibles"></label>
        <div class="filter-group">${categories.map((category) => `<button data-action="collection-filter" data-filter="${category}" class="${filter === category ? 'active' : ''}">${category}</button>`).join('')}</div>
      </div>
      <div class="collection-grid">
        ${filtered.map((item) => collectionTile(item)).join('') || `<div class="empty-state"><span>${icon('search')}</span><h2>No pieces match that search</h2><p>Try a place name like “Sable Marsh” or clear the current filter.</p><button class="button primary" data-action="clear-collection-filter">Clear collection filters</button></div>`}
      </div>
    </section>
  `
}

function renderProfileView() {
  const total = missions.length + collectibles.length
  const complete = state.completedMissions.length + state.completedCollectibles.length
  return `
    <section class="profile-layout">
      <div class="profile-card">
        <div class="profile-cover"><span>LEONIDA FIELD RECORD</span><i>${icon('sun')}</i></div>
        <div class="profile-identity">
          <span class="avatar avatar-large accent-${state.profile.accent}">${escapeHTML(state.profile.callsign.slice(0, 2))}</span>
          <div><p>LOCAL PLAYER PROFILE</p><h2>${escapeHTML(state.profile.callsign)}</h2><span>${escapeHTML(state.profile.district)} · Demo operator</span></div>
        </div>
        <div class="profile-progress">
          <div><span>FIELD READINESS</span><strong>${formatProgress()}%</strong></div>
          <div class="progress-line"><i style="width:${formatProgress()}%"></i></div>
          <p>${complete} of ${total} demo activities complete. Keep going; your progress stays in this browser.</p>
        </div>
        <form id="profile-form" class="profile-form">
          <label><span>Callsign</span><input name="callsign" maxlength="18" value="${escapeHTML(state.profile.callsign)}" required></label>
          <label><span>Home district</span><input name="district" maxlength="28" value="${escapeHTML(state.profile.district)}" required></label>
          <fieldset><legend>Profile signal</legend><div class="swatch-picker">
            ${['coral', 'teal', 'gold'].map((accent) => `<label class="swatch ${accent}"><input type="radio" name="accent" value="${accent}" ${state.profile.accent === accent ? 'checked' : ''}><span>${accent}</span></label>`).join('')}
          </div></fieldset>
          <button class="button primary" type="submit">Save local profile</button>
        </form>
      </div>
      <div class="profile-side">
        <div class="record-card"><span>MISSION RECORD</span><strong>${state.completedMissions.length}</strong><p>of ${missions.length} completed</p></div>
        <div class="record-card"><span>COLLECTION RECORD</span><strong>${state.completedCollectibles.length}</strong><p>of ${collectibles.length} secured</p></div>
        <div class="privacy-note">${icon('archive')}<div><strong>Built to stay local</strong><p>Vice Desk stores only demo progress on this device. It never connects to a game service.</p><button class="text-button" data-action="reset-demo">Reset demo progress</button></div></div>
      </div>
    </section>
  `
}

function render() {
  document.querySelector('#app').innerHTML = appShell()
  bindPageControls()
}

function bindPageControls() {
  document.querySelector('#collection-search')?.addEventListener('input', (event) => {
    state.collectionQuery = event.target.value
    const cursor = event.target.selectionStart
    render()
    const search = document.querySelector('#collection-search')
    search?.focus()
    search?.setSelectionRange(cursor, cursor)
  })

  document.querySelector('#profile-form')?.addEventListener('submit', (event) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    state.profile.callsign = data.get('callsign').trim().toUpperCase()
    state.profile.district = data.get('district').trim()
    state.profile.accent = data.get('accent')
    save()
    logActivity('Profile updated', `${state.profile.callsign} / ${state.profile.district}`)
    render()
    toast('Local profile saved')
  })
}

function toast(message) {
  const region = document.querySelector('.toast-region')
  if (!region) return
  region.innerHTML = `<div class="toast">${icon('check')}<span>${escapeHTML(message)}</span></div>`
  window.setTimeout(() => region.replaceChildren(), 2600)
}

document.addEventListener('click', (event) => {
  const pin = event.target.closest('[data-location]')
  if (pin) {
    state.selectedLocation = pin.dataset.location
    render()
    toast(`${selectedLocation().name} selected`)
    return
  }
  const control = event.target.closest('[data-action]')
  if (!control) return
  const action = control.dataset.action
  const id = control.dataset.id

  if (action === 'navigate') {
    state.view = control.dataset.view
    save()
    render()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  } else if (action === 'map-filter') {
    state.mapFilter = control.dataset.filter
    save()
    render()
  } else if (action === 'select-mission') {
    state.selectedMission = id
    if (state.view === 'overview') state.view = 'missions'
    save()
    render()
  } else if (action === 'complete-mission') {
    state.completedMissions = [...new Set([...state.completedMissions, id])]
    const mission = missions.find((item) => item.id === id)
    logActivity('Mission completed', mission.title)
    save()
    render()
    toast(`${mission.title} marked complete`)
  } else if (action === 'reopen-mission') {
    state.completedMissions = state.completedMissions.filter((item) => item !== id)
    logActivity('Mission reopened', missions.find((item) => item.id === id).title)
    save()
    render()
    toast('Mission returned to the queue')
  } else if (action === 'prioritize') {
    if (state.prioritized.includes(id)) {
      state.prioritized = state.prioritized.filter((item) => item !== id)
      logActivity('Priority removed', missions.find((item) => item.id === id).title)
      toast('Removed from priority list')
    } else {
      state.prioritized = [...state.prioritized, id]
      logActivity('Priority added', missions.find((item) => item.id === id).title)
      toast('Added to priority list')
    }
    save()
    render()
  } else if (action === 'toggle-collectible') {
    const item = collectibles.find((entry) => entry.id === id)
    if (state.completedCollectibles.includes(id)) {
      state.completedCollectibles = state.completedCollectibles.filter((entry) => entry !== id)
      logActivity('Collectible reopened', item.title)
    } else {
      state.completedCollectibles = [...state.completedCollectibles, id]
      logActivity('Collectible secured', item.title)
    }
    save()
    render()
    toast(state.completedCollectibles.includes(id) ? `${item.title} secured` : `${item.title} reopened`)
  } else if (action === 'collection-filter') {
    state.collectionFilter = control.dataset.filter
    save()
    render()
  } else if (action === 'clear-collection-filter') {
    state.collectionFilter = 'All'
    state.collectionQuery = ''
    save()
    render()
  } else if (action === 'set-route') {
    state.route = id
    save()
    logActivity('Route set', selectedLocation().name)
    render()
    toast(`Route set to ${selectedLocation().name}`)
  } else if (action === 'clear-route') {
    state.route = null
    save()
    render()
    toast('Active route cleared')
  } else if (action === 'zoom') {
    state.mapZoomed = control.dataset.delta === '1'
    render()
  } else if (action === 'refresh-map') {
    const stage = document.querySelector('.map-stage')
    stage?.classList.add('loading')
    control.disabled = true
    window.setTimeout(() => {
      render()
      toast('Demo map refreshed')
    }, 650)
  } else if (action === 'open-location-mission') {
    const map = { dockline: 'tide', satelline: 'mirror', bayside: 'cold', key: 'postcard' }
    state.selectedMission = map[id] || 'tide'
    state.view = 'missions'
    save()
    render()
  } else if (action === 'retry-storage') {
    save()
    render()
    toast(storageAvailable ? 'Local progress connected' : 'Storage is still unavailable')
  } else if (action === 'reset-demo') {
    state = structuredClone(defaultState)
    save()
    state.view = 'profile'
    render()
    toast('Demo progress reset')
  }
})

document.addEventListener('keydown', (event) => {
  const location = event.target.closest?.('[data-location]')
  if (location && (event.key === 'Enter' || event.key === ' ')) {
    event.preventDefault()
    location.dispatchEvent(new MouseEvent('click', { bubbles: true }))
  }
})

save()
document.querySelector('#app').innerHTML = `
  <div class="boot-screen" aria-live="polite">
    <div class="boot-brand"><span class="brand-mark">V<span>D</span></span></div>
    <h1>Loading the field console</h1>
    <p>Assembling your local demo…</p>
    <div class="boot-line"><i></i></div>
  </div>
`
window.setTimeout(render, 500)
