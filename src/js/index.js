window.addEventListener("load", function() {
    document.querySelector(".btn-close").addEventListener("click", function() {
        document.querySelector(".menu-social").style.display = "none"
    })
    document.querySelector(".btn-social").addEventListener("click", function() {
        document.querySelector(".menu-social").style.display = "block"
    })
})
function show_hide() {
    var click = document.getElementById("navbar-dropdown")
        if(click.style.display == "none") {
            click.style.display = "flex"
        }
        else {
            click.style.display = "none"
        }
}