 $(function(){
        $('#counter').countdown({
          image: 'img/timer/digits.png',
          startTime: '01:12:12:00'
        });

    var _date = new Date();
         _date.setMonth(1);
         _date.setDate(9);
         _date.setHours(0);
         _date.setMinutes(0);
         _date.setSeconds(0);

         $('#counter_3').countdown({
             startTime: _date,
             stepTime: 1,
             digitImages: 6,
             digitWidth: 53,
             digitHeight: 77,
             image: "img/timer/digits.png"
         });

      });