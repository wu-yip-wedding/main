$(".qa_content > p").click(function(){
    if(this.className == "qa_expanded"){
        this.className = "qa_collapsed";
        this.parentNode.querySelector("span").style.display = "none";
    } else {
        this.className = "qa_expanded";
        this.parentNode.querySelector("span").style.display = "block";
    }
});


console.log(window.location.hash);

if(window.location.hash !== ""){
    load_guest_data(window.location.hash.replace("#",""));
}


function load_guest_data(guest){
    document.getElementById("guest_name").innerHTML = `hi ${guest.charAt(0).toUpperCase() + guest.slice(1)},`;
}