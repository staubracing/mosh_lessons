// Switch and case:  

// one way of doing If and else - can be accomplished with IF and else.  Sometimes can be easier adn cleaner to do if else


let role = 'guest'

switch (role) {
    case 'guest':
        console.log('guest User');
        break;

    case 'moderator':
        console,log('Moderator User');
        break;

    default:
        console.log('Unknown User');
}

// Same thing as if else:

if (role === 'guest') console.log("Guest User");
    else if (role === 'moderator') console.log('Moderator User');
        else console.log('Unknown User');
