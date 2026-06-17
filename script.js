const holes =
document.querySelectorAll(
".hole"
);

const scoreDisplay =
document.getElementById(
"score"
);

let score = 0;

function randomHole(){

    holes.forEach(
    hole =>
    hole.classList.remove(
    "mole"
    )
    );

    const index =
    Math.floor(
    Math.random() *
    holes.length
    );

    holes[index]
    .classList.add(
    "mole"
    );
}

setInterval(
randomHole,
800
);

holes.forEach(
hole => {

hole.addEventListener(
"click",
() => {

if(
hole.classList.contains(
"mole"
)
){

score++;

scoreDisplay.innerText =
score;

hole.classList.remove(
"mole"
);

}

});

});
