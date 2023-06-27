const App = () => {
    //append the title to the document root
    var root = document.getElementById('root');
    var title = document.createElement('h1');
    title.appendChild(document.createTextNode('String Reversal'));
    root.appendChild(title);

    //Given a string of characters as input, write a function that returns it with the characters reversed.

    //append the input box to root
    var input = document.createElement('input');
    input.setAttribute("type", "text");
    input.setAttribute("id", "input");
    root.appendChild(input);

    //create a character array from input
    var inputElem = document.querySelector('#input')
    inputElem.addEventListener("input", () => {
        var inputValue = document.querySelector('#input').value;

        //chose to use the spread operator because split does not handle uncommon characters well
        // var newArr = inputValue.split('');
        var characterArray = [...inputValue];

        //reverse the array
        const reversedCharacterArray = characterArray.reverse();
        // //convert the array back to a string
        // const reversedString = reversedCharacterArray.join('');
        
        // //display the reversed string
        // var pElem = document.querySelector('p');
        // if (!pElem) {
        //     var p = document.createElement('p');
        //     p.appendChild(document.createTextNode(reversedString));
        //     root.appendChild(p);
        // } else {
        //     root.removeChild(pElem);
        //     const p = document.createElement('p');
        //     p.appendChild(document.createTextNode(reversedString));
        //     root.appendChild(p);
        // }

        // //TDLR
        // // e.addEventListener("input", () => {[...document.querySelector('#input').value].reverse().join('')});

        //////////////////
        // USING FOR OF //
        //////////////////
        const p = document.createElement('p');

        for (const e of reversedCharacterArray) {
            reversedString = '' + e;
        
            var pElem = document.querySelector('p');

            if (!pElem) {
                p.appendChild(document.createTextNode(reversedString));
                root.appendChild(p);
            } else {
                root.removeChild(pElem);
                p.appendChild(document.createTextNode(''));
                p.appendChild(document.createTextNode(reversedString));
                root.appendChild(p);
            }
        }
    })

}

App();