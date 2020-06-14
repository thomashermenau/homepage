var Profession = document.getElementById("keyFeature-profession");
var ProfessionNav = document.getElementById("keyFeature-profession-nav");
var Personal = document.getElementById("keyFeature-personal");
var PersonalNav = document.getElementById("keyFeature-personal-nav");
var Private = document.getElementById("keyFeature-private");
var PrivateNav = document.getElementById("keyFeature-private-nav");


function fillProfessional(ProfessionArray) {
    var ProfessionContent = ProfessionArray[Math.floor(Math.random() * ProfessionArray.length)];
    Profession.innerHTML = ProfessionContent;
    ProfessionNav.innerHTML = ProfessionContent;
}

function fillPersonal(PersonalArray) {
    var PersonalContent = PersonalArray[Math.floor(Math.random() * PersonalArray.length)];
    Personal.innerHTML = PersonalContent;
    PersonalNav.innerHTML = PersonalContent;
}

function fillPrivate(PrivateArray) {
    var PrivateContent = PrivateArray[Math.floor(Math.random() * PrivateArray.length)];
    Private.innerHTML = PrivateContent;
    PrivateNav.innerHTML = PrivateContent;
}

function shuffleDescription() {
    /*   var ProfessionArray = ["UX Consultant", "UX Professional", "UX Expert", "UX Something", "Web-Developer", "Frontend-Developer", "Kümmerer"];
            var PersonalArray = ["Minimalst", "Purist", "Idealist", "Skeptiker", "Prakmatiker"];
            var PrivateArray = ["Motorradfahrer", "Radfahrer", "Teamplayer", "Gamer", "Katzenbesitzter", "Fürther", "Nerd"];
            fillProfessional(ProfessionArray);
            fillPersonal(PersonalArray);
            fillPrivate(PrivateArray);
            */
}

function init() {
    shuffleDescription();
}
