type UserType<T> ={
    firstName: string;
    lastName: string;
    someField: T;
}
const createUser = (lastName: string, firstName: string): UserType<number> => {
    return {firstName: firstName, lastName: lastName, someField: 12}
}

const user = createUser('Ivanov', 'Ivan')
console.log(user)

