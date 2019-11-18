const mongoose = require('mongoose');
const Restaurant = mongoose.model('Restaurant');
const Review = mongoose.model('Review');

const { flattenErrorsToArr } = require('../../helpers');


module.exports = {

    addReviews(req, res) {
        Restaurant.findByIdAndUpdate(
            req.params.id,
            {
                $push: 
                {
                    reviews: new Review(req.body)
                }
            },
            {
                runValidators: true,
                // will validate and return the new object
                new: true,
            },

        )
            .then((newReview) => {
                res.json({ newReview:newReview })
            })
            .catch(errors => {
                res.json({ errors: flattenErrorsToArr(errors) })
            });

    },

    // deletePassengers(req, res) {
    //     Ride.findByIdAndUpdate(
    //         req.params.rideId,
    //         {
    //             $pull: {
    //                 passengers: {
    //                     _id: req.params.passengersId
    //                 }
    //             }
    //         },
    //         {
    //             new: true 
    //             // getting updated ride
    //         }
    //     )
    //         .then((updatedRide) => {
    //             res.json({ updatedRide:updatedRide })
    //         })
    //         .catch(errors => {
    //             res.json({ errors:errors })
    //         });
    // }
}