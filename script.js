// The playlist array is now in music-list.js and available globally.

// Sort playlist alphabetically by title (case-insensitive)
playlist.sort((a, b) => a.title.toLowerCase().localeCompare(b.title.toLowerCase()));

// Set originalPlaylist after sorting
let originalPlaylist = [...playlist];
let searchResultsPlaylist = [];
let isPlayingFromSearch = false;
let currentPlayingIndexInList = 0; // New variable to track index in current list

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
const playSearchedBtn = document.getElementById('play-searched-btn');
const noResultsMessage = document.getElementById('no-results-message');
const progressTooltip = document.querySelector('.progress-tooltip');
const prevTooltip = document.getElementById('prev-tooltip');
const nextTooltip = document.getElementById('next-tooltip');
const downloadBtn = document.getElementById('download-btn');
const hamburgerBtn = document.getElementById('hamburger-btn');
const sidebar = document.getElementById('sidebar');
const sidebarOverlay = document.getElementById('sidebar-overlay');
const closeSidebarBtn = document.getElementById('close-sidebar');
const setSleepTimerBtn = document.getElementById('set-sleep-timer');
const sleepTimerInput = document.getElementById('sleep-timer-input');
const sleepTimerStatus = document.getElementById('sleep-timer-status');
const openSleepTimerBtn = document.getElementById('open-sleep-timer');
const sleepTimerModal = document.getElementById('sleep-timer-modal');
const closeSleepTimerModalBtn = document.getElementById('close-sleep-timer-modal');
const modalOverlay = document.getElementById('modal-overlay');

let isPlaying = false;
let isPlaylistVisible = false;
let mode = 0; // 0: playlist loop, 1: song loop, 2: shuffle, 3: favorites only
let lastVolume = 1;
let volumeValueTimeout;
let sleepTimerTimeout = null;

const modeIcons = [
    { icon: 'fa-repeat', title: 'Playlist Loop' },
    { icon: 'fa-redo', title: 'Song Loop' },
    { icon: 'fa-random', title: 'Shuffle' },
    { icon: 'fa-heart', title: 'Favorites Only' }
];

function getCurrentList() {
    if (isPlayingFromSearch) {
        return searchResultsPlaylist;
    }
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
    // Use favorites list if in favorites mode, otherwise use main playlist
    const baseList = (mode === 3) ? getFavorites() : playlist;

    const listForUI = baseList.filter(song =>
        !search ||
        song.title.toLowerCase().includes(search) ||
        song.artist.toLowerCase().includes(search) ||
        (song.category && song.category.toLowerCase().includes(search))
    );

    // Store search results if a filter is applied
    if (search && mode !== 3) {
        searchResultsPlaylist = listForUI;
    } else if (!search && mode !== 3) {
        // If no search, clear search results playlist
        searchResultsPlaylist = [];
    }

    console.log('Search term:', search, 'Filtered songs count:', listForUI.length);

    if (noResultsMessage) {
        if (listForUI.length === 0) {
            noResultsMessage.style.display = 'block';
        } else {
            noResultsMessage.style.display = 'none';
        }
    }

    listForUI.forEach((song, index) => {
        const playlistItem = document.createElement('div');
        playlistItem.classList.add('playlist-item');
        playlistItem.setAttribute('data-src', song.src); // Add data-src attribute

        // Highlight based on the currently playing song's src
        if (audio.src && song.src === audio.src) {
            playlistItem.classList.add('active');
        } else {
            playlistItem.classList.remove('active');
        }

        playlistItem.innerHTML = `
            <img src="${song.image}" alt="${song.title}">
            <div class="playlist-item-info">
                <h4>${song.title}</h4>
                <p>${song.artist}</p>
                <span style='color:#888;font-size:0.8em;'>${song.category || ''}</span>
            </div>
            <div class="playlist-menu-container">
                <button class="playlist-menu-btn" title="More options">
                    <i class="fas fa-ellipsis-v"></i>
                </button>
                <div class="playlist-menu-dropdown">
                    <button class="playlist-download-option" data-src="${song.src}">
                        <i class="fas fa-download"></i> Download
                    </button>
                </div>
            </div>
        `;
        // Update the click listener for playlist items
        playlistItem.addEventListener('click', () => {
            playThisSong(song); // Call the new function with the song object
        });
        // Add menu logic
        const menuBtn = playlistItem.querySelector('.playlist-menu-btn');
        const menuDropdown = playlistItem.querySelector('.playlist-menu-dropdown');
        const downloadOption = playlistItem.querySelector('.playlist-download-option');
        if (menuBtn && menuDropdown) {
            menuBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                // Close other open menus
                document.querySelectorAll('.playlist-menu-container.show').forEach(el => {
                    if (el !== menuBtn.parentElement) el.classList.remove('show');
                });
                menuBtn.parentElement.classList.toggle('show');
            });
            // Close menu when clicking outside
            document.addEventListener('click', (e) => {
                if (!playlistItem.contains(e.target)) {
                    menuBtn.parentElement.classList.remove('show');
                }
            });
        }
        if (downloadOption) {
            downloadOption.addEventListener('click', (e) => {
                e.stopPropagation();
                const src = downloadOption.getAttribute('data-src');
                const filename = song.title.replace(/[^a-z0-9]/gi, '_').toLowerCase() + '.mp3';
                const a = document.createElement('a');
                a.href = src;
                a.download = filename;
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
                // Optionally close the menu
                menuBtn.parentElement.classList.remove('show');
            });
        }
        playlistContainer.appendChild(playlistItem);
    });
}

