// State management
let currentChampion = 'jinx';
let currentIndex = 0;
let filteredMatchups = [];
let isFlipped = false;

// Shuffle function
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

function populateChampionDropdown() {
    const dropdown = document.getElementById('champion-dropdown');
    const champions = Object.keys(championMatchups);
    
    champions.forEach((champion, index) => {
        const option = document.createElement('option');
        option.value = champion;
        option.textContent = champion.charAt(0).toUpperCase() + champion.slice(1);
        dropdown.appendChild(option);
    });
    
    // Set the first champion as current
    if (champions.length > 0) {
        currentChampion = champions[0];
        dropdown.value = currentChampion;
    }
}

// Initialize
function init() {
    populateChampionDropdown();
    filteredMatchups = shuffleArray(championMatchups[currentChampion]);
    updateCard();
}

// Champion selection
function selectChampion(champion) {
    currentChampion = champion;
    currentIndex = 0;
    
    // Reset to "all" filter
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelectorAll('.filter-btn')[0].classList.add('active');
    
    filteredMatchups = shuffleArray(championMatchups[currentChampion]);
    updateCard();
}

// Update card display
function updateCard() {
    const matchup = filteredMatchups[currentIndex];
    const flashcard = document.getElementById('flashcard');
    
    if (isFlipped) {
        flashcard.classList.remove('flipped');
        isFlipped = false;
    }
    
    // Get abilities for the opponent champion
    const championKey = matchup.key.toLowerCase();
    const abilities = championAbilities[championKey];
    
    document.getElementById('champion-name').textContent = matchup.champion;
    const difficultyEl = document.getElementById('difficulty');
    difficultyEl.textContent = matchup.difficulty.charAt(0).toUpperCase() + matchup.difficulty.slice(1) + ' Matchup';
    difficultyEl.className = 'difficulty ' + matchup.difficulty;
    
    document.getElementById('details-content').innerHTML = `
        <h3>General ADC Matchup</h3>
        <p>${matchup.general}</p>
        
        <div class="support-section">
            <h4>🎣 vs Hook Supports (Thresh, Nautilus, Blitzcrank, Pyke)</h4>
            <p>${matchup.hook}</p>
        </div>
        
        <div class="support-section">
            <h4>✨ vs Enchanters (Lulu, Nami, Soraka, Janna, Yuumi)</h4>
            <p>${matchup.enchanter}</p>
        </div>
        
        <div class="support-section">
            <h4>🛡️ vs Engage/Tanks (Leona, Alistar, Rell, Braum, Rakan)</h4>
            <p>${matchup.engage}</p>
        </div>
        
        <div class="support-section">
            <h4>🔥 vs Mage/Poke (Lux, Zyra, Xerath, Vel'Koz, Brand, Swain)</h4>
            <p>${matchup.mage}</p>
        </div>

        <div class="abilities-section">
            <h4>⚔️ ${matchup.champion}'s Abilities</h4>
            <div class="ability"><span class="ability-name">P:</span>${abilities.P}</div>
            <div class="ability"><span class="ability-name">Q:</span>${abilities.Q}</div>
            <div class="ability"><span class="ability-name">W:</span>${abilities.W}</div>
            <div class="ability"><span class="ability-name">E:</span>${abilities.E}</div>
            <div class="ability"><span class="ability-name">R:</span>${abilities.R}</div>
        </div>

        <div class="link-container">
            <a class="link-btn" target="_blank" rel="noopener noreferrer" href="https://www.leagueoflegends.com/champions/${matchup.key}/">Official League of Legends website</a>
        </div>
    `;
    
    document.getElementById('current-card').textContent = currentIndex + 1;
    document.getElementById('total-cards').textContent = filteredMatchups.length;
    
    document.getElementById('prev-btn').disabled = currentIndex === 0;
    document.getElementById('next-btn').disabled = currentIndex === filteredMatchups.length - 1;
}

// Card flip
function flipCard() {
    const flashcard = document.getElementById('flashcard');
    flashcard.classList.toggle('flipped');
    isFlipped = !isFlipped;
}

// Navigation
function nextCard() {
    if (currentIndex < filteredMatchups.length - 1) {
        currentIndex++;
        updateCard();
    }
}

function previousCard() {
    if (currentIndex > 0) {
        currentIndex--;
        updateCard();
    }
}

// Filter matchups
function filterMatchups(difficulty) {
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
    
    if (difficulty === 'all') {
        filteredMatchups = shuffleArray(championMatchups[currentChampion]);
    } else {
        filteredMatchups = shuffleArray(championMatchups[currentChampion].filter(m => m.difficulty === difficulty));
    }
    
    currentIndex = 0;
    updateCard();
}

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') nextCard();
    if (e.key === 'ArrowLeft') previousCard();
    if (e.key === ' ') {
        e.preventDefault();
        flipCard();
    }
});

// Initialize on load
init();