document.addEventListener('DOMContentLoaded', () => {
    const webseriesListContainer = document.getElementById('webseries-list');
    const popupOverlay = document.getElementById('popup-overlay');
    const popupContent = document.getElementById('popup-content');
    const popupInnerContent = document.getElementById('popup-inner-content');
    const popupCloseButton = document.getElementById('popup-close-button');
    const videoPopupOverlay = document.getElementById('video-popup-overlay');
    const videoPopupContent = document.getElementById('video-popup-content');
    const videoPopupCloseButton = document.getElementById('video-popup-close-button');
    const videoTitleBar = document.getElementById('video-title-bar');
    const videoViews = document.getElementById('video-views');
    const videoEpisodeImage = document.getElementById('video-episode-image');
    const videoEpisodeSession = document.getElementById('video-episode-session');
    const videoEpisodeTime = document.getElementById('video-episode-time');
    let playerInstance;

      let liveViewCount = 0;


    const webSeriesData = [
        {
          id: 1,
            title: 'Web Series 1',
            image: 'assets/webseries-images/webseries1.jpg',
            description: 'A short description for Web Series 1.',
            public_time: '12 Dec 2023',
            duration_time: '120 min',
            sessions: [
                {
                    id: 1,
                    title: 'Session 1',
                    image: 'assets/session-images/session1.jpg',
                    description: 'Description for Session 1.',
                    public_time: '12 Dec 2023',
                    duration_time: '60 min',
                    episodes: [
                        {
                            id: 1,
                            title: 'Episode 1',
                            image: 'assets/episode-images/episode1.jpg',
                            description: 'Description for Episode 1.',
                            public_time: '12 Dec 2023',
                            duration_time: '30 min',
                             videoUrl: 'videos/webseries1/session1/episode1.m3u8',
                            videoUrl720p:'videos/webseries1/session1/episode1_720p.mp4',
                            videoUrl480p:'videos/webseries1/session1/episode1_480p.mp4',
                            videoUrl1080p:'videos/webseries1/session1/episode1_1080p.mp4',
                            subtitlesUrl: 'videos/webseries1/session1/episode1.vtt',
                            subtitlesUrlEng: 'videos/webseries1/session1/episode1_english.vtt',
                        },
                        {
                          id: 2,
                            title: 'Episode 2',
                            image: 'assets/episode-images/episode2.jpg',
                            description: 'Description for Episode 2.',
                            public_time: '13 Dec 2023',
                            duration_time: '30 min',
                             videoUrl: 'videos/webseries1/session1/episode2.m3u8',
                            videoUrl720p:'videos/webseries1/session1/episode2_720p.mp4',
                            videoUrl480p:'videos/webseries1/session1/episode2_480p.mp4',
                            videoUrl1080p:'videos/webseries1/session1/episode2_1080p.mp4',
                            subtitlesUrl: 'videos/webseries1/session1/episode2.vtt',
                            subtitlesUrlEng: 'videos/webseries1/session1/episode2_english.vtt',
                        },
                        {
                            id: 3,
                              title: 'Episode 3',
                              image: 'assets/episode-images/episode3.jpg',
                              description: 'Description for Episode 3.',
                              public_time: '14 Dec 2023',
                              duration_time: '30 min',
                               videoUrl: 'videos/webseries1/session1/episode3.m3u8',
                              videoUrl720p:'videos/webseries1/session1/episode3_720p.mp4',
                              videoUrl480p:'videos/webseries1/session1/episode3_480p.mp4',
                              videoUrl1080p:'videos/webseries1/session1/episode3_1080p.mp4',
                               subtitlesUrl: 'videos/webseries1/session1/episode3.vtt',
                               subtitlesUrlEng: 'videos/webseries1/session1/episode3_english.vtt',
                          }
                    ]
                },
                {
                  id: 2,
                    title: 'Session 2',
                    image: 'assets/session-images/session2.jpg',
                    description: 'Description for Session 2.',
                    public_time: '15 Dec 2023',
                    duration_time: '60 min',
                    episodes: [
                        {
                            id: 1,
                              title: 'Episode 1',
                              image: 'assets/episode-images/episode4.jpg',
                              description: 'Description for Episode 1 of session 2.',
                              public_time: '16 Dec 2023',
                              duration_time: '30 min',
                               videoUrl: 'videos/webseries1/session2/episode1.m3u8',
                                videoUrl720p:'videos/webseries1/session2/episode1_720p.mp4',
                                videoUrl480p:'videos/webseries1/session2/episode1_480p.mp4',
                                videoUrl1080p:'videos/webseries1/session2/episode1_1080p.mp4',
                                subtitlesUrl: 'videos/webseries1/session2/episode1.vtt',
                              subtitlesUrlEng: 'videos/webseries1/session2/episode1_english.vtt',
                          },
                          {
                              id: 2,
                              title: 'Episode 2',
                              image: 'assets/episode-images/episode5.jpg',
                              description: 'Description for Episode 2 of session 2.',
                              public_time: '17 Dec 2023',
                              duration_time: '30 min',
                             videoUrl: 'videos/webseries1/session2/episode2.m3u8',
                                videoUrl720p:'videos/webseries1/session2/episode2_720p.mp4',
                                videoUrl480p:'videos/webseries1/session2/episode2_480p.mp4',
                                videoUrl1080p:'videos/webseries1/session2/episode2_1080p.mp4',
                                subtitlesUrl: 'videos/webseries1/session2/episode2.vtt',
                              subtitlesUrlEng: 'videos/webseries1/session2/episode2_english.vtt',
                            },
                    ]
                }
            ]
        },
        {
          id: 2,
            title: 'Web Series 2',
            image: 'assets/webseries-images/webseries2.jpg',
            description: 'A short description for Web Series 2.',
            public_time: '25 Dec 2023',
            duration_time: '90 min',
            sessions: [] // Add session and episode data
        },
        {
          id: 3,
            title: 'Web Series 3',
            image: 'assets/webseries-images/webseries3.jpg',
            description: 'A short description for Web Series 3.',
              public_time: '25 Dec 2023',
              duration_time: '100 min',
              sessions: []
        },
        {
          id: 4,
            title: 'Web Series 4',
            image: 'assets/webseries-images/webseries4.jpg',
            description: 'A short description for Web Series 4.',
              public_time: '30 Dec 2023',
              duration_time: '125 min',
             sessions: []
        },
        {
          id: 5,
            title: 'Web Series 5',
            image: 'assets/webseries-images/webseries5.jpg',
            description: 'A short description for Web Series 5.',
              public_time: '01 Jan 2024',
              duration_time: '130 min',
             sessions: []
        },
      ];

    function renderWebSeries(series) {
        webseriesListContainer.innerHTML = '';
        series.forEach(seriesItem => {
            const card = document.createElement('div');
            card.classList.add('webseries-card');
            card.innerHTML = `
                <img src="${seriesItem.image}" alt="${seriesItem.title}">
                <h3>${seriesItem.title}</h3>
                <p>${seriesItem.description}</p>
                <div class="detail-time">
                <span>${seriesItem.public_time}</span>
                <span>${seriesItem.duration_time}</span>
                </div>
                <a href="#" class="view-detail-button" data-id="${seriesItem.id}">View Details</a>
            `;
            webseriesListContainer.appendChild(card);
        });
    }

    function renderSessionList(sessions, webseriesTitle) {
      let sessionHTML = `<h2 style="margin-bottom:1em;">${webseriesTitle} - Sessions</h2><div class="session-list">`;
      sessions.forEach(session => {
          sessionHTML += `<div class="session-card" data-session-id="${session.id}">
          <img src="${session.image}" alt="${session.title}">
          <div class="session-info">
            <h3>${session.title}</h3>
              <p>${session.description}</p>
              <div class="detail-time">
                <span>${session.public_time}</span>
                <span>${session.duration_time}</span>
              </div>
            </div>
              <a href="#" class="watch-now-button" data-session-id="${session.id}">Watch Now</a>
           </div>`
        });
       sessionHTML += '</div>';
       return sessionHTML;
    }
    function renderEpisodeList(episodes, sessionTitle) {
      let episodeHTML = `<h3 style="margin-bottom:0.5em;">${sessionTitle} - Episodes</h3>
      <div class="episode-list">
        <ul>`;
      episodes.forEach(episode => {
        episodeHTML +=  `<li class="episode-card" data-episode-id="${episode.id}">
          <img src="${episode.image}" alt="${episode.title}">
          <div class="episode-info">
            <h3>${episode.title}</h3>
            <p>${episode.description}</p>
            <div class="detail-time">
              <span>${episode.public_time}</span>
              <span>${episode.duration_time}</span>
            </div>
          </div>
          <a href="#" class="watch-now-button" data-episode-id="${episode.id}">Watch Now</a>
        </li>`;
      });
      episodeHTML += `</ul></div>`
      return episodeHTML;
    }
    // Function to open video player pop-up
    function openVideoPlayer(episode, session) {
          const playerContainer = document.getElementById('player');
            if (playerInstance) {
              playerInstance.remove();
            }
        if (episode && episode.videoUrl) {
            videoPopupOverlay.style.display = 'flex';
            videoViews.textContent = `Views: ${liveViewCount++}`;
            videoTitleBar.textContent = `${episode.title}`;
            videoEpisodeImage.innerHTML = `<img src="${episode.image}" alt="${episode.title}"/>`;
            videoEpisodeSession.textContent = `${session.title}`;
            videoEpisodeTime.textContent = `${session.public_time} | ${session.duration_time}`;
            // JW Player initialization code
             playerInstance = jwplayer('player').setup({
                file: episode.videoUrl,
                 poster:episode.image,
                width: '100%',
                aspectratio: '16:9',
                playbackRateControls: true,
                tracks: [
                    {
                        file: episode.subtitlesUrl,
                        label: 'Default',
                         kind: "subtitles",
                          default:true
                    },
                    {
                      file: episode.subtitlesUrlEng,
                      label: 'English',
                      kind: "subtitles"
                     }
                ],
                 advertising: {
                  client: "vast",
                  schedule: [
                      {
                          tag: "https://pubads.g.doubleclick.net/gampad/ads?sz=640x480&iu=/124319096/external/ad_samples&ciu_szs=300x250&gdfp_req=1&env=vp&output=vast&unviewed_position_starts=1&cust_params=deployment%3Ddevsite%26sample_ct%3Dlinearvpaid2&correlator=",
                          offset: "pre"
                      }
                  ]
                  },
               });
              jwplayer().on('ready', function (e) {
                  var api = jwplayer().getApi();
                  // Watermark code here
                     var watermarkDiv = document.createElement('div');
                     watermarkDiv.classList.add('jw-watermark');
                     watermarkDiv.style.position = 'absolute';
                     watermarkDiv.style.top = '10px';
                     watermarkDiv.style.left = '10px';
                     watermarkDiv.style.zIndex = 10;
                     watermarkDiv.style.color = 'white';
                      watermarkDiv.style.opacity = 0.5;
                     watermarkDiv.style.animation = 'watermarkAnimation 5s linear infinite';
                      watermarkDiv.textContent = "Custom Text";
                       playerContainer.appendChild(watermarkDiv);
                });
          jwplayer().on('complete', function() {
                    playerInstance.remove();
              });
        } else {
            console.error('Invalid episode or no video URL provided.');
        }
    }
   //Watermark animation
    var css = '@keyframes watermarkAnimation { 0% { opacity: 0.5; } 50% { opacity: 1; } 100% { opacity: 0.5; } }';
   var style = document.createElement('style');
    if (style.styleSheet) {
        style.styleSheet.cssText = css;
    } else {
        style.appendChild(document.createTextNode(css));
    }
    document.getElementsByTagName('head')[0].appendChild(style);

    // Event listener for closing the video popup
    videoPopupCloseButton.addEventListener('click', () => {
        videoPopupOverlay.style.display = 'none';
         if (playerInstance) {
             playerInstance.remove();
            }
          liveViewCount = 0;
    });
    webseriesListContainer.addEventListener('click', (event) => {
      if(event.target.classList.contains('view-detail-button')){
          event.preventDefault();
            const seriesId = parseInt(event.target.getAttribute('data-id'));
            const selectedSeries = webSeriesData.find(series => series.id === seriesId);
            if(selectedSeries) {
                popupInnerContent.innerHTML = renderSessionList(selectedSeries.sessions,selectedSeries.title);
                popupOverlay.style.display = 'flex';

             popupInnerContent.addEventListener('click', (event) => {
              if(event.target.classList.contains('watch-now-button')) {
                  event.preventDefault();
                    const sessionId = parseInt(event.target.getAttribute('data-session-id'));
                    const selectedSession = selectedSeries.sessions.find(session => session.id === sessionId);
                    if(selectedSession) {
                        popupInnerContent.innerHTML = renderEpisodeList(selectedSession.episodes, selectedSession.title);
                        popupInnerContent.addEventListener('click', (event) => {
                            if(event.target.classList.contains('watch-now-button')) {
                                  event.preventDefault();
                                const episodeId = parseInt(event.target.getAttribute('data-episode-id'));
                                const selectedEpisode = selectedSession.episodes.find(episode => episode.id === episodeId);
                                if (selectedEpisode) {
                                      openVideoPlayer(selectedEpisode, selectedSession);
                                }
                            }
                        })
                    }
                }
             });
            }
      }
    });

    popupCloseButton.addEventListener('click', () => {
        popupOverlay.style.display = 'none';
          popupInnerContent.innerHTML = '';
    });


    function performSearch() {
        const searchTerm = document.getElementById('search-input').value.toLowerCase();
        const filteredSeries = webSeriesData.filter(series => series.title.toLowerCase().includes(searchTerm));
        renderWebSeries(filteredSeries);
    }
    renderWebSeries(webSeriesData);
});
