import { Response, Request } from "express";
//service
import * as service from "./authenticate.service";

export const Signup = async (req: Request, res: Response) => {
  try {
    const resObject = await service.signUpUser(req?.body);
    return res.status(200).json({ message: "success", data: resObject });
  } catch (e:any) {
    return res.status(400).json({ message: e.message, data: {} });
  }
};

export const Login = async (req: Request, res: Response) => {
  try {
    const resObject = await service.LogUserIn(req?.body);
    return res.status(200).json({ message: "success", data: resObject });
  } catch (e:any) {
    return res.status(400).json({ message: e.message, data: {} });
  }
};





export default {
  Signup,
  Login
};
