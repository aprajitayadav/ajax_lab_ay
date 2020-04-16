function testNum(num){

	return new Promise((resolve,reject)=>{
		if (num>50){
			resolve(num + "is grater than 50");
		}else{
			reject(num + "is less than 50");
		}
	});
};
testNum(60);