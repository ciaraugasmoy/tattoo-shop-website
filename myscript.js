window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {

        document.getElementById("navbar").style.padding = "0px 0px";
        document.getElementById("navbar").style.background = "var(--menu-color)";
        document.getElementById("dropdownmenu").style.background = "var(--menu-color)";
        document.getElementById("logo").style.height = "30px";
        document.getElementById("logo").style.margin = "0px 0px 0px 0px";

    }
    else {
            document.getElementById("navbar").style.padding = "0px 0px";
            document.getElementById("navbar").style.background = "rgba(0, 0, 0,0)";
            document.getElementById("dropdownmenu").style.background = "rgba(0, 0, 0,0)";
            document.getElementById("logo").style.height = "100px";
            document.getElementById("logo").style.margin = "15px 10px 0px 10px";
        }
    }

