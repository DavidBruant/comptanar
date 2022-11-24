import {buffer, text} from "d3-fetch"
import {dsvFormat} from "d3-dsv"
//import encoding from "encoding"

const SEPARATEUR_CREDIT_MUTUEL = ";";

const parse = dsvFormat(SEPARATEUR_CREDIT_MUTUEL).parse

const bqEBseptOct2022P = buffer("./données/relevés-bancaires/2022-09-10(jusqu'au 10-10).csv")
    .then(arrayBuffer => {

        const decoder = new TextDecoder("windows-1252"); // encoding par défaut du Crédit Mutuel
        const str = decoder.decode(arrayBuffer); 
        console.log("str", str)

        //const convertedStr = encoding.convert(str, "windows1252", "utf-8")

       // console.log("convertedStr", convertedStr)

        // passage par buffer pour résoudre en compte des problèmes du fichier d'origine
        //const str = String.fromCharCode(...new Uint8Array(arrayBuffer))
        //return parse(str)
    })

bqEBseptOct2022P.then(data => {
    console.log("data", data)
})

document.addEventListener("DOMContentLoaded", e => {

    


})