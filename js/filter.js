//filter
filterSelection("all")
function filterSelection(c) { // funktion med parameter c (c er lig med 'all' som angivet ovenfor)
    var x, i;
    x = document.getElementsByClassName("filter-elem"); // Variablen x er lig med elementer med klassen 'filter-elem'
    if (c == "all") c = ""; // Hvis c = "all", så sættes c til en tom string
    for (i = 0; i < x.length; i++) { // For loop
        removeClass(x[i], "show"); // fjerner klassen 'show'
        if (x[i].className.indexOf(c) > -1) addClass(x[i], "show"); //hvis et element har c's string værdi tilføjes 'show' klassen
    }
}

// Vis filtrerede elementer
function addClass(element, name) { // funktion med to parametre
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) {
            element.className += " " + arr2[i];
        }
    }
}

// Gem elementer som ikke er valgt
function removeClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ");
}
