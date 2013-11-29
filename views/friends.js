Teemo.friends = function (params) {
    // var skip = 0;
    // var PAGE_SIZE = 1;
    var viewModel = {
        // searchString: ko.observable(''),
        // find: function () {
        //     viewModel.showSearch(!viewModel.showSearch());
        //     viewModel.searchString('');
        // },
        // showSearch: ko.observable(false),
        id: params.id,
        dataSource: DevExpress.data.createDataSource({
            load: function (loadOptions) {
                if (loadOptions.refresh) {
                    
                
                    var deferred = new $.Deferred();
                    console.log(viewModel);
                    $.get('http://teemo.herokuapp.com/users/1/activities/' + viewModel.id + "/allies")
                        // {
                        //     id: viewModel.id,
                        //     skip: skip,
                        //     take: PAGE_SIZE,
                        //     searchString: viewModel.searchString()
                        // })
                    .done(function (result) {
                        // skip += PAGE_SIZE;
                        var mapped = $.map(result, function (data) {
                            return {
                                name: data.name,
                                id: data.id
                            };
                        });
                        deferred.resolve(mapped);
                    });
                    return deferred;
                }
            }
        })
    };
    // ko.computed(function () {
    //     return viewModel.searchString();
    // }).extend({
    //     throttle: 500
    // }).subscribe(function () {
    //     viewModel.dataSource.reload();
    // });
    return viewModel;
};