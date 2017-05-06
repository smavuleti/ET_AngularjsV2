angular.module('expenseTracker', []).controller('addExpenseController', function($scope){
        
        //$scope.storedExpenses = JSON.parse(localStorage.getItem('data'));
   
         $scope.categories=['Fruits','Snacks','Vegetables'];
         $scope.selectedItem;
            $scope.selectedCategory = function(item){
                console.log("in selectedCategory")
                $scope.selectedItem = item;
                
            }
            
            $scope.expenses = [];
        

    
        $scope.saveExpense = function() {
            
            
            
            
            //category:
            $scope.form.selectedItem = $scope.selectedItem;
            
            //date
            $scope.form.date = new Date();
            var storedExpenses = localStorage.getItem('data') ? JSON.parse(localStorage.getItem('data')) : []
            var dataSaved = {};
            dataSaved.categoryName = $scope.form.selectedItem;
            dataSaved.date = $scope.form.date;
            dataSaved.amount = $scope.form.amount;
            dataSaved.storeName = $scope.form.storeName;
            $scope.expenses.push(dataSaved);
            console.log($scope.expenses);
            storedExpenses.push(dataSaved)
            localStorage.setItem('data', JSON.stringify(storedExpenses ));
        $scope.storedExpenses = JSON.parse(localStorage.getItem('data'));
            //localStorageService.set(dataSaved,$scope.expenses)
           //return localStorageService.get(dataSaved);
            
        }  
        
        
   
    })
