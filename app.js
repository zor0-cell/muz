// Данные треков
const tracks = {
    '1': {
        title: 'No one noticed',
        artist: 'The Marias',
        image: 'https://avatars.mds.yandex.net/i?id=a3b036bcdd2d49eb7a42cd3f220f0d15f0f1af8f-5180074-images-thumbs&n=13',
        audio: 'https://files.catbox.moe/2nqd32.mp3',
        duration: 204,
        lyrics: [
            { time: 0, text: 'No one noticed' },
            { time: 10, text: 'The way you looked at me' },
            { time: 20, text: 'When you walked into the room' },
            { time: 30, text: 'I knew that I was doomed' },
            // ... другие строки
        ],
    },
    // ... другие треки
};

// Данные плейлистов
const predefinedPlaylists = {
    'p1': { name: 'Поп', trackIds: ['1', '2'] },
    'p2': { name: 'Русский', trackIds: ['3', '4'] },
    'p3': { name: 'Santiz', trackIds: ['29', '30', '31', '32', '33', '34', '36', '37', '40'] },
    'p4': { name: 'vdk', trackIds: ['45', '46', '47', '48', '50'] },
    'p5': { name: 'Other', trackIds: ['51', '45', '46', '47', '48', '49', '50', '54'] },
    'p6': { name: 'Продолжения 2', trackIds: ['55', '56', '57', '58', '59', '60', '61', '62', '63', '64', '65', '66', '67', '68', '69', '70', '71', '72', '73', '74', '75', '76', '77', '78', '79', '80', '81', '82', '83', '84', '85', '86', '87', '88', '89', '90', '91', '92', '93', '94', '95', '96', '97', '98', '99', '100'] },
};

// Глобальные переменные
const CACHE_NAME = 'music-player-offline-v1';
let userPlaylists = JSON.parse(localStorage.getItem('userPlaylists') || '{}');
let currentTrackId = null;
let currentPlaylistId = null;
let isPlaying = false;
let currentLyricIndex = -1;
let isFullscreenLyrics = false;
let showTranslation = false;
let isAutoplayEnabled = localStorage.getItem('autoplay') !== 'false';
let loopMode = localStorage.getItem('loopMode') || 'none';
const audioPlayer = new Audio();

// Инициализация Media Session API
if ('mediaSession' in navigator) {
    navigator.mediaSession.playbackState = 'none';
}

// Регистрация Service Worker
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js').then(registration => {
            console.log('Service Worker зарегистрирован:', registration.scope);
        }).catch(error => {
            console.error('Ошибка регистрации Service Worker:', error);
        });
    });
}

// Обработка событий онлайн/офлайн
window.addEventListener('online', () => {
    console.log('Приложение онлайн');
    const offlineWarning = document.getElementById('offline-warning');
    if (offlineWarning) offlineWarning.classList.add('hidden');
});

window.addEventListener('offline', () => {
    console.log('Приложение офлайн');
    const offlineWarning = document.getElementById('offline-warning');
    if (offlineWarning) offlineWarning.classList.remove('hidden');
});

// Кэширование трека для офлайн-воспроизведения
function cacheTrack(trackId) {
    const track = tracks[trackId];
    if (!track) return;

    navigator.serviceWorker.controller?.postMessage({
        type: 'CACHE_TRACK',
        url: track.audio,
    });

    navigator.serviceWorker.addEventListener('message', event => {
        if (event.data.type === 'CACHE_SUCCESS' && event.data.url === track.audio) {
            alert(`Трек "${track.title}" сохранён для офлайн-воспроизведения`);
        } else if (event.data.type === 'CACHE_FAILED' && event.data.url === track.audio) {
            alert(`Не удалось сохранить трек "${track.title}" для офлайн-режима`);
        }
    });
}

