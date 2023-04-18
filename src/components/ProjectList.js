
import LifeLoglogo from '../assets/images/portIcons/lifelog.png'
import MySQLDBlogo from '../assets/images/portIcons/db.png'
import PassGenlogo from '../assets/images/portIcons/pwd.png'
import ReadGenlogo from '../assets/images/portIcons/readme.png'
import Weatherlogo from '../assets/images/portIcons/weather.png'
import TTlogo from '../assets/images/portIcons/tt.png'

const projectList = [
    {
      name: 'Life Log',
      image: LifeLoglogo,
      desc: 'Allows users to create an account and To Do lists within to do lists, view within a calendar, and set presets. ',
      app: 'https://lifelog.herokuapp.com/',
      repo: 'https://github.com/emmaparis/Project-2'
    },
    {
        name: 'Travel Tracker',
        image: TTlogo,
        desc: 'Lets users drop, drag, and remove pins on map locations that can be searched to find. Airport selections based on pin locations. ',
        app: 'https://bobbycharms.github.io/travel-tracker/',
        repo: 'https://github.com/BobbyCharms/travel-tracker',
      },
    {
        name: 'MySQL Database',
        image: MySQLDBlogo,
        desc: 'Database created using Sequalize with MySQL for users to view, add, remove, and update departments, roles, and salaries. ',
        repo: 'https://github.com/ShannyaN/twelve-MySqlDB'
      },
      {
        name: 'Password Generator',
        image: PassGenlogo,
        desc: 'Creates unique passwords based on parameters input by users. ',
        app: 'https://shannyan.github.io/three-pwdgen/',
        repo: 'https://github.com/ShannyaN/three-pwdgen',
      },

  ]

export default projectList;