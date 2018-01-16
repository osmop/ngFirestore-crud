// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  // firebaseConfig : {
  //            apiKey:"your api key",
  //            authDomain:"your domain",
  //            databaseURL:"your database url",
  //            projectId:"your project id",
  //            storageBucket:"your storage bucket",
  //            messagingSenderId:"your messaging sender id"

  firebaseConfig : {
    apiKey: "AIzaSyDIvNPR-vyRixAeb7izxQ9Wi8ukQBC9WWo",
    authDomain: "osmofirestore.firebaseapp.com",
    databaseURL: "https://osmofirestore.firebaseio.com",
    projectId:"osmofirestore",
    storageBucket: "osmofirestore.appspot.com",
    messagingSenderId: "38598776836"
  }
};

// var config = {
//   apiKey: "AIzaSyDIvNPR-vyRixAeb7izxQ9Wi8ukQBC9WWo",
//   authDomain: "osmofirestore.firebaseapp.com",
//   databaseURL: "https://osmofirestore.firebaseio.com",
//   projectId: "osmofirestore",
//   storageBucket: "osmofirestore.appspot.com",
//   messagingSenderId: "38598776836"
// };
