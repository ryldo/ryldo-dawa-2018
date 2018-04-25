const mongoose = require('mongoose')
const Schema = mongoose.Schema

mongoose.connect('mongodb://localhost:27017/chat', (err) => {
    if(err){console.log(err)}
    else{console.log('Conexión correcta a la base de datos')}
})

var user_schema = new Schema({
    _id : String,
    first_name : String,
    last_name: String,
    timezone: String,
    locale : String,
    profile_pic : String,
    mayor_edad: Boolean
})

User = mongoose.model('user',user_schema,'users')

module.exports = {
    create: (data, callback) => {
        var item = {
            _id : data._id,
            first_name : data.first_name,
            last_name: data.last_name,
            timezone: data.timezone,
            locale : data.locale,
            profile_pic : data.profile_pic,
            mayor_edad: data.mayor_edad
        }
        var nuevo = new User(item).save();
        callback(item)
    },
    show: (callback) => {
        User.find({}, (err, items) => {
            if(err){console.log(err)}
            else{
                callback(JSON.stringify(items))
                }
        })
    },
    update: (data, callback) => {
        User.findOne({_id: data._id}, (err, user) => {
            if(err) {console.log(err)}
            else{
                user.first_name = data.first_name
                user.last_name = data.last_name
                user.timezone = data.timezone
                user.locale = data.locale
                user.profile_pic = data.profile_pic
                user.mayor_edad = data.mayor_edad 
                user.save()
                callback(user)
            }
        })
    },
    delete: (_id, callback) => {
        User.findOne({_id: _id}, (err, post) => {
            if(err){console.log(err)}
            else{
                post.remove()
                callback(_id)
            }
        })
    }
}