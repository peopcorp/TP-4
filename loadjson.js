// Insert your ajax code here

$.ajax({
		url : 'datatweet.json',
		dataType : 'json',
		type: 'get',
		success: function(data){
			//console.log(data);
		jmlData = data.length;
        daftarData = "";
        for(i = 0; i < jmlData; i++){
            daftarData +=
            "<div class='media'>"
                        +"<a class='media-left' href='#fake'>"
                            +"<img alt='' class='media-object img-rounded' src='"+data[i].user["url_image"]+"' width='64' height='64'>"
                        +"</a>"
                        +"<div class='media-body'>"
                            +"<h4 class='media-heading'>" + data[i].user["name"] + "</h4>"
                            +"<p>" + data[i]["text"] + "</p>"
                                +"<ul class='nav nav-pills nav-pills-custom'>"
                                    +"<li><a href='#'><span class='glyphicon glyphicon-share-alt'></span></a></li>"
                                    +"<li><a href='#'><span class='glyphicon glyphicon-retweet'></span><span> "+data[i]["retweet_count"]+"</span></a></li>"
                                    +"<li><a href='#'><span class='glyphicon glyphicon-star'></span><span> "+data[i]["favourite_count"]+"</span></a></li>"
                                    +"<li><a href='#'><span class='glyphicon glyphicon-option-horizontal'></span></a></li>"
                                +"</ul>"
                        +"</div>"
            +"</div>" ;
        }
        document.getElementsByClassName("tweet")[0].innerHTML = daftarData;
    }
});






// End of your ajax code
// Insert your getJSON code here

$.getJSON('profile.json', function(data){
	console.log(data);
	$('#twt').html('<h5><small>TWEETS</small>');
	$('#twt').append('<a href="">'+data.tweet_count+'</a></h5>');
	$('#flwi').html('<h5><small>FOLLOWING</small>');
	$('#flwi').append('<a href="">'+data.friends_count+'</a></h5>');
	$('#flwrs').html('<h5><small>FOLLOWERS</small>');
	$('#flwrs').append('<a href="">'+data.followers_count+'</a></h5>');
	$('#fotopf').html('<a href=""><img class="img-responsive" alt="" src="'+data.url_image+'" width="800" height="500"></a>');
	$('#fotosml').html('<img alt="" class="media-object img-rounded" src="'+data.url_image+'" width="35" height="35"></div>');
});




// End of your code