// Проверка кэшированных треков
function checkCachedTracks() {
    caches.open(CACHE_NAME).then(cache => {
        cache.keys().then(keys => {
            const cachedTrackUrls = keys.filter(key => key.url.includes('.mp3')).map(key => key.url);
            console.log('Закэшированные треки:', cachedTrackUrls);
        });
    });
}

// Вспомогательные функции
function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

function formatRemainingTime(seconds, totalDuration) {
    const remaining = totalDuration - seconds;
    return `Осталось: -${formatTime(remaining)}`;
}

function getTrackUrl(trackId) {
    const baseUrl = window.location.origin || 'http://localhost';
    return `${baseUrl}${window.location.pathname}?track=${trackId}`;
}

// Управление воспроизведением
function togglePlay() {
    const track = tracks[currentTrackId];
    if (!track) return;

    if (isPlaying) {
        audioPlayer.pause();
    } else {
        if (audioPlayer.src !== track.audio) {
            audioPlayer.src = track.audio;
            audioPlayer.currentTime = 0;
            // Динамическое кэширование трека при воспроизведении
            caches.open(CACHE_NAME).then(cache => {
                cache.add(track.audio).catch(err => console.error(`Ошибка кэширования трека ${track.title}:`, err));
            });
        }
        audioPlayer.play().catch(e => console.error('Ошибка воспроизведения:', e));
    }

    isPlaying = !isPlaying;
    updatePlayButton();
    updateFullscreenPlayButton();

    // Обновление состояния в Media Session
    if ('mediaSession' in navigator) {
        navigator.mediaSession.playbackState = isPlaying ? 'playing' : 'paused';
    }
}

function playNextTrack() {
    if (!isAutoplayEnabled && loopMode === 'none') return;
    const track = tracks[currentTrackId];
    if (!track) return;

    if (loopMode === 'track') {
        openTrack(currentTrackId, currentPlaylistId);
        togglePlay();
        return;
    }

    if (currentPlaylistId && (loopMode === 'playlist' || isAutoplayEnabled)) {
        const playlist = { ...predefinedPlaylists, ...userPlaylists }[currentPlaylistId];
        if (!playlist) return;
        const currentIndex = playlist.trackIds.indexOf(currentTrackId);
        let nextIndex = currentIndex + 1;
        if (nextIndex >= playlist.trackIds.length) {
            nextIndex = loopMode === 'playlist' ? 0 : -1;
        }
        if (nextIndex >= 0 && tracks[playlist.trackIds[nextIndex]]) {
            openTrack(playlist.trackIds[nextIndex], currentPlaylistId);
            togglePlay();
        }
        return;
    }

    if (isAutoplayEnabled && track.similar && track.similar.length > 0) {
        const nextTrackId = track.similar[0];
        if (nextTrackId && tracks[nextTrackId]) {
            openTrack(nextTrackId);
            togglePlay();
        }
    }
}

function playPreviousTrack() {
    const track = tracks[currentTrackId];
    if (!track) return;

    if (currentPlaylistId) {
        const playlist = { ...predefinedPlaylists, ...userPlaylists }[currentPlaylistId];
        if (!playlist) return;
        const currentIndex = playlist.trackIds.indexOf(currentTrackId);
        let prevIndex = currentIndex - 1;
        if (prevIndex < 0) {
            prevIndex = loopMode === 'playlist' ? playlist.trackIds.length - 1 : -1;
        }
        if (prevIndex >= 0 && tracks[playlist.trackIds[prevIndex]]) {
            openTrack(playlist.trackIds[prevIndex], currentPlaylistId);
            togglePlay();
        }
        return;
    }

    if (track.similar && track.similar.length > 0) {
        const prevTrackId = track.similar[track.similar.length - 1];
        if (prevTrackId && tracks[prevTrackId]) {
            openTrack(prevTrackId);
            togglePlay();
        }
    }
}

function toggleLoop() {
    loopMode = loopMode === 'none' ? 'track' : loopMode === 'track' ? 'playlist' : 'none';
    localStorage.setItem('loopMode', loopMode);
    updateLoopButton();
}

