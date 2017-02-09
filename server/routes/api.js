const express = require('express');
const router = express.Router();

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});

router.get('/posts', (req, res) => {
  // Get posts from the mock api
  // This should ideally be replaced with a service that connects to MongoDB
  let posts = [{
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  },
  {
    "userId": 1,
    "id": 2,
    "title": "qui est esse",
    "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
  }];

  res.status(200).json(posts);
});

router.post('/login', (req, res) => {
  let token = { token: "userLogged" };
  res.status(200).json(token);
});

router.post('/recs1', (req, res) => {
  let books = [];
  for (let i = 0; i < 100; i += 1) {
    books[i] = { "id": 8011, "isbn": "304357278", "author": " Worst of Internet Humor", "image_url_l": "http://images.amazon.com/images/P/0304357278.01.MZZZZZZZ.jpg", "image_url_m": "http://images.amazon.com/images/P/0304357278.01.THUMBZZZ.jpg", "image_url_s": "Cassell", "publication_year": 0, "publisher": "2001", "rating": 1, "title": "E-Tales: The Best \u0026amp", "vote_count": 22, "created_at": "2017-01-06T15:13:28.091Z", "updated_at": "2017-01-12T20:17:40.489Z", "bookstore_id": 1, "promotion": false, "price": 24.5 };
  }
  res.status(200).json(books);
});

router.post('/recs2', (req, res) => {
  let books = [];
  for (let i = 0; i < 100; i += 1) {
    books[i] = {"id":6162,"isbn":"1580050158","author":"Inga Muscio","image_url_l":"http://images.amazon.com/images/P/1580050158.01.LZZZZZZZ.jpg","image_url_m":"http://images.amazon.com/images/P/1580050158.01.MZZZZZZZ.jpg","image_url_s":"http://images.amazon.com/images/P/1580050158.01.THUMBZZZ.jpg","publication_year":1998,"publisher":"Seal Press (WA)","rating":5,"title":"Cunt: A Declaration of Independence (Live Girls)","vote_count":331,"created_at":"2017-01-06T15:13:09.180Z","updated_at":"2017-01-12T20:17:40.104Z","bookstore_id":1,"promotion":false,"price":52.3};
  }
  res.status(200).json(books);
});

router.post('/recs3', (req, res) => {
  let books = [];
  for (let i = 0; i < 100; i += 1) {
    books[i] = {"id":6164,"isbn":"821768093","author":"Kylie Adams","image_url_l":"http://images.amazon.com/images/P/0821768093.01.LZZZZZZZ.jpg","image_url_m":"http://images.amazon.com/images/P/0821768093.01.MZZZZZZZ.jpg","image_url_s":"http://images.amazon.com/images/P/0821768093.01.THUMBZZZ.jpg","publication_year":2001,"publisher":"Kensington Publishing Corporation","rating":2,"title":"Fly Me to the Moon (Zebra Contemporary Romance S.)","vote_count":598,"created_at":"2017-01-06T15:13:09.198Z","updated_at":"2017-01-12T20:17:40.106Z","bookstore_id":1,"promotion":false,"price":65.07};
  }
  res.status(200).json(books);
});

module.exports = router;