// BookTok website JavaScript file

// searching function
function bookFunction() {
    // declare variables
    var input, filter, table, tr, td, i, ii;
    input = document.getElementById("bookInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("bookTable");
    tr = table.querySelectorAll("tbody tr:not(.header)");

    // loop through rows and cells and hide things that don't match the search
    for (i = 0; i < tr.length; i++) {
        var tds = tr[i].getElementsByTagName("td");
        var found = false;
        for (ii = 0; ii < tds.length && !found; ii++) {
            if (tds[ii].textContent.toUpperCase().indexOf(filter) > -1) {
                found = true;
                break;
            }
        }
        // show found rows
        tr[i].style.display = found?"":"none";
    }
}
