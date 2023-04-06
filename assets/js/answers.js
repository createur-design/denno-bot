const urlLink = document.querySelector("body").classList.contains("accueil")
  ? "./pages/"
  : "./";

const dialog = [
  {
    id: 1,
    answer: "Je possède des billets CSE, amicale, dois-je réserver ma visite ?",
    response:
      "Il n’est pas nécessaire de réserver lorsque vous possédez des billets CSE, ces billets vous donne un accès direct au parc tous les jours d’ouverture.",
    keywords: ["billets", "billet", "cse", "réserver", "reserver"],
  },
  {
    id: 2,
    answer: "Peut-on pique-niquer dans l’enceinte du parc ?",
    response:
      "Oui le pique-nique est autorisé dans l’enceinte du parc. Des aires de pique-nique couvertes et découvertes sont d’ailleurs à votre disposition.",
    keywords: ["pique-niquer", "pique", "manger", "mange"],
  },
  {
    id: 3,
    answer: "Combien coûte le parking ?",
    response: "A Dennlys parc le parking est gratuit.",
    keywords: ["combien", "coute", "coûte", "parking"],
  },
  {
    id: 4,
    answer:
      "Mon enfant mesure moins d’1 mètre combien d’attractions lui sont accessibles ?",
    response:
      "La plupart des attractions du parc sont accessibles aux enfants sans restriction de taille dès lors que l’enfant est accompagné d’un adulte. Le détail des restrictions propres à chaque attraction est précisé parmi leurs caractéristiques techniques sur le site internet.",
    keywords: ["enfant", "combien", "attraction", "attractions", "accessible"],
  },
  {
    id: 5,
    answer: "Proposez-vous la location de chariots ?",
    response: "Oui nous proposons des chariots en location à 5€ / jour.",
    keywords: ["location", "chariot", "chariots"],
  },
  {
    id: 6,
    answer: "Disposez-vous d’une consigne pour y laisser mes affaires ?",
    response:
      "Le parc ne propose pas de consigne mais vous avez la possibilité de ressortir du parc au cours de la journée pour retourner à votre véhicule si nécessaire.",
    keywords: ["consigne", "casier", "casiers", "affaires", "affaire"],
  },
  {
    id: 7,
    answer: "Acceptez-vous les tickets restaurant ?",
    response:
      "Non le parc accepte uniquement les règlements en espèces, CB et chèque-vacances ANCV.",
    keywords: ["ticket", "tickets", "restaurant"],
  },
  {
    id: 8,
    answer: "Est-il possible de venir à Dennlys Parc en bus ou en train ?",
    response: "Malheureusement, non, pas encore !",
    keywords: ["venir", "transport", "bus", "train"],
  },
  {
    id: 9,
    answer: "Les animaux sont-ils autorisés dans l'enceinte du parc ?",
    response:
      "Pour des raisons d'hygiène, nos amis les animaux ne sont pas admis dans l'enceinte du parc.",
    keywords: ["animaux", "animal", "chien", "chat"],
  },
  {
    id: 10,
    answer: "Doit-on prendre son maillot de bain en venant à Dennlys Parc ?",
    response:
      "Non, le parc ne dispose pas de piscine, le maillot de bain n'est donc pas nécessaire.",
    keywords: ["maillot", "bain"],
  },
  {
    id: 11,
    answer: "Peut-on ressortir du parc dans la journée ?",
    response:
      "Oui, nous apposons un tampon discret sur la main lors du premier passage aux caisses du parc, ce qui permet de ressortir du parc dans la journée.",
    keywords: ["sortir", "ressortir"],
  },
  {
    id: 12,
    answer: "Le parc propose-t-il un tarif spécial familles nombreuses ?",
    response:
      "Non, le tarif groupes est réservé à des structures telles que les écoles, associations, centres de loisirs, CE, etc.",
    keywords: ["tarif", "prix"],
  },
  {
    id: 13,
    answer: "Le parc dispose-t-il d'un distributeur de billets ?",
    response: "Non",
    keywords: ["distributeur", "argent"],
  },
  {
    id: 14,
    answer: "Quels sont les moyens de paiement acceptés ?",
    response: "CB, espèces, chèques vacances ANCV",
    keywords: [
      "paiement",
      "argent",
      "cb",
      "chèque",
      "cheque",
      "ancv",
      "vacance",
      "vacances",
    ],
  },
  {
    id: 15,
    answer: "Montres moi ta tête",
    response: "Voici mon déguisement du moment...",
    picture: `https://www.dennlys-parc.com/assets/images/2023/denno-pirate.png`,
    keywords: ["tete", "tête", "photo", "denno"],
  },
  {
    id: 16,
    answer: "Autre",
    response: "Nous vous invitons à nous contacter via la page contact",
    link: `<a href="${urlLink}contact.php">contactez-nous</a>`,
    keywords: ["autre"],
  },
];

export default dialog;
