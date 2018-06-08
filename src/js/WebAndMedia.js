export default class WebAndMedia {
	constructor(){}
	static fibonacci(num) {
		let t1 = 1; 
		let t2 = 1;
		let t3 = 1;
		for (var count = 1; count < num; count++){
			t3 = t1 + t2;
			t1 = t2;
			t2 = t3;
		}
		return t3;
	}
	static msuBears() {
		for (let i=1; i<=100; i++){
			if (i%3==0 && i%5==0){
				console.log("MSUBears");
			}
			else {
				if (i%3 == 0){
					console.log("MSU")
				} else if (i%5 == 0){
					console.log("Bears")
				} else {
					console.log(i);
				}
			}
		}
	}
}

