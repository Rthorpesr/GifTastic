$(document).ready(function()
         {
              // Initial array of teams
              var teams = ["redskins", "steelers", "capitals", "wizards", "flyers", 
                           "nationals", "giants", " brewers", "padres", "orioles", "reds"];
 
              console.log("1 - Initial: " +teams);

              function displayImg()
                   {
                        $("#returned-images").empty();
 
                        var input = $(this).attr("data-name");
                        console.log("2 - input: " +input);
                        var limit = 10;
                        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + input + "&limit=" + limit + "&api_key=HkrCOrKlKGlWWszPPWXR15UK9zOEw8gU"
                        console.log("3 - show queryURL: " +queryURL);
                   
                        $.ajax(
                             {
                                  url: queryURL, 
                                  method: "GET"
                             }).done(function(response) 
                                  {
                                       console.log("4 - Loop to retrieve images: " +input);
                                       for(var  j = 0; j < limit; j++)
                                            {    
                                                 var teamDiv = $("<div>");
                                                 console.log("5 - teamDiv: " +teamDiv);
                                  
                                                 teamDiv.addClass("holder");
                                                 var image = $("<img>");
                                                 console.log("6 - j = " +j);

                                                 image.attr("src", response.data[j].images.original_still.url);
                                                 image.attr("data-still", response.data[j].images.original_still.url);
                                                 image.attr("data-animate", response.data[j].images.original.url);
                                                 image.attr("data-state", "still");
                                                 image.attr("class", "gif");
                  
                                                 console.log("7 - response data: " +response.data);
                                                 teamDiv.append(image);
                                                 var title = response.data[j].title;
                                                 var ptitle = $("<p>").text("Title: " + title);
                                                 teamDiv.prepend(ptitle);
                                                 $("#returned-images").prepend(teamDiv);
                                            }
                                  });
                   }

              function renderButtons()
                   { 
                        $("#team-buttons").empty();

                        for (var i = 0; i < teams.length; i++)
                             {
                                  console.log("8 - Rendering New teams Loop");
                                  console.log("9 - i = " +i);
                                  var newButton = $("<butRendeton>") 
                                  newButton.attr("class", "btn btn-primary");
                                  newButton.attr("id", "input")  
                                  newButton.attr("data-name", teams[i]); 
                                  newButton.text(teams[i]); 
                                  $("#team-buttons").append(newButton); 
                             }
                   };
              
              function imageChangeState() 
                   {      
                        console.log("10 - checking the state of gif ");    
                        var state = $(this).attr("data-state");
                        var animateImage = $(this).attr("data-animate");
                        var stillImage = $(this).attr("data-still")

                        if(state == "still") 
                             {
                                  $(this).attr("src", animateImage);   
                                  $(this).attr("data-state", "animate");
                             }
                        else 
                             if(state == "animate") 
                                  {
                                       $(this).attr("src", stillImage);
                                       $(this).attr("data-state", "still");
                                  }
                   };
   
              $("#submitPress").on("click", function()
              {
                   console.log("11 - Submit button clicked");
                   var input = $("#user-input").val().trim();
                   form.reset();
                   teams.push(input);
                   renderButtons(); 
                   return false;
              });

              renderButtons();
        
              $(document).on("click", "#input", displayImg);
              $(document).on("click", ".gif", imageChangeState);
         });

          