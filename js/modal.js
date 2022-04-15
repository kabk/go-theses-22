$( ".project-spine" ).each(function(index) {
  $(this).on("click", function(){
    $(this).addClass('active');
    $(this).siblings().removeClass('active');
    $(this).siblings().children('.vert').children('.div-name').removeClass('active');
    $(this).siblings().children('.vert').children('.div-title').show();
  });
});

// $( ".project-spine-always-active" ).each(function(index) {
//   $(this).on("click", function(){
//     $(this).siblings().removeClass('active');
//   });
// });


if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
  
  $(function() {
    $('.marquee-down')
      .marquee({
        //If you wish to always animate using jQuery
        allowCss3Support: true
        , //works when allowCss3Support is set to true - for full list see http://www.w3.org/TR/2013/WD-css3-transitions-20131119/#transition-timing-function
        css3easing: 'linear'
        , //requires jQuery easing plugin. Default is 'linear'
        easing: 'linear'
        , //pause time before the next animation turn in milliseconds
        delayBeforeStart: 0
        , //'left', 'right', 'up' or 'down'
        direction: 'right'
        , //true or false - should the marquee be duplicated to show an effect of continues flow
        duplicated: true
        , //speed in milliseconds of the marquee in milliseconds
        duration: 10000
        , //gap in pixels between the tickers
        gap: 60
        , //on cycle pause the marquee
        pauseOnCycle: false
        , //on hover pause the marquee - using jQuery plugin https://github.com/tobia/Pause
        pauseOnHover: false
        , //the marquee is visible initially positioned next to the border towards it will be moving
        startVisible: true
      });
  });
  
  
  
  $(function() {
    $('.marquee-up')
      .marquee({
        //If you wish to always animate using jQuery
        allowCss3Support: true
        , //works when allowCss3Support is set to true - for full list see http://www.w3.org/TR/2013/WD-css3-transitions-20131119/#transition-timing-function
        css3easing: 'linear'
        , //requires jQuery easing plugin. Default is 'linear'
        easing: 'linear'
        , //pause time before the next animation turn in milliseconds
        delayBeforeStart: 0
        , //'left', 'right', 'up' or 'down'
        direction: 'left'
        , //true or false - should the marquee be duplicated to show an effect of continues flow
        duplicated: true
        , //speed in milliseconds of the marquee in milliseconds
        duration: 10000
        , //gap in pixels between the tickers
        gap: 60
        , //on cycle pause the marquee
        pauseOnCycle: false
        , //on hover pause the marquee - using jQuery plugin https://github.com/tobia/Pause
        pauseOnHover: false
        , //the marquee is visible initially positioned next to the border towards it will be moving
        startVisible: true
      });
  });

} else {



    $(function() {
      $('.marquee-down')
        .marquee({
          //If you wish to always animate using jQuery
          allowCss3Support: true
          , //works when allowCss3Support is set to true - for full list see http://www.w3.org/TR/2013/WD-css3-transitions-20131119/#transition-timing-function
          css3easing: 'linear'
          , //requires jQuery easing plugin. Default is 'linear'
          easing: 'linear'
          , //pause time before the next animation turn in milliseconds
          delayBeforeStart: 0
          , //'left', 'right', 'up' or 'down'
          direction: 'left'
          // direction: 'horizontal'
          , //true or false - should the marquee be duplicated to show an effect of continues flow
          duplicated: true
          , //speed in milliseconds of the marquee in milliseconds
          duration: 10000
          , //gap in pixels between the tickers
          gap: 500
          , //on cycle pause the marquee
          pauseOnCycle: false
          , //on hover pause the marquee - using jQuery plugin https://github.com/tobia/Pause
          pauseOnHover: false
          , //the marquee is visible initially positioned next to the border towards it will be moving
          startVisible: true
        });
    });

    // $('.marquee-up').each(function(){
    //   $(this)
    //   .marquee({
    //     //If you wish to always animate using jQuery
    //     allowCss3Support: true
    //     , //works when allowCss3Support is set to true - for full list see http://www.w3.org/TR/2013/WD-css3-transitions-20131119/#transition-timing-function
    //     css3easing: 'linear'
    //     , //requires jQuery easing plugin. Default is 'linear'
    //     easing: 'linear'
    //     , //pause time before the next animation turn in milliseconds
    //     delayBeforeStart: 0
    //     , //'left', 'right', 'up' or 'down'
    //     direction: 'down'
    //     , //true or false - should the marquee be duplicated to show an effect of continues flow
    //     duplicated: false
    //     , //speed in milliseconds of the marquee in milliseconds
    //     duration: 8000
    //     , //gap in pixels between the tickers
    //     gap: 0
    //     , //on cycle pause the marquee
    //     pauseOnCycle: false
    //     , //on hover pause the marquee - using jQuery plugin https://github.com/tobia/Pause
    //     pauseOnHover: false
    //     , //the marquee is visible initially positioned next to the border towards it will be moving
    //     startVisible: true
    //   });
    // });



    $('.marquee-up').each(function(){
        $(this)
          .marquee({
            //If you wish to always animate using jQuery
            allowCss3Support: true
            , //works when allowCss3Support is set to true - for full list see http://www.w3.org/TR/2013/WD-css3-transitions-20131119/#transition-timing-function
            css3easing: 'linear'
            , //requires jQuery easing plugin. Default is 'linear'
            easing: 'linear'
            , //pause time before the next animation turn in milliseconds
            delayBeforeStart: 0
            , //'left', 'right', 'up' or 'down'
            direction: 'right'
            , //true or false - should the marquee be duplicated to show an effect of continues flow
            duplicated: true
            , //speed in milliseconds of the marquee in milliseconds
            duration: 10000
            , //gap in pixels between the tickers
            gap: 500
            , //on cycle pause the marquee
            pauseOnCycle: false
            , //on hover pause the marquee - using jQuery plugin https://github.com/tobia/Pause
            pauseOnHover: false
            , //the marquee is visible initially positioned next to the border towards it will be moving
            startVisible: true
          });
    });


    $('.project-spine').each(function(){
   
      $(this).mouseenter(function(){
        if (!$(this).hasClass('active')) {
          $(this).children('.vert').children('.div-title').hide();
          // $(this).children('span').show();
          $(this).children('.vert').children('.div-name').addClass('active');
        }
      });
      $(this).mouseleave(function(){
        // $(this).children('span').hide();
        if (!$(this).hasClass('active')) {
        $(this).children('.vert').children('.div-name').removeClass('active');
        $(this).children('.vert').children('.div-title').show();
        }
      });
  
    });

}





