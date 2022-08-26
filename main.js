// ┌─────────────────┐
// │ Your code here! │	
// └─────────────────┘

//1
function isAdmin(user) {
    if (user.userRole === 'ADMIN') {
        return true;
    } else  {
        return false;
    }
}
//2
function getEmail(user) {

    return user.firstName.toLowerCase() + "." + user.lastName.toLowerCase() + "@codeimmersives.com"
    
}
//3
function getPlaylistLength(playlist) {
    return playlist.songs.length;
}
//4
function getHardestHomework(homework) {
    
    let empty = ''

    if (homework.length === 0) {
        return empty
    }
    

    let lowestName = homework[0].name
    let lowest = homework[0].averageScore

    for (let i = 0; i < homework.length; i++) {
        
        
        if (homework[i].averageScore < lowest) {
            lowest = homework[i].averageScore
            lowestName = homework[i].name
            
        }
        
    
    }
    return lowestName
    
}
//5
function createPhonebook (namesArr, phoneNumbersArr, phonebook = {}) {
    


    for (let i = 0; i < namesArr.length; i++) {
        
        let names = namesArr[i]
        let phoneNumbers = phoneNumbersArr[i]
        phonebook[names] = phoneNumbers

        
    }


    return phonebook;
}


// ┌─────────────────────────────────────┐
// │ Do not modify code below this line. │
// └─────────────────────────────────────┘

if (typeof isAdmin === 'undefined') {
    isAdmin = undefined;
}
if (typeof getEmail === 'undefined') {
    getEmail = undefined;
}
if (typeof getPlaylistLength === 'undefined') {
    getPlaylistLength = undefined;
}
if (typeof getHardestHomework === 'undefined') {
    getHardestHomework = undefined;
}
if (typeof createPhonebook === 'undefined') {
    createPhonebook = undefined;
}

module.exports = {
    isAdmin,
    getEmail,
    getPlaylistLength,
    getHardestHomework,
    createPhonebook
};