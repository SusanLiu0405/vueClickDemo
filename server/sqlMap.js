// sqlmap.js
var sqlMap = {
    // home
    home: {
      search: 'select * from student',
      add: 'insert into student(name) values (?)'
    },
    other:{
        delete:'', // delete sql语句
        post: '',
        get: ''
    }
  }
  module.exports = sqlMap
   