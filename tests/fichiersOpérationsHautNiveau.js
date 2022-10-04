//@ts-check

import { writeFile } from 'node:fs/promises';

import test from 'ava';
import {dirSync} from 'tmp'

import '../types.js'

import FichierOpérationsHautNiveau from '../fichierOpérationsHautNiveau.js'

test.beforeEach(t => {
    const {name: tmpDir} = dirSync();
    console.log('name', tmpDir)

    const fichier = FichierOpérationsHautNiveau(tmpDir)

    fichier.createFile()

	t.context = {
        tmpDir,
        fichier
    }
});

test(`Création fichier d'opérations haut niveau`, t => {

    const {fichier, tmpDir} = t.context;

    t.is(typeof fichier.filename, 'string', 'filename est une chaine de caractère')
    t.true(fichier.filename.startsWith(tmpDir), `le nom du dossier passé en argument est un préfixe du filename final`)
    t.true(fichier.filename.length > tmpDir.length, `le nom du filename est plus long que le dirname`)

    t.teardown(() => fichier.deleteFile() )

    return fichier.createFile()
        .then(t.pass)
        .then(() => {
            throw `TODO vérifier que le fichier existe`
        })
});

test(`Écriture dans fichier existant`, t => {
    
    const {fichier} = t.context;

    /** @type {EnvoiFactureClient} */
    let opération = {
        type: "Envoi facture client",
        date: new Date(),
        identifiantOpération: 'azer',
        numéroFacture: 'F2022-10-001',
        compteClient: '402563',
        opérations: [
            {
                compte: '602561',
                montant: 50,
                sens: 'Débit'
            },
            {
                compte: '44566', // TVA
                montant: 10,
                sens: 'Débit'
            }
        ]
    }

    return fichier.addOpérations([opération])
        .then(t.pass)
        .then(() => {
            throw `TODO vérifier que le contenu du fichier est plus gros et contient quelques chaines distinctives`
        })
});
