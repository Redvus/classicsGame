export class Info {
	constructor(id, name, info) {
		this.id = id;
		this.name = name;
		this.info = info;

		// this.initLayout();
	}

	greet() {
		return `Hello, my name is ${this.name} and I am a ${this.info}.`;
	}
}

// Move loadInfo and its usage outside the class
async function loadInfo() {
  // In a browser environment:
    const response = await fetch('/assets/games/classics/info.json');
    const jsonData = await response.json();

  // In Node.js environment:
//   const fs = require('fs');
//   const jsonData = JSON.parse(fs.readFileSync('/assets/games/classics/info.json'));

  return jsonData.map(item => new Info(item.id, item.name, item.info));
}

loadInfo().then(people => {
  people.forEach(person => {
	console.log(person.greet());
  });
});