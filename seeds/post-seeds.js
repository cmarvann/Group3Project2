const { Post } = require('../models');

const postdata = [
  {
    title: 'Youtube Music Jams',
    post_url: 'https://music.youtube.com/browse/FEmusic_genre_selection',
    post_text: 'This is where I listen to my music!',
    user_id: 10,
    options_id: 'Music'
  },
  {
    title: 'Coding ',
    post_url: 'https://www.youtube.com/watch?v=M5QY2_8704o',
    post_text: 'This worked',
    user_id: 8,
    options_id: 'Music'
  },
  {
    title: 'Music',
    post_url: 'http://canada1.national.edu/the-10-best-brain-food-snacks-for-studying/',
    post_text: 'sdfasdfasfasddsfds',
    user_id: 1,
    options_id: 'Music'
  },
  {
    title: 'Outdoors',
    post_url: 'https://www.buzzfeed.com/tashweenali/snacks-for-studying',
    post_text: 'sdfasdfasfasddsfds',
    user_id: 4,
    options_id: 'Music'
  },
  {
    title: 'Snacks',
    post_url: 'https://www.freecodecamp.org/news/best-developer-communities-to-be-part-of-in-2020/	',
    post_text: 'sdfasdfasfasddsfds',
    user_id: 7,
    options_id: 'Music'
  },
  {
    title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    post_url: 'https://stanford.edu/consequat.png',
    post_text: 'sdfasdfasfasddsfds',
    user_id: 4,
    options_id: 'Music'
  },
  {
    title: 'In hac habitasse platea dictumst.',
    post_url: 'https://www.nytimes.com/wirecutter/blog/free-home-workouts/	',
    post_text: 'sdfasdfasfasddsfds',
    user_id: 1,
    options_id: 'Outdoors'
  },
  {
    title: 'Morbi non quam nec dui luctus rutrum.',
    post_url: 'https://medium.com/geekculture/funny-things-only-developers-understand-347f7d73a228	',
    post_text: 'This worked',
    user_id: 1,
    options_id: 'Music'
  },
  {
    title: 'Duis ac nibh.',
    post_url: 'https://levelup.gitconnected.com/the-funny-side-of-a-programmers-life-44cab153edf9',
    post_text: 'This worked',
    user_id: 9,
    options_id: 'Exercise'
  },
  {
    title: 'Curabitur at ipsum ac tellus semper interdum.',
    post_url: 'https://betterprogramming.pub/7-great-sources-for-programming-humor-14983a36f437	',
    post_text: 'This worked',
    user_id: 5,
    options_id: 'Music'
  },
  {
    title: 'In hac habitasse platea dictumst.',
    post_url: 'http://china.com.cn/lectus/vestibulum.json',
    post_text: 'This worked',
    user_id: 3,
    options_id: 'Exercise'
  },
  {
    title: 'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
    post_url: 'https://javascript.plainenglish.io/20-funny-tweets-that-real-people-actually-tweeted-about-programming-960e9e5e324d',
    post_text: 'This worked',
    user_id: 10,
    options_id: 'Exercise'
  },
  {
    title: 'Donec dapibus.',
    post_url: 'https://simpleprogrammer.com/ergonomic-stretches-for-programmers/',
    post_text: 'This worked',
    user_id: 8,
    options_id: 'Music'
  },
  {
    title: 'Nulla tellus.',
    post_url: 'https://lycos.com/natoque/penatibus/et.html',
    post_text: 'This worked',
    user_id: 3,
    options_id: 'Music'
  },
  {
    title: 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.',
    post_text: 'This worked',
    post_url: 'https://gmpg.org/lorem.jpg',
    user_id: 3,
    options_id: 'Music'
  },
  {
    title:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.',
    post_url: 'https://paginegialle.it/mattis/egestas.jsp',
    post_text: 'This worked',
    user_id: 7,
    options_id: 'Music'
  },
  {
    title: 'In hac habitasse platea dictumst.',
    post_url: 'http://wikia.com/turpis/eget.jpg',
    post_text: 'This worked',
    user_id: 6,
    options_id: 'Music'
  },
  {
    title: 'Etiam justo.',
    post_url: 'https://shareasale.com/quis.json',
    post_text: 'This worked',
    user_id: 4,
    options_id: 'Snacks'
  },
  {
    title: 'Nulla ut erat id mauris vulputate elementum.',
    post_url: 'http://java.com/diam/neque/vestibulum/eget/vulputate/ut/ultrices.png',
    post_text: 'This worked',
    user_id: 6,
    options_id: 'Music'
  },
  {
    title: 'blah blah blah ',
    post_url: 'https://java.com/at/nibh/in.png',
    post_text: 'This worked',
    user_id: 7,
    options_id: 'Music'
  },
  {
    title: 'Youtube Music Jams',
    post_url: 'https://music.youtube.com/browse/FEmusic_genre_selection',
    post_text: 'This is where I listen to my music!',
    user_id: 10,
    options_id: 'Music'
  },
  {
    title: 'Coding ',
    post_url: 'https://www.youtube.com/watch?v=M5QY2_8704o',
    post_text: 'This worked',
    user_id: 8,
    options_id: 'Music'
  },
  {
    title: 'Music',
    post_url: 'http://canada1.national.edu/the-10-best-brain-food-snacks-for-studying/',
    post_text: 'sdfasdfasfasddsfds',
    user_id: 1,
    options_id: 'Music'
  },
  {
    title: 'Outdoors',
    post_url: 'https://www.buzzfeed.com/tashweenali/snacks-for-studying',
    post_text: 'sdfasdfasfasddsfds',
    user_id: 4,
    options_id: 'Music'
  },
  {
    title: 'Snacks',
    post_url: 'https://www.freecodecamp.org/news/best-developer-communities-to-be-part-of-in-2020/	',
    post_text: 'sdfasdfasfasddsfds',
    user_id: 7,
    options_id: 'Music'
  },
  {
    title: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
    post_url: 'https://stanford.edu/consequat.png',
    post_text: 'sdfasdfasfasddsfds',
    user_id: 4,
    options_id: 'Music'
  },
  {
    title: 'In hac habitasse platea dictumst.',
    post_url: 'https://www.nytimes.com/wirecutter/blog/free-home-workouts/	',
    post_text: 'sdfasdfasfasddsfds',
    user_id: 1,
    options_id: 'Outdoors'
  },
  {
    title: 'Morbi non quam nec dui luctus rutrum.',
    post_url: 'https://medium.com/geekculture/funny-things-only-developers-understand-347f7d73a228	',
    post_text: 'This worked',
    user_id: 1,
    options_id: 'Music'
  },
  {
    title: 'Duis ac nibh.',
    post_url: 'https://levelup.gitconnected.com/the-funny-side-of-a-programmers-life-44cab153edf9',
    post_text: 'This worked',
    user_id: 9,
    options_id: 'Exercise'
  },
  {
    title: 'Curabitur at ipsum ac tellus semper interdum.',
    post_url: 'https://betterprogramming.pub/7-great-sources-for-programming-humor-14983a36f437	',
    post_text: 'This worked',
    user_id: 5,
    options_id: 'Music'
  },
  {
    title: 'In hac habitasse platea dictumst.',
    post_url: 'http://china.com.cn/lectus/vestibulum.json',
    post_text: 'This worked',
    user_id: 3,
    options_id: 'Exercise'
  },
  {
    title: 'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
    post_url: 'https://javascript.plainenglish.io/20-funny-tweets-that-real-people-actually-tweeted-about-programming-960e9e5e324d',
    post_text: 'This worked',
    user_id: 10,
    options_id: 'Exercise'
  },
  {
    title: 'Donec dapibus.',
    post_url: 'https://simpleprogrammer.com/ergonomic-stretches-for-programmers/',
    post_text: 'This worked',
    user_id: 8,
    options_id: 'Music'
  },
  {
    title: 'Nulla tellus.',
    post_url: 'https://lycos.com/natoque/penatibus/et.html',
    post_text: 'This worked',
    user_id: 3,
    options_id: 'Music'
  },
  {
    title: 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.',
    post_text: 'This worked',
    post_url: 'https://gmpg.org/lorem.jpg',
    user_id: 3,
    options_id: 'Music'
  },
  {
    title:
      'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.',
    post_url: 'https://paginegialle.it/mattis/egestas.jsp',
    post_text: 'This worked',
    user_id: 7,
    options_id: 'Music'
  },
  {
    title: 'In hac habitasse platea dictumst.',
    post_url: 'http://wikia.com/turpis/eget.jpg',
    post_text: 'This worked',
    user_id: 6,
    options_id: 'Music'
  },
  {
    title: 'Etiam justo.',
    post_url: 'https://shareasale.com/quis.json',
    post_text: 'This worked',
    user_id: 4,
    options_id: 'Snacks'
  },
  {
    title: 'Nulla ut erat id mauris vulputate elementum.',
    post_url: 'http://java.com/diam/neque/vestibulum/eget/vulputate/ut/ultrices.png',
    post_text: 'This worked',
    user_id: 6,
    options_id: 'Music'
  },
  {
    title: 'blah blah blah ',
    post_url: 'https://java.com/at/nibh/in.png',
    post_text: 'This worked',
    user_id: 7,
    options_id: 'Music'
  }
  
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
