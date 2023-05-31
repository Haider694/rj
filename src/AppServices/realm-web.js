// import * as Realm from "realm-web";
const Realm = require("realm-web");

const APP_ID = "application-0-vfxlb";

const mrRaoApp = new Realm.App({ id: APP_ID });

const credentials = Realm.Credentials.anonymous();

const login = async () => {
  const user = await mrRaoApp.logIn(credentials);
  //   console.log(user);
  //   console.log(user.id === mrRaoApp.currentUser.id);
};

login();
