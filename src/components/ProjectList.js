
import LifeLoglogo from '../assets/images/portIcons/lifelog.png'
import MySQLDBlogo from '../assets/images/portIcons/db.png'
import PassGenlogo from '../assets/images/portIcons/pwd.png'
import ReadGenlogo from '../assets/images/portIcons/readme.png'
import Weatherlogo from '../assets/images/portIcons/weather.png'

const projectList = [
    {
      name: 'Life Log',
      image: LifeLoglogo,
      desc: 'Allows users to create an account and To Do lists within to do lists, view within a calendar, and set presets. ',
      app: 'https://lifelog.herokuapp.com/',
      repo: 'https://github.com/emmaparis/Project-2'
    },
    {
        name: 'MySQL Database',
        image: MySQLDBlogo,
        desc: 'Database created using Sequalize with MySQL for users to view, add, remove, and update departments, roles, and salaries. ',
        repo: 'https://github.com/ShannyaN/twelve-MySqlDB'
      },
  ]

export default projectList;