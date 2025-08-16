// Banque minimale de contes (tu pourras en rajouter à volonté)
window.CONTE_DATA = {
  triste: [
    {
      id: "luciole-oiseau",
      titre: "La luciole et l’oiseau",
      theme: "terre",
      image: "", // optionnel
      texte: `
Il était une fois, au bord d’une forêt, une minuscule luciole.
Elle se croyait trop faible pour éclairer quoi que ce soit.

Un soir d’orage, elle se posa sur une feuille. En dessous,
un oiseau perdu grelottait, incapable de retrouver son nid.
La lumière de la luciole, fragile mais sincère, lui montra le chemin.

Ce n’était pas la grandeur de sa lumière qui comptait,
mais le fait qu’elle brillait quand même, malgré la nuit.`
    }
  ],
  perdu: [
    {
      id: "etoile-oubliee",
      titre: "L’étoile oubliée",
      theme: "cosmos",
      image: "",
      texte: `
Dans un coin reculé de la galaxie, une étoile pâlissait,
jalouse des soleils géants.

Un petit vaisseau en dérive aperçut son éclat discret.
Il n’était pas aveuglant, juste assez pour indiquer une direction.
Le vaisseau retrouva sa route — et l’étoile comprit :
il suffit parfois d’un simple éclat pour sauver une vie.`
    },
    {
      id: "capitaine-lumiere",
      titre: "Le capitaine et la lumière perdue",
      theme: "cosmos",
      image: "",
      texte: `
Le vaisseau dérivait depuis des jours. Le capitaine pensait être perdu.
Au loin, un éclat discret apparut — comme une luciole suspendue dans l’espace.

En la suivant, il sentit la chaleur intérieure renaître.
Ce n’était pas la lumière qui le sauvait,
mais le souvenir qu’une direction existe toujours, même minuscule.
Et cette lumière, finalement, c’était la sienne.`
    }
  ],
  anxieux: [
    {
      id: "rivage-respire",
      titre: "Le rivage qui respire",
      theme: "terre",
      image: "",
      texte: `
La mer avait le cœur gros et déposait ses vagues trop fort.
Un promeneur posa la main sur une pierre chaude et écouta.

Il remarqua que la mer respire : inspiration, expiration.
Il se synchrONisa avec elle, lentement.
L’angoisse se retira comme la marée qui s’éloigne, promettant de revenir —
mais plus douce, plus lente, apprivoisée.`
    }
  ],
  seul: [],
  fatigue: [],
  lum: []
};

// ——— Versions plus longues (remplacement/ajouts) ———

// TRISTE — ajout d’un conte plus long
CONTE_DATA.triste = [
  ...(CONTE_DATA.triste||[]).filter(c => c.id !== "banc-du-matin"),
  {
    id:"banc-du-matin",
    titre:"Le banc du matin",
    theme:"terre",
    image:"",
    texte:`
Il pleuvait si fin que la ville semblait cousue de fils transparents. Les passants couraient sans se voir. Toi, tu as ralenti près d’un petit square, là où un banc luisait comme une pierre noire.

Sur l’assise, un thermos fumait encore. Un papier scotché dessus disait : “Pour toi qui passes ici. Que ce soit un bon jour.” Personne autour. Juste la pluie, régulière, et le parfum de métal chaud.

Tu as versé une gorgée dans le couvercle-tasse. La chaleur a d’abord gagné tes doigts, puis la poitrine. Rien n’avait changé au-dehors : même gris, mêmes flaques, mêmes soucis en file indienne. Pourtant quelque chose s’est déplacé dedans, comme si on avait tiré doucement un rideau.

Tu as levé la tête. Au balcon d’en face, une vieille dame arrosait ses pots malgré la pluie. Elle t’a vu hésiter, a souri, puis a levé sa tasse imaginaire pour trinquer de loin, comme si le monde possédait un langage discret réservé aux cœurs fatigués.

Tu n’as pas gardé le thermos. Tu l’as laissé pour quelqu’un d’autre, avec un mot en plus : “Ça m’a aidé. À toi.” Et, sans bruit, la matinée a pris une teinte de miel.`
  }
];

