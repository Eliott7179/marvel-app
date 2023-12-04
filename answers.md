1/ Quel est l'intérêt de commiter régulièrement et de manière atomique ?
    Régulière :
        -> Permet de récuperer l'état actuel du code et de voir les changements effectués de façon régulière
    Atomique :
        -> Permet de revenir à un commit précedent

2/ A quoi sert une branche de type feature dans un développement logiciel de type git flow ?
    Permet de travailler sur une nouvelle fonctionnalité à ajouter avant de l'intégrer à la branche principale ou une branche plus importante

3/ Quelle est la différence entre une branche main et une branche develop ?
    La branche main est notre branche principale sur laquelle on ne développe pas, on retrouve sur cette branche tout ce qui à été fait et à été validé à partir de notre branche develop
    Pour conclure : on code sur develop et une fois la fonctionnalité validé à 100% on l'envoie sur la main

4/ Quelle est la différence entre git add, git commit et git push ?
    git add : 
        -> Ajoute les modifications dans une zone pour le prochain commit
    git commit : 
        -> Crée un commit qui enregistre les modifications qui se trouve dans le git add (il faut en plus ajouté un nom au commit)
    git push : 
        -> Push le commit vers le dépôt (ex GitHub)

5/ Quel est l'intérêt d'une protection de branche ?
    Permet d'ajouter une sécurité pour ne pas enregistrer des modifications qui n'ont pas été validé

6/ Quel est l'intérêt d'une pull request ?
    C'est une fonctionnalité qui permet de proposer de merger des modifications d'une branche à une autre
    Permet de garder une bonne pratique dans la gestion des branches afin d'éviter que certaines ne servent à rien 

7/ Dans quel cas passer d'une version 1.0.0 à 1.0.1 ?
    Quand il y a eu un "bug" de corriger

8/ Dans quel cas passer d'une version 1.0.0 à 1.1.0 ?
    Quand il y a eu une fonctionnalité d'ajouté (ex une nouvelle page)

9/ A quoi sert une version release candidate ?
    C'est une version finaliser mais qui nécéssite des tests avant d'être publié

10/ Quel est l'intérêt des tests unitaires ?
    Les tests unitaires sont la pour tester les fonctionnalités de l'application de façon individuelle afin de detecter d'éventuelles erreurs ou bugs