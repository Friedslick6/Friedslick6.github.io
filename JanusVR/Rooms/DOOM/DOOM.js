room.onLoad() {
    if (player.flying == 1) {
        player.flying = 0;
    }
}
room.onKeyDown = function(event) {
    if (event.keyCode == "F") {
        event.preventDefault();
    }
}