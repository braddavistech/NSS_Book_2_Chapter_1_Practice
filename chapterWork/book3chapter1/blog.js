var testPull = "Welcome to the Brad Davis blog.";
document.querySelector("article .article__header").innerHTML = testPull;

var pulledClass = [];
pulledClass = document.querySelectorAll("article .article__header");
for (var i =0; i < 2; i++){
  pulledClass[i].classList = "article__header important";
  console.log(pulledClass);
};

var dashedBox = document.querySelector(".dashed");
dashedBox.classList = "aside_box--dark";
console.log(dashedBox);

var footerClass = [];
footerClass = document.querySelector(".article__footer");
footerClass.classList = "article__footer goldenrod";
console.log(footerClass);
