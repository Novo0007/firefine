sparksjr.onB(function () {
    sparksjr.changeScoreOverride(1)
    music.play(music.createSong(hex`0078000408020100001c00010a006400f401640000040000000000000000000000000005000004060008000c00011d`), music.PlaybackMode.InBackground)
})
sparksjr.onScore2(-1, function () {
    stopwatch.stopJr()
})
sparksjr.onScore2(-10, function () {
    sparksjr.fireLoss()
})
sparksjr.onScore(200, function () {
    sparksjr.fireWin()
})
scene.setBG(assets.image`sss`)
sparksjr.addFire()
stopwatch.onUpdateInterval3(1, function () {
    sparksjr.changeScoreOverride(-1)
})
stopwatch.onUpdateInterval3(600, function () {
    stopwatch.stopJr()
})
