# comptanar
un produit pour faire des bilans officiels

Suivi : https://github.com/users/pntbr/projects/1/views/1

## Liens
[Déclarer nous-même](https://hackmd.io/KMSyKgOzT_SnHeCmKLvxBw)
https://www.impots.gouv.fr/sites/default/files/media/1_metier/3_partenaire/edi/liste_des_partenaires_edi_actifs.pdf


## Des executables

`écritures-comptables.js`

```sh
executables/écritures-comptables.js < ./tests/etat-des-comptes/operationsHautNiveauLocation.yml > ./tests/etat-des-comptes/operationsCompteLocation.yml
```

`etat-des-comptes.js`

```sh
executables/etat-des-comptes.js < ./tests/etat-des-comptes/operationsCompteLocation.yml > ./tests/etat-des-comptes/etat-des-comptes.json
```

Combo avec un pipe

```sh
executables/écritures-comptables.js < ./tests/etat-des-comptes/operationsHautNiveauLocation.yml | executables/etat-des-comptes.js > ./tests/etat-des-comptes/etat-des-comptes37.json
```


## Développement

Y'a des outils pour aider dans le dossier [`outils-manuels`](outils-manuels)

