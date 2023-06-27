function filter() {
    let search = document.getElementById("search").value.toLowerCase();
    let col = document.getElementsByClassName("col");

    for (let i = 0; i < col.length; i++) {
        tagu = col[i].getElementsByClassName("tagu");
        kadonamae = col[i].getElementsByClassName("kadonamae");
        if (tagu[0].innerHTML.toLowerCase().indexOf(search) !== -1 ||
            kadonamae[0].innerHTML.toLowerCase().indexOf(search) !== -1
        ) {
            col[i].style.display = "flex"
        } else {
            col[i].style.display = "none"
        }
    }
}
