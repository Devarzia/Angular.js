// Declaring The angularjs app
var movieApp = angular.module('movieApp', []);

// Creating the controller for the movieApp
movieApp.controller('Movie', function GetMovieData($scope, $http, $window)
{
    // Declaring the function and passing in the title parameter
    $scope.movie = function (title)
    {
        // The Url for the data and title (from website)
        var URI = 'http://www.omdbapi.com/?t=' + title;
        $http.get(URI)
                .success(function (MovieData)
                {
                    var outputString = "";
                    for (var key in MovieData)
                    {
                        outputString += key + " : " + MovieData[key] + '\n';
                    }

                    // Parsing the data to the output div
                    $scope.MovieInfo = outputString;
                });
    };

    $scope.MovieDatabase = function (url)
    {
        $window.open(url);
    };
});