function updateLoopButton() {
    const loopText = document.getElementById('loop-text');
    const playerLoopText = document.getElementById('player-loop-text');
    const text = `Повтор: ${loopMode === 'none' ? 'Выкл' : loopMode === 'track' ? 'Трек' : 'Плейлист'}`;
    if (loopText) loopText.textContent = text;
    if (playerLoopText) playerLoopText.textContent = text;
}

// Обновление интерфейса
function updatePlayButton() {
    const playIcon = document.getElementById('play-icon');
    const pauseIcon = document.getElementById('pause-icon');
    const playText = document.getElementById('play-text');
    const playerPlayIcon = document.getElementById('player-play-icon');
    const playerPauseIcon = document.getElementById('player-pause-icon');

    if (isPlaying) {
        playIcon.classList.add('hidden');
        pauseIcon.classList.remove('hidden');
        playText.textContent = 'Пауза';
        playerPlayIcon.classList.add('hidden');
        playerPauseIcon.classList.remove('hidden');
    } else {
        playIcon.classList.remove('hidden');
        pauseIcon.classList.add('hidden');
        playText.textContent = 'Играть';
        playerPlayIcon.classList.remove('hidden');
        playerPauseIcon.classList.add('hidden');
    }
}

function updateFullscreenPlayButton() {
    const fullscreenText = document.getElementById('fullscreen-play-text');
    if (fullscreenText) {
        fullscreenText.textContent = isPlaying ? 'Пауза' : 'Играть';
    }
}

function updatePlayer() {
    const track = tracks[currentTrackId];
    if (!track) return;

    document.getElementById('player-image').src = track.image;
    document.getElementById('player-title').textContent = track.title;
    document.getElementById('player-artist').textContent = track.artist;
}

