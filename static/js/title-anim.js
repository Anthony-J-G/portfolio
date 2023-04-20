const title = document.getElementById("title-container");


const t_name = `<h1 class="title-name">Anthony-J-G</h1>`
const t_desc = `<h1 class="title-desc">@MyPortfolio</h1>`
const t_dir =  `<h1 class="title-dir">~</h1>`

const title_prefix = `${t_name}${t_desc}<h1 class="title-other">:</h1>${t_dir}<h1 class="title-other">$</h1>`

const fake_commands = ["cd s_nutz", "mkdir new_project", "ctr-alt-del", "cmake .."]
const fc_len = fake_commands.length
var i = 0

title.innerHTML = `<h1>${title_prefix}</h1>`
var cmd_entry = `<h1 class="title-other"> </h1>`
var cmd_cursor = ""
var cmd_builder = ""
var is_typing = true;

j = 0
setInterval(function() {
    
    if (!is_typing) { return; }

    cmd_builder += fake_commands[j].charAt(cmd_builder.length);
    cmd_entry = `<h1 class="title-other">${cmd_builder}</h1>`

    title.innerHTML = `${title_prefix}<h1> </h1>${cmd_entry}${cmd_cursor}`

    if (cmd_builder === fake_commands[j]) {
        is_typing = false
        j = (j + 1) % fake_commands.length
    }

}, 100);


const min_delay = 15000;
const max_delay = 5000;
var x = 7000
setInterval(function() {
    is_typing = true;

    cmd_builder = ""
    cmd_entry = `<h1 class="title-other"> </h1>`;
    x = Math.floor(Math.random() * (max_delay - min_delay + 1)) + min_delay;

}, x);


setInterval(function() {

    if (is_typing) { return; }
    
    if (i % 2 == 0) {
        cmd_cursor = `<h1 class="title-other"> </h1>`
    } else {
        cmd_cursor = `<h1 class="title-other">_</h1>`
    }

    title.innerHTML = `${title_prefix}<h1> </h1>${cmd_entry}${cmd_cursor}`

    i = (i + 1) % fc_len
    
}, 300); // Interval time in milliseconds (1000ms = 1 second)






