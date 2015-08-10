app.controller('MainController', ['$scope', function ($scope) {
    $scope.title = 'This Month\'s Bestsellers';
    $scope.promo = 'The most popular books this month.';
    $scope.products = [
        {
            name: 'No Country for Old Men',
            author: 'Cormac McCarthy',
            price: 16.00,
            pubdate: new Date('2006', '06', '11'),
            cover: 'img/no-country-for-old-men.jpg',
            likes: 0,
            dislikes: 0
   },
        {
            name: 'The Road',
            author: 'Cormac McCarthy',
            price: 8.00,
            pubdate: new Date('2007', '03', '28'),
            cover: 'img/the-road.jpg',
            likes: 0,
            dislikes: 0
   },
        {
            name: 'How to Win Friends & Influence People',
            author: 'Dale Carnegie',
            price: 8.00,
            pubdate: new Date('1998', '10', '01'),
            cover: 'img/how-to-win-friends.jpg',
            likes: 0,
            dislikes: 0
   },
  ];
    $scope.plusOne = function (index) {
        $scope.products[index].likes += 1;
    };
    $scope.minusOne = function (index) {
        $scope.products[index].dislikes += 1;
    };
}]);