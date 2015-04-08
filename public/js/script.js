//this file was loaded from a <script> tag in header.ejs

//wait for DOM to be ready
$(function(){

  $('.delete-link').on('click',function(e){
    e.preventDefault();
    var delBtn = $(this);
    if(confirm('Are you sure you want do delete this?')){
      var myUrl = $(this).attr('href');
      $.ajax({
        method:'DELETE',
        url: "../favorites"
      }).done(function(data){
        //reload page!!! OR...

        //just remove the row from the DOM
        delBtn.removeClass('delete-link');
      });
    }
  });


  $('.put-form').on('submit',function(e){
    e.preventDefault();

    var myUrl = $(this).attr('action');
    var myData = $(this).serialize();

    $.ajax({
      method:'PUT',
      url:myUrl,
      data:myData
    }).done(function(data){
      location.href="/articles";
    });
  });




  //debug output when the page is ready
  console.log('page is ready');

  //look up text length counter
  var textCounter = $('#text-counter');

  //listen for key down events
  $('#article-body').on('keydown',function(e){

    //debug output (every time a key is pressed down)
    console.log('body changed',e.which);

    //store text length.. length of textarea
    var textLen = $(this).val().length;

    //in class version
    //if the text length is over 50 chars
    //AND the key is not the backspace key
    if(textLen >= 50 && e.which != 8){

      //prevent the key press
      e.preventDefault();

      //highlight the box and counter in red
      textCounter.css('color','red');
      $(this).css('border','1px solid red');

      //crop off extra chars
      //protects against pasting a large string
      $(this).val($(this).val().substr(0,50));

    }else{
      //reset style .css() adds inline style
      //this removes all inline style
      textCounter.attr('style','');
      $(this).attr('style','');
    }

    //show text length on counter
    textCounter.text('Text length: '+textLen);

  });


})