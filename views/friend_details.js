Teemo['friend-details'] = function (params) {
    var viewModel = {
        id: params.id,
        name: ko.observable('')
    };
    $.get('http://sampleservices.devexpress.com/api/Products/' + viewModel.id)
    .done(function (data) {
        viewModel.name(data.ProductName);
    });
    return viewModel;
};