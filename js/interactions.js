$(".qa_content > p").click(function () {
    if (this.className == "qa_expanded") {
        this.className = "qa_collapsed";
        this.parentNode.querySelector("span").style.display = "none";
    } else {
        this.className = "qa_expanded";
        this.parentNode.querySelector("span").style.display = "block";
    }
});


if (window.location.hash !== "") {
    load_guest_data(window.location.hash.replace("#", ""));
}


function load_guest_data(selected) {

    window.location.hash = "#" + selected;
    
    let guest = data[selected];
    
    document.getElementById("guest").style.display = "flex";

    // append data
    document.getElementById("guest_name").innerHTML = `hi ${guest.name},`;
    let plus_one = "";

    if (guest.plus !== "none") {
        plus_one = "<p>are attending with</p>";
        guest.plus.forEach(function (d) {
            plus_one += `<h3 class="name" onclick="load_guest_data('${d[0]}');">${d[1]}</h3>`;
        })
    }

    document.getElementById("guest").innerHTML = `
        <p>you →</p>
            <div>
                ${plus_one}
                <p>have selected (meal choice)</p>
                <h3>${guest.meal}</h3>
                <p>will be sitting at</p>
                <h3>Table Number ${guest.table_number}</h3>
                <label>guests at this table: ${guest.group}</label>
            </div>
        `

}
