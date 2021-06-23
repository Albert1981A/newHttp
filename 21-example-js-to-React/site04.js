// const u_06 = React.createElement("u", null, "Albert with REACT - by div id=\"container6\"");
// const span_06 = React.createElement("span", null, u_06);
// const h1_06 = React.createElement("h1", null, span_06);
// const div_06 = document.getElementById("container6");
// ReactDOM.render(h1_06, div_06);


// Another way to write this:
const h1_06 = React.createElement(
    "h1", 
    {id:"h1_06"}, 
    React.createElement(
        "span", 
        null, 
        React.createElement(
            "u", 
            null, 
            "Albert with REACT - by div id=\"container6\"")));

const div_06 = document.getElementById("container6");
ReactDOM.render(h1_06, div_06);