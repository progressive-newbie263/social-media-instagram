import { ID } from "appwrite";

import { INewUser } from "@/types";
import { account } from "./config";

//set ten props => INewUser (Interface - New User)
export async function createUserAccount(user: INewUser) {
  try {
    const newAccount = await account.create(
      ID.unique(),
      user.email,
      user.password,
      user.name
    );
    return newAccount;
  } catch (err) {
    console.log(err);
    return err;
  }
}