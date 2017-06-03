var cards=[
    {
        text: "Elephant",
        image: "elephant-03.jpg"
    },
    {
        text: "Tiger",
        image: "tiger.jpg"
    },
    {
        text: "Lion",
        image: "lion.jpg"
    },
    {
        text: "Rhinoceros",
        image: "rhinoceros.jpg"
    }
];
var currentanimal=0;
function FlipFunction() {
//    var x = document.getElementById('FlashCardFrame');
//    if (x.style.display === 'none') {
//        x.style.display = 'block';
//    } else {
//        x.style.display = 'none';
//    }

    $('#FlashCardPicture').toggle();
    $('#FlashCardText').toggle();
}

function NextCard(){currentanimal++;
    if (currentanimal==cards.length) currentanimal=0;
    console.log(cards);
    $('#FlashCardPicture').show();
    $('#FlashCardText').hide();
    var card=cards[currentanimal];
$("#AnimalName").text(card.text);
$("#AnimalPicture").prop('src',card.image);
}