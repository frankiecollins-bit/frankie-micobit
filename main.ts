basic.forever(function () {
    music.play(music.stringPlayable("C5 C5 C5 C5 C5 C5 C5 C5 ", 500), music.PlaybackMode.UntilDone)
    music.play(music.stringPlayable("C5 B B B B C5 B C5 ", 500), music.PlaybackMode.LoopingInBackground)
})
