//@ts-check

import {dsvFormat} from "d3-dsv"
import {parse as parseDate} from "date-fns"

import "./types.js"

const SEPARATEUR_CREDIT_MUTUEL = ";";
/* encoding par défaut du Crédit Mutuel
    Il n'y a évidemment aucune documentation sur laquelle on peut compter
    ni de changelog, donc ptèt que ça changera,
    sûrement sans prévenir
    On verra à ce moment-là
*/
const CREDIT_MUTUEL_ENCODING = "windows-1252";

const COLONNES_ATTENDUES = [
    `Date`,
    `Débit`,
    `Crédit`,
    `Libellé`,
]

const parseScsv = dsvFormat(SEPARATEUR_CREDIT_MUTUEL).parse

export class CreditMutuelParsingError extends Error{
    constructor(...args){
        super(...args)
    }
}

function hasOwn(obj, prop){
    return Object.prototype.hasOwnProperty.call(obj, prop)
}



function listerColonnesManquantes(row){
    return COLONNES_ATTENDUES.filter(key => !hasOwn(row, key))
}

/**
 * 
 * @param {LigneImportBancaireCSVCreditMutuel} ligne
 * @returns {LigneImportBancaire}
 */
function ligneCMToLigneImportBancaire({Date: DateStr, Débit, Crédit, Libellé: libellé}){
    const date = parseDate(DateStr, "dd/MM/yyyy", new Date());

    const montant = parseFloat(Débit.replace(`,`, `.`)) || parseFloat(Crédit.replace(`,`, `.`))

    return {
        date,
        montant,
        libellé
    }
}

/**
 * 
 * @param {ArrayBuffer} arrayBuffer 
 * @returns {LigneImportBancaire[]}
 */
export function parseCSVCreditMutuel(arrayBuffer){
    const decoder = new TextDecoder(CREDIT_MUTUEL_ENCODING, {fatal: true}); 
    
    // Conversion de buffer vers string 
    let str;
    try{
        str = decoder.decode(arrayBuffer); 
    }
    catch(e){
        throw new CreditMutuelParsingError(
            `Erreur lors du parsing du fichier. L'encoding attendu était ${CREDIT_MUTUEL_ENCODING} et le fichier importé n'a pas cet encoding`
        )
    }

    console.log("str", str)

    /** @type {LigneImportBancaireCSVCreditMutuel[]} */
    let parsedData;
    try{
        // @ts-ignore
        parsedData = parseScsv(str)
    }
    catch(e){
        throw new CreditMutuelParsingError(
            `Erreur lors du parsing du fichier. Un fichier CSV était attendu par d3-fetch mais une erreur est survenue. Détails: ${e}`
        )
    }

    console.log("parsedData", parsedData)

    const colonnesManquantes = listerColonnesManquantes(parsedData[0])
    if(colonnesManquantes.length >= 1){
        throw new CreditMutuelParsingError(
            `Erreur dans le fichier. Les colonnes ${colonnesManquantes.map(c => `"${c}"`).join(`, `)} sont attendues et manquantes.`
        )
    }

    return parsedData.map(ligneCMToLigneImportBancaire)
}