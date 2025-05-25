// The playlist array is now in music-list.js and available globally.

// Sort playlist alphabetically by title (case-insensitive)
playlist.sort((a, b) => a.title.toLowerCase().localeCompare(b.title.toLowerCase()));

// Set originalPlaylist after sorting
let originalPlaylist = [...playlist];

// Restore last played song from localStorage
let currentSongIndex = 0;
const savedSrc = localStorage.getItem('last_played_src');
if (savedSrc) {
    const idx = playlist.findIndex(song => song.src === savedSrc);
    if (idx !== -1) {
        currentSongIndex = idx;
    }
}

// DOM Elements
const audio = new Audio();
const playPauseBtn = document.getElementById('play-pause');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const playlistToggleBtn = document.getElementById('playlist-toggle');
const closePlaylistBtn = document.getElementById('close-playlist');
const modeToggleBtn = document.getElementById('mode-toggle');
const songTitle = document.getElementById('song-title');
const artistName = document.getElementById('artist-name');
const albumArt = document.getElementById('album-art');
const progressBar = document.querySelector('.progress-bar');
const progress = document.querySelector('.progress');
const currentTimeEl = document.getElementById('current-time');
const durationEl = document.getElementById('duration');
const volumeSlider = document.getElementById('volume');
const playlistContainer = document.getElementById('playlist');
const playlistWrapper = document.querySelector('.playlist-container');
const playlistSearchInput = document.getElementById('playlist-search');
const favoriteBtn = document.getElementById('favorite-btn');
const searchBtn = document.getElementById('search-btn');
const loadingSpinner = document.getElementById('loading-spinner');
const volumeIcon = document.querySelector('.volume-container i');
const volumeValue = document.getElementById('volume-value');
const bufferedPercentage = document.getElementById('buffered-percentage');
const spinnerPercentage = document.getElementById('spinner-percentage');
const clearSearchBtn = document.getElementById('clear-search');
const youtubeSearchBtn = document.getElementById('youtube-search-btn');
const noResultsMessage = document.getElementById('no-results-message');
const progressTooltip = document.querySelector('.progress-tooltip');

let isPlaying = false;
let isPlaylistVisible = false;
let mode = 0; // 0: playlist loop, 1: song loop, 2: shuffle, 3: favorites only
let lastVolume = 1;
let volumeValueTimeout;

const modeIcons = [
    { icon: 'fa-repeat', title: 'Playlist Loop' },
    { icon: 'fa-redo', title: 'Song Loop' },
    { icon: 'fa-random', title: 'Shuffle' },
    { icon: 'fa-heart', title: 'Favorites Only' }
];

function getCurrentList() {
    if (mode === 3) {
        const favs = getFavorites();
        return favs.length > 0 ? favs : playlist;
    }
    return playlist;
}

function updateModeButton() {
    modeToggleBtn.classList.add('active');
    const icon = modeToggleBtn.querySelector('i');
    icon.className = `fas ${modeIcons[mode].icon}`;
    modeToggleBtn.title = modeIcons[mode].title;
}

function toggleMode() {
    mode = (mode + 1) % 4;
    updateModeButton();
    // Reset playlist order if leaving shuffle
    if (mode !== 2) {
        playlist.length = 0;
        playlist.push(...originalPlaylist);
        createPlaylist();
        // Update currentSongIndex to match current song
        const currentSong = playlist.find(song => song.title === songTitle.textContent);
        currentSongIndex = playlist.indexOf(currentSong);
    }
    // If entering favorites mode and no favorites, show a message
    if (mode === 3 && getFavorites().length === 0) {
        alert('No favorite songs found!');
        mode = 0;
        updateModeButton();
    }
}

// Toggle playlist visibility
function togglePlaylist() {
    isPlaylistVisible = !isPlaylistVisible;
    playlistWrapper.classList.toggle('show');
    playlistToggleBtn.classList.toggle('active');
}

// Close playlist
function closePlaylist() {
    if (isPlaylistVisible) {
        togglePlaylist();
    }
}

