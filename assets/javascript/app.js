$(document).ready(function(){



    // var displayedButtons = ["Harry Potter", "Hermione Granger", "Ron Weasley"];
   
             // Initial array of teams
             var displayedButtons = ["redskins", "steelers", "capitals", "wizards", "flyers", 
             "nationals", "giants", " brewers", "padres", "orioles", "reds"];
 
 
 
     function displayImg(){
 
 
         $("#display-images").empty();
 
         var input = $(this).attr("data-name");
         var limit = 10;
         var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + input + "&limit=" + limit + "&api_key=HkrCOrKlKGlWWszPPWXR15UK9zOEw8gU"
          console.log("show queryURL: " +queryURL);
          
 
         $.ajax({
 
             url: queryURL, 
 
             method: "GET"
 
         }).done(function(response) {
 
 
 
             for(var  t = 0; t < limit; t++) {    
 
 
 
                 var displayDiv = $("<div>");
 
                 displayDiv.addClass("holder");
 
             
 
                 var image = $("<img>");
 
                 image.attr("src", response.data[t].images.original_still.url);
 
                 image.attr("data-still", response.data[t].images.original_still.url);
 
                 image.attr("data-animate", response.data[t].images.original.url);
 
                 image.attr("data-state", "still");
 
                 image.attr("class", "gif");
                  
                 console.log(response.data);
                 displayDiv.append(image);
 
 
 
                 var title = response.data[t].title;
 
                 console.log(response);
 
                 var ptitle = $("<p>").text("Title: " + title);
 
                 displayDiv.append(ptitle)
 
 
 
                 $("#display-images").append(displayDiv);
 
             }
 
         });
 
     }
 
 
 
     function renderButtons(){ 
 
 
 
         $("#display-buttons").empty();
 
 
 
         for (var i = 0; i < displayedButtons.length; i++){
 
 
 
             var newButton = $("<button>") 
 
             newButton.attr("class", "btn btn-primary");
 
             newButton.attr("id", "input")  
 
             newButton.attr("data-name", displayedButtons[i]); 
 
             newButton.text(displayedButtons[i]); 
 
             $("#display-buttons").append(newButton); 
 
         }
 
     }
 
 
 
     function imageChangeState() {          
 
 
 
         var state = $(this).attr("data-state");
 
         var animateImage = $(this).attr("data-animate");
 
         var stillImage = $(this).attr("data-still");
 
 
 
         if(state == "still") {
 
             $(this).attr("src", animateImage);
 
             $(this).attr("data-state", "animate");
 
         }
 
 
 
         else if(state == "animate") {
 
             $(this).attr("src", stillImage);
 
             $(this).attr("data-state", "still");
 
         }   
 
     }
 
 
 
     $("#submitPress").on("click", function(){
 
 
 
         var input = $("#user-input").val().trim();
 
         form.reset();
 
         displayedButtons.push(input);
 
                 
 
         renderButtons();
 
 
 
         return false;
 
     })
 
 
 
     renderButtons();
 
 
 
     $(document).on("click", "#input", displayImg);
 
     $(document).on("click", ".gif", imageChangeState);
 
 });