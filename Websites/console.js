/*
    j0w03l.me // console.js
    
    This code sucks, I know.
*/

// --- CONFIG --- //
var MAX_CHARS_X = 72; //76;
const SRC_TEXT_1 = "total 12K\n-rw-r--r-- 1 2 Feb  4 21:06 about_me.txt\n-rw-r--r-- 1 2 Feb  4 21:06 456.txt\n-rw-r--r-- 1 2 Feb  4 21:06 789.txt";
const SRC_TEXT_2 = "About me is work in progress...";
const SRC_TEXT_3_1 = "Contacts:\n\nDiscord: j0w03l\nGitHub: https://github.com/J0w03L\nEmail: j0w03l at j0w03l dot me";
const SRC_TEXT_3_2 = "My PGP Public Key:\n\n-----BEGIN PGP PUBLIC KEY BLOCK-----\n\n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\naIA80yKTMo/+aAuHCf6Gn1I=\n=RJvj\n-----END PGP PUBLIC KEY BLOCK-----\n\n";
const SRC_TEXT_4 = "GNU bash, version 5.1.16(1)-release (x86_64-pc-linux-gnu)\nThese shell commands are defined internally.\nType `help' to see this list.\n\nA star (*) next to a name means that the command is disabled.\n\nhelp\u00a0 \u00a0 \u00a0 \u00a0 \u00a0 \u00a0 \u00a0 \u00a0 \u00a0 \u00a0 \u00a0 \u00a0 \u00a0 \u00a0 \u00a0 ls\ncat\u00a0 \u00a0 \u00a0 \u00a0 \u00a0 \u00a0 \u00a0 \u00a0 \u00a0 \u00a0 \u00a0 \u00a0 \u00a0 \u00a0 \u00a0 \u00a0whoami\nclear\n";
const SRC_TEST = "This is line 1\nThis is line 2\nThis is line 3";
const CMD_TEXT_1 = "ls -goh";
const CMD_TEXT_2 = "cat about_me.txt";
const CMD_TEXT_3 = "cat contacts.txt";
const USE_WRAP = true;
// --- GLOBAL --- //
var line_no = 9999;
var line_char_no = 0;
var word_index = 0;
var cur_line_elem = null;
var cur_link_elem = null;
var console_elem = null;
var cur_word_len = 0;
var cur_word_char_no = 0;
var cur_line_pre_count = 0;
var words = null;
var prev_char = "";
var word_count = 0;
var line_breaking = false;
var char_delay = 1; // in milliseconds.
var on_new_line = false;
var printing = false;
const ORIG_DELAY = char_delay;
var MAX_CHARS_Y = Math.floor($(window).innerHeight() / 25) - 1;
const new_line_event = new Event("new_line_event");
var cmd_in_elem = null;
var cur_input = "";
var cur_input_cursor = 0;
var crashed = false; // forkbomb easter egg
/*document.addEventListener("new_line_event", async function(){
    //line_no++;
    //console.log(`line no ${line_no}`);
    var pa = document.getElementsByTagName("p");
    console.log(`pa.length: ${pa.length}`);
    if (pa.length > MAX_CHARS_Y)
    {
        pa[0].remove();
    }
}, false);*/

$(window).resize(function() {
    console.log(`old MAX_CHARS_Y: ${MAX_CHARS_Y}`);
    MAX_CHARS_Y = Math.floor($(window).innerHeight() / 25);
    console.log(`new MAX_CHARS_Y: ${MAX_CHARS_Y}`);
});

