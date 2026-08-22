export type Track = {
  n: number;
  song: string;
  artists: string;
  id: string;
};

export type Playlist = {
  id: string;
  name: string;
  uri: string;
  url: string;
  curator: string;
  coverArt: string;
  tracks: Track[];
};

export const PLAYLISTS: Playlist[] = [
  {
    id: "moonlit",
    name: "Moonlit",
    uri: "spotify:playlist:339FMKzGxU0rUcE586tuEl",
    url: "https://open.spotify.com/playlist/339FMKzGxU0rUcE586tuEl",
    curator: "Its.lyka",
    coverArt: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da8439af4de330849eceec3dcfa4",
    tracks: [
  {
    "n": 1,
    "song": "Co2",
    "artists": "Prateek Kuhad",
    "id": "3hB9lDLyAClYVZivMMl20N"
  },
  {
    "n": 2,
    "song": "Mulaqat",
    "artists": "Prateek Kuhad",
    "id": "7uZLUFqPgGqwzD5rzOl8Sa"
  },
  {
    "n": 3,
    "song": "Kasoor",
    "artists": "Prateek Kuhad",
    "id": "08kTa3SL9sV6Iy8KLKtGql"
  },
  {
    "n": 4,
    "song": "Alag Aasmaan",
    "artists": "Anuv Jain",
    "id": "3bQsp4Vr9Rg4fNCx6HPOgX"
  },
  {
    "n": 5,
    "song": "Gul",
    "artists": "Anuv Jain",
    "id": "6ivemTXTn27PwVjtd0oqDs"
  },
  {
    "n": 6,
    "song": "Antariksh",
    "artists": "Anuv Jain",
    "id": "3JJtci5fSMdxYCVoHRHX2h"
  },
  {
    "n": 7,
    "song": "Husn",
    "artists": "Anuv Jain",
    "id": "0TL0LFcwIBF5eX7arDIKxY"
  },
  {
    "n": 8,
    "song": "Baarishein",
    "artists": "Anuv Jain",
    "id": "3WLJ7D5kh44K5eJ1NqZQ6W"
  },
  {
    "n": 9,
    "song": "Mazaak",
    "artists": "Anuv Jain",
    "id": "0uBo93xl23O60oErtKvSAg"
  },
  {
    "n": 10,
    "song": "Mishri",
    "artists": "Anuv Jain",
    "id": "6P1pBAEUoHwRMToeVoTPrg"
  },
  {
    "n": 11,
    "song": "Riha",
    "artists": "Anuv Jain",
    "id": "54XrOdhUS2311wIt9m0OlD"
  },
  {
    "n": 12,
    "song": "Nahin Milta",
    "artists": "Bayaan",
    "id": "0cUdmruT6kjxa5KpteSdwc"
  },
  {
    "n": 13,
    "song": "Faryaad",
    "artists": "Bayaan",
    "id": "1nWZOrc3xYIybxhSyDO6ga"
  },
  {
    "n": 14,
    "song": "Din Dhalay",
    "artists": "Bayaan",
    "id": "1y30e6iFISuGTbpO68H1Ob"
  },
  {
    "n": 15,
    "song": "Taare",
    "artists": "Shamoon Ismail",
    "id": "4WuJ0lXyfOK7oOnxuMKbiA"
  },
  {
    "n": 16,
    "song": "Pardesi",
    "artists": "Shamoon Ismail",
    "id": "6Cc4aWnRuCBUWK320qu21z"
  },
  {
    "n": 17,
    "song": "Choo Lo",
    "artists": "The Local Train",
    "id": "0rlLBWFFTQiOWi963SH9bb"
  },
  {
    "n": 18,
    "song": "Aaoge Tum Kabhi",
    "artists": "The Local Train",
    "id": "5ivRSlOhVIXN2QMzqgsX0s"
  },
  {
    "n": 19,
    "song": "Kaisey Jiyun",
    "artists": "The Local Train",
    "id": "6vIpkg9mdc5kDYvwuO6Qtc"
  },
  {
    "n": 20,
    "song": "Waqt Ki Baatein",
    "artists": "Dream Note",
    "id": "0cJTjTH3XVTTJh8F4Uq1db"
  },
  {
    "n": 21,
    "song": "Kho Gaye",
    "artists": "Taaruk Raina, Mismatched - Cast",
    "id": "2QophXhN2Ls2URfoPmiviC"
  },
  {
    "n": 22,
    "song": "Aise Kyun - Ghazal Version",
    "artists": "Rekha Bhardwaj, Anurag Saikia, Raj Shekhar, Mismatched - Cast",
    "id": "02wf1NAQdIpe5S1NJYPwvB"
  },
  {
    "n": 23,
    "song": "Iraaday",
    "artists": "Rovalio, Abdul Hannan",
    "id": "6qrifdo7QINdPQr80IelGi"
  },
  {
    "n": 24,
    "song": "Haaray",
    "artists": "Abdul Hannan",
    "id": "2LCvypYL9a21Hln4A4EdWU"
  },
  {
    "n": 25,
    "song": "Siyah",
    "artists": "Abdul Hannan, BAIG",
    "id": "6xFWVY7hS55qaF7fXBEw7X"
  },
  {
    "n": 26,
    "song": "Bikhra",
    "artists": "Abdul Hannan, Rovalio",
    "id": "0OdztoASgKBBNcAgtErk0X"
  },
  {
    "n": 27,
    "song": "Raabta",
    "artists": "Abdul Hannan, Rovalio",
    "id": "2nBdQVqfV2RFTSdcGfKsi7"
  },
  {
    "n": 28,
    "song": "Shukria",
    "artists": "Meer, danish roomi, Munab A. Manay",
    "id": "3ywXzWA7qQa11OnmN7HPxr"
  },
  {
    "n": 29,
    "song": "Aise Kyun",
    "artists": "Anurag Saikia, Raghav Chaitanya, Raj Shekhar, Nikhita Gandhi",
    "id": "2sT0eosuhBEkw8dz6qFxUo"
  },
  {
    "n": 30,
    "song": "Tere Hi Hum",
    "artists": "Prateek Kuhad",
    "id": "1TkyDEdjiUuYhoMkxdZCiO"
  },
  {
    "n": 31,
    "song": "Akhiyaan",
    "artists": "Mitraz",
    "id": "2l3dFxtoSMgMQVyRIUHjpz"
  },
  {
    "n": 32,
    "song": "Muskurahat",
    "artists": "Mitraz",
    "id": "6oURWs2pULRYC9JAhLEaw8"
  },
  {
    "n": 33,
    "song": "Mulakaat",
    "artists": "Mitraz",
    "id": "0BVendAi5irAAicD8aTVHM"
  },
  {
    "n": 34,
    "song": "Gulaab",
    "artists": "Mitraz",
    "id": "5RAZtbW6hkkVG4cMGPO6f2"
  },
  {
    "n": 35,
    "song": "Zehen",
    "artists": "Mitraz",
    "id": "15Hh48XELbgkS3HQUC2hUq"
  },
  {
    "n": 36,
    "song": "Nadiyon Sa",
    "artists": "Mitraz",
    "id": "5sHtSBMrHITVhXAGTAee1J"
  },
  {
    "n": 37,
    "song": "Raatein",
    "artists": "Mitraz",
    "id": "2tzg7jcjCSB1NArurdveCH"
  },
  {
    "n": 38,
    "song": "Akhiyaan",
    "artists": "Danny Zee",
    "id": "3o9cLDhtxmgLRYhEIp3gEc"
  },
  {
    "n": 39,
    "song": "Udh Chaliye",
    "artists": "Danny Zee",
    "id": "4wqVxCLrlDxOVXYOGB8GRn"
  },
  {
    "n": 40,
    "song": "Na Bhulana",
    "artists": "Uzair Jaswal, Sarmad Ghafoor",
    "id": "6usaBbeMZih4TAlFagJMvQ"
  },
  {
    "n": 41,
    "song": "Tere Bin Nahi Laage (Male Version)",
    "artists": "Uzair Jaswal, Amaal Mallik, Kumaar",
    "id": "3u947zydbp5jVgVNlaRgv4"
  },
  {
    "n": 42,
    "song": "Faasle",
    "artists": "Aditya Rikhari",
    "id": "0s76ExpXyMGVBlKLUr683e"
  },
  {
    "n": 43,
    "song": "Yaadein Teri",
    "artists": "Mubeen Butt",
    "id": "15RnJMUkiOyDJwVjkCfgri"
  },
  {
    "n": 44,
    "song": "Aasmaan",
    "artists": "Tanishk Bagchi, Raghav Meattle, Anumita Nadesan",
    "id": "4OJ3ecc157Wg4Z29aglEOu"
  },
  {
    "n": 45,
    "song": "Tu Aisa Kaise Hai?",
    "artists": "Osho Jain",
    "id": "7eadaD2SBArRbebB9CP70X"
  },
  {
    "n": 46,
    "song": "Teray Naal",
    "artists": "HYDR",
    "id": "6ZkFBPYesUv0PzI8V3PZH6"
  },
  {
    "n": 47,
    "song": "Jo Tu Na Mila",
    "artists": "Asim Azhar, Kunaal Vermaa",
    "id": "6DefzsWqnwrFrmNVnJxWkS"
  },
  {
    "n": 48,
    "song": "Tera Woh Pyar (Nawazishein Karam)",
    "artists": "Momina Mustehsan, Asim Azhar",
    "id": "2RV4QunRX0CTs2JR1uUbMj"
  },
  {
    "n": 49,
    "song": "Kya Tu Ne Kbhi Socha",
    "artists": "Asim Azhar",
    "id": "19JN9D53e68xo6c4WKvrKY"
  },
  {
    "n": 50,
    "song": "Saajna",
    "artists": "Asim Azhar",
    "id": "36SqQ42lXnnmIE6SOLvBg7"
  },
  {
    "n": 51,
    "song": "Nasha",
    "artists": "Talwiinder, Vision",
    "id": "2JgTFjNOi9fsXsnmANnYWu"
  },
  {
    "n": 52,
    "song": "Nashay",
    "artists": "Nanku, toorjo dey, Rashim Anand",
    "id": "3vxovo7APiCPVWKJcBfBpM"
  },
  {
    "n": 53,
    "song": "Kamikaze",
    "artists": "Nanku, Faizan",
    "id": "3lN9YvbrSxP8UjN3SeaVth"
  },
  {
    "n": 54,
    "song": "Suno Na",
    "artists": "Meer",
    "id": "6cxdLHL1lGdVLuifGVcu6G"
  },
  {
    "n": 55,
    "song": "Farda",
    "artists": "Bayaan",
    "id": "6z9YgNd6u3k7eSLAR7Nsom"
  },
  {
    "n": 56,
    "song": "Khatt",
    "artists": "Aqdas Asif",
    "id": "7iBiZIuOunnD7TUEA8F8zJ"
  },
  {
    "n": 57,
    "song": "Akela Hoon",
    "artists": "AMAN",
    "id": "7pWAX5kJBULFTDNiH8oB42"
  },
  {
    "n": 58,
    "song": "shaam",
    "artists": "hamza",
    "id": "0rOfRyGdD865qTQcpR14uy"
  },
  {
    "n": 59,
    "song": "Khayaal",
    "artists": "Talwiinder, NDS",
    "id": "4D8eFUu6Hvulrq6CGqGaLR"
  },
  {
    "n": 60,
    "song": "Ghar",
    "artists": "Bharat Chauhan",
    "id": "3zZ4VnqnGURgm5fYRLy4JV"
  },
  {
    "n": 61,
    "song": "Naiyo Lagda",
    "artists": "AVIRAL, Bindola",
    "id": "4HiXfnP3jl9qAdHIkS8uJa"
  },
  {
    "n": 62,
    "song": "JANA JANA",
    "artists": "AVIRAL, Bindola, CALIB3R",
    "id": "3EZSbB9JRg6aCZ0hyHMnOm"
  },
  {
    "n": 63,
    "song": "Ishq Hai",
    "artists": "Anurag Saikia, Raj Shekhar, Romy, Amarabha Banerjee, Varun Jain, Madhubanti Bagchi, Mismatched - Cast",
    "id": "3vCzLB6kS2lGcIpm1OOUsy"
  },
  {
    "n": 64,
    "song": "Maand",
    "artists": "Bayaan, Hasan Raheem, Rovalio",
    "id": "2ZzZ2qwZBWlDKs420hhloc"
  },
  {
    "n": 65,
    "song": "Sahiba",
    "artists": "Aditya Rikhari",
    "id": "0eLtIxPRNJfsmehITZ1qaJ"
  },
  {
    "n": 66,
    "song": "5 am",
    "artists": "Zaeden",
    "id": "2Wn4C2J3naPghLX3pDSJra"
  },
  {
    "n": 67,
    "song": "Jhol",
    "artists": "Maanu, Annural Khalid",
    "id": "4XTgFBxBHN6var1BzAgE1m"
  },
  {
    "n": 68,
    "song": "O Yaara",
    "artists": "Abdul Hannan, Kaavish",
    "id": "2lp1Tsn8H6mq0bzXgOeLHY"
  },
  {
    "n": 69,
    "song": "Teri Yaad",
    "artists": "Aditya Rikhari",
    "id": "3uUAbrwsttRpv2kfAvAUN9"
  },
  {
    "n": 70,
    "song": "Gulabi Aankhen",
    "artists": "Sanam",
    "id": "1ccZZf0IQi5y0bHMl2aGDF"
  },
  {
    "n": 71,
    "song": "Yeh Raaten Yeh Mausam",
    "artists": "Sanam, Simran Sehgal",
    "id": "00oiWWOX0SL1UICReGtoLy"
  },
  {
    "n": 72,
    "song": "Baat (From \"Meem Se Mohabbat\")",
    "artists": "Asim Azhar, Qirat Haider",
    "id": "4yQQJ9Tj3DDYG3zgHhEgtq"
  },
  {
    "n": 73,
    "song": "Ishqiya (Original Motion Picture Soundtrack)",
    "artists": "Asim Azhar",
    "id": "6G8znyaHLps1vGp87rLqaC"
  },
  {
    "n": 74,
    "song": "Paaro",
    "artists": "Aditya Rikhari",
    "id": "5ByLpy1feHoHXoM4IC4BvW"
  },
  {
    "n": 75,
    "song": "Pal Pal",
    "artists": "Afusic, AliSoomroMusic",
    "id": "4LMlVCXHJtCE9abhmn0mYo"
  },
  {
    "n": 76,
    "song": "Heer",
    "artists": "Ali & Shjr, Haider Ali, Ali Raza",
    "id": "2618Fg2I7K5leCzDUhOjbr"
  },
  {
    "n": 77,
    "song": "4U",
    "artists": "Maanu",
    "id": "5YqHwJeVcLl29QRcoDNmBq"
  },
  {
    "n": 78,
    "song": "Main Rahun (From \"Parwarish\") [Original Motion Picture Soundtrack]",
    "artists": "Samar Jafri",
    "id": "0REdqbK0A99eKrYF66zSDO"
  },
  {
    "n": 79,
    "song": "Baawra",
    "artists": "Kushagra, Tanishka Bahl, Akash Rajput",
    "id": "2Repz4eP8qEqOVz8CltLZ0"
  },
  {
    "n": 80,
    "song": "Sajde",
    "artists": "Faheem Abdullah, Huzaif Nazar",
    "id": "4BGfzLrK6lgvKDjKSU7wrN"
  },
  {
    "n": 81,
    "song": "Regardless",
    "artists": "Asim Azhar",
    "id": "1N5IwvKPg7PZeGi9Pvzvdo"
  },
  {
    "n": 82,
    "song": "Raaton",
    "artists": "Aditya Rikhari",
    "id": "4mpRxleD4q4rxgRBgC6TpB"
  },
  {
    "n": 83,
    "song": "Dooron Dooron",
    "artists": "Paresh Pahuja, Shiv Tandan, Meghdeep Bose",
    "id": "0q5e5KtUOhYQujmhLP0pKd"
  },
  {
    "n": 84,
    "song": "Aeina",
    "artists": "Asad Khan Niazi",
    "id": "4CmsTK0psomMQ6jVjuAdMw"
  },
  {
    "n": 85,
    "song": "Kabhi Kabhi",
    "artists": "AUR",
    "id": "22F7nS0LV4YYt3oPb3xTlV"
  },
  {
    "n": 86,
    "song": "Khwaab",
    "artists": "Ahmad Hassan",
    "id": "4eipeAaWX1I6bY3w32EDao"
  },
  {
    "n": 87,
    "song": "Shaayar",
    "artists": "Bharat Chauhan, Seedhe Maut",
    "id": "1Y7FQSN29oNXHZBGMkADeH"
  },
  {
    "n": 88,
    "song": "Tum",
    "artists": "Murtaza Qizilbash",
    "id": "6mHTwIXqZtuQUF1fEkrhFB"
  },
  {
    "n": 89,
    "song": "Zulfein",
    "artists": "Mehul Mahesh, Dj AYnik",
    "id": "6bwIkFBUUMG7upgPoVlTHt"
  },
  {
    "n": 90,
    "song": "Dekha Hi Nahi",
    "artists": "Osho Jain",
    "id": "5zK7gzWMZlT4TUf2iN2Wjw"
  },
  {
    "n": 91,
    "song": "Sajni",
    "artists": "Strings",
    "id": "4JkeZCRHUiB43GMdU4WaSC"
  },
  {
    "n": 92,
    "song": "Khat",
    "artists": "Navjot Ahuja",
    "id": "3gixnmepHSsyAuho34rprN"
  },
  {
    "n": 93,
    "song": "Muntazir",
    "artists": "Danyal Zafar, Momina Mustehsan",
    "id": "1CKf0hCWwMGhSsvWjmg34n"
  },
  {
    "n": 94,
    "song": "Bewajah - Coke Studio Season 8",
    "artists": "Nabeel Shaukat Ali",
    "id": "04J4SELey0LIRh0ckQunWV"
  },
  {
    "n": 95,
    "song": "Qareeb",
    "artists": "Jayant Joshi, Aastha Tiwari, Moin",
    "id": "35hwpi55PUyJFXjrodHPa0"
  },
  {
    "n": 96,
    "song": "Savera",
    "artists": "Chayan",
    "id": "78jMmdZjTYTL830iFUdDqe"
  },
  {
    "n": 97,
    "song": "Aarzu",
    "artists": "Noor, Khan, Madhurxo",
    "id": "0wHYuCTWPntEgWiUVED4wB"
  },
  {
    "n": 98,
    "song": "Pani Da Rang - Male",
    "artists": "Ayushmann Khurrana, Rochak Kohli",
    "id": "0bLCiBR9AOtfp98dk7iCL5"
  },
  {
    "n": 99,
    "song": "Qurban (Original TV Series Soundtrack)",
    "artists": "Masroor Ali Khan, Goher Mumtaz",
    "id": "4QFaJmsvd1zdD4mRJcUiY5"
  },
  {
    "n": 100,
    "song": "Theher Ja",
    "artists": "Garvit - Priyansh, Garvit Soni, Priyansh Srivastava, Aniket Shukla",
    "id": "62G4WNFaG4HlsD5it4kgsw"
  }
]
  },
  {
    id: "vinylvibes",
    name: "Vinylvibes",
    uri: "spotify:playlist:05yhFenk9a4Y8NAUOi3gv7",
    url: "https://open.spotify.com/playlist/05yhFenk9a4Y8NAUOi3gv7",
    curator: "Its.lyka",
    coverArt: "https://image-cdn-fa.spotifycdn.com/image/ab67706c0000da844f7c607cb4448e6ad4e664e5",
    tracks: [
  {
    "n": 1,
    "song": "Bhula Dena",
    "artists": "Mustafa Zahid, Jeet Gannguli, Sanjay Masoom",
    "id": "0WNCYgCd33LnBnw22WFuq8"
  },
  {
    "n": 2,
    "song": "Behkana",
    "artists": "Ali Tariq, Harshdeep Kaur",
    "id": "2oS7BQpljPztUhKcV4LU5n"
  },
  {
    "n": 3,
    "song": "Ibadat ( Ishq-E-Laa)",
    "artists": "Azaan Sami Khan",
    "id": "0stRmPesziVpBfMobbISrE"
  },
  {
    "n": 4,
    "song": "Tu Mera Nahi",
    "artists": "Saad Sultan, Rizwan Anwar",
    "id": "148Tqqxe65ob2wZWzpgrdY"
  },
  {
    "n": 5,
    "song": "Tum Ho",
    "artists": "Mohit Chauhan, Suzanne D'Mello",
    "id": "7uNnlVit5qDvfOje0pqICF"
  },
  {
    "n": 6,
    "song": "Aur Ho",
    "artists": "Mohit Chauhan, Alma Ferovic",
    "id": "3n5KN8FDe1sFC0O9V5ZBha"
  },
  {
    "n": 7,
    "song": "Kun Faya Kun",
    "artists": "A.R. Rahman, Javed Ali, Mohit Chauhan",
    "id": "7F8RNvTQlvbeBLeenycvN6"
  },
  {
    "n": 8,
    "song": "Nadaan Parinde",
    "artists": "A.R. Rahman, Mohit Chauhan",
    "id": "6Z394Nd4gW6Ts9hmu3NUjx"
  },
  {
    "n": 9,
    "song": "Ishq Mubarak",
    "artists": "Arijit Singh, Ankit Tiwari, Manoj Muntashir",
    "id": "4M513o3dSYspKeT6UNJpcx"
  },
  {
    "n": 10,
    "song": "Koi Fariyaad",
    "artists": "Jagjit Singh",
    "id": "2WmUiGBse5FhZ6XhK86jXe"
  },
  {
    "n": 11,
    "song": "Teri Yaadon Mein",
    "artists": "KK, Shreya Ghoshal",
    "id": "4ZVfIGaZP93t0stmBj4FqA"
  },
  {
    "n": 12,
    "song": "Bekhayali (From \"Kabir Singh\")",
    "artists": "Sachet Tandon, Sachet-Parampara",
    "id": "1feANd8EfcDP5UqSvbheM3"
  },
  {
    "n": 13,
    "song": "Aye Khuda",
    "artists": "Kshitij Tarey, Saim Bhat, Mithoon",
    "id": "1SdMHj6tJp2YZ5INflJR1T"
  },
  {
    "n": 14,
    "song": "Maahi",
    "artists": "Shaarib Toshi, Toshi Sabri, Sayeed Quadri",
    "id": "4bIQXffbALkCC0Xo6aTicP"
  },
  {
    "n": 15,
    "song": "Maahi Ve",
    "artists": "A.R. Rahman",
    "id": "1sbW5E7w8tnqpYk0Frx8QG"
  },
  {
    "n": 16,
    "song": "Raaz Aankhein Teri",
    "artists": "Arijit Singh, Rashmi Virag",
    "id": "5Q39OZm29c4V3prqngD7Rf"
  },
  {
    "n": 17,
    "song": "Zaroorat (From \"Ek Villain\")",
    "artists": "Mustafa Zahid",
    "id": "6jUqTvRGOOyJmhxDQaWpNb"
  },
  {
    "n": 18,
    "song": "Kaisay Jiyein",
    "artists": "Mustafa Zahid",
    "id": "5ulYYJZMbbePrhvInFcwYu"
  },
  {
    "n": 19,
    "song": "Tere Binaa",
    "artists": "Mustafa Zahid",
    "id": "1DsQyEshUaan0BBb7fUQHr"
  },
  {
    "n": 20,
    "song": "Mann Mera",
    "artists": "Gajendra Verma",
    "id": "3yV2c3cYhkAwSsxAq6nRiv"
  },
  {
    "n": 21,
    "song": "Tune Mere Jaana Acoustic Version",
    "artists": "Gajendra Verma",
    "id": "0AjVgCBzXOG65Hfn4HUFZj"
  },
  {
    "n": 22,
    "song": "Jee Le Zaraa",
    "artists": "Vishal Dadlani, Ram Sampath, Javed Akhtar",
    "id": "2r32XiAWtZbT3eLUvf4pag"
  },
  {
    "n": 23,
    "song": "Aaya Na Tu",
    "artists": "Arjun Kanungo, Momina Mustehsan, Kunaal Vermaa",
    "id": "3T0oPETOdddxJ2xTt2qJe4"
  },
  {
    "n": 24,
    "song": "Chan Kithan",
    "artists": "Ali Sethi",
    "id": "4eb4Cfp6cTf1OnKdBm6ukz"
  },
  {
    "n": 25,
    "song": "Ranjish Hi Sahi",
    "artists": "Ali Sethi",
    "id": "6GR17hkfxhSQEAoDoO4Tfd"
  },
  {
    "n": 26,
    "song": "Jiyein Kyun",
    "artists": "Pritam, Papon",
    "id": "0up9rhm9qt2LW7cnoDFCMk"
  },
  {
    "n": 27,
    "song": "Hona Tha Pyar",
    "artists": "Atif Aslam, Hadiqa Kiani",
    "id": "0KSOLEBixnBYIKNHF1VbzF"
  },
  {
    "n": 28,
    "song": "Ik Lamha",
    "artists": "Azaan Sami Khan",
    "id": "6KtSNVgCmQEvDgIuHoXAkT"
  },
  {
    "n": 29,
    "song": "Tera Mera Hai Pyar (From \"Ishq Murshid\")",
    "artists": "Ahmed Jahanzeb",
    "id": "7n3BVENCi9odYvNeFwcmCv"
  },
  {
    "n": 30,
    "song": "Mushk",
    "artists": "Ali Zafar",
    "id": "2r83dnQ5g2gwF87Tph6AF9"
  },
  {
    "n": 31,
    "song": "Jeena Jeena",
    "artists": "Sachin-Jigar, Atif Aslam, Priya Saraiya",
    "id": "2GXXZFUxYg2LvG8SR0byOE"
  },
  {
    "n": 32,
    "song": "Faasle",
    "artists": "Kaavish and Quratulain Balouch",
    "id": "5t0dDiEtorzHo7myp2Tt3q"
  },
  {
    "n": 33,
    "song": "Baanware",
    "artists": "Aima Baig, Shuja Haider",
    "id": "1kJo1jL1MoDzROmFPf4JgB"
  },
  {
    "n": 34,
    "song": "Tere Naal Mein Laiyan",
    "artists": "Quratulain Balouch, Shuja Haider",
    "id": "1i0a6AG7hehLHMUfWgRAwL"
  },
  {
    "n": 35,
    "song": "Baaghi - From \"Baaghi\"",
    "artists": "Shuja Haider",
    "id": "7C8e5UsA6xKfnpqhzRbCGC"
  },
  {
    "n": 36,
    "song": "Maula Mere Maula",
    "artists": "Roop Kumar Rathod",
    "id": "5KNuHsIeFtD0oukst77hBi"
  },
  {
    "n": 37,
    "song": "Tujh Mein Rab Dikhta Hai",
    "artists": "Salim–Sulaiman, Roop Kumar Rathod, Jaideep Sahni",
    "id": "2LcXJP95e4HKydTZ2mYfrx"
  },
  {
    "n": 38,
    "song": "Teri Deewani",
    "artists": "Kailash Kher, Paresh Kamath, Naresh Kamath",
    "id": "2iNqdCchlUZEgjJbQyZf8T"
  },
  {
    "n": 39,
    "song": "Khuda Jaane",
    "artists": "Vishal-Shekhar, KK, Shilpa Rao, Anvita Dutt Guptan",
    "id": "0gPgdRfB4jdGrlyXS0Vx78"
  },
  {
    "n": 40,
    "song": "Galliyan",
    "artists": "Ankit Tiwari, Manoj Muntashir",
    "id": "3ySVdXje5nm31d7vL3jNV3"
  },
  {
    "n": 41,
    "song": "Saiyyan",
    "artists": "Kailash Kher, Paresh Kamath, Naresh Kamath",
    "id": "2vR23BjIzpLMtzsyKrM6Mb"
  },
  {
    "n": 42,
    "song": "Aaoge Jab Tum",
    "artists": "Rashid Khan, Sandesh Shandilya, Faaiz Anwar",
    "id": "3fWMFwaJil8fD14JCgwbcL"
  },
  {
    "n": 43,
    "song": "Tune Jo Na Kaha",
    "artists": "Pritam, Mohit Chauhan, Sandeep Shrivastava",
    "id": "0pw3p4gf5homOkvOGOJulF"
  },
  {
    "n": 44,
    "song": "Aabaad Barbaad",
    "artists": "Pritam, Arijit Singh, Sandeep Shrivastava",
    "id": "3jxNbVmugKWFFc3YAVl0sD"
  },
  {
    "n": 45,
    "song": "Tum Se Hi",
    "artists": "Pritam, Mohit Chauhan, Irshad Kamil",
    "id": "7eQl3Yqv35ioqUfveKHitE"
  },
  {
    "n": 46,
    "song": "Kinna Sona",
    "artists": "Sunil Kamath, Mithoon, Amitabh Varma",
    "id": "2gXZp1zDDA5bnPsLwrSMRj"
  },
  {
    "n": 47,
    "song": "Maana Ke Hum Yaar Nahin",
    "artists": "Sachin-Jigar, Parineeti Chopra, Kausar Munir",
    "id": "1O3WfEwaSpsgZ6tw8jNT8I"
  },
  {
    "n": 48,
    "song": "Tere Liye",
    "artists": "Madan Mohan, Lata Mangeshkar, Roop Kumar Rathod, Javed Akhtar",
    "id": "3i11e2jzUtO3jChiFl3v9x"
  },
  {
    "n": 49,
    "song": "Pehli Nazar Mein",
    "artists": "Atif Aslam, Pritam",
    "id": "17opN752ZQpNuoptelsNQ1"
  },
  {
    "n": 50,
    "song": "Laal Ishq",
    "artists": "Sanjay Leela Bhansali, Arijit Singh, Siddharth - Garima",
    "id": "4hXHlAc9ZOJY5pGbdfuWsa"
  },
  {
    "n": 51,
    "song": "Aap Baithay Hain",
    "artists": "Zamad Baig",
    "id": "0eqUFQ03Oc9tZSgTYjSvi6"
  },
  {
    "n": 52,
    "song": "Humsafar",
    "artists": "Quratulain Balouch",
    "id": "3gBwuyMuSVK9ubjEhoNooA"
  },
  {
    "n": 53,
    "song": "Aahista",
    "artists": "Jonita Gandhi, Arijit Singh",
    "id": "5ELZucrxfmkBOPP9JhfDIf"
  },
  {
    "n": 54,
    "song": "Tum",
    "artists": "Atif Aslam",
    "id": "7zqAUQYR2iiP8d3yjAc4d4"
  },
  {
    "n": 55,
    "song": "Bewajah",
    "artists": "Nabeel Shaukat Ali",
    "id": "0fKgXWkoy5hy6mskHzOKVF"
  },
  {
    "n": 56,
    "song": "Soneyaa",
    "artists": "Hamza Malik",
    "id": "6S5MeLSBYafdJdme54UPtc"
  },
  {
    "n": 57,
    "song": "Bewajah",
    "artists": "Himesh Reshammiya",
    "id": "6Buremzl5lnZ8dG7hFtnlb"
  },
  {
    "n": 58,
    "song": "Tera Chehra (From \"Sanam Teri Kasam\")",
    "artists": "Arijit Singh",
    "id": "1xAJ4QDwQbBuaTxv9kBnrt"
  },
  {
    "n": 59,
    "song": "Abhi Kuch Dino Se",
    "artists": "Pritam, Mohit Chauhan",
    "id": "1QufGJee7k9v4Cfp2NxXbv"
  },
  {
    "n": 60,
    "song": "Vida Karo",
    "artists": "Arijit Singh, Jonita Gandhi, Irshad Kamil",
    "id": "49lSJjrq7Uy9wIBmIl8UOQ"
  },
  {
    "n": 61,
    "song": "Tujhe Bhula Diya",
    "artists": "Vishal-Shekhar, Mohit Chauhan, Shekhar Ravjiani, Shruti Pathak",
    "id": "4r8JqkhpTb5tzSKKHnVJIJ"
  },
  {
    "n": 62,
    "song": "Beete Lamhein",
    "artists": "KK, Mithoon, Sayeed Quadri",
    "id": "0zQa7QXLpUZfrrsWbgDZll"
  },
  {
    "n": 63,
    "song": "Banjaara",
    "artists": "Mohammed Irfan, Mithoon",
    "id": "4eFnk661RcdOuH9ajiTO3j"
  },
  {
    "n": 64,
    "song": "Aadat - From \"Kalyug\"",
    "artists": "Atif Aslam, Jal, Mithoon",
    "id": "5VrLz2NUTLbPzgjuVOjxUx"
  },
  {
    "n": 65,
    "song": "Woh Lamhe Woh Baatein - From \"Zeher\"",
    "artists": "Atif Aslam, Roop Kumar Rathod, Mithoon, Naresh Sharma",
    "id": "21kImg7AxLbl7rrciuAwoB"
  },
  {
    "n": 66,
    "song": "Phir Le Aya Dil - Reprise",
    "artists": "Pritam, Arijit Singh, Sayeed Quadri",
    "id": "7fpWJr5shT90KiCHXKHxch"
  },
  {
    "n": 67,
    "song": "Jo Bhi Main",
    "artists": "Mohit Chauhan",
    "id": "2MmAYegcUty1DmG0Gw7AMh"
  },
  {
    "n": 68,
    "song": "Har Kisi Ko (From \"Boss)",
    "artists": "Arijit Singh, Neeti Mohan",
    "id": "4A7eOIbt19Wk5OXjVxE3SI"
  },
  {
    "n": 69,
    "song": "Ajj Din Chadheya",
    "artists": "Pritam, Rahat Fateh Ali Khan, Irshad Kamil",
    "id": "4NmWv6PEGEAmorN5UN9fRo"
  },
  {
    "n": 70,
    "song": "Piya Aaye Na",
    "artists": "Tulsi Kumar, KK, Jeet Gannguli, Irshad Kamil",
    "id": "1ELMyeJLDHUz3cK3XTWgEi"
  },
  {
    "n": 71,
    "song": "Dil To Bachcha Hai",
    "artists": "Rahat Fateh Ali Khan",
    "id": "3EFGRGsshk0NWidcXfhKvw"
  },
  {
    "n": 72,
    "song": "Darasal (From \"Raabta\")",
    "artists": "Atif Aslam, Jam8",
    "id": "3phw912iJRhtMfsdJ1k3Sr"
  },
  {
    "n": 73,
    "song": "Saajna",
    "artists": "Falak Shabbir, Kumaar",
    "id": "7KzGAwJRYS9KLMuVnStqYN"
  },
  {
    "n": 74,
    "song": "Dil Ibaadat",
    "artists": "Pritam, KK, Sayeed Quadri",
    "id": "3Kl8p2PxVf8eAayLwTxOIm"
  },
  {
    "n": 75,
    "song": "Soniyo",
    "artists": "Raju Singh, Sonu Nigam, Shreya Ghoshal",
    "id": "4J5OpeZUR2msDPfMsIeGSU"
  },
  {
    "n": 76,
    "song": "Andaz E Karam",
    "artists": "Farasat Anees, HAVI",
    "id": "5z8KuGkXVelJFPxtpzyXJf"
  },
  {
    "n": 77,
    "song": "Enna Sona",
    "artists": "A.R. Rahman, Arijit Singh",
    "id": "6bdpj89aYEBjhpsenXAsmO"
  },
  {
    "n": 78,
    "song": "Mera Mann Kehne Laga",
    "artists": "Falak Shabbir",
    "id": "1niVgR76UPobOED5cXfADq"
  },
  {
    "n": 79,
    "song": "Yeh Fitoor Mera",
    "artists": "Amit Trivedi, Arijit Singh",
    "id": "7kvLAPEnEPlSbhZDlHFv0p"
  },
  {
    "n": 80,
    "song": "Samjhawan",
    "artists": "Jawad Ahmad, Shaarib Toshi, Arijit Singh, Shreya Ghoshal",
    "id": "0rk2X5TAhraBC5aCIXK2Rq"
  },
  {
    "n": 81,
    "song": "Dil Ibaadat",
    "artists": "Pritam, KK, Sayeed Quadri",
    "id": "5Ndt4xkgW2cMQGQhK5I9Tw"
  },
  {
    "n": 82,
    "song": "Sun Saathiya",
    "artists": "Divya Kumar, Priya Saraiya",
    "id": "5a2Hoi1wuhCA6Ob7pbOlpW"
  },
  {
    "n": 83,
    "song": "Bheegi Bheegi - From \"Gangster\"",
    "artists": "Pritam, James",
    "id": "7127acu4Qui0XzfHrgE3HD"
  },
  {
    "n": 84,
    "song": "Chunar",
    "artists": "Arijit Singh, Mayur Puri",
    "id": "6jVU0yWMU2z1LO5dsCRbEk"
  },
  {
    "n": 85,
    "song": "Jhoom",
    "artists": "Ali Zafar",
    "id": "2VR1z4g6haFyMoghNj46KB"
  },
  {
    "n": 86,
    "song": "Kabhi Kabhi Aditi",
    "artists": "Rashid Ali",
    "id": "3APdIdF8H0jsxSuGOqXedS"
  },
  {
    "n": 87,
    "song": "Bolna",
    "artists": "Tanishk Bagchi, Arijit Singh, Asees Kaur",
    "id": "7zn5ecZSwGsLTi1wgxyVzd"
  },
  {
    "n": 88,
    "song": "Tu Hai Ki Nahi",
    "artists": "Ankit Tiwari, Abhendra Kumar Upadhyay",
    "id": "4brSaQIT3bnnE41D042fgL"
  },
  {
    "n": 89,
    "song": "Voh Dekhnay Mein",
    "artists": "Ali Zafar",
    "id": "0EMYTe2oQy70PCKPQFlbVy"
  },
  {
    "n": 90,
    "song": "Pehli Si Muhabbat (Original Motion Picture Soundtrack)",
    "artists": "Ali Zafar",
    "id": "6okXGyZjrasNITqJbkgcEa"
  },
  {
    "n": 91,
    "song": "Surili Akhiyon Wale",
    "artists": "Sajid-Wajid, Rahat Fateh Ali Khan, Suzanne D'Mello, Gulzar",
    "id": "1la0ICQBLfO0lyqsWNwG7l"
  },
  {
    "n": 92,
    "song": "Doorie",
    "artists": "Atif Aslam, Sachin Gupta",
    "id": "4g6OnALPfPGS0JYDTvNEiE"
  },
  {
    "n": 93,
    "song": "Jal Pari",
    "artists": "Atif Aslam",
    "id": "5nVNFm9Dzowgkr5X3N46Gv"
  },
  {
    "n": 94,
    "song": "Judaai",
    "artists": "Sachin-Jigar, Rekha Bhardwaj, Arijit Singh, Priya Saraiya",
    "id": "2MsGTWvf7dcjKbI0WTq6Pz"
  },
  {
    "n": 95,
    "song": "Kuch Is Tarah",
    "artists": "Atif Aslam, Mithoon",
    "id": "7MpBCqNHuNc2dgSckXizRo"
  },
  {
    "n": 96,
    "song": "Naina",
    "artists": "Pritam, Arijit Singh",
    "id": "7w5Je2ouh5Zxp5nfaGitvy"
  },
  {
    "n": 97,
    "song": "Sajni",
    "artists": "Jal",
    "id": "3wLX0HwfAZlhT9ss18LGLY"
  },
  {
    "n": 98,
    "song": "Pi Jaun",
    "artists": "Farhan Saeed, Momina Mustehsan",
    "id": "0Ux7fo3lL883LGoEHwINuj"
  },
  {
    "n": 99,
    "song": "Be Intehaan",
    "artists": "Atif Aslam, Sunidhi Chauhan, Pritam",
    "id": "04y4IqZt14y7k7pXYE19Zy"
  },
  {
    "n": 100,
    "song": "Toh Phir Aao",
    "artists": "Mustafa Zahid",
    "id": "4chxJYv0qsOKQukt6cKp97"
  }
]
  }
];

export const PLAYLIST_TOTAL = 200;