// Update playlist UI
function updatePlaylistUI() {
    const playlistItems = document.querySelectorAll('.playlist-item');
    const currentPlayingSrc = audio.src;

    playlistItems.forEach(item => {
        const itemSrc = item.getAttribute('data-src');

        if (itemSrc === currentPlayingSrc) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });

    // Ensure currentSongIndex is updated to reflect the index in the *main* playlist
    // This is still needed for functions like nextSong/prevSong when not in search mode
    const mainIndex = playlist.findIndex(song => song.src === currentPlayingSrc);
    currentSongIndex = mainIndex !== -1 ? mainIndex : 0;
}

// Function to play a specific song object, updating state and UI
function playThisSong(song) {
    const songInMainPlaylist = playlist.find(item => item.src === song.src);
    const songInSearchResults = searchResultsPlaylist.find(item => item.src === song.src);

    let targetList = playlist; // Default to main playlist
    let targetIndex = -1; // Initialize index

    // Determine which list the song belongs to and which list should be played from
    // Prioritize playing from search results if a search is active and the song is in results
    const playFromSearchResultsNow = playlistSearchInput.value.length > 0 && songInSearchResults;

    if (playFromSearchResultsNow) {
        targetList = searchResultsPlaylist;
        targetIndex = searchResultsPlaylist.findIndex(item => item.src === song.src);
        isPlayingFromSearch = true;
        playSearchedBtn.classList.add('active');
    } else if (songInMainPlaylist) { // Fallback to main playlist if not playing from search results but song is in main playlist
         targetList = playlist;
         targetIndex = playlist.findIndex(item => item.src === song.src);
         isPlayingFromSearch = false; // Ensure we are not in main playlist mode
         playSearchedBtn.classList.remove('active');
    } else {
        console.error("Attempted to play a song not found in main or search results lists:", song);
        return; // Cannot play if song not found in any relevant list
    }

    // If song found in a list, load and play it
    if (targetIndex !== -1) {
        currentPlayingIndexInList = targetIndex; // Update the index in the determined list
        loadSong(song); // Load the song object
        if (isPlaying) {
            audio.play();
        }
    }

    // Close playlist after selection if it's visible
     if (isPlaylistVisible) {
        togglePlaylist();
    }
}

