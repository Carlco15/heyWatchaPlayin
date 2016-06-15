/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';
import Thing from '../api/thing/thing.model';
import User from '../api/user/user.model';
import Game from '../api/game/game.model';

Thing.find({}).remove()
  .then(() => {
    Thing.create({
      name: 'Development Tools',
      info: 'Integration with popular tools such as Bower, Grunt, Babel, Karma, ' +
             'Mocha, JSHint, Node Inspector, Livereload, Protractor, Jade, ' +
             'Stylus, Sass, and Less.'
    }, {
      name: 'Server and Client integration',
      info: 'Built with a powerful and fun stack: MongoDB, Express, ' +
             'AngularJS, and Node.'
    }, {
      name: 'Smart Build System',
      info: 'Build system ignores `spec` files, allowing you to keep ' +
             'tests alongside code. Automatic injection of scripts and ' +
             'styles into your index.html'
    }, {
      name: 'Modular Structure',
      info: 'Best practice client and server structures allow for more ' +
             'code reusability and maximum scalability'
    }, {
      name: 'Optimized Build',
      info: 'Build process packs up your templates as a single JavaScript ' +
             'payload, minifies your scripts/css/images, and rewrites asset ' +
             'names for caching.'
    }, {
      name: 'Deployment Ready',
      info: 'Easily deploy your app to Heroku or Openshift with the heroku ' +
             'and openshift subgenerators'
    });
  });

User.find({}).remove()
  .then(() => {
    User.create({
      provider: 'local',
      name: 'Test User',
      email: 'test@example.com',
      password: 'test'
    }, {
      provider: 'local',
      role: 'admin',
      name: 'Admin',
      email: 'admin@example.com',
      password: 'admin'
    })
    .then(() => {
      console.log('finished populating users');
    });
  });

Game.find({}).remove()
.then(() => {
  return Game.create(
    {
      name: 'World of Warcraft',
      platform: 'Windows',
      imageFile: 'inventory/WoW.png',
      playing: false,
      message: ''
    },
    {
      name: 'Diablo 3',
      platform: 'Windows',
      imageFile: 'inventory/Diablo3.png',
      playing: false,
      message: ''
    },
    {
      name: 'Starcraft 2',
      platform: 'Windows',
      imageFile: 'inventory/StarCraft2.png',
      playing: false,
      message: ''
    },
    {
      name: 'Heroes of the Storm',
      platform: 'Windows',
      imageFile: 'inventory/HotS.png',
      playing: false,
      message: ''
    },
    {
      name: 'Hearthstone',
      platform: 'Windows',
      imageFile: 'inventory/HearthStone.png',
      playing: false,
      message: ''
    },
    {
      name: 'Overwatch',
      platform: 'Windows',
      imageFile: 'inventory/OverWatch.jpg',
      playing: false,
      message: ''
    },
    {
      name: 'League of Legends',
      platform: 'Windows',
      imageFile: 'inventory/LoL.jpg',
      playing: false,
      message: ''
    },
    {
      name: 'Counter Strike: Global Offensive',
      platform: 'Windows',
      imageFile: 'inventory/CSGO.jpg',
      playing: false,
      message: ''
    },
    {
      name: 'Team Fortress 2',
      platform: 'Windows',
      imageFile: 'inventory/TF2.png',
      playing: false,
      message: ''
    },
    {
      name: 'Grand Theft Auto V',
      platform: 'Windows',
      imageFile: 'inventory/GTAV.png',
      playing: false,
      message: ''
    },
    {
      name: 'Grand Theft Auto V',
      platform: 'Xbox',
      imageFile: 'inventory/GTAV.png',
      playing: false,
      message: ''
    },
    {
      name: 'Grand Theft Auto V',
      platform: 'PlayStation',
      imageFile: 'inventory/GTAV.png',
      playing: false,
      message: ''
    },
    {
      name: 'Minecraft',
      platform: 'Windows',
      imageFile: 'inventory/Minecraft.jpg',
      playing: false,
      message: ''
    },
    {
      name: 'Minecraft',
      platform: 'OS X',
      imageFile: 'inventory/Minecraft.jpg',
      playing: false,
      message: ''
    },
    {
      name: 'Minecraft',
      platform: 'Xbox',
      imageFile: 'inventory/Minecraft.jpg',
      playing: false,
      message: ''
    },
    {
      name: 'Minecraft',
      platform: 'PlayStation',
      imageFile: 'inventory/Minecraft.jpg',
      playing: false,
      message: ''
    },
    {
      name: 'Minecraft',
      platform: 'Wii U',
      imageFile: 'inventory/Minecraft.jpg',
      playing: false,
      message: ''
    },
    {
      name: 'Dota 2',
      platform: 'Windows',
      imageFile: 'inventory/Dota2.png',
      playing: false,
      message: ''
    },
    {
      name: 'Dota 2',
      platform: 'OS X',
      imageFile: 'inventory/Dota2.png',
      playing: false,
      message: ''
    },
    {
      name: 'Destiny',
      platform: 'Xbox',
      imageFile: 'inventory/Destiny.jpg',
      playing: false,
      message: ''
    },
    {
      name: 'Destiny',
      platform: 'PlayStation',
      imageFile: 'inventory/Destiny.jpg',
      playing: false,
      message: ''
    },
    {
      name: 'Call of Duty: Black Ops 3',
      platform: 'Windows',
      imageFile: 'inventory/CoD.jpg',
      playing: false,
      message: ''
    },
    {
      name: 'Call of Duty: Black Ops 3',
      platform: 'Xbox',
      imageFile: 'inventory/CoD.jpg',
      playing: false,
      message: ''
    },
    {
      name: 'Call of Duty: Black Ops 3',
      platform: 'PlayStation',
      imageFile: 'inventory/CoD.jpg',
      playing: false,
      message: ''
    },
    {
      name: 'Rocket League',
      platform: 'Windows',
      imageFile: 'inventory/RocketLeague.png',
      playing: false,
      message: ''
    },
    {
      name: 'Rocket League',
      platform: 'OS X',
      imageFile: 'inventory/RocketLeague.png',
      playing: false,
      message: ''
    },
    {
      name: 'Rocket League',
      platform: 'Xbox',
      imageFile: 'inventory/RocketLeague.png',
      playing: false,
      message: ''
    },
    {
      name: 'Rocket League',
      platform: 'PlayStation',
      imageFile: 'inventory/RocketLeague.png',
      playing: false,
      message: ''
    },
    {
      name: 'Star Wars Battlefront',
      platform: 'Windows',
      imageFile: 'inventory/SWBF.png',
      playing: false,
      message: ''
    },
    {
      name: 'Star Wars Battlefront',
      platform: 'Xbox',
      imageFile: 'inventory/SWBF.png',
      playing: false,
      message: ''
    },
    {
      name: 'Star Wars Battlefront',
      platform: 'PlayStation',
      imageFile: 'inventory/SWBF.png',
      playing: false,
      message: ''
    }
  )
})
.then(() => {
  return Game.find({});
})
.then((games) => {
  console.log('Finished populating ' + games.length + ' games.');
})
.catch((err) => {
  console.log('ERROR:', err);
});
