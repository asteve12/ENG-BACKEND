//types
import { ISignUp ,ILogin} from "./authenticate.type";
//prisma
import PrismaClient from "../../model";
import { generateJWT } from "../../utils/jwt";






//singup user
export const signUpUser = async (LoginCredential: ISignUp): Promise<any> => {
  try {
    const res = await PrismaClient.account.create({
      data: {
        email: LoginCredential.email,
        password: LoginCredential.password,
        parentName: LoginCredential.parentName,
        childName: LoginCredential.childName,
        DOB: LoginCredential.DOB,
        childGender: LoginCredential.childGender,
      },
    });

    return res;
  } catch (e: any) {
    if (e.message.includes("Unique constraint failed")) {
      throw new Error("User  Already Exist");
      return;
    }
    throw new Error(e.message);
  }
};

//Log user in 
export const LogUserIn = async (LoginCredential:ILogin ): Promise<any> => {
  try {
    const res = await PrismaClient.account.findUnique({
      where:{
        email:LoginCredential.email,
        
      },
      
      
    })

     if (!res || res.password !== LoginCredential.password) {
    throw new Error('Invalid username or password');
  }
  


    return {...res,token:generateJWT(LoginCredential)};
  } catch (e: any) {
    
    throw new Error(e.message);
  }
};
