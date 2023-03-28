const topicElement = document.querySelector(".topic");
const countElement = document.querySelector(".count");

//Create an Object & Properties with Dot Notation
const learning = {};

learning.topic = "JS";
learning.learningGoals = [
  "Learn Vanilla JS",
  "Learn JS React",
  "Learn Advanced CSS",
  "Learn WordPress/PHP"
];
learning.category = "Front End Development";
learning.topicImportance = "High";

console.log(learning);

//Change & Remove Values
learning["topic"] = "JavaScript";
learning.learningGoals.splice(1, 1);
//"Learn JS React" was removed from the array

//Display Text & Remove Class
topicElement.innerText = `✔️ I'm learning ${learning.topic}`;
topicElement.classList.remove("hide");
countElement.innerText = `✔️ I have ${learning.learningGoals.length} learning goals.`;
countElement.classList.remove("hide");
