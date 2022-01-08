$.getJSON('https://api.littler.tk/stats', data => setStats(data)).catch(() => setStats());


time = (s) => { //? d, h, m and s
    let d = Math.floor(s / (24 * 60 * 60));
    s -= d * (24 * 60 * 60);
    let h = Math.floor(s / (60 * 60));
    s -= h * (60 * 60);
    let m = Math.floor(s / (60));
    s -= m * (60);
    return `${((0 < d) ? (d + 'd, ') : '')}${((0 < h) ? (h + 'h, ') : '')}${((0 < m) ? (m + 'm, ') : '')}${s}s`;
};
numb = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}


setDiv = (id, text) => { $(id).text(text); }
setStats = (data = {}) => {
    if (data) {
        console.log(data);
        if (data.nodata == 1) return $("#stat-container").removeAttr("style").hide();
        const { commands, servers, uptime, users } = data;
        setDiv("#dt-commands", commands);
        setDiv("#dt-servers", servers);
        //setDiv("#dt-uptime", time(uptime));
        setDiv("#dt-users", numb(users));
    }
};