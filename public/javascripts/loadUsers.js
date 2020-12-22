var body = $('#tableBody');
$.ajax({ 
    type: "GET",
    url: "users",
    dataType : "html",
    success: function(data){
        data = JSON.parse( data ).data;
      data.forEach(user => {
        body.append(`<tr><td>${user._id}</td><td>${user.name}</td></tr>`); 
      });
    }
 });
 