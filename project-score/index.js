let homeScore = 0;
let guestScore = 0;
let homeEle = document.getElementById("home-score");
let guestEle = document.getElementById("guest-score");
homeEle.textContent = homeScore;
guestEle.textContent = guestScore;

function add(points, isGuest){
    if(isGuest){
        guestScore += points;
        guestEle.textContent = guestScore;
    } else {
        homeScore += points;
        homeEle.textContent = homeScore;
    }
}