// Create playlist items (with optional filter)
function createPlaylist(filter = "") {
    // Clear existing playlist items, but keep the no-results-message div
    const playlistItems = playlistContainer.querySelectorAll('.playlist-item');
    playlistItems.forEach(item => item.remove());

    const search = filter.trim().toLowerCase();
    const list = getCurrentList();

    const filteredSongs = list.filter(song =>
        !search ||
        song.title.toLowerCase().includes(search) ||
        song.artist.toLowerCase().includes(search) ||
        (song.category && song.category.toLowerCase().includes(search))
    );

    console.log('Search term:', search, 'Filtered songs count:', filteredSongs.length);

    if (noResultsMessage) {
        if (filteredSongs.length === 0) {
            noResultsMessage.style.display = 'block';
        } else {
            noResultsMessage.style.display = 'none';
        }
    }

    filteredSongs.forEach((song, index) => {
        const playlistItem = document.createElement('div');
        playlistItem.classList.add('playlist-item');
        if (index === currentSongIndex) {
            playlistItem.classList.add('active');
        }
        playlistItem.innerHTML = `
            <img src="${song.image}" alt="${song.title}">
            <div class="playlist-item-info">
                <h4>${song.title}</h4>
                <p>${song.artist}</p>
                <span style='color:#888;font-size:0.8em;'>${song.category || ''}</span>
            </div>
        `;
        playlistItem.addEventListener('click', () => {
            currentSongIndex = index;
            loadSongFromList(list, currentSongIndex);
            updatePlaylistUI();
            if (isPlaying) {
                audio.play();
            }
            if (isPlaylistVisible) {
                togglePlaylist();
            }
        });
        playlistContainer.appendChild(playlistItem);
    });
}

