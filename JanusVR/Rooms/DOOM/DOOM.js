var a = jQuery.Event( 'keydown', { which: $.ui.keyCode.F } );
if (player.flying == 1) {
    $('input').trigger(a);
}
room.onKeyDown = function(event) {
    if (event.keyCode == "F") {
        event.preventDefault();
    }
}