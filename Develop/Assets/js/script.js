// selecting the savebtn and storing the value in local storage
var saveBtn = document.querySelector(".saveBtn");

// using moment to display the current day
var currentDay = moment().format("MMM Do, YYYY");
$("#currentDay").text(currentDay);

// 
function updateTime() {
   // using moment to display the current time
   var currentTime = moment().hour();
    $("#currentTime").text(currentTime);
   
   console.log(currentTime, "currentTime");

   // creating for loop to update the time with color coding
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

// on click function to save the value in local storage
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

// function with a for loop to display the saved value in local storage
function renderTasks() {
   for (var i = 7; i < 19; i++) {
       $("#" + i).children("textarea").val(localStorage.getItem(i));
   };
};

renderTasks();


console.log(moment().hour());