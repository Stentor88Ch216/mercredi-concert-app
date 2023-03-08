export async function downloadCsv() {
    try {
        const target = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQdS-HTJAZlE9yEUQWPaRGglca4GgxtUUeBUHd9GcramVf1BBTwSF7qig9i0IUuf2AuxUPrTxPFbMjQ/pub?gid=0&single=true&output=csv';
        const res = await fetch(target, {
            method: 'get',
            headers: {
                'content-type': 'text/csv;charset=UTF-8',
            }
        });
    
        if (res.status === 200) {
            const data = await res.text();
            //console.log("TEXT : ", data);
            return data;
        } else {
            console.log(`Error code ${res.status}`);
            //throw (`Error code ${res.status}`)
        }
    } catch (err) {
        console.log(err)
    }
}

export function makeArray(csvText: string) {
    const rows = csvText.split('\n');
    var concertsTable = [];
    for (let i=0; i<rows.length; i++) {
        concertsTable.push(rows[i].split(','));
    }
    //console.log("TABLE : ",concertsTable);
    return cleanArray(concertsTable);
}

function cleanArray(array: string[][]) {
    let result = array;
    result.splice(0,3);
    result.pop();
    result.pop();
    for (var i in result) { result[i] = result[i].slice(0);}
    return result;
}

function removePastConcerts(array: string[][]) {
    
}