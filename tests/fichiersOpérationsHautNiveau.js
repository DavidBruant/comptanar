//@ts-check

import { access, readFile, rmdir } from 'node:fs/promises';
import { constants } from 'node:fs';

import test from 'ava';
import {dirSync} from 'tmp'

import '../source/format-données/types.js'

import FichierOpérationsHautNiveau from '../source/format-données/fichierOpérationsHautNiveau.js'

/**
 * 
 * @param {Object} context 
 * @returns {context is import('ava').ExecutionContext & {tmpDir: string, fichier: ReturnType<FichierOpérationsHautNiveau>} }
 */
function isComptaFileContext(context){
    return typeof context.tmpDir === "string" && 
        typeof context.fichier.createFile === "function"
}

test.beforeEach(t => {
    const {name: tmpDir} = dirSync();

    const fichier = FichierOpérationsHautNiveau(tmpDir)

    fichier.createFile()

	t.context = {
        tmpDir,
        fichier
    }

});

test.afterEach(t => {
    if(!isComptaFileContext(t.context)) throw `t.context n'a pas les bonnes propriétés`;

	return access(t.context.fichier.filename, constants.W_OK)
        .then(() => t.context.fichier.deleteFile())
        .then(() => rmdir(t.context.fichier.tmpDir))
        .catch(() => { /* ignore errors */ })
});


test(`Création fichier d'opérations haut niveau`, t => {

    if(!isComptaFileContext(t.context)) throw `t.context n'a pas les bonnes propriétés`;

    const {fichier, tmpDir} = t.context;

    t.is(typeof fichier.filename, 'string', 'filename est une chaine de caractère')
    t.true(fichier.filename.startsWith(tmpDir), `le nom du dossier passé en argument est un préfixe du filename final`)
    t.true(fichier.filename.length > tmpDir.length, `le nom du filename est plus long que le dirname`)

    t.teardown( () => fichier.deleteFile() )

    return fichier.createFile()
        .then(() => access(fichier.filename, constants.R_OK | constants.W_OK) )
        .then(() => t.pass())
});

test(`Écriture dans fichier existant`, t => {

    if(!isComptaFileContext(t.context)) throw "nope";

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
        .then(async () => {
            const contenu = await readFile(fichier.filename, `utf-8`)

            t.regex(contenu, /Envoi facture client/, `le contenu contient "Envoi facture client"`)
            t.regex(contenu, /602561/, `le contenu contient "602561"`)
            t.regex(contenu, /F2022-10-001/, `le contenu contient "F2022-10-001"`)
        })
        .then(() => t.pass())
});


test(`Suppression du fichier`, t => {

    if(!isComptaFileContext(t.context)) throw "nope";

    const {fichier} = t.context;

    return fichier.deleteFile()
        .then(() => t.throwsAsync(() => access(fichier.filename, constants.F_OK) ))
});