# SpiffingJS
An implementation of the Spiffing CSS preprecessor in JavaScript (Original: https://github.com/nderjung/Spiffing)

### Rules
Here is what SpiffingJS will convert:<br>
colour -> color<br>
grey -> gray<br>
!please -> !important<br>
transparency -> opacity<br>
centre -> center<br>
photograph -> image<br>
capitalise -> capitalize

## Speed
SpiffingJS is blazing fast. It can process over 39000+ lines of code, in just 4 miliseconds.
![Speed of spiffingjs](https://raw.githubusercontent.com/ProgramistaZpolski/Spiffing/master/Screenshot%20from%202020-11-22%2014-00-07.png)

### Examples
You can convert your beautiful Spiffing stylesheet into a CSS Stylesheet using the spiffingProcessStylesheet("codeForTheStylesheet"); command.

For example, SpiffingJS will convert this correctly written Spiffing stylesheet:
```css
body {
    text-align: centre;
}

h1 {
    line-height: 2em;
    text-transform: capitalise;
}

main {
    background-photograph: url('photographs/my_corgies.png') !please;
}

.addition {
    colour: grey;
}

.hello {
    transparency: 0.5;
}
```
Into this normal, not-so-well written CSS Stylesheet
```css
body {
    text-align: center;
}

h1 {
    line-height: 2em;
    text-transform: capitalize;
}

main {
    background-image: url('images/my_corgies.png') !important;
}

.addition {
    color: gray;
}

.hello {
    opacity: 0.5;
}
```

If you are maitaining someone else's code, you can use the spiffingDeprocessStylesheet("codeForTheStylesheet") command to convert it into a correct Spiffing stylesheet.
