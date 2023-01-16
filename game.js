function rollDice() {
    var diceval= Math.floor(Math.random() * 6) + 1;
    document.getElementById('roll').innerHTML = diceval;
    let img = document.createElement("img");

    switch(diceval){
        case 1:
            img.src="images/1.png";
            document.body.appendChild(img);
            break;
            case 2:
            img.src="images/2.png";
            document.body.appendChild(img);
            break;
            case 3:
            img.src="images/3.png";
            document.body.appendChild(img);
            break;
            case 4:
            img.src="images/4.png";
            document.body.appendChild(img);
            break;
            case 5:
            img.src="images/5.png";
            document.body.appendChild(img);
            break;
            case 6:
            img.src="images/6.png";
            document.body.appendChild(img);
            break;
    }
}