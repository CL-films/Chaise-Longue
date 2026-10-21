/* ===========================================================
   CHAISE LONGUE: EDIT THIS FILE TO CHANGE THE SITE
   Change the text between the quotes, then save (commit).
   Never delete a quote, comma or bracket.
   =========================================================== */
window.SITE = {
  name: "Chaise Longue",

  /* Where the contact form sends messages.
     Step 1: make a free form at formspree.io pointing to your email.
     Step 2: paste its link here, like "https://formspree.io/f/abcdwxyz".
     Until then the form opens the visitor's email app instead. */
  formEndpoint: "",

  /* Shown under the form as a clickable email. */
  email: "YOUR-EMAIL@chaiselonguefilms.com",

  /* Home background video. Put your file in the assets folder
     (for example assets/home.mp4) and write its path here.
     Keep it under 10 MB. Leave empty for the colour background. */
  homeVideo: "",

  /* Page titles that Google shows. */
  description: "Chaise Longue is a film and content production company in Beirut.",

  /* The three services, in order. */
  services: [
    { title: "Retainer films for businesses", note: "Monthly content for restaurants, hotels and fashion brands." },
    { title: "Hero films for brands and products", note: "One big film that makes a product the star." },
    { title: "Servicing for local and international advertising agencies", note: "Your production partner in Beirut, from idea to final cut." }
  ],

  /* The three people. To add a person, copy one block, put a comma after the
     previous block, and paste it. For a photo, upload it to assets/people
     and write its path in photo, like "assets/people/ramy.jpg". */
  people: [
    {
      name: "Ramy",
      role: "Director of photography",
      photo: "",
      basedIn: "City",
      experience: "X years",
      credits: ["Credit one", "Credit two", "Credit three"],
      bio: "One-line bio goes here.",
      vimeo: ""
    },
    {
      name: "Rami",
      role: "Producer",
      photo: "",
      basedIn: "Beirut",
      experience: "X years",
      credits: ["Credit one", "Credit two", "Credit three"],
      bio: "One-line bio goes here.",
      vimeo: ""
    },
    {
      name: "Carly",
      role: "Director",
      photo: "",
      basedIn: "City",
      experience: "X years",
      credits: ["Credit one", "Credit two", "Credit three"],
      bio: "One-line bio goes here.",
      vimeo: ""
    }
  ]
};
