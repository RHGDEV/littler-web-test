/*new TypeIt("#typingtext", {
    strings,
    breakLines: false,
    speed: 155,
    loop: true,
    deletespeed: 100,
    nextStringDelay: 3000,
    waitUntilVisible: true
});*/

let i = new TypeIt("#typingtext", {
    string: [],
    speed: 100,
    waitUntilVisible: true
})
.type('Logbooks. Redefined.')
.pause(500)
.move(-11)
.options({speed: 100})
.delete(9)
.pause(300)
.options({speed: 100})
.type('Moderation.')
.pause(500)
.options({speed: 200})
.delete(11)
.pause(300)
.options({speed: 100})
.type('Fun.')
.pause(500)
.options({speed: 200})
.delete(4)
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

/*setInterval(function() {
   new TypeIt("#typingtext", {
        speed: 155,
        waitUntilVisible: true
    })
.type('The programers')
.pause(300)
.options({speed: 200})
.delete(3)
.options({speed: 45})
.pause(300)
.type('mer\'s wife sent him to teh sto.')
.pause(500)
.options({speed: 200})
.delete(7)
.type('he store.')
.pause(500)
.break()
.options({speed: 45})
.type('Her instructions were <em>"Buy butter. See if they have 10 eggs. If they do, buy ten.</em>"')
.pause(1000)
.break()
.type('He came back with ten packs of butter. ')
.pause(1000)
.type('Because they have eggs.'); 
}, 10000);*/
