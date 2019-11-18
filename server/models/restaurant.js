const mongoose = require("mongoose");


const ReviewSchema = new mongoose.Schema({
    customer: {
        type: String,
        required: [true, '{{{PATH}}} is required'],
        minlength: [3, '{{{PATH}}} name length  must be at least {{minlength}} characters']
    },

    stars: {
        type: String,
        // required: [true, "Please provide your {PATH}"],
        min: [1, "{{PATH}} must be greater than {{MIN}}"],
        max: [5, "{{PATH}} must be less than {{max}}"]
    },

    description: {
        type: String,
        required: [true, '{{PATH}} is required'],
        minlength: [3, '{{PATH}} length  must be at least {{minlength}} characters']
    },
    
}, {timestamps: true})


const RestaurantSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: [true, 'Please provide a unique {{PATH}}'],
        required: [true, '{{PATH}} is required'],
        minlength: [3, '{{PATH}} length  must be at least {{minlength}} characters']
    },

    cuisine: {
        type: String,
        required: [true, 'What cuisine does this place serve?'],
        minlength: [3, '{{PATH}} name length  must be at least {{minlength}} characters']
    },

    reviews: {
        type: [ReviewSchema]

    }


}, {timestamps: true})

RestaurantSchema.index( {name: 1}, {unique: true, sparse: true}, 'Please eneter unique name')


mongoose.model('Review', ReviewSchema);

mongoose.model('Restaurant', RestaurantSchema);
