[![Tests unitaires](https://github.com/Eliott7179/marvel-app/actions/workflows/unit-tests.yml/badge.svg)](https://github.com/Eliott7179/marvel-app)

[![Coverage](https://sonarcloud.io/api/project_badges/measure?project=Eliott7179_html-to-app&metric=coverage)](https://sonarcloud.io/summary/new_code?id=Eliott7179_html-to-app)

[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=Eliott7179_html-to-app&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=Eliott7179_html-to-app)

# Marvel App

## Installation
Récupérer le projet en local et installer les dépendances
```mermaid
git clone url-du-projet
cd marvel-app
npm install
```
## Lancement

```mermaid
npm start
```

L'application est accessible à l'adresse http://localhost:3000

## Test

Execution des tests unitaires en mode watch, c'est à dire que les tests sont relancés chaque modification de code.

```mermaid
npm test
```

Execution des tests uniquement une fois avec un rapport détaillé de la couverture du code

```mermaid
npm run test:coverage
```

## Conception

Le projet est composé de 4 pages :
- Home (page d'accueil): Liste des personnages 
- Character: Page de détail d'un personnage
- About: Page d'information sur l'application
- Contact: Page de contact

```mermaid
graph LR
    A["Home"] -- /about --> B["About"]
    A["Home"] -- /contact --> C["Contact"]
    A["Home"] -- /character/:id --> D(("Character"))
```   
