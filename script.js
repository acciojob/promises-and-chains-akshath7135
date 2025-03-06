//your JS code here. If required.
function validateForm() {
	const age = document.getElementById('age').value;
	const name = document.getElementById('name').value;
	if(age === '' || name === ''){
		alert{"Please enter valid details."}
		return false;
	}
	const ageNumber = parseInt(age);
	return new Promise((resolve,reject)=>{
		setTimeout(() => {
          if (ageNumber > 18) {
            resolve(`Welcome, ${name}. You can vote.`);
          } else {
            reject(`Oh sorry ${name}. You aren't old enough.`);
          }
        }, 4000);	
		}).then((message)=>{
		alert(message);
		}).catch((error)=>{
		alert(error);
		});
	return false;
}