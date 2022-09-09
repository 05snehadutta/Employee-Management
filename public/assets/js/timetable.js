// $( document ).ready(function() {
//       console.log( "ready! avijit 12345678" );
//   });
     var i=0;
    
   function timestame(){
      // console.log(doctors);
      i=i+1;
      all_doctor_Options = "";
      // $.each(doctors, function (key, doctor) {
      //       all_doctor_Options = all_doctor_Options + "<option value="+key+">" + doctor + "</options>";
      // });
      all_day_Options = "";
      var days=[
            "Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday",
      ];
      $.each(days, function (key, day) {
            all_day_Options = all_day_Options + "<option value="+day+">" + day + "</options>";
      });
      var times=[
            '00.00',
            '01.00',
            '01.30',
            '02.00',
            '02.30',
            '03.00',
            '03.30',
            '04.00',
            '04.30',
            '05.00',
            '05.30',
            '06.00',
            '06.30',
            '07.00',
            '07.30',
            '08.00',
            '08.30',
            '09.00',
            '09.30',
            '10.00',
            '10.30',
            '11.00',
            '11.30',
            '12.00',
            '12.30',
            '13.00',
            '13.50',
            '14.00',
            '14.30',
            '15.00',
            '15.30',
            '16.00',
            '16.30',
            '17.00',
            '17.30',
            '18.00',
            '18.30',
            '19.00',
            '19.30',
            '20.00',
            '20.30',
            '21.00',
            '21.30',
            '22.00',
            '22.30',
            '23.00',
            '23.30',
            '24.00',

        ];
        all_times_Options = "";
      $.each(times, function (key, day) {
            // var p=day.val();
            all_times_Options = all_times_Options + "<option value="+day+">" + day + "</options>";
      });
      
            $( "#add_doctor" ).append( '<div class="col-6 form-group">'
                                       +'<select name="day_'+i+'" class="form-control">'
                                       +all_day_Options
                                       +'</select>'
                                       +'</div>'
                                       +'<div class="col-3 form-group">'
                                       +'<select name="start_times_'+i+'" class="form-control">'
                                       +all_times_Options
                                       +'</select>'
                                       +'</div>'
                                       +'<div class="col-3 form-group">'
                                       +'<select name="end_times_'+i+'" class="form-control">'
                                       +all_times_Options
                                       +'</select>'
                                       +'</div>'
      );
    
      $('#total_doctor').attr("value",i);
   }
