const { Vote } = require('../models');

const votedata = [
  {
    user_id: 1,
    post_id: 2
  },
  {
    user_id: 4,
    post_id: 1
  },
  {
    user_id: 3,
    post_id: 5
  },
  {
    user_id: 1,
    post_id: 6
  },
  {
    user_id: 2,
    post_id: 9
  },
  {
    user_id: 5,
    post_id: 10
  },
  {
    user_id: 7,
    post_id: 3
  },
  {
    user_id: 9,
    post_id: 7
  },
  {
    user_id: 10,
    post_id: 1
  },

  {
    user_id: 3,
    option_id: 11
  },
  {
    user_id: 3,
    option_id: 18
  },
  {
    user_id: 4,
    option_id: 4
  },
  {
    user_id: 7,
    option_id: 5
  },
  {
    user_id: 6,
    option_id: 9
  },
  {
    user_id: 8,
    option_id: 12
  },
  {
    user_id: 9,
    option_id: 4
  },
  {
    user_id: 4,
    option_id: 13
  },
  {
    user_id: 5,
    option_id: 17
  },
  {
    user_id: 11,
    option_id: 9
  },
  {
    user_id: 6,
    option_id: 6
  },
  {
    user_id: 7,
    option_id: 3
  },
  {
    user_id: 6,
    option_id: 8
  },
  {
    user_id: 1,
    option_id: 19
  },
  {
    user_id: 5,
    option_id: 7
  },
  {
    user_id: 6,
    option_id: 2
  },
  {
    user_id: 6,
    option_id: 13
  },
  {
    user_id: 9,
    option_id: 3
  },
  {
    user_id: 5,
    option_id: 1
  },
  {
    user_id: 5,
    option_id: 19
  },
  {
    user_id: 5,
    option_id: 9
  },
  {
    user_id: 3,
    option_id: 10
  },
  {
    user_id: 8,
    option_id: 6
  },
  {
    user_id: 4,
    option_id: 21
  },
  {
    user_id: 6,
    option_id: 9
  },
  {
    user_id: 6,
    option_id: 7
  },
  {
    user_id: 9,
    option_id: 12
  },
  {
    user_id: 8,
    option_id: 8
  },
  {
    user_id: 9,
    option_id: 2
  },
  {
    user_id: 7,
    option_id: 5
  },
  {
    user_id: 5,
    option_id: 19
  },
  {
    user_id: 5,
    option_id: 16
  },
  {
    user_id: 6,
    option_id: 12
  },
  {
    user_id: 6,
    option_id: 11
  },
  {
    user_id: 6,
    option_id: 9
  },
  {
    user_id: 12,
    option_id: 6
  },
  {
    user_id: 8,
    option_id: 11
  },
  {
    user_id: 6,
    option_id: 22
  },
  {
    user_id: 3,
    option_id: 19
  },
  {
    user_id: 11,
    option_id: 5
  },
  {
    user_id: 5,
    option_id: 4
  },
  {
    user_id: 8,
    option_id: 5
  },
  {
    user_id: 9,
    option_id: 1
  },
  {
    user_id: 3,
    option_id: 9
  },
  {
    user_id: 5,
    option_id: 11
  },
  {
    user_id: 6,
    option_id: 16
  },
  {
    user_id: 6,
    option_id: 3
  },
  {
    user_id: 9,
    post_id: 19
  },
  {
    user_id: 1,
    post_id: 8
  },
  {
    user_id: 8,
    post_id: 12
  },

];

const seedVotes = () => Vote.bulkCreate(votedata);

module.exports = seedVotes;
