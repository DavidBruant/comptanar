import {buffer, text} from "d3-fetch"
import {dsvFormat} from "d3-dsv"

const SEPARATEUR_CREDIT_MUTUEL = ";";

const parse = dsvFormat(SEPARATEUR_CREDIT_MUTUEL).parse

const bqEBseptOct2022P = buffer("./données/relevés-bancaires/2022-09-10(jusqu'au 10-10).csv")
    .then(arrayBuffer => {

        /* encoding par défaut du Crédit Mutuel
            Il n'y a évidemment aucune documentation sur laquelle on peut compter
            ni de changelog, donc ptèt que ça changera,
            sûrement sans prévenir
            On verra à ce moment-là
        */
        const decoder = new TextDecoder("windows-1252"); 
        const str = decoder.decode(arrayBuffer); 
        console.log("str", str)

        return parse(str)
    })

bqEBseptOct2022P.then(data => {
    console.log("data", data)
})

document.addEventListener("DOMContentLoaded", e => {

    


})