function updateLyrics() {
    const track = tracks[currentTrackId];
    if (!track || !track.lyrics) return;

    const currentTime = audioPlayer.currentTime;
    const displayLyrics = showTranslation && track.translations ? track.translations : track.lyrics;
    const lyrics = document.querySelectorAll('#lyrics-container .lyric-line');
    const fullscreenLyrics = document.querySelectorAll('#fullscreen-lyrics-content .lyric-line');

    let newIndex = -1;
    for (let i = 0; i < displayLyrics.length; i++) {
        if (currentTime >= displayLyrics[i].time) {
            newIndex = i;
        } else {
            break;
        }
    }

    if (newIndex !== currentLyricIndex) {
        if (lyrics[currentLyricIndex]) {
            lyrics[currentLyricIndex].classList.remove('active');
            lyrics[currentLyricIndex].classList.add('opacity-60');
        }
        if (fullscreenLyrics[currentLyricIndex]) {
            fullscreenLyrics[currentLyricIndex].classList.remove('active');
        }

        currentLyricIndex = newIndex;

        if (lyrics[currentLyricIndex]) {
            lyrics[currentLyricIndex].classList.add('active');
            lyrics[currentLyricIndex].classList.remove('opacity-60');
            if (!isFullscreenLyrics) {
                lyrics[currentLyricIndex].scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        }
        if (fullscreenLyrics[currentLyricIndex]) {
            fullscreenLyrics[currentLyricIndex].classList.add('active');
            if (isFullscreenLyrics) {
                fullscreenLyrics[currentLyricIndex].scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        }
    }
}

// Навигация по интерфейсу
function openTrack(trackId, playlistId = null) {
    const track = tracks[trackId];
    if (!track) return;

    currentTrackId = trackId;
    currentPlaylistId = playlistId;
    showTranslation = false;
    currentLyricIndex = -1;

    // Установка метаданных для Media Session
    if ('mediaSession' in navigator) {
        navigator.mediaSession.metadata = new MediaMetadata({
            title: track.title,
            artist: track.artist,
            album: 'Музыкальный Плеер',
            artwork: [
                { src: track.image, sizes: '96x96', type: 'image/jpeg' },
                { src: track.image, sizes: '512x512', type: 'image/jpeg' }
            ]
        });

        // Установка обработчиков действий
        navigator.mediaSession.setActionHandler('play', () => {
            togglePlay();
        });

        navigator.mediaSession.setActionHandler('pause', () => {
            togglePlay();
        });

        navigator.mediaSession.setActionHandler('nexttrack', () => {
            playNextTrack();
        });

        navigator.mediaSession.setActionHandler('previoustrack', () => {
            playPreviousTrack();
        });

        // Установка начального прогресса
        navigator.mediaSession.setPositionState({
            duration: track.duration,
            playbackRate: audioPlayer.playbackRate,
            position: audioPlayer.currentTime
        });
    }

    document.getElementById('track-image').src = track.image;
    document.getElementById('track-title').textContent = track.title;
    document.getElementById('track-artist').textContent = track.artist;
    document.getElementById('total-time').textContent = formatTime(track.duration);
    document.getElementById('remaining-time').textContent = formatRemainingTime(0, track.duration);
    document.getElementById('player-total-time').textContent = formatTime(track.duration);
    document.getElementById('player-remaining-time').textContent = formatRemainingTime(0, track.duration);

    const lyricsContainer = document.getElementById('lyrics-container');
    lyricsContainer.innerHTML = '';
    const displayLyrics = track.translations && showTranslation ? track.translations : track.lyrics;
    displayLyrics.forEach(line => {
        const div = document.createElement('div');
        div.className = 'lyric-line mb-4 transition-opacity duration-300 opacity-60';
        div.textContent = line.text;
        lyricsContainer.appendChild(div);
    });

    const translationToggle = document.getElementById('translation-toggle');
    translationToggle.classList.toggle('hidden', !track.translations);
    translationToggle.textContent = showTranslation ? 'Скрыть перевод' : 'Показать перевод';

    const similarContainer = document.querySelector('#track-view .flex.overflow-x-auto');
    similarContainer.innerHTML = '';
    track.similar?.forEach(similarId => {
        const similarTrack = tracks[similarId];
        if (!similarTrack) return;
        const div = document.createElement('div');
        div.className = 'flex flex-col items-center flex-shrink-0 w-24';
        div.onclick = () => openTrack(similarId);
        div.innerHTML = `
            <div class="w-24 h-24 rounded-full overflow-hidden">
                <img src="${similarTrack.image}" alt="${similarTrack.title}" class="w-full h-full object-cover">
            </div>
            <h4 class="mt-3 font-medium text-center truncate w-full">${similarTrack.title}</h4>
            <p class="text-sm text-gray-400 text-center truncate w-full">${similarTrack.artist}</p>
        `;
        similarContainer.appendChild(div);
    });

    document.getElementById('main-view').classList.add('hidden');
    document.getElementById('track-view').classList.remove('hidden');
    document.getElementById('player').classList.remove('hidden');
    if (document.getElementById('playlist-view')) {
        document.getElementById('playlist-view').classList.add('hidden');
    }

    updatePlayer();
    updateAutoplayButton();
    updateLoopButton();
    document.getElementById('progress-bar').value = 0;
    document.getElementById('current-time').textContent = '00:00';
    document.getElementById('player-current-time').textContent = '00:00';

    if (isPlaying) {
        togglePlay();
    }

    window.scrollTo(0, 0);
}

function backToMain() {
    document.getElementById('main-view').classList.remove('hidden');
    document.getElementById('track-view').classList.add('hidden');
    if (document.getElementById('playlist-view')) {
        document.getElementById('playlist-view').classList.add('hidden');
    }
    currentPlaylistId = null;
    if (isFullscreenLyrics) {
        toggleFullscreenLyrics();
    }
}

function toggleFullscreenLyrics() {
    isFullscreenLyrics = !isFullscreenLyrics;
    const fullscreenLyrics = document.getElementById('fullscreen-lyrics');
    const fullscreenContent = document.getElementById('fullscreen-lyrics-content');

    if (isFullscreenLyrics) {
        fullscreenContent.innerHTML = '';
        const track = tracks[currentTrackId];
        if (track && track.lyrics) {
            const displayLyrics = showTranslation && track.translations ? track.translations : track.lyrics;
            displayLyrics.forEach((line, index) => {
                const div = document.createElement('div');
                div.className = `lyric-line ${index === currentLyricIndex ? 'active' : ''}`;
                div.textContent = line.text;
                fullscreenContent.appendChild(div);
            });
        }

        const fullscreenTranslationToggle = document.getElementById('fullscreen-translation-toggle');
        fullscreenTranslationToggle.classList.toggle('hidden', !tracks[currentTrackId]?.translations);
        fullscreenTranslationToggle.textContent = showTranslation ? 'Скрыть перевод' : 'Показать перевод';

        fullscreenLyrics.classList.remove('hidden');
        document.body.style.overflow = 'hidden';

        setTimeout(() => {
            const activeLine = fullscreenContent.querySelector('.lyric-line.active');
            if (activeLine) {
                activeLine.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        }, 100);

        updateFullscreenPlayButton();
    } else {
        fullscreenLyrics.classList.add('hidden');
        document.body.style.overflow = '';
    }
}

function toggleTranslation() {
    showTranslation = !showTranslation;
    const track = tracks[currentTrackId];
    if (!track) return;

    const lyricsContainer = document.getElementById('lyrics-container');
    lyricsContainer.innerHTML = '';
    const displayLyrics = showTranslation && track.translations ? track.translations : track.lyrics;
    displayLyrics.forEach((line, index) => {
        const div = document.createElement('div');
        div.className = `lyric-line mb-4 transition-opacity duration-300 ${index === currentLyricIndex ? '' : 'opacity-60'}`;
        div.textContent = line.text;
        lyricsContainer.appendChild(div);
    });

    if (isFullscreenLyrics) {
        const fullscreenContent = document.getElementById('fullscreen-lyrics-content');
        fullscreenContent.innerHTML = '';
        displayLyrics.forEach((line, index) => {
            const div = document.createElement('div');
            div.className = `lyric-line ${index === currentLyricIndex ? 'active' : ''}`;
            div.textContent = line.text;
            fullscreenContent.appendChild(div);
        });
        setTimeout(() => {
            const activeLine = fullscreenContent.querySelector('.lyric-line.active');
            if (activeLine) {
                activeLine.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        }, 100);
    }

    const translationToggle = document.getElementById('translation-toggle');
    const fullscreenTranslationToggle = document.getElementById('fullscreen-translation-toggle');
    const buttonText = showTranslation ? 'Скрыть перевод' : 'Показать перевод';
    translationToggle.textContent = buttonText;
    fullscreenTranslationToggle.textContent = buttonText;
}

// Управление плейлистами
function updatePlaylistsGrid() {
    const grid = document.getElementById('playlists-grid');
    grid.innerHTML = '';
    const allPlaylists = { ...predefinedPlaylists, ...userPlaylists };
    Object.entries(allPlaylists).forEach(([id, playlist]) => {
        const div = document.createElement('div');
        div.className = 'playlist-card';
        div.onclick = () => openPlaylist(id);
        const coverImage = playlist.trackIds[0] ? tracks[playlist.trackIds[0]].image : 'https://via.placeholder.com/150';
        div.innerHTML = `
            <img src="${coverImage}" alt="${playlist.name}" class="w-full aspect-square object-cover">
            <div class="p-3">
                <h3 class="font-medium truncate">${playlist.name}</h3>
                <p class="text-sm text-gray-400 truncate">${playlist.trackIds.length} треков</p>
            </div>
        `;
        grid.appendChild(div);
    });
}

function openPlaylist(playlistId) {
    const playlist = { ...predefinedPlaylists, ...userPlaylists }[playlistId];
    if (!playlist) return;

    document.getElementById('main-view').classList.add('hidden');
    let playlistView = document.getElementById('playlist-view');
    if (!playlistView) {
        playlistView = document.createElement('div');
        playlistView.id = 'playlist-view';
        document.getElementById('app').appendChild(playlistView);
    }

    playlistView.innerHTML = `
        <button onclick="backToMain()" class="flex items-center text-gray-400 hover:text-white mb-8">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="mr-2">
                <line x1="19" y1="12" x2="5" y2="12"></line>
                <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
            Назад
        </button>
        <h2 class="text-2xl font-semibold mb-4">${playlist.name}</h2>
        <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            ${playlist.trackIds.map(trackId => {
                const track = tracks[trackId];
                if (!track) return '';
                return `
                    <div class="music-card" onclick="openTrack('${trackId}', '${playlistId}')">
                        <img src="${track.image}" alt="${track.title}" class="w-full aspect-square object-cover">
                        <div class="p-3">
                            <h3 class="font-medium truncate">${track.title}</h3>
                            <p class="text-sm text-gray-400 truncate">${track.artist}</p>
                        </div>
                    </div>
                `;
            }).join('')}
        </div>
    `;
    playlistView.classList.remove('hidden');
}

function openCreatePlaylistModal() {
    document.getElementById('create-playlist-modal').classList.remove('hidden');
    document.getElementById('playlist-name-input').focus();
}

function closeCreatePlaylistModal() {
    document.getElementById('create-playlist-modal').classList.add('hidden');
    document.getElementById('playlist-name-input').value = '';
}

function createPlaylist() {
    const name = document.getElementById('playlist-name-input').value.trim();
    if (!name) return alert('Введите название плейлиста');

    const playlistId = 'u' + Date.now();
    userPlaylists[playlistId] = { name, trackIds: [] };
    localStorage.setItem('userPlaylists', JSON.stringify(userPlaylists));
    updatePlaylistsGrid();
    closeCreatePlaylistModal();
}

function openAddToPlaylistModal() {
    const playlistsList = document.getElementById('playlists-list');
    playlistsList.innerHTML = '';
    const allPlaylists = { ...predefinedPlaylists, ...userPlaylists };
    Object.entries(allPlaylists).forEach(([id, playlist]) => {
        const div = document.createElement('div');
        div.className = 'p-2 hover:bg-gray-700/50 cursor-pointer rounded';
        div.textContent = playlist.name;
        div.onclick = () => addToPlaylist(id);
        playlistsList.appendChild(div);
    });
    document.getElementById('add-to-playlist-modal').classList.remove('hidden');
}

function closeAddToPlaylistModal() {
    document.getElementById('add-to-playlist-modal').classList.add('hidden');
}

function addToPlaylist(playlistId) {
    if (!currentTrackId) return;
    if (userPlaylists[playlistId]) {
        if (!userPlaylists[playlistId].trackIds.includes(currentTrackId)) {
            userPlaylists[playlistId].trackIds.push(currentTrackId);
            localStorage.setItem('userPlaylists', JSON.stringify(userPlaylists));
        }
    }
    closeAddToPlaylistModal();
    alert('Трек добавлен в плейлист');
}

// Поделиться треком
function shareTrack() {
    if (!currentTrackId) return;
    const track = tracks[currentTrackId];
    if (!track) return;

    const url = getTrackUrl(currentTrackId);
    const text = `Слушаю "${track.title}" от ${track.artist} на Музыкальном Плеере!`;

    if (navigator.share && window.location.protocol === 'https:') {
        navigator.share({ title: track.title, text, url })
            .catch(() => openShareModal(url, text));
    } else {
        openShareModal(url, text);
    }
}

function openShareModal(url, text) {
    document.getElementById('share-modal').classList.remove('hidden');
    const manualCopy = document.getElementById('manual-copy');
    const manualCopyInput = document.getElementById('manual-copy-id');
    if (window.location.protocol !== 'https:' && window.location.hostname !== 'localhost') {
        manualCopy.classList.remove('hidden');
        manualCopyInput.value = url;
    } else {
        manualCopy.classList.add('hidden');
    }
}

function closeShareModal() {
    document.getElementById('share-modal').classList.add('hidden');
}

function selectManualCopyText() {
    const input = document.getElementById('manual-copy-id');
    input.select();
    alert('Ссылка выделена. Скопируйте её с помощью Ctrl+C.');
}

function copyTrackUrl() {
    if (!currentTrackId) return;
    const url = getTrackUrl(currentTrackId);
    if (window.location.protocol === 'https:' || window.location.hostname === 'localhost') {
        navigator.clipboard.writeText(url)
            .then(() => {
                alert('Ссылка скопирована!');
                closeShareModal();
            })
            .catch(() => {
                alert('Не удалось скопировать. Скопируйте вручную.');
                document.getElementById('manual-copy').classList.remove('hidden');
                document.getElementById('manual-copy-id').value = url;
            });
    } else {
        alert('Копирование недоступно. Скопируйте вручную.');
        document.getElementById('manual-copy').classList.remove('hidden');
        document.getElementById('manual-copy-id').value = url;
    }
}

function shareToTwitter() {
    const track = tracks[currentTrackId];
    const url = getTrackUrl(currentTrackId);
    const text = `Слушаю "${track.title}" от ${track.artist} на Музыкальном Плеере!`;
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, '_blank');
    closeShareModal();
}

function shareToWhatsApp() {
    const track = tracks[currentTrackId];
    const url = getTrackUrl(currentTrackId);
    const text = `Слушаю "${track.title}" от ${track.artist} на Музыкальном Плеере! ${url}`;
    window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`, '_blank');
    closeShareModal();
}

function shareToTelegram() {
    const track = tracks[currentTrackId];
    const url = getTrackUrl(currentTrackId);
    const text = `Слушаю "${track.title}" от ${track.artist} на Музыкальном Плеере! ${url}`;
    window.open(`https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`, '_blank');
    closeShareModal();
}

function toggleAutoplay() {
    isAutoplayEnabled = !isAutoplayEnabled;
    localStorage.setItem('autoplay', isAutoplayEnabled);
    updateAutoplayButton();
}

function updateAutoplayButton() {
    const autoplayText = document.getElementById('autoplay-text');
    if (autoplayText) {
        autoplayText.textContent = `Автовоспроизведение: ${isAutoplayEnabled ? 'Вкл' : 'Выкл'}`;
    }
}

// Темы
function toggleTheme() {
    const body = document.body;
    const isLightTheme = body.classList.contains('light-theme');
    body.classList.toggle('light-theme');

    const themeText = document.getElementById('theme-text');
    const themeIcon = document.getElementById('theme-icon');
    if (isLightTheme) {
        themeText.textContent = 'Светлая тема';
        themeIcon.innerHTML = '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>';
        localStorage.setItem('theme', 'dark');
    } else {
        themeText.textContent = 'Темная тема';
        themeIcon.innerHTML = '<path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>';
        localStorage.setItem('theme', 'light');
    }
}

// Инициализация
document.addEventListener('DOMContentLoaded', () => {
    // Загрузка темы
    if (localStorage.getItem('theme') === 'light') {
        document.body.classList.add('light-theme');
        document.getElementById('theme-text').textContent = 'Темная тема';
        document.getElementById('theme-icon').innerHTML = '<path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>';
    }

    // Загрузка трека из URL
    const urlParams = new URLSearchParams(window.location.search);
    const trackId = urlParams.get('track');
    if (trackId && tracks[trackId]) {
        openTrack(trackId);
    }

    // Обработчики событий
    document.getElementById('theme-toggle').addEventListener('click', toggleTheme);
    document.getElementById('volume-control').addEventListener('input', e => {
        audioPlayer.volume = e.target.value / 100;
    });
    document.getElementById('progress-bar').addEventListener('input', e => {
        const track = tracks[currentTrackId];
        if (!track) return;
        const seekTime = (e.target.value / 100) * track.duration;
        audioPlayer.currentTime = seekTime;
        document.getElementById('current-time').textContent = formatTime(seekTime);
        document.getElementById('player-current-time').textContent = formatTime(seekTime);
        document.getElementById('remaining-time').textContent = formatRemainingTime(seekTime, track.duration);
        document.getElementById('player-remaining-time').textContent = formatRemainingTime(seekTime, track.duration);
    });

    audioPlayer.addEventListener('timeupdate', () => {
        const track = tracks[currentTrackId];
        if (!track) return;
        const currentTime = audioPlayer.currentTime;
        const progress = (currentTime / track.duration) * 100;
        document.getElementById('progress-bar').value = progress;
        document.getElementById('current-time').textContent = formatTime(currentTime);
        document.getElementById('player-current-time').textContent = formatTime(currentTime);
        document.getElementById('remaining-time').textContent = formatRemainingTime(currentTime, track.duration);
        document.getElementById('player-remaining-time').textContent = formatRemainingTime(currentTime, track.duration);
        updateLyrics();

        // Обновление прогресса в Media Session
        if ('mediaSession' in navigator && track.duration) {
            navigator.mediaSession.setPositionState({
                duration: track.duration,
                playbackRate: audioPlayer.playbackRate,
                position: currentTime
            });
        }
    });

    audioPlayer.addEventListener('ended', () => {
        isPlaying = false;
        updatePlayButton();
        updateFullscreenPlayButton();
        document.getElementById('progress-bar').value = 0;
        document.getElementById('current-time').textContent = '00:00';
        document.getElementById('player-current-time').textContent = '00:00';
        document.getElementById('remaining-time').textContent = `Осталось: -${formatTime(tracks[currentTrackId].duration)}`;
        document.getElementById('player-remaining-time').textContent = `Осталось: -${formatTime(tracks[currentTrackId].duration)}`;

        // Обновление состояния в Media Session
        if ('mediaSession' in navigator) {
            navigator.mediaSession.playbackState = 'paused';
        }

        playNextTrack();
    });

    audioPlayer.addEventListener('play', () => {
        isPlaying = true;
        updatePlayButton();
        updateFullscreenPlayButton();
        if ('mediaSession' in navigator) {
            navigator.mediaSession.playbackState = 'playing';
        }
    });

    audioPlayer.addEventListener('pause', () => {
        isPlaying = false;
        updatePlayButton();
        updateFullscreenPlayButton();
        if ('mediaSession' in navigator) {
            navigator.mediaSession.playbackState = 'paused';
        }
    });

    document.addEventListener('keydown', e => {
        if (e.key === 'Escape' && isFullscreenLyrics) {
            toggleFullscreenLyrics();
        } else if (e.key === 'Escape' && !document.getElementById('create-playlist-modal').classList.contains('hidden')) {
            closeCreatePlaylistModal();
        } else if (e.key === 'Escape' && !document.getElementById('add-to-playlist-modal').classList.contains('hidden')) {
            closeAddToPlaylistModal();
        } else if (e.key === 'Escape' && !document.getElementById('share-modal').classList.contains('hidden')) {
            closeShareModal();
        } else if (e.code === 'Space' && currentTrackId) {
            e.preventDefault();
            togglePlay();
        }
    });

    audioPlayer.volume = 0.5;
    updatePlaylistsGrid();
    updateAutoplayButton();
    updateLoopButton();
    checkCachedTracks();
});
