var angularModule = angular.module("ImageApp",[]);
angularModule.factory("ImageService", function($http){
    return{
        searchImage: function(q){
            return $http.get("https://www.googleapis.com/youtube		/v3/search?type=video&maxResults=50&part=snippet&q="+q+"&key=AIzaSyARSABX27_wqgECdGT9QPWMXNiFuqKU9VI");
        }
    };
});
angularModule.controller("ImageController",function($scope,ImageService){
    $scope.cards = [];
    var images = new Array();

    $scope.searchBox = function(e){
        $scope.cards = [];
        search($scope.searchValue);
    };
    function search(query){
        ImageService.searchImage(query).success(function (data){
            for(var i = 0 ; i <data.items.length;i++){
                images[i] = data.items[i].snippet;
            }
            $scope.cards = images;
        });
    }
    search("Volbeat");
});