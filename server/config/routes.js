const restaurantController = require('../controllers/restaurants');
const ReviewsController = require('../controllers/reviews');

module.exports = function (app) {
    app.get('/api/restaurants', restaurantController.index); 
    // 
    app.post('/api/restaurants', restaurantController.create);
    // 
    app.put('/api/restaurants/update/:id', restaurantController.update);
    // 
    app.delete('/api/restaurants/delete/:id', restaurantController.delete);
    // 
    app.get('/api/restaurants/:id', restaurantController.getById);
    // 
    app.post('/api/review/restaurants/:id', ReviewsController.addReviews);

    

}