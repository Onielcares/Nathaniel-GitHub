const User = { name: 'Tony', age: 23, hobbies: true}

function seeUser(user) {
    return (
        'I am ' + user.name + 
        ', I am ' + user.age + 'years Old. I do have Hobbies '+ user.hobbies
    );
};

console.log(seeUser(User));

const seeUser1 = (user) => {
    console.log (
        'I am ' + user.name + 
        ', I am ' + user.age + 'years Old. I do have Hobbies '+ user.hobbies
    );
};

seeUser1(User);