$(window).ready(async function ()
{    
    line_no = 6;
    console_elem = document.getElementById("console");
    
    printing = true;
    await newLine();
    //putChar("user@j0w03l.me:~$ ");
    //await sleep(1000);
    char_delay = 6.4;
    //for (i = 0; i < CMD_TEXT_1.length; i++)
    //{
    //    await putChar(CMD_TEXT_1.charAt(i));
    //    char_delay = Math.floor(Math.random() * (55 - 25) + 25);
    //    //console.log(`char_delay = ${char_delay}`);
    //}
    //char_delay = ORIG_DELAY;
    //await sleep(150);
    //await newLine();
    //await sleep(350);
    //await printOut(SRC_TEXT_1);
    //await printMsg(0);
    //await newLine();
    //putChar("user@j0w03l.me:~$ ");
    //char_delay = 25;
    //await sleep(650);
    //for (i = 0; i < CMD_TEXT_2.length; i++)
    //{
    //    await putChar(CMD_TEXT_2.charAt(i));
    //    char_delay = Math.floor(Math.random() * (55 - 25) + 25);
    //    //console.log(`char_delay = ${char_delay}`);
    //}
    //char_delay = ORIG_DELAY;
    //await sleep(150);
    //await newLine();
    //await sleep(350);
    //await printOut(SRC_TEXT_2, true);
    //await printMsg(1);
    //await newLine();
    //putChar("user@j0w03l.me:~$ ");
    //printing = false;
    /*
    // Force keyboard to popup on mobile
    $("body").append("<form id='input-form' autocomplete='off'><input type='text' id='cmd_in' hidden/><input type='submit' hidden /></form>");
    $("#cmd_in").css({"opacity":0, "filter":"alpha(opacity=0)"}).focus();
    cmd_in_elem = document.getElementById("cmd_in");
    //cmd_in_elem.onfocusout = refocusInput;
    $(cmd_in_elem).on("input", function() {
        console.log("input fired");
        console.log(`cur input: ${$(this).val()}`);
        if (!printing)
        {
            console.log("updating text content");
            cur_line_elem.textContent = `user@j0w03l.me:~$ ${$(this).val()}`;
            console.log(`new text content: ${cur_line_elem.textContent}`);
        }
    });
    $("#input-form").on("submit", async function(e) {
        e.preventDefault();
        console.log(`submit: ${$(cmd_in_elem).val()}`);
        await parseCmd(cmd_in_elem.value);
    });
    $("#cmd_in").on("focus", function() {
        $("#cmd_in").on("keydown", function(e) {
            if (e.code == "ArrowLeft" || e.code == "ArrowRight" || e.code == "ArrowUp" || e.code == "ArrowDown") // stop arrow keys from moving the cursor in the input field.
            {
                e.preventDefault();
            }
        })
    });
    document.onkeydown = function(e) { // Ensure that we focus the input element whenever a key is pressed.
        if (e.code == "ArrowLeft" || e.code == "ArrowRight" || e.code == "ArrowUp" || e.code == "ArrowDown") // stop arrow keys from moving the cursor in the input field.
        {
            e.preventDefault();
        }
        setTimeout(refocusInput, 1);
    }
    /*$("#cmd_in").on("focusout", function() {
        console.log("refocusing");
        setTimeout(function() { cmd_in_elem.focus() }, 20);
    });*/
});

function refocusInput() {
    //console.log("refocusing");
    document.getElementById("cmd_in").focus();
};

async function parseCmd(cmd) {
    var cmd_split = cmd.split(" ");
    switch (cmd_split[0])
    {
        case "":
            await newLine();
            break;
        case "ls":
            await newLine();
            await printMsg(0);
            await newLine();
            break;
        case "cat":
            await newLine();
            if (cmd_split.length == 1)
            {
                await printMsg(-1);
                await newLine();
                break;
            }
            switch (cmd_split[1])
            {
                case "about_me.txt":
                    await printMsg(1);
                    break;
                case "contacts.txt":
                    await printMsg(2);
                    break;
                default:
                    await printMsg(-1);
                    break;
            }
            await newLine();
            break;
        case "help":
            await newLine();
            await printMsg(3);
            break;
        case "whoami":
            await newLine();
            await printMsg(4);
            break;
        case "clear":
            child = console_elem.firstElementChild;
            while (child != null)
            {
                child.remove();
                child = console_elem.firstElementChild;
            }
            await newLine();
            break;
        default:
            // Why am I putting so much effort into making this more accurate? lmao
            if (cmd_split[0].match("[^\s\|\:\;\&\(\)\{\}\#]+\(\)\{[^\s\|\:\;\&\(\)\{\}\#]+\|[^\s\|\:\;\&\(\)\{\}\#]+\&\};[^\s\|\:\;\&\(\)\{\}\#]+") != null)
            {
                let section = cmd_split[0].slice(0, (cmd_split[0].indexOf("(){") != -1) ? cmd_split[0].indexOf("(){") : 0);
                console.log(`section: ${section}`);
                if (section != "") {
                    let escaped = "";
                    for (let i = 0; i < section.length; i++)
                    {
                        escaped += `\\x${section[i].charCodeAt(0).toString(16)}`;
                    }
                    console.log(`escaped: ${escaped}`);
                    let search_string = `${escaped}\(\)\{${escaped}\|${escaped}\&\};${escaped}`;
                    console.log(`search_string: ${search_string}`);
                    if (cmd_split[0].match(search_string))
                    {
                        await newLine();
                        await sleep(1500 + Math.floor(Math.random() * 5000));
                        await printOut("client_loop: send disconnect: Broken pipe");
                        printing = true; // Prevent the user from typing until they refresh.
                        crashed = true; // Stop the prompt text from appearing
                        return;
                    }
                }
            }
            await newLine();
            await printMsg(-999);
            await newLine();
            break;
    }
    //cmd_in_elem.value = "";
    if (!crashed) cur_line_elem.textContent = "user@j0w03l.me:~$ ";
};

