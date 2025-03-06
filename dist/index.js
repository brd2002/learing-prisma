"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
function insertUserData(username, password, firstname, lastname) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = yield prisma.user.create({
            data: {
                username: username,
                password: password,
                firstname: firstname,
                lastname: lastname
            }
        });
        console.log(user);
    });
}
function findUserUsingUserName(username) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield prisma.user.findUnique({
            where: {
                username: username
            }
        });
        console.log(res);
    });
}
function updateingFirstName(username, updateFirstName) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield prisma.user.update({
            where: {
                username: username
            },
            data: {
                firstname: updateFirstName
            }
        });
        console.log(res);
    });
}
function inserTodos(title, description, user_id) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield prisma.todo.create({
            data: {
                title: title,
                description: description,
                user_id: user_id
            }
        });
        console.log(res);
    });
}
function findTodosUsingUserid(userid) {
    return __awaiter(this, void 0, void 0, function* () {
        const res = yield prisma.todo.findMany({
            where: {
                user_id: userid
            }
        });
        console.log(res);
    });
}
// insertUserData("kisan02" , "123" , "kisan" , "sharma");
// findUserUsingUserName("bharat00")
// updateingFirstName("bharat007" , "anusri")
// inserTodos("going to school " , "need to learning more coding" , 2)
findTodosUsingUserid(2);
