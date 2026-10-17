
let nextId = 1;

function createUser({ name, age, ...otherProperties }) {
    const trimmedName = name.trim();

    if (trimmedName === "") {
        throw new Error("Name is required");
    }

    if (age === "" || age === null || age === undefined) {
        throw new Error("Age is required");
    }

    const numericAge = Number(age);

    if (
        !Number.isInteger(numericAge) ||
        numericAge < 0 ||
        numericAge > 120
    ) {
        throw new Error("Invalid age");
    }

    const user = {
        ...otherProperties,
        id: nextId,
        name: trimmedName,
        age: numericAge
    };

    nextId++;

    return user;
}