$(document).ready(async function() {
    if (document.location.hash != "") history.replaceState(null, "", "/");
    document.body.onhashchange = async function() {
        await update(document.location.hash);
    };
});
var tty = (function() {
    let tty = {};
    tty.update = async function(val) {
        console.log(`update() val: ${val}`);
        if (!printing && !crashed && val != "")
        {
            switch (val)
            {
                case "#about-me":
                    char_delay = 25;
                    for (i = 0; i < CMD_TEXT_2.length; i++)
                    {
                        await putChar(CMD_TEXT_2.charAt(i));
                        char_delay = Math.floor(Math.random() * (55 - 25) + 25);
                    }
                    char_delay = ORIG_DELAY;
                    await sleep(150);
                    await newLine();
                    await sleep(350);
                    await printMsg(1);
                    break;
                case "#contacts":
                    char_delay = 25;
                    for (i = 0; i < CMD_TEXT_3.length; i++)
                    {
                        await putChar(CMD_TEXT_3.charAt(i));
                        char_delay = Math.floor(Math.random() * (55 - 25) + 25);
                    }
                    char_delay = ORIG_DELAY;
                    await sleep(150);
                    await newLine();
                    await sleep(350);
                    await printMsg(2);
                    break;
                default:
                    await newLine();
                    await printMsg(-1);
                    break;
            }
            await newLine();
            putChar("user@j0w03l.me:~$ ");
            history.replaceState(null, "", "/");
            cur_line_elem.scrollIntoView();
        }
    };
    return tty;
})();

function sleep(delay) {
    return new Promise(res=>setTimeout(res, delay));
};

async function printOut(text, with_borders) {
    if (USE_WRAP)
    {
        if (with_borders)
        {
            await putChar("+");
            for (i = 0; i < MAX_CHARS_X - 2; i++) await putChar("-");
            await putChar("+");
            await newLine();
        }
        words = text.split(/(?=[ /\n/])|(?<=[ \n])/g);
        console.log(words);
        word_count = words.length;
        word_index = 0;
        line_no = 0;
        line_char_no = 0;
        cur_word_len = words[word_index].length;
        cur_word_char_no = 0;
        //console.log(`Word ${word_index}`);
        if (with_borders)
        {
            await putChar("|");
            await putChar("\u00a0");
        }
        while (word_index < word_count - 1)
        {
            while (line_char_no < MAX_CHARS_X)
            {
                console.log(`    line_char_no: ${line_char_no}\n    total: ${cur_word_len - line_char_no}`);
                /*if ((cur_word_len - line_char_no) > MAX_CHARS_X + 1)
                {
                    if (with_borders)
                    {
                        while (line_char_no < MAX_CHARS_X)
                        {
                            await putChar("\u00a0");
                        }
                    }
                    await putChar("\n", with_borders);
                }*/
                if (cur_word_char_no < cur_word_len)
                {
                    await putChar(words[word_index].charAt(cur_word_char_no), with_borders);
                    prev_char = words[word_index].charAt(cur_word_char_no);
                    cur_word_char_no++;
                }
                else
                {
                    if (word_index < word_count - 1)
                    {
                        word_index++;
                        cur_word_len = words[word_index].length;
                        if ((cur_word_len - line_char_no) > MAX_CHARS_X - 1)
                        {
                            console.log("Word is too long!");
                            console.log(`cur_word_len = ${cur_word_len}`);
                            console.log(`line_char_no = ${line_char_no}`);
                            console.log(`MAX_CHARS_X  = ${MAX_CHARS_X}`);
                            if (with_borders)
                            {
                                while (line_char_no < MAX_CHARS_X)
                                {
                                    await putChar("\u00a0");
                                }
                            }
                            await putChar("\n", with_borders);
                        }
                        cur_word_char_no = 0;
                        console.log(`Word ${word_index}: ${words[word_index]} | cur_word_len: ${cur_word_len}`);
                    }
                    else
                    {
                        if (with_borders)
                        {
                            while (line_char_no < MAX_CHARS_X - 2)
                            {
                                await putChar("\u00a0");
                            }
                            await putChar(" ");
                            await putChar("|");
                        }
                        break;
                    }
                }
            }
        }
        //newLine();
        if (with_borders)
        {
            await newLine();
            await putChar("+");
            for (i = 0; i < MAX_CHARS_X - 2; i++) await putChar("-");
            await putChar("+");
            await newLine();
        }
        //console.log("printOut() finished.");
    }
    else
    {
        // Just print it normally
        line_no = 0;
        line_char_no = 0;
        var char_no = 0;
        var char_count = text.length;
        var cur_char = '';
        while (char_no < char_count)
        {
            cur_char = text.charAt(char_no);
            char_no++;
            line_char_no++;
            if (cur_char == "\n" || line_char_no >= MAX_CHARS_X)
            {
                await newLine();
                line_char_no = 0;
                line_no++;
            }
            else
            {
                await putChar(cur_char);
            }
        }
    }
};

