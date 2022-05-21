var saveBtn = document.querySelector(".saveBtn");

var currentDay = moment().format("MMM Do, YYYY");
$("#currentDay").text(currentDay);

function updateTime() {
   var currentTime = moment().hour();
    $("#currentTime").text(currentTime);
   
   console.log(currentTime, "currentTime");

   for (i=7; i<19; i++) {
      var hourId = i.toString()
      if (i < currentTime) {
         $('#'+hourId).removeClass('present');
         $('#'+hourId).addClass('past');
      }
      else if (i > currentTime) {
         $('#'+hourId).removeClass('past');
         $('#'+hourId).addClass('future');
      }
      else {
         $('#'+hourId).removeClass('past');
         $('#'+hourId).removeClass('future');
         $('#'+hourId).addClass('present');
      }
      };
};

$('.saveBtn').on('click', function () {
       var valSib = $(this).siblings('.description').val();    
       var timePar = $(this).parent().attr('id');    
       localStorage.setItem(timePar, valSib);
});
      
$(".clear").on('click',function() {
      localStorage.clear();    
      window.location.reload();
   })

updateTime();

function renderTasks() {
   for (var i = 7; i < 19; i++) {
       $("#" + i).children("textarea").val(localStorage.getItem(i));
   };
};

renderTasks();


console.log(moment().hour());