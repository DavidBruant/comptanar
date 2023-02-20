# comptanar

Un produit pour faire des bilans officiels

Suivi : https://github.com/users/pntbr/projects/1/views/1


L'objectif c'est de montrer ce qu'il faut déclarer aux impôts.


## Déroulé

### Creation d'instance

Depuis le site comptanar centrale, on demande à ouvrir une instance à partir de son compte Github.
En passant toctoctoc, on fil les clefs pour pouvoir créer un repo dans lequel il y aura
- les fichiers de données 
- le code source pour l'interaction avec ces données

Les fichiers de données seront exposé dans la branche principale.
Le code source pour l'interaction sera lui dans une autre branche.

La branche du code source sere celle utilisé pour le déploiement avec GithubPages.

Un `github workflow` sur l'instance générée permet de maintenir le code source à jour.

À priori, pas besoin de revenir sur l'interface centre par la suite.


### Saisir mes données comptable

- Basculer sur mon instance de comptanar
- Saisir mes données comptable

### Déclarer aux impôts

- déclarer la TVA
- déclarer les comptes de resultats et bilan
- déclarer l'impôt sur les sociétés



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