async function putChar(char, with_borders) {
    //console.log(`Putting char "${char}"`);
    if (char == "\n")
    {
        if (prev_char == "\n") await putChar("\u00a0"); // Fix leading new-lines borderering incorrectly.
        if (with_borders)
        {
            while (line_char_no < MAX_CHARS_X - 1)
            {
                await putChar("\u00a0");
            }
            await putChar("|");
        }
        /*
        $(cur_line_elem).removeClass("console-line-cursor");
        cur_line_elem = document.createElement("p");
        $(cur_line_elem).addClass("console-line-cursor");
        console_elem.appendChild(cur_line_elem);
        */
        await newLine();
        cur_line_elem.scrollIntoView();
        line_char_no = 0;
        if (with_borders)
        {
            await putChar("|");
            await putChar(" ");
        }
        line_no++;
        await sleep(char_delay);
    }
    else
    {
        cur_line_elem.scrollIntoView();
        cur_line_elem.textContent += char;
        line_char_no++;
        await sleep(char_delay);
    }
    prev_char = char;
};

async function newLine(as_link, link_url) {
    if (cur_line_elem != null) $(cur_line_elem).removeClass("console-line-cursor");
    if (cur_link_elem != null) $(cur_link_elem).parent().removeClass("console-line-cursor");
    if (as_link)
    {
        cur_link_elem = document.createElement("span");
        cur_link_elem.setAttribute("style", "color:#7fff00;cursor:pointer;");
        cur_link_elem.setAttribute("onclick", `tty.update("${link_url}");`);
        //const attr = document.createAttribute("href");
        //attr.value = link_url;
        //cur_link_elem.attributes.setNamedItem(attr);
        cur_line_elem.appendChild(cur_link_elem);
    }
    else
    {
        cur_line_elem = document.createElement("p");
        line_char_no = 0;
        //document.dispatchEvent(new_line_event);
        /*var pa = document.getElementsByTagName("p");
        console.log(`pa.length: ${pa.length}`);
        if (pa.length > MAX_CHARS_Y)
        {
            pa[0].remove();
        }*/
    }
    $(cur_line_elem).addClass("console-line-cursor");
    console_elem.appendChild(cur_line_elem);
    cur_line_elem.scrollIntoView();
};

async function printMsg(index){
    switch (index)
    {
        case -1:
            await printOut("cat: No such file or directory");
            break;
        case 0:
            await printOut("-rw-r--r-- 1 2 Feb 4 21:06 ");
            await newLine(true, "#about-me");
            cur_line_elem = cur_link_elem;
            await printOut("about_me.txt ");
            await newLine();
            await printOut("-rw-r--r-- 1 2 Feb 4 21:06 ");
            await newLine(true, "#contacts");
            cur_line_elem = cur_link_elem;
            await printOut("contacts.txt ");
            break;
        case 1:
            await printOut(SRC_TEXT_2, true);
            break;
        case 2:
            await printOut(SRC_TEXT_3_1, true);
            await newLine();
            await printOut(SRC_TEXT_3_2, false);
            break;
        case 3:
            await printOut(SRC_TEXT_4, false);
            break;
        case 4:
            await printOut("user\n", false);
            break;
        default:
            await printOut("Unknown command! ");
            break;
    }
};

document.addEventListener("keydown", async (event) => {
    key = event.key
    if (!printing && !crashed)
    {
        console.log(`event.key = "${event.key}"\nlength: ${event.key.length}`);
        if (key.length == 1)
        {
            // Append character to input.
            cur_input += key.replace(" ", "\u00a0");
            cur_input_cursor++;
            cur_line_elem.scrollIntoView();
        }
        else
        {
            switch (key)
            {
                case "Backspace":
                    if (cur_input_cursor > 0)
                    {
                        cur_input_cursor--;
                        cur_input = cur_input.slice(0, cur_input_cursor);
                    }
                    cur_line_elem.scrollIntoView();
                    break;
                case "Enter":
                    await parseCmd(cur_input.replace("\u00a0", " "));
                    //await newLine();
                    cur_input = "";
                    cur_input_cursor = 0;
                    cur_line_elem.scrollIntoView();
                    break;
            }
        }
        if (!crashed) cur_line_elem.textContent = `user@j0w03l.me:~$ ${cur_input}`;
    }
});