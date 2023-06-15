import { genSalt, hash, compare } from 'bcrypt';

export async function encryptPassword(password) {
    const salt = await genSalt(10);
    return await hash(password, salt);
}

export async function comparePasswords(password, hashedPassword) {
    return await compare(password, hashedPassword);
}
