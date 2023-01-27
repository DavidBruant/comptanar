//@ts-check

import test from 'ava';
import {sum} from 'd3-array';

import '../source/format-données/types.js'

import traduireOpérationsHautNiveauEnOpérationsDeCompte from '../source/format-données/traduireOpérationsHautNiveauEnOpérationsDeCompte.js';
import produireÉtatDesComptes from '../source/produireÉtatDesComptes.js'


/**
 * @param {any} t
 * @param {OpérationDeCompte[]} opérations
 */
function équilibreCréditDébit(t, opérations){
    const sommeDébit = sum(
        opérations
            .filter(({sens}) => sens === 'Débit')
            .map(({montant}) => montant)
    )
    const sommeCrédit = sum(
        opérations
            .filter(({sens}) => sens === 'Crédit')
            .map(({montant}) => montant)
    )

    t.is(sommeDébit, sommeCrédit, 'La somme des crédits devrait être égale à la somme des débits')

}



test('Exemple 1 location', t => {
    /*

    ## Exemple 1 - on paye un loyer

    Compta d'une asso ("le chateau") qui donne des cours de clown
    L'asso loue un local à son propriétaire Lomepal
    Chaque mois, l'asso reçoit une facture pour la location du local

    Voilà comment ça se traduit comptablement

    1) On reçoit une facture de Lomepal
    2) On la paye

    ### Plan comptable de l'asso (minimal nécessaire pour décrire cette transaction)

    401001 - Lomepal (fournisseur/proprio du chateau)
    512001 - Compte en banque de l'association
    613201 - Locations (le chateau)

    */

    /** @type {RéceptionFactureFournisseur} */
    const réceptionFactureLomepal = {
        type: "Réception facture fournisseur",
        date: new Date(),
        identifiantOpération: 'dtynjfykyu',
        compteFournisseur: '401001',
        opérations: [
            {
                compte: '613201',
                montant: 500,
                sens: 'Débit'
            }
        ]
    }

    /** @type {PaiementFactureFournisseur} */
    const paiementFactureLomepal = {
        type: "Paiement facture fournisseur",
        date: new Date(),
        identifiantOpération: 'mmrtlvril',
        compteBancaire: '512001',
        opérations: [
            {
                compte: '401001',
                montant: 500,
                sens: 'Débit'
            }
        ]
    }

    /** @type {OpérationHautNiveau[]} */
    const opérationsHautNiveau = [
        réceptionFactureLomepal,
        paiementFactureLomepal
    ]

	const opérationsDeCompte = traduireOpérationsHautNiveauEnOpérationsDeCompte(opérationsHautNiveau)

    //console.log('opérationsDeCompte', opérationsDeCompte)

    équilibreCréditDébit(t, opérationsDeCompte);
    
    const étatDesComptes = produireÉtatDesComptes(opérationsDeCompte)

    t.is(étatDesComptes.get('613201'), 500)
    t.is(étatDesComptes.get('401001'), 0)
    t.is(étatDesComptes.get('512001'), -500)
});
