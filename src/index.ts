import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
async function insertUserData(username :string, password:string , firstname:string , lastname:string
 ){ 
   const user = await prisma.user.create({
        data : {
         username : username,
         password : password, 
         firstname :firstname,
         lastname:lastname
        }
    });
    console.log(user);
}
async function findUserUsingUserName(username : string) {
    const res = await prisma.user.findUnique({
        where : {
            username : username
        }
    })
    console.log(res)
}
async function updateingFirstName(username : string , updateFirstName : string) {
    const res = await prisma.user.update({
        where : {
            username : username
        },
        data:{
            firstname : updateFirstName
        }
    })
    console.log(res);
}
async function inserTodos(title : string , description : string , user_id : number) { 
    const res = await prisma.todo.create({
        data : {
            title : title,
            description : description,
            user_id : user_id
        }
    })
    console.log(res) ;
}
// insertUserData("bharat007" , "123" , "bharat" , "sharma");
// findUserUsingUserName("bharat00")
// updateingFirstName("bharat007" , "anusri")
inserTodos("going to gym" , "need to do hard work" , 1)