// PERDU — versions plus longues
CONTE_DATA.perdu = [
  {
    id:"etoile-oubliee",
    titre:"L’étoile oubliée",
    theme:"cosmos",
    image:"",
    texte:`
Dans un bras calme de la galaxie, une petite étoile clignotait à peine. Elle se croyait inutile, noyée par les soleils géants qui, eux, avaient des noms et des cartes.

Un vaisseau passa, vidé de direction, avec un équipage aux voix éteintes. Ils n’attendaient plus rien, sinon ce silence plus lourd que l’espace. Sur l’écran, un point : si faible qu’on le prit d’abord pour un parasite.

Ils tournèrent l’antenne. Le point persista. Ce n’était pas un phare, pas une invitation, seulement un battement. Ils réglèrent la navigation sur “aller vers”. Le vaisseau, doucement, se remit à parler : chiffres simples, cap posé, temps estimé. L’étoile ne promettait rien, mais elle donnait un avant.

À mesure qu’ils approchaient, leurs gestes reprirent du poids. Quelqu’un rit d’une blague moyenne et c’était déjà une victoire. Ils dépassèrent l’étoile — elle n’avait rien d’extraordinaire de près — et pourtant, tous regardèrent en arrière, comme on remercie une main anonyme.

L’équipage nota sa position sur la carte. Pas son nom : juste un petit symbole discret. Pour dire à d’autres perdus que, quelque part, une pulsation suffit pour repartir.`
  },
  {
    id:"capitaine-lumiere",
    titre:"Le capitaine et la lumière perdue",
    theme:"cosmos",
    image:"",
    texte:`
Le capitaine avait tenté tous les calculs possibles. Les routes étaient devenues des nœuds, les écrans, des miroirs. Il regardait son reflet comme on regarde une étoile éteinte.

Au hublot, une lueur hésitante apparut, pareille à une luciole coincée entre deux siècles. Elle n’indiquait pas une destination, seulement un mouvement. Le capitaine suivit ce presque-rien. Les moteurs ronronnèrent comme un chat revenu.

À mesure que la lueur se déplaçait, des souvenirs précis revinrent : la tasse de café d’un matin clair, la main d’un ami posée une seconde de trop, l’odeur sèche des hangars au lever du soleil. Les choses n’étaient pas moins difficiles ; elles redevenaient habitables.

La lueur s’effaça à l’entrée d’un corridor d’étoiles. Il comprit : elle n’était venue que pour le premier pas. Il coupa les alarmes inutiles, reposa les épaules, et donna le cap. Le vaisseau obéit, léger comme un aveu.

Parfois, le capitaine croit encore la voir. Peut-être était-ce lui, cette lumière. Peut-être qu’on se ramène soi-même à la vie, un pas après l’autre.`
  }
];

// ANXIEUX — version plus longue + un deuxième conte
CONTE_DATA.anxieux = [
  {
    id:"rivage-respire",
    titre:"Le rivage qui respire",
    theme:"terre",
    image:"",
    texte:`
Le vent avait rempli ta cage thoracique de cailloux. Tu marchais au bord de l’eau en comptant tes soucis comme on compte les vagues : un, deux, trois, trop.

Tu t’es assis sur une pierre plate. La mer a pris sa grande respiration. Tu as calé la tienne dessus : quand la vague s’avance, j’inspire ; quand elle repart, j’expire. Au début, l’esprit proteste, invente des urgences. Puis il accepte l’exercice comme on accepte une couverture.

Des détails ont surgi : l’odeur de sel sur tes mains, le fil d’algue accroché à ta chaussure, le cri d’un oiseau qui coupe net tes pensées. Le monde, sans changer, te paraissait à nouveau découpé en morceaux gérables.

La bataille n’était pas gagnée, mais tu n’étais plus au centre du cyclone. Tu n’étais qu’un cœur sur une roche, accordé à une musique vieille comme la poussière du monde. En repartant, tu as gardé la cadence dans tes pas, et chaque pas disait silencieusement : “Encore une vague. Puis une autre. Je peux.”`
  },
  {
    id:"la-pierre-lisse",
    titre:"La pierre lisse",
    theme:"terre",
    image:"",
    texte:`
Dans ta poche, une petite pierre ronde, douce comme une paupière. Un inconnu te l’avait donnée un jour de foule : “Quand ça déborde, tiens-la. Elle se souvient de la rivière.”

Tu l’as serrée dans le bus, au bureau, chez toi, partout où l’air manquait. Elle n’avalait pas tes peurs ; elle te rappelait simplement la température du réel. À travers elle, tu sentais ta main. À travers ta main, ton souffle. À travers ton souffle, le monde qui n’était pas contre toi, juste là.

Un soir, tu as glissé la pierre dans la paume d’une amie qui tremblait. “Elle se souvient de la rivière”, as-tu dit. Elle a souri entre deux vagues.

Vous n’aviez pas guéri le siècle, mais la soirée tenait debout.`
  }
];