// Update playlist UI
function updatePlaylistUI() {
    const playlistItems = document.querySelectorAll('.playlist-item');
    playlistItems.forEach((item, index) => {
        if (index === currentSongIndex) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
}

// Load song
function loadSong(index) {
    const song = playlist[index];
    audio.src = song.src;
    songTitle.textContent = song.title;
    artistName.textContent = song.artist;
    albumArt.src = song.image;
    updatePlaylistUI();
    updateFavoriteIcon();
    localStorage.setItem('last_played_src', song.src);
}

// Play/Pause
function togglePlay() {
    if (isPlaying) {
        audio.pause();
        playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
    } else {
        audio.play();
        playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
    }
    isPlaying = !isPlaying;
}

// Next song
function nextSong() {
    const list = getCurrentList();
    if (mode === 1) { // Song loop
        audio.currentTime = 0;
        audio.play();
        return;
    }
    if (mode === 2) { // Shuffle
        let nextIndex = Math.floor(Math.random() * list.length);
        if (list.length > 1 && nextIndex === currentSongIndex) {
            nextIndex = (nextIndex + 1) % list.length;
        }
        currentSongIndex = nextIndex;
    } else { // Playlist loop or Favorites
        currentSongIndex++;
        if (currentSongIndex > list.length - 1) {
            currentSongIndex = 0;
        }
    }
    loadSongFromList(list, currentSongIndex);
    if (isPlaying) {
        audio.play();
    }
}

// Previous song
function prevSong() {
    const list = getCurrentList();
    if (mode === 1) { // Song loop
        audio.currentTime = 0;
        audio.play();
        return;
    }
    if (mode === 2) { // Shuffle
        let prevIndex = Math.floor(Math.random() * list.length);
        if (list.length > 1 && prevIndex === currentSongIndex) {
            prevIndex = (prevIndex + 1) % list.length;
        }
        currentSongIndex = prevIndex;
    } else { // Playlist loop or Favorites
        currentSongIndex--;
        if (currentSongIndex < 0) {
            currentSongIndex = list.length - 1;
        }
    }
    loadSongFromList(list, currentSongIndex);
    if (isPlaying) {
        audio.play();
    }
}

function loadSongFromList(list, index) {
    const song = list[index];
    // Find the index in the main playlist for UI highlighting
    const mainIndex = playlist.findIndex(s => s.src === song.src);
    currentSongIndex = mainIndex !== -1 ? mainIndex : 0;
    loadSong(currentSongIndex);
}

// Update progress bar
function updateProgress(e) {
    const { duration, currentTime } = e.srcElement;
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`;
    
    // Update time displays
    const durationMinutes = Math.floor(duration / 60);
    const durationSeconds = Math.floor(duration % 60);
    const currentMinutes = Math.floor(currentTime / 60);
    const currentSeconds = Math.floor(currentTime % 60);
    
    durationEl.textContent = `${durationMinutes}:${durationSeconds.toString().padStart(2, '0')}`;
    currentTimeEl.textContent = `${currentMinutes}:${currentSeconds.toString().padStart(2, '0')}`;
}

// Set progress bar
function setProgress(e) {
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;
    audio.currentTime = (clickX / width) * duration;
}

// Helper function to format time (seconds to mm:ss)
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    const formattedSeconds = remainingSeconds.toString().padStart(2, '0');
    return `${minutes}:${formattedSeconds}`;
}

// Set volume
function setVolume() {
    audio.volume = volumeSlider.value / 100;
}

// Event listeners
playPauseBtn.addEventListener('click', togglePlay);
prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);
playlistToggleBtn.addEventListener('click', togglePlaylist);
closePlaylistBtn.addEventListener('click', closePlaylist);
modeToggleBtn.addEventListener('click', toggleMode);
audio.addEventListener('timeupdate', updateProgress);
audio.addEventListener('ended', nextSong);
progressBar.addEventListener('click', setProgress);
volumeSlider.addEventListener('input', setVolume);

// Progress bar tooltip logic
progressBar.addEventListener('mousemove', (e) => {
    const duration = audio.duration;
    if (isNaN(duration)) return; // Don't show tooltip if duration is not available

    const width = progressBar.clientWidth;
    const offsetX = e.offsetX;
    const time = (offsetX / width) * duration;

    progressTooltip.textContent = formatTime(time);
    progressTooltip.style.left = `${offsetX}px`;
    progressTooltip.style.display = 'block';
});

progressBar.addEventListener('mouseover', () => {
    if (!isNaN(audio.duration)) {
        progressTooltip.style.display = 'block';
    }
});

progressBar.addEventListener('mouseout', () => {
    progressTooltip.style.display = 'none';
});

// Search event
if (playlistSearchInput) {
    playlistSearchInput.addEventListener('input', (e) => {
        createPlaylist(e.target.value);
    });
}

// Show/hide clear and YouTube search buttons based on input value
if (playlistSearchInput && clearSearchBtn && youtubeSearchBtn) {
    playlistSearchInput.addEventListener('input', function() {
        if (this.value.length > 0) {
            clearSearchBtn.style.display = 'flex';
            youtubeSearchBtn.style.display = 'flex';
        } else {
            clearSearchBtn.style.display = 'none';
            youtubeSearchBtn.style.display = 'none';
        }
    });
    // Clear input and hide buttons when clicked
    clearSearchBtn.addEventListener('click', function() {
        playlistSearchInput.value = '';
        createPlaylist(''); // Re-render playlist with no filter
        clearSearchBtn.style.display = 'none';
        youtubeSearchBtn.style.display = 'none';
        playlistSearchInput.focus(); // Keep focus on search input
    });
}

// Favorite logic
function getFavorites() {
    return JSON.parse(localStorage.getItem('favorites') || '[]');
}

function setFavorites(favs) {
    localStorage.setItem('favorites', JSON.stringify(favs));
}

function isCurrentSongFavorite() {
    const favs = getFavorites();
    return favs.some(song => song.src === playlist[currentSongIndex].src);
}

function updateFavoriteIcon() {
    if (!favoriteBtn) return;
    const icon = favoriteBtn.querySelector('i');
    if (isCurrentSongFavorite()) {
        favoriteBtn.classList.add('favorited');
        icon.classList.remove('far');
        icon.classList.add('fas');
    } else {
        favoriteBtn.classList.remove('favorited');
        icon.classList.remove('fas');
        icon.classList.add('far');
    }
}

function toggleFavorite() {
    const favs = getFavorites();
    const song = playlist[currentSongIndex];
    const index = favs.findIndex(s => s.src === song.src);
    if (index === -1) {
        favs.push(song);
    } else {
        favs.splice(index, 1);
    }
    setFavorites(favs);
    updateFavoriteIcon();
}

if (favoriteBtn) {
    favoriteBtn.addEventListener('click', toggleFavorite);
}

// Initialize playlist and load first song
document.addEventListener('DOMContentLoaded', () => {
    const noResultsMessage = document.getElementById('no-results-message');
    createPlaylist();
    loadSong(currentSongIndex);
    updateModeButton();
    updateFavoriteIcon();

    // Restore volume from localStorage
    const savedVolume = localStorage.getItem('player_volume');
    if (savedVolume !== null) {
        audio.volume = parseFloat(savedVolume);
        volumeSlider.value = audio.volume * 100;
        lastVolume = audio.volume;
    }
});

function openPlaylistAndFocusSearch() {
    if (!playlistWrapper.classList.contains('show')) {
        togglePlaylist();
    }
    setTimeout(() => {
        if (playlistSearchInput) playlistSearchInput.focus();
    }, 200); // Wait for animation
}

if (searchBtn) {
    searchBtn.addEventListener('click', openPlaylistAndFocusSearch);
}

function showLoadingSpinner() {
    if (loadingSpinner) loadingSpinner.style.display = 'flex';
}
function hideLoadingSpinner() {
    if (loadingSpinner) loadingSpinner.style.display = 'none';
}

audio.addEventListener('loadstart', showLoadingSpinner);
audio.addEventListener('waiting', showLoadingSpinner);
audio.addEventListener('playing', hideLoadingSpinner);
audio.addEventListener('canplay', hideLoadingSpinner);
audio.addEventListener('canplaythrough', hideLoadingSpinner);
audio.addEventListener('ended', hideLoadingSpinner);
audio.addEventListener('pause', hideLoadingSpinner);

function toggleMute() {
    if (audio.muted || audio.volume === 0) {
        audio.muted = false;
        audio.volume = lastVolume;
        updateVolumeIcon();
        volumeSlider.value = lastVolume * 100;
    } else {
        audio.muted = true;
        lastVolume = audio.volume;
        audio.volume = 0;
        updateVolumeIcon();
        volumeSlider.value = 0;
    }
}

function updateVolumeIcon() {
    if (audio.muted || audio.volume === 0) {
        volumeIcon.classList.remove('fa-volume-up');
        volumeIcon.classList.add('fa-volume-mute');
    } else {
        volumeIcon.classList.remove('fa-volume-mute');
        volumeIcon.classList.add('fa-volume-up');
    }
}

if (volumeIcon) {
    volumeIcon.addEventListener('click', toggleMute);
}

function showVolumeValue(val) {
    if (!volumeValue) return;
    volumeValue.textContent = Math.round(val) + '%';
    volumeValue.style.display = 'block';
    volumeValue.classList.add('show');
    // Position above the slider thumb
    const sliderRect = volumeSlider.getBoundingClientRect();
    const min = parseInt(volumeSlider.min);
    const max = parseInt(volumeSlider.max);
    const percent = (val - min) / (max - min);
    const sliderWidth = volumeSlider.offsetWidth;
    // 16 is half the width of the .volume-value box (approximate, can be adjusted)
    const left = percent * sliderWidth;
    volumeValue.style.left = `calc(${left}px)`;
    clearTimeout(volumeValueTimeout);
    volumeValueTimeout = setTimeout(() => {
        volumeValue.classList.remove('show');
        setTimeout(() => { volumeValue.style.display = 'none'; }, 200);
    }, 800);
}

volumeSlider.addEventListener('input', function() {
    audio.muted = false;
    updateVolumeIcon();
    if (audio.volume > 0) lastVolume = audio.volume;
    localStorage.setItem('player_volume', audio.volume);
    showVolumeValue(this.value);
});

audio.addEventListener('volumechange', function() {
    localStorage.setItem('player_volume', audio.volume);
});

// Save last played song to localStorage when loading a song
const oldLoadSongForStorage = loadSong;
loadSong = function(index) {
    oldLoadSongForStorage(index);
    localStorage.setItem('last_played_src', playlist[index].src);
    updateFavoriteIcon();
};

function updateBufferedPercentage() {
    if (!audio.duration || !bufferedPercentage) return;
    const buffered = audio.buffered;
    let percent = 0;
    if (buffered.length) {
        percent = Math.floor((buffered.end(buffered.length - 1) / audio.duration) * 100);
    }
    bufferedPercentage.textContent = percent + '%';
    if (percent < 100 && !audio.paused) {
        bufferedPercentage.style.display = 'block';
    } else {
        bufferedPercentage.style.display = 'none';
    }
}

audio.addEventListener('progress', updateBufferedPercentage);
audio.addEventListener('loadstart', function() {
    if (bufferedPercentage) {
        bufferedPercentage.textContent = '0%';
        bufferedPercentage.style.display = 'block';
    }
});
audio.addEventListener('canplaythrough', function() {
    if (bufferedPercentage) bufferedPercentage.style.display = 'none';
});
audio.addEventListener('playing', function() {
    if (bufferedPercentage) bufferedPercentage.style.display = 'none';
});
audio.addEventListener('ended', function() {
    if (bufferedPercentage) bufferedPercentage.style.display = 'none';
});

function updateSpinnerPercentage() {
    if (!audio.duration || !spinnerPercentage) return;
    const buffered = audio.buffered;
    let percent = 0;
    if (buffered.length) {
        percent = Math.floor((buffered.end(buffered.length - 1) / audio.duration) * 100);
    }
    spinnerPercentage.textContent = percent + '%';
    if (percent < 100 && !audio.paused) {
        spinnerPercentage.style.display = 'block';
    } else {
        spinnerPercentage.style.display = 'none';
    }
}

audio.addEventListener('progress', updateSpinnerPercentage);
audio.addEventListener('loadstart', function() {
    if (spinnerPercentage) {
        spinnerPercentage.textContent = '0%';
        spinnerPercentage.style.display = 'block';
    }
});
audio.addEventListener('canplaythrough', function() {
    if (spinnerPercentage) spinnerPercentage.style.display = 'none';
});
audio.addEventListener('playing', function() {
    if (spinnerPercentage) spinnerPercentage.style.display = 'none';
});
audio.addEventListener('ended', function() {
    if (spinnerPercentage) spinnerPercentage.style.display = 'none';
});

document.addEventListener('keydown', function(e) {
    // Only trigger shortcuts if not focused on input or textarea
    const tag = document.activeElement.tagName.toLowerCase();
    if (tag === 'input' || tag === 'textarea') return;
    // Prevent space/arrow keys from scrolling the page when focused on body
    if (["Space","ArrowLeft","ArrowRight","ArrowUp","ArrowDown"].includes(e.code)) {
        e.preventDefault();
    }
    if (e.code === 'Space') {
        togglePlay();
    } else if (e.code === 'ArrowLeft') {
        prevSong();
    } else if (e.code === 'ArrowRight') {
        nextSong();
    } else if (e.code === 'ArrowUp') {
        let newVolume = Math.min(audio.volume + 0.05, 1);
        audio.volume = newVolume;
        volumeSlider.value = newVolume * 100;
        showVolumeValue(volumeSlider.value);
    } else if (e.code === 'ArrowDown') {
        let newVolume = Math.max(audio.volume - 0.05, 0);
        audio.volume = newVolume;
        volumeSlider.value = newVolume * 100;
        showVolumeValue(volumeSlider.value);
    }
});

document.addEventListener('click', function(e) {
    // Check if the playlist is visible and the click is outside the playlist container and not on the toggle button
    if (isPlaylistVisible && 
        !playlistWrapper.contains(e.target) && 
        e.target !== playlistToggleBtn && 
        !playlistToggleBtn.contains(e.target)) {
        togglePlaylist();
    }
});

function searchOnYouTube() {
    const query = playlistSearchInput.value.trim();
    if (query) {
        // Open a new tab with YouTube search results
        window.open(`https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`, '_blank');
    }
}

// Event listener for YouTube search button click
if (youtubeSearchBtn) {
    youtubeSearchBtn.addEventListener('click', searchOnYouTube);
}

// Event listener for Enter key in search input
if (playlistSearchInput) {
    playlistSearchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            searchOnYouTube();
            e.preventDefault(); // Prevent default form submission if any
        }
    });
}