// import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: "43e41e83-039f-4cd2-bca4-9c3c8c4af422",
    content:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    firstName: "Mellisa",
    lastName: "Forde",
    username: "malibu",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    avatarURL:
      "https://res.cloudinary.com/dopc1gfoj/image/upload/v1654785799/vna0t0qzkaltov3zfoem.jpg",

    comments: [
      {
        _id: "43e41e83-039f-4cd2-bca4-9c3c8c4af501",
        firstName: "Robyn",
        lastName: "Fenty",
        username: "RiRi",
        avatarURL:
          "https://res.cloudinary.com/dopc1gfoj/image/upload/v1654785801/ajivqjoqm8rqh1ffyxz4.jpg",

        text: "Interesting",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: "43e41e83-039f-4cd2-bca4-9c3c8c4af222",
        firstName: "Stefani",
        lastName: "Joanne",
        username: "Loopy",
        avatarURL:
          "https://res.cloudinary.com/dopc1gfoj/image/upload/v1654785837/y30sp4k6wbihpijaqlkm.jpg",

        text: "Wow!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  {
    _id: "43e41e83-039f-4cd2-bca4-9c3c8c4af401",
    content:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    firstName: "Alan",
    lastName: "walker",
    username: "walkzz",
    avatarURL:
      "https://res.cloudinary.com/dopc1gfoj/image/upload/v1654784485/i3lyoqgpgjhtaqgqkcqe.jpg",

    comments: [
      {
        _id: "43e41e83-039f-4cd2-bca4-9c3c8c4af222",
        firstName: "Stefani",
        lastName: "Joanne",
        username: "Loopy",
        avatarURL:
          "https://res.cloudinary.com/dopc1gfoj/image/upload/v1654785837/y30sp4k6wbihpijaqlkm.jpg",

        text: "Interesting",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: "43e41e83-039f-4cd2-bca4-9c3c8c4af501",
        firstName: "Robyn",
        lastName: "Fenty",
        username: "RiRi",
        avatarURL:
          "https://res.cloudinary.com/dopc1gfoj/image/upload/v1654785801/ajivqjoqm8rqh1ffyxz4.jpg",

        text: "Wow!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: "43e41e83-039f-4cd2-bca4-9c3c8c4afbd5",
    content:
      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.",
    likes: {
      likeCount: 6,
      likedBy: [],
      dislikedBy: [],
    },
    firstName: "Guest",
    lastName: "User",
    username: "Guest123",
    avatarURL:
      "https://res.cloudinary.com/dopc1gfoj/image/upload/v1654784485/i3lyoqgpgjhtaqgqkcqe.jpg",
    comments: [
      {
        _id: "43e41e83-039f-4cd2-bca4-9c3c8c4af501",
        firstName: "Robyn",
        lastName: "Fenty",
        username: "RiRi",
        avatarURL:
          "https://res.cloudinary.com/dopc1gfoj/image/upload/v1654785801/ajivqjoqm8rqh1ffyxz4.jpg",

        text: "This is Amazing!!!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },

      {
        _id: "43e41e83-039f-4cd2-bca4-9c3c8c4af422",
        firstName: "Mellisa",
        lastName: "Forde",
        username: "malibu",
        avatarURL:
          "https://res.cloudinary.com/dopc1gfoj/image/upload/v1654785799/vna0t0qzkaltov3zfoem.jpg",

        text: "Nice",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
];
