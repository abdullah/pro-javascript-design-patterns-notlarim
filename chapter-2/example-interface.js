var ResultSet = new Interface('ResultSet', ['getDate', 'getResults']);

var ResultFormatter = function(resultsObject) {
    Interface.ensureImplements(resultsObject, ResultSet);
    this.resultsObject = resultsObject;
};

ResultFormatter.prototype.renderResults = function() {
    var dateOfTest = this.resultsObject.getDate();
    var resultsArray = this.resultsObject.getResults();
    var resultsContainer = document.createElement('div');
    var resultsHeader = document.createElement('h3');
    resultsHeader.innerHTML = 'Test Results from ' + dateOfTest.toUTCString();
    resultsContainer.appendChild(resultsHeader);
    var resultsList = document.createElement('ul');
    resultsContainer.appendChild(resultsList);
    for (var i = 0, len = resultsArray.length; i < len; i++) {
        var listItem = document.createElement('li');
        listItem.innerHTML = resultsArray[i];
        resultsList.appendChild(listItem);
    }
    return resultsContainer;
};


function resultsObject() {
    this.getDate = function() {
        return new Date()
    }

    this.getResults = function() {
        return ["x", "a"]
    }
}

var res = new ResultFormatter(new resultsObject());
document.querySelector('body').appendChild(res.renderResults())
