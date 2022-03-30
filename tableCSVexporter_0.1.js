var exportCSV = function() {
    var inputs = Array.from(document.getElementsByClassName("input"));
    let headRow = function(data) {
        rData = [];
        for (let row in data) {
            rData = rData + data[row].id + ",";
        }
        return rData;
    }
    let dataRows = function(data) {
        rowsData = [];
        for (let row in data) {
            data[row].value = data[row].value.replace(/"/g, `""`);
            data[row].value = /[",\n]/.test(data[row].value) ? `"${data[row].value}"` : data[row].value;
            rowsData = rowsData + data[row].value  + ",";
        }
        return rowsData;
    }
    // let parseCell = function(tableCell) {
    //     let parsedValue = tableCell.values;

    //     // Replace all double quotes with two double quotes
    //     parsedValue = parsedValue.replace(/"/g, `""`);

    //     // If value contains comma, new-line or double-quote, enclose in double quotes
    //     parsedValue = /[",\n]/.test(parsedValue) ? `"${parsedValue}"` : parsedValue;

    //     return parsedValue;
    // }
    
    //let parseInputs = parseCell(inputs); 
    //https://codepen.io/dcode-software/pen/WBGOyd

    let hRow = headRow(inputs);
    let dRows = dataRows(inputs);
    let retRows = `${hRow}\n${dRows}`

    console.log(retRows);
    return retRows;
}

var btn = document.querySelector("button");

// btn.addEventListener("click", exportCSV);

// const dataTable = document.getElementById("dataTable");
// const btnExportToCsv = document.getElementById("btnExportToCsv");

        btn.addEventListener("click", () => {
            //const exporter = new exportCSV();
            const csvOutput = exportCSV();
            console.log(csvOutput);
            const csvBlob = new Blob([csvOutput], { type: "text/csv" });
            const blobUrl = URL.createObjectURL(csvBlob);
            const anchorElement = document.createElement("a");

            anchorElement.href = blobUrl;
            anchorElement.download = "table-export.csv";
            anchorElement.click();

            setTimeout(() => {
                URL.revokeObjectURL(blobUrl);
            }, 500);
        });

        let sel = Array.from(document.querySelectorAll("select"));