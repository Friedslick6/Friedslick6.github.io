var falldistance;
room.onLoad = function() {
    my_collision = room.createObject('Object', {
        'id': 'cylinder',
        'js_id': 'playermarker',
        'pos': Vector(player.pos),
        'scale': Vector(0.6, 1.8, 0.6),
        'collision_id': 'cylinder',
        'collision_static': 'true',
        'collision_trigger': 'true',
        'visible': 'false'
    });
}
room.onCollisionExit = function(object1, object2) {
    if (object1.js_id == 'playermarker' && object2.js_id == '2') {
        falldistance = room.objects['playermarker'].pos.y - 1.375;
    }
}
room.onCollisionEnter = function(object1, object2) {
    if (object1.js_id == 'playermarker' && object2.js_id == '2') {
        if (room.objects['playermarker'].pos.y <= falldistance) {
            room.playSound(DSOOF);
        }
    }
}
room.onKeyDown = function(event) {
    if (event.keyCode == "F") {
        event.preventDefault();
    }
}