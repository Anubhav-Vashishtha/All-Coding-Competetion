let url = "https://kontests.net/api/v1/all";
let a = fetch(url);
let head = document.getElementById("head");

a.then((response) => {
    return response.json();
}).then((value) => {
    console.log(value);

    for (const key in value) {
        let b = value[key];
        let time1 ="";
        let time2 ="";
        let date1 ="";
        let date2 ="";

        for (let i = 11; i < 16; i++) {
            time1+= b.start_time[i];
            time2+= b.end_time[i];
        }
        for (let i = 0; i < 10; i++) {
            date1+= b.start_time[i];
            date2+= b.end_time[i];
        }

        if(time1[0]=='0'){
            time1+="AM";
        }else{
            time1+="PM";
        }

        if(time2[0]=='0'){
            time2+="AM";
        }else{
            time2+="PM";
        }

        head.insertAdjacentHTML("afterend", `
    <div id="cards">
        <div><p>Name - ${b.name}</p></div>
        <div><p>Start Date- ${date1}</p></div>
        <div><p>Start time - ${time1}</p></div>
        <div><p>End Date - ${date2}</p></div>
        <div><p>End time - ${time2}</p></div>
        <div id="btn"><a href="${b.url}"><div class="btn">Click here</div></a></div>
    </div>
    `);
    }
});