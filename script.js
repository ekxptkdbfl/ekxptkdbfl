function filter() {
    let search = document.getElementById("search").value.toLowerCase();
    let col = document.getElementsByClassName("col");

    for (let i = 0; i < col.length; i++) {
        tagu = col[i].getElementsByClassName("tagu");
        kadonaiyo = col[i].getElementsByClassName("kadonaiyo");
        if (tagu[0].innerHTML.toLowerCase().indexOf(search) !== -1 ||
            kadonaiyo[0].innerHTML.toLowerCase().indexOf(search) !== -1
        ) {
            col[i].style.display = "flex"
        } else {
            col[i].style.display = "none"
        }
    }
}
