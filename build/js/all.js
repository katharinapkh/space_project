var tag = document.createElement('script');

tag.src = "https://www.youtube.com/NtrVwX1ncqk";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var video;
function onYouTubeIframeAPIReady() {
    video = new YT.Player('video', {
        height: '600',
        width: '960',
        videoId: 'NtrVwX1ncqk',
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}
function onPlayerReady(event) {
    event.target.playVideo();
}

var done = false;
function onPlayerStateChange(event) {
    if (event.data === YT.PlayerState.PLAYING && !done) {
        setTimeout(stopVideo, 6000);
        done = true;
    }
}
function stopVideo() {
    video.stopVideo();
}