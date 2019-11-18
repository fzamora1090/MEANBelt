const mongoose = require('mongoose');
const Restaurant = mongoose.model('Restaurant');

const { flattenErrorsToArr } = require('../../helpers');
// validation list

module.exports = {
    index(req, res) {
       Restaurant.find()
            .then(allRestaurants => res.json({
                allRestaurants: allRestaurants,
                msg: 'Successfully found all!',
            }))
            //return obj with key errors; val of key will be val of param; param and key same name 
            .catch(errors => res.json({ errors:errors }));
    },

    create(req, res) {
       Restaurant.create(
           req.body,
           )
            .then(mewRestaurant => res.json({
                mewRestaurant: mewRestaurant,
                msg: 'Succesfully created Restaurant!',
                runValidators: true,
                // will validate and return the new object
                new: true,
            }))
            .catch(errors => {
                res.json({ errors: flattenErrorsToArr(errors) })
                // console.log('Name must be unique!')
                // ADD VALIDATION ARRAY OF ERRORS
            });

    },

    update(req, res) {
       Restaurant.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                runValidators: true,
                // will validate and return the new object
                new: true,
            }
        )


        .then(newRestaurant => res.json({
            newRestaurant: newRestaurant,
            msg: 'Succesfully updated!',
        }))
        .catch(errors => {
            res.json({ errors:flattenErrorsToArr(errors)  })
        });

    },

    delete(req, res) {
       Restaurant.deleteOne({_id: req.params.id})
            .then(deleted => res.json({
                deleted: deleted,
                msg: 'Succesfully deleted!',
            }))

            .catch(errors => {
                res.json({ errors:errors })
            });
    },
    
    getById(req, res) {
       Restaurant.findById(req.params.id)
            .then(restaurant => res.json({
                restaurant: restaurant,
                msg: 'Succesfully found Restaurant!',
            }))
            .catch(errors => {
                res.json({ errors:errors })
            });
    },

}