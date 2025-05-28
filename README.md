# Modern Music Player

A feature-rich, modern web-based music player with a beautiful UI and advanced functionality. Built with HTML, CSS, and JavaScript  with touch gesture support.

## Preview

![Music Player Preview](music%20preview.jpeg)

### Touch Gestures
- **Swipe Left/Right**: Navigate between songs
  - Swipe left to play next song
  - Swipe right to play previous song

- **Double Tap**: Play/Pause
  - Double tap anywhere on the player to toggle play/pause
  
  - **Long Press**: Context Menu
  - Long press (500ms) anywhere on the player to show additional options:
    - Add/Remove from Favorites
    - Add to Queue
    - Download
    - Share (uses Web Share API if available)
  
### Core Features
- 🎵 Play, pause, next, previous controls
- 📋 Playlist management with search functionality
- 🔄 Multiple playback modes (Playlist Loop, Song Loop, Shuffle, Favorites)
- 🎚️ Volume control with mute option
- ⏱️ Progress bar with seek functionality
- 🎨 Beautiful UI with dark theme

### Advanced Features
- ⭐ Favorites system with import/export functionality
- 📱 Responsive design
- ⌨️ Keyboard shortcuts
- ⏰ Sleep timer
- 📜 Recently played history
- 🎯 Song queue management
- 🎨 Theme customization
- ✨ Visual effects (Glow and Blur effects)

### Visual Effects
- 🌟 Dynamic glow effect based on album art
- 🎨 Blur background effect
- 🎭 Ambient mode
- 🎨 Customizable accent colors

### Other Features
- Playlist management
- Favorites system
- Sleep timer
- Recently played history
- Song queue
- Search functionality
- YouTube search integration
- Keyboard shortcuts
- Visual effects (glow and blur)
- Volume control
- Download support
- Share functionality

## Keyboard Shortcuts
- `Space`: Play/Pause
- `Ctrl + Alt`: Like/Unlike (Favorite)
- `←`: Previous Song
- `→`: Next Song
- `↑`: Volume Up
- `↓`: Volume Down

## Browser Support
The player works best on modern browsers that support:
- HTML5 Audio API
- CSS3 Features
- Touch Events API
- Web Share API (for sharing functionality)

## Features in Detail

### Playlist Management
- Search songs by title, artist, or category
- Play searched results
- Sort songs alphabetically
- Add/remove songs from favorites
- Download songs
- Add songs to queue

### Queue System
- Add songs to queue from playlist
- View and manage queue
- Play songs in queue order
- Clear queue
- Remove individual songs from queue

### Recently Played
- Tracks last 20 played songs
- Play directly from recently played list
- Clear recently played history

### Effects
- Glow Effect: Creates a dynamic glow based on album art
- Blur Effect: Adds a blurred background effect
- Toggle effects on/off
- Effects persist across sessions

### Theme Settings
- Dark/Light mode
- Custom accent color
- Settings persist across sessions

### Data Management
- Export/Import favorites
- Clear cache
- Persistent settings
- Save last played song
- Remember volume level

## Technical Details

### Built With
- HTML5
- CSS3
- JavaScript (ES6+)
- Font Awesome Icons
- Google Fonts

### Browser Support
- Chrome (recommended)
- Firefox
- Safari
- Edge

### Local Storage
The application uses localStorage to persist:
- Favorites
- Recently played songs
- Queue
- Theme settings
- Effect preferences
- Volume level
- Last played song

## Getting Started

1. Clone the repository
2. Open `index.html` in your browser
3. Start playing music!

## Contributing

Feel free to submit issues and enhancement requests!

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Author

Created by Bibeksha

## Acknowledgments

- Font Awesome for icons
- Google Fonts for typography
- All contributors and users of the application 