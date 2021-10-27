// heads img link "https://i.ibb.co/6J8mRcJ/image.png"
// tails img link "https://i.ibb.co/fDyzd3s/image.png"

document.addEventListener('DOMContentLoaded', () => {
    default_view();
    document.querySelector('#heads-tile').onclick = () => {
        get_winner("heads");
    };
    document.querySelector('#tails-tile').onclick = () => {
        get_winner("tails");
    };
    document.querySelector("#reset").onclick = () => {
        default_view();
        document.querySelector("#showRes").remove();
    };
});

function get_winner(selection)
{
    const select = document.querySelector('#select-view');
    select.style.display = 'none';
    let decider_number = Math.ceil(Math.random());
    console.log(decider_number);
    const load = document.querySelector('#load-view');
    load.style.display = 'block';
    setTimeout(() => {
        if (decider_number === 0)
        {
            display_winner("heads", selection);
        }
        else
        {
            display_winner("tails", selection);
        }
    }, 6300);
};

function display_winner(outcome, selection)
{
    // remove the selection block and show the winner
    const select = document.querySelector('#select-view');
    const result = document.querySelector('#result-view');
    const load = document.querySelector('#load-view');
    const reset = document.querySelector("#reset");
    select.style.display = 'none';
    result.style.display = 'block';
    load.style.display = 'none';

    const showRes = document.createElement("p");
    showRes.id = "showRes";
    result.appendChild(showRes);
    if (outcome === selection) 
    {
        showRes.textContent = "You Win!";
        reset.style.display = 'block';
    }
    else 
    {
        showRes.textContent = "You Lose!";
        reset.style.display = 'block';
    }
}

function default_view()
{
    // load the selection view by default
    const select = document.querySelector('#select-view');
    const result = document.querySelector('#result-view');
    const load = document.querySelector('#load-view');
    const reset = document.querySelector("#reset");
    select.style.display = 'block';
    result.style.display = 'none';
    load.style.display = 'none';
    reset.style.display = "none";
}