// Load song - remains modified to accept song object
function loadSong(song) {
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

// Next song - Modified to use playThisSong
function nextSong() {
    const list = getCurrentList();
    if (list.length === 0) return; // Handle empty list

    if (mode === 1) {
        // Song loop: Handled by audio 'ended' event listener already
        audio.currentTime = 0;
        audio.play();
        return;
    }

    // Find the index of the currently playing song within the current list
    const currentPlayingIndex = list.findIndex(song => song.src === audio.src);
    let nextIndex = currentPlayingIndex;

    if (mode === 2) { // Shuffle
        if (list.length <= 1) {
            // Cannot shuffle a list with 0 or 1 item
            audio.currentTime = 0; // Restart current song if song loop not active
             if (!isPlaying) togglePlay(); // Play if paused
            return;
        }
        do {
            nextIndex = Math.floor(Math.random() * list.length);
        } while (nextIndex === currentPlayingIndex);

    } else { // Playlist loop, Favorites, or Search
        nextIndex++;
        if (nextIndex > list.length - 1) {
            nextIndex = 0; // Loop back to the beginning
        }
    }

    // If the currently playing song wasn't found in the list (e.g., list changed), start from index 0
    if (currentPlayingIndex === -1) {
         nextIndex = 0;
    }

    // Play the next song using playThisSong
    if (nextIndex >= 0 && nextIndex < list.length) {
        playThisSong(list[nextIndex]);
    } else {
         console.error("Calculated next index out of bounds:", nextIndex, list);
         // Optionally, handle this error
    }
}

// Previous song - Modified to use playThisSong
function prevSong() {
    const list = getCurrentList();
     if (list.length === 0) return; // Handle empty list

    if (mode === 1) {
        // Song loop: Handled by audio 'ended' event listener already
        audio.currentTime = 0;
        audio.play();
        return;
    }

    // Find the index of the currently playing song within the current list
    const currentPlayingIndex = list.findIndex(song => song.src === audio.src);
    let prevIndex = currentPlayingIndex;

    if (mode === 2) { // Shuffle
         if (list.length <= 1) {
            // Cannot shuffle a list with 0 or 1 item
            audio.currentTime = 0; // Restart current song if song loop not active
             if (!isPlaying) togglePlay(); // Play if paused
            return;
        }
         do {
            prevIndex = Math.floor(Math.random() * list.length);
        } while (prevIndex === currentPlayingIndex);
    } else { // Playlist loop, Favorites, or Search
        prevIndex--;
        if (prevIndex < 0) {
            prevIndex = list.length - 1; // Loop back to the end
        }
    }

    // If the currently playing song wasn't found in the list (e.g., list changed), start from index 0
    if (currentPlayingIndex === -1) {
         prevIndex = 0;
    }

     // Play the previous song using playThisSong
    if (prevIndex >= 0 && prevIndex < list.length) {
        playThisSong(list[prevIndex]);
    } else {
        console.error("Calculated previous index out of bounds:", prevIndex, list);
        // Optionally, handle this error
    }
}

// loadSongFromList - Simplified to just load from a provided list and index
// This function is primarily for internal navigation (next/prev/play searched from start)
function loadSongFromList(list, index) {
    if (index >= 0 && index < list.length) {
        const song = list[index];
        currentPlayingIndexInList = index; // Update the index in the current list
        loadSong(song); // Load the song object
         if (isPlaying) {
            audio.play();
        }
    } else {
        console.error("Index out of bounds for the current list:", index, list);
        // Optionally, handle this error, e.g., stop playback or load the first song
        // For now, we'll just log an error.
    }
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
        const hasValue = this.value.length > 0;
        clearSearchBtn.style.display = hasValue ? 'flex' : 'none';
        youtubeSearchBtn.style.display = hasValue ? 'flex' : 'none';
        playSearchedBtn.style.display = hasValue ? 'flex' : 'none';
        
        // Remove active state when search changes
        if (isPlayingFromSearch) {
            isPlayingFromSearch = false;
            playSearchedBtn.classList.remove('active');
        }
        
        createPlaylist(this.value);
    });
    
    // Clear input and hide buttons when clicked
    clearSearchBtn.addEventListener('click', function() {
        playlistSearchInput.value = '';
        createPlaylist(''); // Re-render playlist with no filter
        clearSearchBtn.style.display = 'none';
        youtubeSearchBtn.style.display = 'none';
        playSearchedBtn.style.display = 'none';
        isPlayingFromSearch = false;
        playSearchedBtn.classList.remove('active');
        playlistSearchInput.focus(); // Keep focus on search input
    });
}

