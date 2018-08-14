var mongoose = require('mongoose');
var Schema = mongoose.Schema

var UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter your Name"],
        trim: true,
    },
    email: {
        type: String,
        required: [true, "Please enter your email"],
        minlength: [5, "Email must be at least 4 characters"],
        maxlength: [40, "Your Email is too long! It should be less than 40 characters"],
        unique: [true, "Email already registered. Please Login  or Register another email."],
        match: [/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/, "Not a valid Email format. Try again."]
    },
    surveys: [{
        type: Schema.Types.ObjectId, 
        ref: 'Survey'
    }],
    password: {
        type: String,
        required: true,
        minlength: 8,
        maxlength: 32,
        validate: {
        validator: function( value ) {
            return /^([a-zA-Z0-9@*#]{8,15})$/.test( value );
          },
          message: "Not a valid Password!, Password must have at least 1 number and an uppercase"
        }
    }},
    {
      timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
        }
});

var User = mongoose.model('User', UserSchema);

var SurveySchema = new mongoose.Schema({
    customer: {type: Schema.Types.ObjectId, ref: 'User'},
    customerName: {
        type: String,
    },
    // content: {
    //     type: String,
    // // required: [true, "Must input Question"],
    // },
    author: {
        type: String,
        // required: [true, "Must input option 1"],
    },
    author1: {
        type: String,
        // required: [true, "Must input option 1"],
    },
    author2: {
        type: String,
        // required: [true, "Must input option 2"],
    },
    author3: {
        type: String,
        // required: [true, "Must input option 3"],
    },
    author4: {
        type: String,
        // required: [true, "Must input option 4"],
    },
    rate: {
        type: Number,
        // required: [true, "Must know when Survey is!"]
    }
},
    {
      timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
        }
});

var Survey = mongoose.model('Survey', SurveySchema);