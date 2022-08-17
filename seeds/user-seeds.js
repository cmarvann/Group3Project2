const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [

  {
    username: 'willmain',
    email: 'willmain@gmail.com',
    password: 'password556611'
  },
  {
    username: 'aldomain',
    email: 'aldomain@gmail.com',
    password: 'password556622'
  },
  {
    username: 'angelmain',
    email: 'angelmain@gmail.com',
    password: 'password556633'
  },
  {
    username: 'marvanmain',
    email: 'marvanmain@gmail.com',
    password: 'password556644'
  },
  {
    username: 'willmain1',
    email: 'willmain1@gmail.com',
    password: 'password223311'
  },
  {
    username: 'aldomain1',
    email: 'aldomain1@gmail.com',
    password: 'password223322'
  },
  {
    username: 'angelmain1',
    email: 'angelmain1@gmail.com',
    password: 'password223333'
  },
  {
    username: 'marvanmain1',
    email: 'marvanmain1@gmail.com',
    password: 'password223344'
  },
  {
    username: 'testbaby',
    email: 'testbaby@yaaol.com',
    password: 'password774484'
  },
  {
    username: 'testbaby2',
    email: 'testbaby2@yahoo.com',
    password: 'password887794'
  },
  
  {
    username: 'usera',
    email: 'usera@gmail.com',
    password: 'password221122'
  },
  {
    username: 'userb',
    email: 'userb@yahoo.com',
    password: 'password331133'
  },
  {
    username: 'userc',
    email: 'userc@gmail.com',
    password: 'password665511'
  },
  {
    username: 'userd',
    email: 'userd@yahoo.com',
    password: 'password225511'
  },
  {
    username: 'usere',
    email: 'usere@gmail.com',
    password: 'password123'
  },
  {
    username: 'userf',
    email: 'userf@aol.com',
    password: 'password444555'
  },
  {
    username: 'userg',
    email: 'userg@gmail.com',
    password: 'password335566'
  },
  {
    username: 'userh',
    email: 'userh@yahoo.com',
    password: 'password881144'
  },
  {
    username: 'userj',
    email: 'userj@gmail.com',
    password: 'password774433'
  },
  {
    username: 'testino',
    email: 'testino5@gmail.com',
    password: 'password665544'
  },
  
  {
    username: 'test1',
    email: 'nwestnedge0@cbc.ca',
    password: 'password123'
  },
  {
    username: 'test2',
    email: 'rmebes1@sogou.com',
    password: 'password123'
  },
  {
    username: 'test2',
    email: 'cstoneman2@last.fm',
    password: 'password123'
  },
  {
    username: 'ddfvadf3',
    email: 'ihellier3@goo.ne.jp',
    password: 'password123'
  },
  {
    username: 'djirfadadfi4',
    email: 'gmidgley4@weather.com',
    password: 'password123'
  },
  {
    username: 'msprague5',
    email: 'larnout5@imdb.com',
    password: 'password123'
  },
  {
    username: 'mpergens6',
    email: 'hnapleton6@feedburner.com',
    password: 'password123'
  },
  {
    username: 'tpenniell7',
    email: 'kperigo7@china.com.cn',
    password: 'password123'
  },
  {
    username: 'msabbins8',
    email: 'lmongain8@google.ru',
    password: 'password123'
  },
  {
    username: 'jmacarthur9',
    email: 'bsteen9@epa.gov',
    password: 'password123'
  }
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;
