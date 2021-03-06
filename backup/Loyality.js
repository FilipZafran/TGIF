var membersURL = "https://api.propublica.org/congress/v1/113/house/members.json";



var statistics = {

    countD: 0,
    countR: 0,
    countI: 0,
    countT: 0,


    averageD: 0,
    averageR: 0,


    // REMOVE NaN
    averageI: 0,
    averageT: 0,
};

var republicans = [];
var democrats = [];
var independents = [];





function countMembers() {

    for (var i = 0; i < members.length; i++) {
        if (members[i].party === "R") {
            //     - count values "R/D/rest"
            republicans.push(members[i]);
            //  - push to the variables up
        } else if (members[i].party === "D") {
            democrats.push(members[i]);
        } else {
            independents.push(members[i]);
        }

        // var total = statistics.countD + statistics.countR + statistics.countI;
        // statistics.countT = total
        // console.log(statistics.countT);
        // console.log(total);
    }




    // STEP 3
    // change value of // STORAGE / STATISTICS (up)
    // basically creating the value/number of the array lenght
    statistics.countR = republicans.length;
    statistics.countD = democrats.length;
    statistics.countI = independents.length;
    statistics.countT = republicans.length + democrats.length + independents.length;
}
countMembers();

// STEP 4.2.
calculateAverage(republicans, "Rep");
calculateAverage(democrats, "Dem");
calculateAverage(independents, "Ind");

// STEP 4.1 - FUNCTION 2 / 3
// calculate average
// which array (republicans?), and what is target ("Rep")   ??
function calculateAverage(array, target) {
    var percSum = 0;
    for (var i = 0; i < array.length; i++) {
        percSum = percSum + array[i].votes_with_party_pct;
    }
    var average = percSum / array.length + " " + "%";
    console.log(average);

    // if it finds Rep, sends it to STORAGE
    if (target === "Rep") {
        statistics.averageR = average;
    } else if (target === "Dem") {
        statistics.averageD = average;
    } else {
        if (statistics.averageI === isNaN) {
            statistics.averageI = 0
        }
        // } else {
        //     statistics.averageI = average;

        // }

    }


    var aveT = (statistics.averageD + statistics.averageR + statistics.averageI) / 3 + " " + "%";
    statistics.averageT = aveT

}

console.log(statistics);

// STEP 5  - FUNCTION 3/3
// pushes everything into the HTML file
function createTable(target) {
    // connects to the HTML
    var atGlance = document.getElementById("at-glance");

    // creates TableRow
    var tr = document.createElement("tr");
    // creates td in td1
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    td2.className = "tdstyle-center"
    var td3 = document.createElement("td");
    td3.className = "tdstyle-center"



    // pushes to HTML
    td1.innerHTML = target;
    // Creates table:
    if (target === "Democrats") {
        td2.innerHTML = statistics.countD;
        td3.innerHTML = statistics.averageD;
    } else if (target === "Republicans") {
        td2.innerHTML = statistics.countR;
        td3.innerHTML = statistics.averageR;
    } else if (target === "Independents") {
        td2.innerHTML = statistics.countI;
        td3.innerHTML = statistics.averageI;
    } else {
        td2.innerHTML = statistics.countT;
        td3.innerHTML = statistics.averageT;
    }




    // pushes td1 into "creates" tr
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);


    // pushes tr into "creates" atGlance
    atGlance.appendChild(tr);
}

// runs 3x and creates 3 tables:  // CHECK PROCESS ??

//  pushes td1 into "creates" tr
// tr.appendChild(td1);
createTable("Democrats");

//  pushes td2 into "creates" tr
// tr.appendChild(td1);
createTable("Republicans");

//  pushes td3 into "creates" tr
// tr.appendChild(td1);
createTable("Independents");
createTable("Total");



function removeNull(nullV) {

    if (isNaN(nullV)) {
        return 0;
    }
    return nullV;
}
removeNull()




// TABLE STRUCTURE / check !?
// column column column
//row tr   td      td
//row tr