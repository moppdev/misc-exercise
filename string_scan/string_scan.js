document.addEventListener('DOMContentLoaded', () => {
    // this JS script allows for dynamic return of a string's statistics (paragraph count, etc)

    // variable and function declarations
    const INPUT_STRING = document.querySelector("#str_input");
    const PAR_DIV = document.querySelector("#par");
    const WORD_DIV = document.querySelector("#words");
    const COM_DIV = document.querySelector("#com");
    const CHAR_DIV = document.querySelector("#char");
    const SEN_DIV = document.querySelector("#sen");
    const reset_pars = () => {
        PAR_DIV.textContent = "0 paragraphs";
        WORD_DIV.textContent = "0 words";
        COM_DIV.textContent = "0 commas";
        CHAR_DIV.textContent = "0 chars";
        SEN_DIV.textContent = "0 sentences";
    };
    const edit_pars = (action, div, counter, counttype) => {
        if (action === "inc")
        {
            counter++;
            div.textContent = `${counter} ${counttype}`;
        }
        else if (action === "dec")
        {
            if (counter > 0)
            {
                counter--;
                div.textContent = `${counter} ${counttype}`;
            }
        }
    };
    let sen_count, par_count, word_count, comma_count, chars = 0;

    // Input, processing and relevant output according to entered string/input
    if (INPUT_STRING !== null)
    {
        INPUT_STRING.onkeyup = (e) => {

            // check if the input string is empty
            if (INPUT_STRING.value === "")
            {
                sen_count, par_count, word_count, comma_count, chars = 0;
                reset_pars();
            }

            // check for alphanumeric keys
            if ((e.keyCode >= 48 && e.keyCode <= 57) || (e.keyCode >= 65 && e.keyCode <= 90)){
                console.log("input was a-z, 0-9");
                edit_pars("inc", CHAR_DIV, chars, "characters");
            }

            // check for keys like Enter, etc.
            switch (e.key) {
                case "Enter":
                    console.log("cringe");
                    break;
                case "Backspace":
                    console.log("ada");
                    break;
                case " ":
                    console.log("space");
                    break;
                case ".":
                    console.log("dots");
                    break;
                case ",":
                    console.log("commas");
                    break;
            };
        };
    }
});