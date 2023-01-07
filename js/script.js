//kiedy karty som niewidoczne

const invisibleCard =[true,true,true,true];

const cards = document.querySelectorAll(".card");
cards[0].addEventListener("click", function(){showDesc(0)});
cards[1].addEventListener("click", function(){showDesc(1)});
cards[2].addEventListener("click", function(){showDesc(2)});
cards[3].addEventListener("click", function(){showDesc(3)});

function showDesc(card)
{
    let span = document.querySelectorAll(".card span")[card];
    if (span.style.color != "rgb(65, 65, 65)")
    {
        span.style.color = "#414141";
    }
    else
    {
        span.style.color = "transparent";
    }
}