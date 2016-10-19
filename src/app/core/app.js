angular.module("word-graphs", ["highcharts-ng"])
    .controller("MainController", ["$scope", "$http",
        function($scope, $http){
            $scope.title = "word-graphs";
            $scope.word = "Austin";
            $scope.rhymeMax = 10;
            $scope.data = [];
            $scope.highchartsNG = {               
                    options: {
                        chart: {
                        type: "pie"
                        },
                        plotOptions: {
                        series: {
                            stacking: "percent"
                            }
                        }
                    },
                    series: [
                        {
                        data: $scope.data,
                        id: "Rhyme-Scores"
                        }],
                    title: {
                        text: "Rhyme Scores"
                    },
                    credits: {
                        enabled: false
                    },
                    loading: false,
                    useHighStocks: false,
                    subtitle: {
                        text: $scope.word 
                    }
            };
            
            $scope.loadData = function(){                
                $scope.highchartsNG.series[0].data = [];
                $scope.highchartsNG.subtitle = $scope.word;
                var urlBase = "https://api.datamuse.com/words?rel_rhy=";
                $http.get(urlBase + $scope.word).success(function(data){         
                    if(data.length < $scope.rhymeMax){
                        $scope.rhymeMax = data.length;
                    };    
                    for(i=0; i < $scope.rhymeMax; i++){
                        $scope.highchartsNG.series[0].data.push([data[i].word, data[i].score]);
                }})};
            
            $scope.loadData();
                        
        }])
        
    .directive('ngEnter', function () {
      return function (scope, element, attrs) {
          element.bind("keydown keypress", function (event) {
              if(event.which === 13) {
                  scope.$apply(function (){
                      scope.$eval(attrs.ngEnter);
                  });

                  event.preventDefault();
              }
          });
      };
  });