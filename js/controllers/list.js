
(function(){
    
    angular
        .module("skaterFacts")
        .controller("listCtrl", ListController);
    
    
    ListController.$inject = ['quizMetrics', 'DataService'];

   
    function ListController(quizMetrics, DataService){
        var vm = this;

       
        vm.quizMetrics = quizMetrics; // Controllers reference to the quiz data from factory
        vm.data = DataService.skatersData; // Controller reference to the skater info created in the factory
        vm.activeSkater = {}; // will be used in the view to hold the data of currently active skater
        vm.changeActiveSkater = changeActiveSkater; // reference to a named function below
        vm.activateQuiz = activateQuiz; // reference to named function below
        vm.search = ""; // will hold the search query when user uses search bar in view

        function changeActiveSkater(index){
            
            vm.activeSkater = index;
        }

        function activateQuiz(){
           
            quizMetrics.changeState("quiz", true);
        }
    }


})();
