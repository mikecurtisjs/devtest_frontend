var myApp = myApp || {};
(function(){
  var _self;
  myApp.myWebApp = {
    appData: {
      userData: null,
      filterArr: []
    },
    init: function(){
      _self = this;
      _self.getData();
    },
    getData: function(){
      var path = 'https://jsonplaceholder.typicode.com/todos';
      $.get(path, function(data){
        _self.appData.userData = data;
        console.log(_self.appData.userData);
        _self.createPage();
      });
    },
    createPage: function(){
      var userIds = [],
          footClassText = '';

      $.each(_self.appData.userData, function(idx, val){
          footClassText = val.completed ? 'Complete' : 'Incomplete';
          if(userIds.indexOf(val.userId) < 0){
            userIds.push(val.userId);
            $('#filterBar').append('<li>' + val.userId + '</li>');
          }
          $('.container').append('<div class="displayBox" data-user_id="' + val.userId + '">' +
      			'<div id="head">Task Name: ' + val.id + '</div>' +
      			'<div id="userInfo">UserID :' + val.userId + '</div>' +
      			'<div id="body">' + val.title + '</div>' +
      		  '<div id="foot" class="' + footClassText.toLowerCase() + '">' + footClassText + '</div>' +
      		'</div>');
      });
      _self.clickEvents();
    },
    clickEvents: function(){
      $('#filterBar').on('click', 'li', function(){
        var liText = $(this).text();
        _self.filterData($(this));
      })
      $('.displayBox').on('click', '#foot', function(e){
        e.stopPropagation();
        if($(this).hasClass('complete')){
          $(this).removeClass('complete');
          $(this).addClass('incomplete');
        }else{
          $(this).removeClass('incomplete');
          $(this).addClass('complete');
        }
      })
    },
    filterData: function(ele){
        var liText = parseInt(ele.text());
        if(ele.hasClass('active')){
          var idx = _self.appData.filterArr.indexOf(liText);
          _self.appData.filterArr.splice(idx, 1);
          ele.removeClass('active');
        }else{
          _self.appData.filterArr.push(liText);
          ele.addClass('active');
        }

        if(_self.appData.filterArr.length == 0){
          $('.displayBox').show();
        }else{
          $('.displayBox').each(function(){
            console.log(_self.appData.filterArr.indexOf($(this).data('user_id')));
            if(_self.appData.filterArr.indexOf($(this).data('user_id')) < 0){
              $(this).hide();
            }else{
              $(this).show();
            }
          })
        }
    }
  }
})();
myApp.myWebApp.init();
