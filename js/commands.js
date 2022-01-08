(async () => {
    //https://api.neeko-bot.xyz/commands
    let commands = await fetch('https://api.littler.tk/stats');
    if (commands.status != 200) throw console.error("Couldn't fetch commands.");
    commands = await commands.json()
    let cmd = commands.commands
    commands = commands.commandDisplay;

    const dText = document.getElementById('descriptiveText');
    dText.innerText = `Little R offers a wide range of commands.\n${commands.length} categories and ${cmd} commands are available right now!`
    const cmdList = document.querySelector('#cmdList');
    const navGrid = document.querySelector('#cmdNav');
    navGrid.classList = `grid grid-cols-${Math.ceil(commands.length/2)} gap-4`

    addCategory = (cate) => {
        const cateNav = document.createElement('a');
        cateNav.href = `#g-${cate.id}`;
        cateNav.innerText = cate.id.toUpperCase();
        cateNav.classList = 'text-sm text-white font-medium title-font mb-4 border border-gray-700 p-6 rounded-xl'
        navGrid.appendChild(cateNav)

        const grid = document.createElement('div');
        grid.id = `g-${cate.id}`;
        grid.classList = 'grid grid-cols-4 gap-4 py-4'
        cmdList.appendChild(grid)

        const title = document.createElement('p');
        title.classList = 'col-span-4 text-lg text-white font-medium title-font mb-4 border border-white-700 p-6 rounded-xl'
        if (cate.id == 'nsfw') title.classList.add('border-red-700')
        title.innerText = `${cate.emoji} ${cate.title} (${cate.id})`;
        grid.appendChild(document.createElement('br'))
        grid.appendChild(title)

        return grid
    }
    /*<div class="">
            <div class="border border-gray-700 border-opacity-75 p-6 rounded-xl">
              <h2 class="text-lg text-white font-medium title-font mb-4">Collected Information</h2>
              <p class="leading-relaxed text-base">
                Information stored is properly encrypted.
                <br>Stored information contains:
                <br><br>Guild Names & IDs
                <br>Channel IDs
                <br>Role IDs
                <br>User Names & IDs
                <br>Message Data
              </p>
            </div>
          </div>*/
    addCommand = (grid, category, cmd) => {
        const commandBlock = document.createElement('div');
        commandBlock.classList = 'border border-gray-700 border-opacity-75 p-6 rounded-xl'
        if (cmd.nsfw) commandBlock.classList.add('border-red-700')
        commandBlock.id = `cmd-${cmd.name}`;
        grid.appendChild(commandBlock)

        const title = document.createElement('h2');
        title.classList = 'text-lg text-white font-extralight title-font mb-4'
        title.innerText = `l;${cmd.name}`;

        const aliases = document.createElement('h3');
        aliases.classList = 'text-sm text-white-900 font-normal mb-4'
        aliases.innerText = cmd.aliases!=='' ? `\nAliases: ${cmd.aliases}\n` : '';

        const description = document.createElement('p');
        description.classList = 'text-sm text-white-500 font-medium mb-4'
        description.innerText = cmd.description;

        commandBlock.append(title, aliases, description);
    }
    
    commands.forEach(category => {
        let grid = addCategory(category);
        category.commands.forEach(cmd => addCommand(grid, category.id, cmd))
    })
})();