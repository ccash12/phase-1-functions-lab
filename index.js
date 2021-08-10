let street; 

const distanceFromHqInBlocks = function(street) {
    return Math.abs (42 - street)
}

function distanceFromHqInFeet(street) {
    return distanceFromHqInBlocks(street) * 264
}

let start; 
let destination;
let cost;

const distanceTravelledInFeet = function(start,destination) {
    return Math.abs((start-destination)*264)
}

function calculatesFarePrice (start,destination) {
    if (distanceTravelledInFeet(start,destination) < 400 ) {
        return cost = 0;
    } else if (distanceTravelledInFeet(start,destination) > 400 && distanceTravelledInFeet (start,destination) < 2000) {
        return cost = .02 * (distanceTravelledInFeet(start,destination) - 400);
    } else if (distanceTravelledInFeet(start,destination) > 2000 && distanceTravelledInFeet(start,destination) < 2500) {
        return cost = 25
    } else if (distanceTravelledInFeet(start,destination) > 2500) {
        return 'cannot travel that far';
    }
}