var pageElements = {};
var pageNames = [
	"landingpage",
	"contact",
	"books",
	"features",
	"tomSawyerPage",
	"pridePrejudicePage",
	"treasureIslandPage",
	"timeMachinePage",
	"invisibleManPage"
];

function initializePageCache() {
	pageNames.forEach(function(pageName) {
		var element = document.getElementsByClassName(pageName)[0];
		if (element) {
			pageElements[pageName] = element;
		}
	});
}

function navigateToPage(targetPage) {
	pageNames.forEach(function(pageName) {
		if (pageElements[pageName]) {
			pageElements[pageName].style.display = "none";
		}
	});
	
	if (pageElements[targetPage]) {
		pageElements[targetPage].style.display = "inline";
	}
}

function getFeaturesPage() {
	navigateToPage("features");
}

function getBooksPage() {
	navigateToPage("books");
}

function getContactPage() {
	navigateToPage("contact");
}

function getTomSawyerPage() {
	navigateToPage("tomSawyerPage");
}

function getPridePrejudicePage() {
	navigateToPage("pridePrejudicePage");
}

function getTreasureIslandPage() {
	navigateToPage("treasureIslandPage");
}

function getTimeMachinePage() {
	navigateToPage("timeMachinePage");
}

function getInvisibleManPage() {
	navigateToPage("invisibleManPage");
}

initializePageCache();

document.getElementsByClassName("link")[0].addEventListener("click", getFeaturesPage);
document.getElementsByClassName("link")[1].addEventListener("click", getBooksPage);
document.getElementsByClassName("link")[2].addEventListener("click", getContactPage);

document.getElementsByClassName("book")[0].addEventListener("click", getTomSawyerPage);
document.getElementsByClassName("book")[1].addEventListener("click", getPridePrejudicePage);
document.getElementsByClassName("book")[2].addEventListener("click", getTreasureIslandPage);
document.getElementsByClassName("book")[3].addEventListener("click", getTimeMachinePage);
document.getElementsByClassName("book")[4].addEventListener("click", getInvisibleManPage);



