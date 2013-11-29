Teemo.activities = function (params) {
  var viewModel = {
    dataSource: DevExpress.data.createDataSource({
      load: function (loadOptions) {
        if (loadOptions.refresh) {
          var deferred = new $.Deferred();
          $
          .get('http://teemo.herokuapp.com/activities')
          .done(function (result) {
            var mapped = $.map(result, function (data) {
                    return {
                      name: data.name,
                      id: data.id
                    }
            });
            deferred.resolve(mapped);
          });
          return deferred;
        }
      }
    })
  };
  return viewModel;
};