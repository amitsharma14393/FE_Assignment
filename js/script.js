 /* site specific interaction */
 (function(){
     "use strict";
    function handleHeight(){
        let siteHeader = document.getElementById("siteHeader");
        let user = document.getElementById("user");
        let tasks = document.getElementById("tasks");

        let remainingHeight = (window.innerHeight - siteHeader.offsetHeight - user.offsetHeight) + "px";
        tasks.style.height = remainingHeight;
    }
    window.onload = handleHeight;
    window.onresize = handleHeight;
 }());