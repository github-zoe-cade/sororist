export default {
  uuid: "5c38a5d6-47c3-11ec-81d3-0242ac130003",
  name: "Zoé Cadé (Downdusky)",
  gender: "female",
  description:
    "Twitch affiliate ·  Web Developper RoR/React \n Leftist with a right-clicker mentality\n Attention, tweets avec des bouts de choucroute dedans.\n PP @eniluapski",
  commercial:
    "Je suis disponible pour des talks en physique à Paris, en streaming ou pour des podcasts",
  pictureUrl: `https://randomuser.me/api/portraits/women/${Math.floor(
    Math.random() * 100
  )}.jpg`,
  themes: [
    { uuid: 1, name: "Développement" },
    { uuid: 2, name: "Ruby" },
    { uuid: 3, name: "Javascript" },
    { uuid: 4, name: "Reconversion" },
    { uuid: 5, name: "Ruby on Rails" },
    { uuid: 6, name: "React" },
  ],
  links: [
    { platform: "twitter", url: "https://twitter.com/downdusky" },
    { platform: "twitch", url: "twitch.tv/downdusky" },
    { platform: "github", url: "github.com/zoeKD" },
    { platform: "tiktok", url: "downdusky.com" },
  ],
  notValidated: true,
  published: false,
  hidden: false,
};
