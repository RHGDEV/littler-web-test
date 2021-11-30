let i = new TypeIt("#typingtext", {
    string: [],
    speed: 100,
    waitUntilVisible: true
})
.type('Audit Logs. Redefined.')
.pause(500)
.move(-11)
.options({speed: 100})
.delete(11)
.pause(300)
.options({speed: 100})
.type('Moderation.')
.pause(500)
.options({speed: 200})
.delete(11)
.pause(300)
.options({speed: 100})
.type('Everything.')
.pause(500)
.move(null, { to: "END" })
.options({speed: 200})
.delete(12)
.options({speed: 100})
.type(' needed within a discord bot.')
.go();
