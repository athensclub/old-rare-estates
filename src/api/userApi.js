/**
 * When the API is ready, Implements the requests
 */
/*const mockReturn = {
  estates: [
    {
      userLiked: false,
      image:
        "https://cdn.discordapp.com/attachments/842737146321174558/843390216420982784/6d4fecad75cd497381092d63c2d0585b.png",
      name: "Estate Name",
      creator: "Someone",
      price: 22.0,
      like: 123000,
      id: 1,
    },
    {
      userLiked: false,
      image:
        "https://cdn.discordapp.com/attachments/842737146321174558/843390216420982784/6d4fecad75cd497381092d63c2d0585b.png",
      name: "Estate Name",
      creator: "Someone",
      price: 22.0,
      like: 123000,
      id: 1,
    },
    {
      userLiked: false,
      image:
        "https://cdn.discordapp.com/attachments/842737146321174558/843390216420982784/6d4fecad75cd497381092d63c2d0585b.png",
      name: "Estate Name",
      creator: "Someone",
      price: 22.0,
      like: 123000,
      id: 1,
    },
    {
      userLiked: false,
      image:
        "https://cdn.discordapp.com/attachments/842737146321174558/843390216420982784/6d4fecad75cd497381092d63c2d0585b.png",
      name: "Estate Name",
      creator: "Someone",
      price: 22.0,
      like: 123000,
      id: 1,
    },
    {
      userLiked: false,
      image:
        "https://cdn.discordapp.com/attachments/842737146321174558/843390216420982784/6d4fecad75cd497381092d63c2d0585b.png",
      name: "Estate Name",
      creator: "Someone",
      price: 22.0,
      like: 123000,
      id: 1,
    },
    {
      userLiked: false,
      image:
        "https://cdn.discordapp.com/attachments/842737146321174558/843390216420982784/6d4fecad75cd497381092d63c2d0585b.png",
      name: "Estate Name",
      creator: "Someone",
      price: 22.0,
      like: 123000,
      id: 1,
    },
  ],
};*/

export default {
  // I don't know what the API is going to be, so I'm guessing the API request design here :P
  getUserInfo(request) {
    // do some magic after API is ready.
    request.id++; // just to make linter happy
    return {
      estates: [],
      activities: [
        {
          name: "Project Name",
          status: "Activity Status",
          time: "24:01 pm 30 Feb 2021",
          image:
            "https://cdn.discordapp.com/attachments/842737146321174558/843390216420982784/6d4fecad75cd497381092d63c2d0585b.png",
        },
        {
          name: "Project Name",
          status: "Activity Status",
          time: "24:01 pm 30 Feb 2021",
          image:
            "https://cdn.discordapp.com/attachments/842737146321174558/843390216420982784/6d4fecad75cd497381092d63c2d0585b.png",
        },
      ],
    };
  },
};
