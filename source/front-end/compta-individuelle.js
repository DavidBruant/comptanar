//@ts-check

import {buffer} from "d3-fetch"

import {parseCSVCreditMutuel} from "../import-banque/crédit-mutuel.js"



const bqEBseptOct2022P = buffer("./données/relevés-bancaires/2022-09-10(jusqu'au 10-10).csv")
    .then(parseCSVCreditMutuel)

bqEBseptOct2022P.then(data => {
    console.log("data", data)
})

document.addEventListener("DOMContentLoaded", e => {
    


})