import dotenv from 'dotenv'
//jwt
import jwt from 'jsonwebtoken'
//type
type ILogin = {
    email:string,
    password:string
}


dotenv.config()

export function verifyJWT(token:string):any {
  try {
    const decoded = jwt.verify(token, 'your_secret_key') as any;
    return decoded.userId;
  } catch (error) {
    // Token is invalid or expired
    throw new Error('Invalid token');
  }
}


// Generate JWT
export function generateJWT(userDetails:ILogin):string {
  const payload = {
    email:userDetails.email,
    password:userDetails.password
  };

  const token = jwt.sign(payload,process.env.your_secret_key as string, { expiresIn: '1h' });
  return token;
}
