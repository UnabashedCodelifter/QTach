const cards = document.querySelectorAll(".card");
cards[0].addEventListener("click", function(){showDesc(0)});
cards[1].addEventListener("click", function(){showDesc(1)});
cards[2].addEventListener("click", function(){showDesc(2)});
cards[3].addEventListener("click", function(){showDesc(3)});

function showDesc(card)
{
    document.querySelectorAll(".card span")[card].style.color = "#414141";
}