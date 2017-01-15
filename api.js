var nameList;
	var data;
	function onKeyUp() {
	}
	
	$(function () {
		console.log("f00");
		console.log($("#getText"));
		$( "#getText").click(function() {
		sendRequest();
		});
	});
	
	
	function sendRequest() {
	    //var formData = {id:"1",text:"$("#textarea").val();"}; //Array  
		//var someArray = [];    
		//onKeyUp();
		var nameList = $("#textarea").val();

		//someArray.push(nameList); 
        var params = {
            // Request parameters
        };
            
        $.ajax ({
			beforeSend: function(xhrObj){
                // Request headers
                xhrObj.setRequestHeader("Content-Type","application/json");
                xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key","455fb243179e487c92389c27f076a19a");
				xhrObj.setRequestHeader("Content-Type", "application/json");
            },
            type: "POST",
			url: "https://westus.api.cognitive.microsoft.com/text/analytics/v2.0/sentiment?" + $.param(params),
            // Request body
            data: JSON.stringify({
				"documents": [
					 {
						 "language": "en",
						 "id": "1",
						 "text": nameList
					 }
				 ]
			}),
			success: function (data, textStatus, xhrObj)
			{
				this.data = data;
				console.log(data);
			},
			error: function(xhrObj){
				console.log(xhrObj);
			}
        })
    }

