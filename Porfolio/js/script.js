

function changeColor(color) {
    var r = document.querySelector('html');
    var color1 = color;
    var color2 = color1 + '66';
    r.style.setProperty('--lightColor', color1);
    r.style.setProperty('--lightTransparent', color2);
}

function getRandomColor() {

    const hexCharacters = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]
    const materialColors = ['#F9F871', '#FFC75F', '#FF9671', '#FF6F91', '#845EC2', '#0081CF', '#00C9A7', '#FF8066', '#4FFBDF', '#845EC2']

    function getCharacter(index) {
        return hexCharacters[index]
    }

    function generateNewColor() {
        let hexColorRep = "#"

        for (let index = 0; index < 6; index++) {
            const randomPosition = Math.floor(Math.random() * hexCharacters.length)
            hexColorRep += getCharacter(randomPosition)
        }

        if (lightOrDark(hexColorRep)) {
            return hexColorRep;
        } else {
            const random = Math.floor(Math.random() * materialColors.length);
            return materialColors[random];
        }
    }

    console.log(generateNewColor());
    changeColor(generateNewColor());

}

getRandomColor();

function lightOrDark(color) {

    // Variables for red, green, blue values
    var r, g, b, hsp;

    color = +("0x" + color.slice(1).replace(
        color.length < 5 && /./g, '$&$&'));

    r = color >> 16;
    g = color >> 8 & 255;
    b = color & 255;

    // HSP (Highly Sensitive Poo) equation from http://alienryderflex.com/hsp.html
    hsp = Math.sqrt(
        0.299 * (r * r) +
        0.587 * (g * g) +
        0.114 * (b * b)
    );

    console.log( color, hsp);

    // Using the HSP value, determine whether the color is light or dark
    if (hsp > 127.5 && hsp < 220) {

        // return 'light';
        return true;
    }
    else {
        // return 'dark';
        return false;
    }
}