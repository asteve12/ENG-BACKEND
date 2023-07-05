//types
import { ISignUp ,ILogin} from "./authenticate.type";
//prisma
import PrismaClient from "../../model";

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

    return res;
  } catch (e: any) {
    if (e.message.includes("Unique constraint failed")) {
      throw new Error("User  Already Exist");
      return;
    }
    throw new Error(e.message);
  }
};
