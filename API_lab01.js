
// 1) Get all posts
$("#button1").click(function(){
$.get('https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/posts', function(x){
	x.forEach(function(){
	let p = $('<p></p>');
	p.text(JSON.stringify(x));
	$('body').append(p);
})
})
})

// 2) Get post with id of 10
$("#button2").click(function(){
$.get('https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/posts',{id: 10}, function(x1){
	x1.forEach(function(){
	let p = $('<p></p>');
	p.text(JSON.stringify(x1));
	$('body').append(p);
})
})
})


// 3) Get the comments from post with id of 12
$("#button3").click(function(){
$.get('https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/comments',{id: 12}, function(x2){
	x2.forEach(function(){
	let p = $('<p></p>');
	p.text(JSON.stringify(x2));
	$('body').append(p);
})
})
})

// 4) Get all the posts from user with id of 2
$("#button4").click(function(){
$.get('https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/posts',{id: 2}, function(x3){
	x3.forEach(function(){
	let p = $('<p></p>');
	p.text(JSON.stringify(x3));
	$('body').append(p);
})
})
})

// 5) Create a new post and log the id generated for it by the server
$("#button5").click(function(){
	$.ajax({
    method: 'POST',
    url: 'https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/posts',
    data: {
        userId: 1,
        title: "New post",
        body: "New id generated"
    },
    complete:function(data){
	var p=$('<p></p>');
                p.text(JSON.stringify(data));
                //p.text(data.id);
                //console.log(data);
                //$('body').append('<p> id:' +data.id +'</p>');
                $('body').append(p);
    //})
            }
    })
})

// 6) Replace the post with id of 14
$("#button6").click(function(){
$.ajax({
	method: 'PUT',
	url: 'https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/posts/14',
	data: {
		userId: 1,
		title: "Replace it",
		body: "Post got replaced"
	},
	complete: function(response){
		var p=$('<p></p>')
		p.text(JSON.stringify(response));
		$('body').append(p);
	//complete: function(response){
		//console.log(response.responseJSON);
	}
})
})

// 7) Update the title field of the post with id of 14
$("#button7").click(function(){
$.ajax({
	method: 'PATCH',
	url: 'https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/posts/14',
	data: {
title: "Patched it"
},
	complete: function(response){
		var p=$('<p></p>')
		p.text(JSON.stringify(response));
		$('body').append(p);
		//console.log(response.responseJSON);
	}
})
})

// 8) Delete the post with id of 14
$("#button8").click(function(){
$.ajax({
	method: 'DELETE',
	url: 'https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/posts/14',
	data: {
title: "Delete it"
},
	complete: function(response){
		var p=$('<p></p>')
		p.text(JSON.stringify(response));
		$('body').append(p);
		//console.log(response.statusText);
	}
})
})