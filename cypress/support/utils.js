import { faker } from '@faker-js/faker';

const randomName = () => {
    return faker.person.fullName();
}

function randomEmail () {
    return faker.internet.email();
}

const randomUserName = () => {
    return faker.person.firstName();
}

const randomPassword = () => {
    return  faker.number.int({ min: 10000000, max: 99999999 });
}

module.exports = {
    randomName, randomEmail, randomUserName, randomPassword
};