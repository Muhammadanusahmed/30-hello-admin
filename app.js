/* is me ju meri observation ha wo ye ha ke username admin ke barabar ha is liey if chal raha ha magar sat hi sath
admin chuke array me ha or usernames ke bhi barabar ha that means pori array ek bosre ke equal ha that is a reason
ke if ke sath else bhi chal raha ha agar elsse ko nhi chalana chahte tu tu else ku delete karna hoga*/
var usernames = ["admin", "user1", "user2", "user3", "user4"];
usernames.forEach(function (username) {
    if (username === "admin") {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log("Hello ".concat(username, ", thank you for logging in again."));
    }
});
