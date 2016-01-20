var app = angular.module('app', ['react']);

app.controller('mainCtrl', function() {
    var _this = this;

    this.model = {
        data: [],
        rows: 6
    };

    for (var i = 0, len = 1000; i < len; ++i) {
        this.model.data.push({name:'Name' + i});
    }

    this.newName = function(person) {
        _this.model.data.push(angular.copy(person));
        _this.person = {};
    };

    this.person = {};
});

app.directive('reactTable', function(reactDirective) {
    return reactDirective(Table);
});

angular.bootstrap(document, ['app']);
