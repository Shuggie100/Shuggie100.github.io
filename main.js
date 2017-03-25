var cards=[
    {
        text: "Elephant",
        image: "elephant-03.jpg"
    },
    {
        text: "Cat",
        image: "cat.jpg"
    }
];
function myFunction() {
//    var x = document.getElementById('FlashCardElephant');
//    if (x.style.display === 'none') {
//        x.style.display = 'block';
//    } else {
//        x.style.display = 'none';
//    }

    $('#FlashCardElephant').toggle();
    $('#ElephantText').toggle();
}
$("#card1").text('')

function NextCard(){
    console.log(cards);
}