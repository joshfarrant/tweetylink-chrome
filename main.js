OAuth.initialize()

$('#view-tweets').hide();

$('#btn-sign-in').click(function(){

  // data = {
  //   oauth_callback : 'https://www.twitter.com/'
  // }

  // console.log(data)

  // $.ajax({
  //   type: 'POST',
  //   url: 'https://api.twitter.com/oauth/request_token',
  //   data: data,
  //   success: function(response) {
  //     console.log(response)
  //   },
  //   error: function(response) {
  //     console.log(response)
  //   },
  //   dataType: 'json'
  // });

  $('#view-sign-in').hide();
  $('#view-tweets').show();

})