// Favorite logic
function getFavorites() {
    let favs = JSON.parse(localStorage.getItem('favorites') || '[]');
    // Filter out invalid items
    favs = favs.filter(song => song && typeof song.title === 'string');
    // Sort alphabetically by title (case-insensitive)
    favs.sort((a, b) => a.title.toLowerCase().localeCompare(b.title.toLowerCase()));
    return favs;
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
    let added;
    if (index === -1) {
        favs.push(song);
        added = true;
    } else {
        favs.splice(index, 1);
        added = false;
    }
    setFavorites(favs);
    updateFavoriteIcon();
    showToast(added ? 'Added to Favorites' : 'Removed from Favorites');
}

if (favoriteBtn) {
    favoriteBtn.addEventListener('click', toggleFavorite);
}

// Initialize playlist and load first song - Modified to use playThisSong
document.addEventListener('DOMContentLoaded', () => {
    const noResultsMessage = document.getElementById('no-results-message');
    createPlaylist();
    // Use playThisSong to load the initial song and set initial state
    // This will correctly set isPlayingFromSearch to false and update currentPlayingIndexInList
    if (playlist.length > 0) {
        playThisSong(playlist[currentSongIndex]);
    }
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
loadSong = function(song) {
    oldLoadSongForStorage(song);
    localStorage.setItem('last_played_src', song.src);
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

function showToast(message) {
    const toast = document.getElementById('toast');
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('show');
    clearTimeout(showToast._timeout);
    showToast._timeout = setTimeout(() => {
        toast.classList.remove('show');
    }, 1500);
}

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
    } else if (e.ctrlKey && e.altKey && !e.shiftKey && !e.metaKey) {
        // Ctrl+Alt toggles like/unlike
        toggleFavorite();
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

// Add event listener for play searched button
if (playSearchedBtn) {
    playSearchedBtn.addEventListener('click', function() {
        // When clicking the play searched button, we explicitly want to play from search results
        if (searchResultsPlaylist.length > 0) {
            if (isPlayingFromSearch) {
                // Toggle off search mode
                isPlayingFromSearch = false;
                playSearchedBtn.classList.remove('active');
                // When toggling off, continue playing the current song but navigate the main playlist
                // Find the current song in the main playlist to set correct currentSongIndex and currentPlayingIndexInList
                const currentSongInMainPlaylist = playlist.find(song => song.src === audio.src);
                 if (currentSongInMainPlaylist) {
                     currentSongIndex = playlist.indexOf(currentSongInMainPlaylist);
                 } else {
                      // Fallback if current song not found in main playlist (shouldn't happen if logic is correct)
                      currentSongIndex = 0;
                 }
                 // Update currentPlayingIndexInList to be in sync with the main playlist's index for the current song
                 currentPlayingIndexInList = currentSongIndex;
                 // Re-render UI with main playlist context (filtered by current search text)
                 createPlaylist(playlistSearchInput.value);
                 // No need to explicitly load/play, audio is already playing the correct song

            } else {
                // Toggle on search mode - start from the beginning of search results
                isPlayingFromSearch = true;
                playSearchedBtn.classList.add('active');
                // Play the first song from search results
                playThisSong(searchResultsPlaylist[0]);
                // playThisSong handles loading and playing
            }
             if (isPlaylistVisible) {
                togglePlaylist();
            }
        }
    });
}

function getPrevSongTitle() {
    const list = getCurrentList();
    if (list.length === 0) return '';
    const currentIndex = list.findIndex(song => song.src === audio.src);
    let prevIndex = currentIndex - 1;
    if (prevIndex < 0) prevIndex = list.length - 1;
    return list[prevIndex]?.title || '';
}

function getNextSongTitle() {
    const list = getCurrentList();
    if (list.length === 0) return '';
    const currentIndex = list.findIndex(song => song.src === audio.src);
    let nextIndex = currentIndex + 1;
    if (nextIndex >= list.length) nextIndex = 0;
    return list[nextIndex]?.title || '';
}

if (prevBtn && prevTooltip) {
    prevBtn.addEventListener('mouseenter', () => {
        prevTooltip.textContent = getPrevSongTitle();
        prevTooltip.style.display = 'block';
    });
    prevBtn.addEventListener('mouseleave', () => {
        prevTooltip.style.display = 'none';
    });
}
if (nextBtn && nextTooltip) {
    nextBtn.addEventListener('mouseenter', () => {
        nextTooltip.textContent = getNextSongTitle();
        nextTooltip.style.display = 'block';
    });
    nextBtn.addEventListener('mouseleave', () => {
        nextTooltip.style.display = 'none';
    });
}

if (downloadBtn) {
    downloadBtn.addEventListener('click', function() {
        // Get the current song object
        const list = getCurrentList();
        const currentIndex = list.findIndex(song => song.src === audio.src);
        const song = list[currentIndex] || playlist[currentSongIndex];
        if (!song) return;

        // Create a temporary link and trigger download
        const a = document.createElement('a');
        a.href = song.src;
        a.download = song.title.replace(/[^a-z0-9]/gi, '_').toLowerCase() + '.mp3';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    });
}

function openSidebar() {
    if (sidebar) sidebar.classList.add('show');
    if (sidebarOverlay) sidebarOverlay.classList.add('show');
}
function closeSidebar() {
    if (sidebar) sidebar.classList.remove('show');
    if (sidebarOverlay) sidebarOverlay.classList.remove('show');
}

if (hamburgerBtn) hamburgerBtn.addEventListener('click', openSidebar);
if (closeSidebarBtn) closeSidebarBtn.addEventListener('click', closeSidebar);
if (sidebarOverlay) sidebarOverlay.addEventListener('click', closeSidebar);

function openSleepTimerModal() {
    sleepTimerModal.classList.add('show');
    modalOverlay.classList.add('show');
}
function closeSleepTimerModal() {
    sleepTimerModal.classList.remove('show');
    modalOverlay.classList.remove('show');
}
if (openSleepTimerBtn) openSleepTimerBtn.addEventListener('click', openSleepTimerModal);
if (closeSleepTimerModalBtn) closeSleepTimerModalBtn.addEventListener('click', closeSleepTimerModal);
if (modalOverlay) modalOverlay.addEventListener('click', closeSleepTimerModal);

// Sleep timer logic (remains the same, but input/status/buttons are now in the modal)
if (setSleepTimerBtn && sleepTimerInput) {
    setSleepTimerBtn.addEventListener('click', () => {
        const minutes = parseInt(sleepTimerInput.value, 10);
        if (isNaN(minutes) || minutes < 1) {
            sleepTimerStatus.textContent = 'Please enter a valid number of minutes.';
            sleepTimerStatus.style.color = '#e25555';
            return;
        }
        if (sleepTimerTimeout) clearTimeout(sleepTimerTimeout);
        sleepTimerTimeout = setTimeout(() => {
            audio.pause();
            showToast('Sleep timer: Playback stopped');
            sleepTimerStatus.textContent = 'Playback stopped by sleep timer.';
        }, minutes * 60 * 1000);
        sleepTimerStatus.textContent = `Sleep timer set for ${minutes} minute${minutes > 1 ? 's' : ''}.`;
        sleepTimerStatus.style.color = '#1db954';
        showToast(`Sleep timer set for ${minutes} min`);
    });
}

// Clear Cache
const clearCacheBtn = document.getElementById('clear-cache-btn');
if (clearCacheBtn) {
    clearCacheBtn.addEventListener('click', () => {
        if (confirm('Are you sure you want to clear all app data?')) {
            // localStorage.clear();
            localStorage.removeItem('favorites');
            localStorage.removeItem('last_played_src');
            localStorage.removeItem('player_volume');
            // Add any other keys your app uses here
            showToast('Cache cleared! Reloading...');
            setTimeout(() => window.location.reload(), 1000);
        }
    });
}

// Export Favorites
const exportBtn = document.getElementById('export-btn');
if (exportBtn) {
    exportBtn.addEventListener('click', () => {
        const favorites = getFavorites();
        const blob = new Blob([JSON.stringify(favorites, null, 2)], {type: 'application/json'});
        const a = document.createElement('a');
        a.href = URL.createObjectURL(blob);
        a.download = 'favorites.json';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        showToast('Favorites exported!');
    });
}

// Import Favorites
const importBtn = document.getElementById('import-btn');
const importInput = document.getElementById('import-input');
if (importBtn && importInput) {
    importBtn.addEventListener('click', () => importInput.click());
    importInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = function(evt) {
            try {
                const imported = JSON.parse(evt.target.result);
                if (Array.isArray(imported)) {
                    setFavorites(imported);
                    showToast('Favorites imported!');
                    createPlaylist(); // Refresh UI
                } else {
                    showToast('Invalid file format.');
                }
            } catch {
                showToast('Failed to import.');
            }
        };
        reader.readAsText(file);
    });
}

// Feedback
const feedbackBtn = document.getElementById('feedback-btn');
if (feedbackBtn) {
    feedbackBtn.addEventListener('click', () => {
        window.location.href = 'mailto:bibeksha48@email.com?subject=Music%20Player%20Feedback';
    });
}

// Keyboard Shortcuts Modal
const openShortcutsBtn = document.getElementById('open-keyboard-shortcuts');
const shortcutsModal = document.getElementById('keyboard-shortcuts-modal');
const closeShortcutsModalBtn = document.getElementById('close-keyboard-shortcuts-modal');

// About Modal
const openAboutBtn = document.getElementById('open-about');
const aboutModal = document.getElementById('about-modal');
const closeAboutModalBtn = document.getElementById('close-about-modal');

function openModal(modal) {
    if (modal) modal.classList.add('show');
    if (modalOverlay) modalOverlay.classList.add('show');
}
function closeModal(modal) {
    if (modal) modal.classList.remove('show');
    if (modalOverlay) modalOverlay.classList.remove('show');
}

if (openShortcutsBtn && shortcutsModal) openShortcutsBtn.addEventListener('click', () => openModal(shortcutsModal));
if (closeShortcutsModalBtn && shortcutsModal) closeShortcutsModalBtn.addEventListener('click', () => closeModal(shortcutsModal));

if (openAboutBtn && aboutModal) openAboutBtn.addEventListener('click', () => openModal(aboutModal));
if (closeAboutModalBtn && aboutModal) closeAboutModalBtn.addEventListener('click', () => closeModal(aboutModal));

// Close any modal when clicking the overlay
if (modalOverlay) {
    modalOverlay.addEventListener('click', () => {
        [shortcutsModal, aboutModal, sleepTimerModal].forEach(m => m && m.classList.remove('show'));
        modalOverlay.classList.remove('show');
    });
}
