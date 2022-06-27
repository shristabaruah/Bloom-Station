// import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */
export const users = [
  {
    _id: "43e41e83-039f-4cd2-bca4-9c3c8c4afbd5",
    firstName: "Guest",
    lastName: "User",
    username: "Guest123",
    password: "test123",
    avatarURL:
      "https://res.cloudinary.com/dopc1gfoj/image/upload/v1654784485/i3lyoqgpgjhtaqgqkcqe.jpg",
    bio: "",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    following: [
      {
        _id: "43e41e83-039f-4cd2-bca4-9c3c8c4af401",
        firstName: "Alan",
        lastName: "walker",
        username: "walkzz",
        avatarURL:
          "https://res.cloudinary.com/dopc1gfoj/image/upload/v1654784485/i3lyoqgpgjhtaqgqkcqe.jpg",
      },

      {
        _id: "43e41e83-039f-4cd2-bca4-9c3c8c4af422",
        firstName: "Mellisa",
        lastName: "Forde",
        username: "malibu",
        password: "m342",
        avatarURL:
          "https://res.cloudinary.com/dopc1gfoj/image/upload/v1654785799/vna0t0qzkaltov3zfoem.jpg",
      },
    ],
    followers:[
      {
        _id: "43e41e83-039f-4cd2-bca4-9c3c8c4af501",
        firstName: "Robyn",
        lastName: "Fenty",
        username: "RiRi",
        avatarURL:
          "https://res.cloudinary.com/dopc1gfoj/image/upload/v1654785801/ajivqjoqm8rqh1ffyxz4.jpg",
      },
      {
        _id: "43e41e83-039f-4cd2-bca4-9c3c8c4af222",
        firstName: "Stefani",
        lastName: "Joanne",
        username: "Loopy",
        avatarURL:
          "https://res.cloudinary.com/dopc1gfoj/image/upload/v1654785837/y30sp4k6wbihpijaqlkm.jpg",
      },
    ],
  },
  {
    _id: "43e41e83-039f-4cd2-bca4-9c3c8c4af401",
    firstName: "Alan",
    lastName: "walker",
    username: "walkzz",
    password: "Walker",
    avatarURL:
      "https://res.cloudinary.com/dopc1gfoj/image/upload/v1654784485/i3lyoqgpgjhtaqgqkcqe.jpg",
    bio: "On my way",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    following: [
      {
        _id: "43e41e83-039f-4cd2-bca4-9c3c8c4af222",
        firstName: "Stefani",
        lastName: "Joanne",
        username: "Loopy",
        avatarURL:
          "https://res.cloudinary.com/dopc1gfoj/image/upload/v1654785837/y30sp4k6wbihpijaqlkm.jpg",
      },

      {
        _id: "43e41e83-039f-4cd2-bca4-9c3c8c4af501",
        firstName: "Robyn",
        lastName: "Fenty",
        username: "RiRi",
        avatarURL:
          "https://res.cloudinary.com/dopc1gfoj/image/upload/v1654785801/ajivqjoqm8rqh1ffyxz4.jpg",
      },
    ],
    followers: [
      {
        _id: "43e41e83-039f-4cd2-bca4-9c3c8c4af422",
        firstName: "Mellisa",
        lastName: "Forde",
        username: "malibu",
        avatarURL:
          "https://res.cloudinary.com/dopc1gfoj/image/upload/v1654785799/vna0t0qzkaltov3zfoem.jpg",
      },

      {
        _id: "43e41e83-039f-4cd2-bca4-9c3c8c4afbd5",
        firstName: "Guest",
        lastName: "User",
        username: "Guest123",
        avatarURL:
          "https://res.cloudinary.com/dopc1gfoj/image/upload/v1654784485/i3lyoqgpgjhtaqgqkcqe.jpg",
      },

      {
        _id: "43e41e83-039f-4cd2-bca4-9c3c8c4af501",
        firstName: "Robyn",
        lastName: "Fenty",
        username: "RiRi",
        avatarURL:
          "https://res.cloudinary.com/dopc1gfoj/image/upload/v1654785801/ajivqjoqm8rqh1ffyxz4.jpg",
      },
    ],
  },
  {
    _id: "43e41e83-039f-4cd2-bca4-9c3c8c4af222",
    firstName: "Stefani",
    lastName: "Joanne",
    username: "Loopy",
    password: "gaga",
    avatarURL:
      "https://res.cloudinary.com/dopc1gfoj/image/upload/v1654785837/y30sp4k6wbihpijaqlkm.jpg",
    bio: "A star is born ",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    following: [
      {
        _id: "43e41e83-039f-4cd2-bca4-9c3c8c4af401",
        firstName: "Alan",
        lastName: "walker",
        username: "walkzz",
        avatarURL:
          "https://res.cloudinary.com/dopc1gfoj/image/upload/v1654784485/i3lyoqgpgjhtaqgqkcqe.jpg",
      },
      {
        _id: "43e41e83-039f-4cd2-bca4-9c3c8c4af422",
        firstName: "Mellisa",
        lastName: "Forde",
        username: "malibu",
        avatarURL:
          "https://res.cloudinary.com/dopc1gfoj/image/upload/v1654785799/vna0t0qzkaltov3zfoem.jpg",
      },
    ],
    followers: [
      {
        id: "43e41e83-039f-4cd2-bca4-9c3c8c4af501",
        firstName: "Robyn",
        lastName: "Fenty",
        username: "RiRi",
        avatarURL:
          "https://res.cloudinary.com/dopc1gfoj/image/upload/v1654785801/ajivqjoqm8rqh1ffyxz4.jpg",
      },

      {
        _id: "43e41e83-039f-4cd2-bca4-9c3c8c4af401",
        firstName: "Alan",
        lastName: "walker",
        username: "walkzz",
        avatarURL:
          "https://res.cloudinary.com/dopc1gfoj/image/upload/v1654784485/i3lyoqgpgjhtaqgqkcqe.jpg",
      },
    ],
  },
  {
    _id: "43e41e83-039f-4cd2-bca4-9c3c8c4af501",
    firstName: "Robyn",
    lastName: "Fenty",
    username: "RiRi",
    password: "Rihanna",
    avatarURL:
      "https://res.cloudinary.com/dopc1gfoj/image/upload/v1654785801/ajivqjoqm8rqh1ffyxz4.jpg",
    bio: "Love is great Love is fine",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    following: [
      {
        id: "43e41e83-039f-4cd2-bca4-9c3c8c4af501",
        firstName: "Robyn",
        lastName: "Fenty",
        username: "RiRi",
        avatarURL:
          "https://res.cloudinary.com/dopc1gfoj/image/upload/v1654785801/ajivqjoqm8rqh1ffyxz4.jpg",
      },

      {
        _id: "43e41e83-039f-4cd2-bca4-9c3c8c4af401",
        firstName: "Alan",
        lastName: "walker",
        username: "walkzz",
        avatarURL:
          "https://res.cloudinary.com/dopc1gfoj/image/upload/v1654784485/i3lyoqgpgjhtaqgqkcqe.jpg",
      },
    ],
    followers: [
      {
        _id: "43e41e83-039f-4cd2-bca4-9c3c8c4af222",
        firstName: "Stefani",
        lastName: "Joanne",
        username: "Loopy",
        avatarURL:
          "https://res.cloudinary.com/dopc1gfoj/image/upload/v1654785837/y30sp4k6wbihpijaqlkm.jpg",
      },

      {
        _id: "43e41e83-039f-4cd2-bca4-9c3c8c4afbd5",
        firstName: "Guest",
        lastName: "User",
        username: "Guest123",
        avatarURL: "",
      },
    ],
  },
  {
    _id: "43e41e83-039f-4cd2-bca4-9c3c8c4af422",
    firstName: "Mellisa",
    lastName: "Forde",
    username: "malibu",
    password: "m342",
    avatarURL:
      "https://res.cloudinary.com/dopc1gfoj/image/upload/v1654785799/vna0t0qzkaltov3zfoem.jpg",
    bio: "Whats up ?",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    following: [
      {
        _id: "43e41e83-039f-4cd2-bca4-9c3c8c4af222",
        firstName: "Stefani",
        lastName: "Joanne",
        username: "Loopy",
        avatarURL:
          "https://res.cloudinary.com/dopc1gfoj/image/upload/v1654785837/y30sp4k6wbihpijaqlkm.jpg",
      },

      {
        _id: "43e41e83-039f-4cd2-bca4-9c3c8c4af401",
        firstName: "Alan",
        lastName: "walker",
        username: "walkzz",
        avatarURL:
          "https://res.cloudinary.com/dopc1gfoj/image/upload/v1654784485/i3lyoqgpgjhtaqgqkcqe.jpg",
      },
    ],
    followers: [
      {
        _id: "43e41e83-039f-4cd2-bca4-9c3c8c4af501",
        firstName: "Robyn",
        lastName: "Fenty",
        username: "RiRi",
        avatarURL:
          "https://res.cloudinary.com/dopc1gfoj/image/upload/v1654785801/ajivqjoqm8rqh1ffyxz4.jpg",
      },
    ],
  },
];