// SEUL — versions plus longues
CONTE_DATA.seul = [
  {
    id:"fenetre-voisine",
    titre:"La fenêtre voisine",
    theme:"terre",
    image:"",
    texte:`
Chaque nuit, deux fenêtres restaient allumées tard, séparées par une cour où les plantes étiraient des ombres fines. Tu ne voyais qu’un mouvement discret : quelqu’un rangeant une tasse, éteignant un livre, repliant un plaid.

Vous ne vous êtes jamais parlé. Pourtant, il y avait ce salut muet, comme un phare qui cligne juste assez pour dire : “Je vois ta mer.” Les jours plus lourds, tu ouvrais tes rideaux plus tôt, pour croiser ce signe de vie.

Un soir, la fenêtre d’en face est restée sombre. Un vide a creusé ta poitrine. Tu as préparé deux tasses ; tu as attendu. Tard, la lumière est revenue, vacillante, puis stable. Tu as levé ta tasse dans la nuit et, à ta surprise, l’autre main a répondu.

Le lendemain, dans le hall, un papier : “Merci d’avoir attendu avec moi.” Signé d’un prénom que tu as gardé comme une pierre chaude dans la poche.`
  },
  {
    id:"constellation-des-gens",
    titre:"La constellation des gens",
    theme:"cosmos",
    image:"",
    texte:`
Tu te croyais seul comme un point perdu. Mais les points, on peut les relier. Pense aux messages envoyés et jamais reçus, aux regards qui ont frôlé ta journée sans s’y poser, aux gestes minuscules dont tu ignores encore les conséquences.

Quelqu’un garde la porte un peu plus longtemps. Quelqu’un t’a laissé passer. Quelqu’un a pensé à toi au milieu d’une file d’attente, sans savoir pourquoi. Nous sommes des étoiles timides ; parfois il faut reculer d’un pas pour voir la figure que nous dessinons.

La solitude n’a pas disparu. Elle a juste pris sa place dans le dessin, comme un espace entre deux traits. Et, sous cet espace, il y a un fil. Tu peux tirer doucement dessus : il conduit toujours à quelqu’un.`
  }
];

// FATIGUÉ — versions plus longues
CONTE_DATA.fatigue = [
  {
    id:"permission-de-souffler",
    titre:"Permission de souffler",
    theme:"terre",
    image:"",
    texte:`
Aujourd’hui, tu as le droit d’être lent. Les choses importantes survivront à ton retard. Tu as le droit d’arrêter le monde au bouton “pause” de ta respiration.

Tu as préparé un nid : une chaise qui ne juge pas, une boisson tiède, une musique qui se contente d’exister sur une seule note. Les notifications peuvent parler entre elles ; elles n’ont rien d’urgent à te dire.

Le corps n’est pas une machine de guerre. C’est une maison avec des pièces fermées depuis trop longtemps. Tu as fait un tour chez toi, doucement, et tu as laissé des fenêtres en imposte : assez pour que l’air passe sans que le vent te renverse.

Le soir, tu n’avais pas accompli grand-chose. Tu avais surtout renoncé à te battre contre toi-même. Et cette victoire ne figurait sur aucune to-do list, mais elle brillait au-dessus du lit comme une veilleuse.`
  },
  {
    id:"hamac-des-nuages",
    titre:"Le hamac des nuages",
    theme:"ciel",
    image:"",
    texte:`
Il y a, entre deux nuages, un hamac invisible où reposent les jours trop lourds. On y grimpe en fermant les yeux cinq minutes, montre coupée, monde en veille.

Tu t’y es allongé sans prouesse. Le ciel, courtois, a pris en charge le poids de tes pensées, comme un ami musclé qui porte les courses sans faire de bruit. Les idées ont continué de passer, mais en chaussettes, sur la pointe des pieds.

Quand tu t’es relevé, rien n’avait changé. Toi si : tes épaules s’étaient souvenues qu’elles n’étaient pas la charpente de la planète.`
  }
];

// EN QUÊTE DE LUMIÈRE — versions plus longues
CONTE_DATA.lum = [
  {
    id:"allumette-gardee",
    titre:"L’allumette gardée",
    theme:"terre",
    image:"",
    texte:`
On ne gaspille pas une allumette au vent. On la cache entre ses paumes, on la protège du souffle qui voudrait la voler, on la marche quelques pas à l’abri d’un mur.

Tu as protégé la tienne toute la journée. Ce n’était pas une grande flamme, juste une étincelle têtue. Le soir, tu l’as tendue à une autre main. Deux paumes ont formé un abri, puis deux flammes ont pris.

La pièce n’était pas plus lumineuse ; elle était habitée. On a bu un thé tiède, on a parlé de presque rien, on a souri comme on souffle doucement sur un feu. L’allumette s’est consumée depuis longtemps. La chaleur est restée.`
  },
  {
    id:"eclat-qui-revient",
    titre:"L’éclat qui revient",
    theme:"cosmos",
    image:"",
    texte:`
La nuit n’a pas gagné : elle tient son tour de garde. Les étoiles ne sont pas parties ; elles se cachent derrière un rideau épais qui, parfois, accepte de se fendre pour un regard patient.

Tu as appris à regarder plus longtemps que la fatigue. Au troisième souffle, une pointe ; au cinquième, une constellations ; au dixième, la sensation très simple que l’univers n’a pas claqué la porte.

L’éclat revient toujours. Parfois dehors, parfois dedans. Tu peux ne pas savoir lequel des deux te visite ce soir. Ce n’est pas grave : l’un finit toujours par appeler l’autre.`
  }
];
