var fileX = {
    "records": [
        {
            "Name": "Matheus",
            "Age": "20",
            "Fav_color": "Azul"
        },
        {
            "Name": "Tatiana",
            "Age": "19",
            "Fav_color": "Rosa"
        },
        {
            "Name": "Rafael",
            "Age": "24",
            "Fav_color": "Verde"
        },
        {
            "Name": "Thais",
            "Age": "21",
            "Fav_color": "Azul"
        },
        {
            "Name": "Carla",
            "Age": "42",
            "Fav_color": "Roxo"
        },
        {
            "Name": "Luciano",
            "Age": "21",
            "Fav_color": "Vermelho"
        },
        {
            "Name": "Yuri",
            "Age": "13",
            "Fav_color": "Azul"
        }
    ]
}

angular.module('starter.controllers', [])

.controller('DashCtrl', function ($scope) {})

.controller('ArtistsCtrl', function ($scope, Artists) {
    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //
    //$scope.$on('$ionicView.enter', function(e) {
    //});

    $scope.artists = Artists.all();
    $scope.remove = function (artist) {
        Artists.remove(artist);
    };

    $scope.arrayArtists = fileX.records;
})

.controller('ArtistDetailCtrl', function ($scope, $stateParams, Artists) {
    $scope.artist = Artists.get($stateParams.artistId);
})

.controller('AccountCtrl', function ($scope) {
    $scope.settings = {
        enableFriends: true
    };
});
