
// 1) Get all posts
$("#button1").click(function(){
$.get('https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/posts', function(x){
	x.forEach(function(){
	//console.log(data);
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
	//console.log(data);
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
	//console.log(data);
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
	//console.log(data);
	let p = $('<p></p>');
	p.text(JSON.stringify(x3));
	$('body').append(p);
})
})
})

// 5) Create a new post and log the id generated for it by the server
$("#button5").click(function(){
	var postTitle = "posting a new post for testing";
$.post('https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/posts',{title:postTitle}, 
	function(x4){
	//x4.forEach(function(){
	console.log(x4);
	//let p = $('<p></p>');
	//p.text(JSON.stringify(x4));
	//$('body').append(p);
})
})
//})

// 6) Replace the post with id of 12
$("#button6").click(function(){
$.Post('https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/posts',{id: 12}, function(x6){
	x6.forEach(function(){
	//console.log(data);
	let p = $('<p></p>');
	p.text(JSON.stringify(x6));
	$('body').append(p);
})
})
})

// 7) Update the title field of the post with id of 12
$.ajax({
	method: 'PATCH',
	url: 'https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/posts/12',
	data: {
title: "patched it"
},
	complete: function(response){
		console.log(response.responseJSON);
	}
})

// 8) Delete the post with id of 12
$.ajax({
	method: 'DELETE',
	url: 'https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/posts/12',
	complete: function(response){
		console.log(response.statusText);
	}
})
