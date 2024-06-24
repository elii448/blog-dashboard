const dummyPosts = [
    {
      user: "James",
      content: {
        description: "Nice one!",
        image: {
          name: "bear",
          url: "https://i1.sndcdn.com/avatars-000288304197-ees8gt-t240x240.jpg"
        }
      },
      likes: {
        users: [
          {
            userId: 2,
            name: "Nadine"
          },
          {
            userId: 22,
            name: "Lustre"
          }
        ]
      },
      comments: [
        {
          userId: 2,
          name: "Nadine",
          content: "Abdul Jakol"
        },
        {
          userId: 22,
          name: "Lustre",
          content: "jabol jabol"
        }
      ]
    },
    {
      user: "Anna",
      content: {
        description: "Amazing sunset!",
        image: {
          name: "sunset",
          url: "https://cdn.vox-cdn.com/thumbor/qCfHPH_9Mw78vivDlVDMu7xYc78=/715x248:1689x721/920x613/filters:focal(972x299:1278x605):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/69305239/shrek4_disneyscreencaps.com_675.0.jpg"
        }
      },
      likes: {
        users: [
          {
            userId: 3,
            name: "Sophie"
          },
          {
            userId: 4,
            name: "John"
          }
        ]
      },
      comments: [
        {
          userId: 3,
          name: "Sophie",
          content: "Beautiful view!"
        },
        {
          userId: 4,
          name: "John",
          content: "Stunning!"
        }
      ]
    },
    {
      user: "Michael",
      content: {
        description: "At the beach!",
        image: {
          name: "beach",
          url: "https://i.imgflip.com/6woq7y.jpg?a477504"
        }
      },
      likes: {
        users: [
          {
            userId: 5,
            name: "Chris"
          },
          {
            userId: 6,
            name: "Pat"
          }
        ]
      },
      comments: [
        {
          userId: 5,
          name: "Chris",
          content: "Wish I was there!"
        },
        {
          userId: 6,
          name: "Pat",
          content: "So relaxing!"
        }
      ]
    },
    {
      user: "Olivia",
      content: {
        description: "Cute puppy!",
        image: {
          name: "puppy",
          url: "https://i.kym-cdn.com/entries/icons/original/000/010/189/558521_379983752051891_269130519803882_1153607_815765109_n_(1).jpg"
        }
      },
      likes: {
        users: [
          {
            userId: 7,
            name: "Emma"
          },
          {
            userId: 8,
            name: "Liam"
          }
        ]
      },
      comments: [
        {
          userId: 7,
          name: "Emma",
          content: "Adorable!"
        },
        {
          userId: 8,
          name: "Liam",
          content: "So cute!"
        }
      ]
    },
    {
      user: "Ethan",
      content: {
        description: "Delicious dinner!",
        image: {
          name: "dinner",
          url: "https://snworksceo.imgix.net/dth/84e832cc-b853-40d1-bcf9-bd0d2aae2bec.sized-1000x1000.png?w=1000"
        }
      },
      likes: {
        users: [
          {
            userId: 9,
            name: "Mia"
          },
          {
            userId: 10,
            name: "Noah"
          }
        ]
      },
      comments: [
        {
          userId: 9,
          name: "Mia",
          content: "Yummy!"
        },
        {
          userId: 10,
          name: "Noah",
          content: "Looks tasty!"
        }
      ]
    },
    {
      user: "Sophia",
      content: {
        description: "Hiking trip!",
        image: {
          name: "hiking",
          url: "https://i.pinimg.com/736x/29/e8/42/29e842501405c7fd344ade5bebb59354.jpg"
        }
      },
      likes: {
        users: [
          {
            userId: 11,
            name: "Lucas"
          },
          {
            userId: 12,
            name: "Ava"
          }
        ]
      },
      comments: [
        {
          userId: 11,
          name: "Lucas",
          content: "Great adventure!"
        },
        {
          userId: 12,
          name: "Ava",
          content: "So fun!"
        }
      ]
    },
    {
      user: "Liam",
      content: {
        description: "Snowboarding!",
        image: {
          name: "snowboarding",
          url: "https://media.tenor.com/zdte7--xTU0AAAAM/nah-no.gif"
        }
      },
      likes: {
        users: [
          {
            userId: 13,
            name: "Ella"
          },
          {
            userId: 14,
            name: "William"
          }
        ]
      },
      comments: [
        {
          userId: 13,
          name: "Ella",
          content: "Awesome!"
        },
        {
          userId: 14,
          name: "William",
          content: "So cool!"
        }
      ]
    },
    {
      user: "Ava",
      content: {
        description: "Flower garden!",
        image: {
          name: "flowers",
          url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAZ8K0rddHXkg-3leqRwPlTFI2CVLGcb-xrQ&s"
        }
      },
      likes: {
        users: [
          {
            userId: 15,
            name: "Harper"
          },
          {
            userId: 16,
            name: "Mason"
          }
        ]
      },
      comments: [
        {
          userId: 15,
          name: "Harper",
          content: "Beautiful!"
        },
        {
          userId: 16,
          name: "Mason",
          content: "Love it!"
        }
      ]
    },
    {
      user: "Mason",
      content: {
        description: "New car!",
        image: {
          name: "car",
          url: "https://i.pinimg.com/originals/1a/c7/fb/1ac7fb6031e8017ff32175cc486a609c.jpg"
        }
      },
      likes: {
        users: [
          {
            userId: 17,
            name: "Ella"
          },
          {
            userId: 18,
            name: "Logan"
          }
        ]
      },
      comments: [
        {
          userId: 17,
          name: "Ella",
          content: "Nice ride!"
        },
        {
          userId: 18,
          name: "Logan",
          content: "Sweet car!"
        }
      ]
    },
    {
      user: "Mia",
      content: {
        description: "Birthday party!",
        image: {
          name: "party",
          url: "https://i.pinimg.com/736x/3f/8c/02/3f8c02ddf8475a37cb664f14eada6729.jpg"
        }
      },
      likes: {
        users: [
          {
            userId: 19,
            name: "Jack"
          },
          {
            userId: 20,
            name: "Amelia"
          }
        ]
      },
      comments: [
        {
          userId: 19,
          name: "Jack",
          content: "Happy Birthday!"
        },
        {
          userId: 20,
          name: "Amelia",
          content: "Have a great day!"
        }
      ]
    },
    {
      user: "Noah",
      content: {
        description: "Mountain climbing!",
        image: {
          name: "mountain",
          url: "https://i.pinimg.com/236x/40/29/19/402919bbe07931968ccc2d4627042e23.jpg"
        }
      },
      likes: {
        users: [
          {
            userId: 21,
            name: "Lucas"
          },
          {
            userId: 22,
            name: "Charlotte"
          }
        ]
      },
      comments: [
        {
          userId: 21,
          name: "Lucas",
          content: "Incredible!"
        },
        {
          userId: 22,
          name: "Charlotte",
          content: "Wow!"
        }
      ]
    },
    {
      user: "Charlotte",
      content: {
        description: "City lights!",
        image: {
          name: "city",
          url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_ivBQkZhm64WvS3-IvXs7dPrYe5e6kAFRxg&s"
        }
      },
      likes: {
        users: [
          {
            userId: 23,
            name: "James"
          },
          {
            userId: 24,
            name: "Oliver"
          }
        ]
      },
      comments: [
        {
          userId: 23,
          name: "James",
          content: "Amazing shot!"
        },
        {
          userId: 24,
          name: "Oliver",
          content: "Beautiful city!"
        }
      ]
    },
    {
      user: "Ella",
      content: {
        description: "Concert night!",
        image: {
          name: "concert",
          url: "https://helios-i.mashable.com/imagery/articles/044TS2z8KMNE7XMtfQdi0Ia/hero-image.fill.size_1200x1200.v1648070788.png"
        }
      },
      likes: {
        users: [
          {
            userId: 25,
            name: "Emily"
          },
          {
            userId: 26,
            name: "Henry"
          }
        ]
      },
      comments: [
        {
          userId: 25,
          name: "Emily",
          content: "So much fun!"
        },
        {
          userId: 26,
          name: "Henry",
          content: "Great music!"
        }
      ]
    },
    {
        user: "Grace",
        content: {
          description: "Picnic time!",
          image: {
            name: "picnic",
            url: "https://media.licdn.com/dms/image/C4E22AQHD9KK0TZuIBQ/feedshare-shrink_2048_1536/0/1664551959566?e=2147483647&v=beta&t=B2uBcPSB6S_5TY8sGDsqe_Wyg2vcAGWDWgMhf2rJvjw"
          }
        },
        likes: {
          users: [
            {
              userId: 45,
              name: "Jackson"
            },
            {
              userId: 46,
              name: "Avery"
            }
          ]
        },
        comments: [
          {
            userId: 45,
            name: "Jackson",
            content: "Perfect weather!"
          },
          {
            userId: 46,
            name: "Avery",
            content: "Yummy food!"
          }
        ]
      },
      {
        user: "Samuel",
        content: {
          description: "Road trip!",
          image: {
            name: "roadtrip",
            url: "https://i.insider.com/601448566dfbe10018e00c5d?width=700"
          }
        },
        likes: {
          users: [
            {
              userId: 47,
              name: "Chloe"
            },
            {
              userId: 48,
              name: "Evelyn"
            }
          ]
        },
        comments: [
          {
            userId: 47,
            name: "Chloe",
            content: "Adventure awaits!"
          },
          {
            userId: 48,
            name: "Evelyn",
            content: "Exciting!"
          }
        ]
      },
      {
        user: "Lucy",
        content: {
          description: "Fitness journey!",
          image: {
            name: "fitness",
            url: "https://pbs.twimg.com/media/F3XHNtqWIAAItVf?format=jpg&name=small"
          }
        },
        likes: {
          users: [
            {
              userId: 49,
              name: "Zachary"
            },
            {
              userId: 50,
              name: "Madelyn"
            }
          ]
        },
        comments: [
          {
            userId: 49,
            name: "Zachary",
            content: "Keep it up!"
          },
          {
            userId: 50,
            name: "Madelyn",
            content: "Motivating!"
          }
        ]
      }
];


export default dummyPosts