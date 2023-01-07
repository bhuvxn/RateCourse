const mongoose = require('mongoose')

const reviewSchema = new mongoose.Schema({
    author: String,
    rating: Integer,
    description: String, 
    school:[
        {
            type:mongoose.Schema.Types.ObjectID,
            ref: 'School'
        }
    ],
    course:[
        {
            type: mongoose.Schema.Types.ObjectID,
            ref: 
        }
    ]
})

userSchema.set('toJSON', {
    transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id.toString()
      delete returnedObject._id
      delete returnedObject.__v
      // the passwordHash should not be revealed
      delete returnedObject.passwordHash
    }
  })
const User = mongoose.model('User', userSchema)

module.exports = User