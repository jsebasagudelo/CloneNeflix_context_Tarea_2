import firebase  from  'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyDy0si8pWSLGWJZ4JvVqqhea_ZCmBkw_pQ",
    authDomain: "netflix-clone-2022-1481e.firebaseapp.com",
    projectId: "netflix-clone-2022-1481e",
    storageBucket: "netflix-clone-2022-1481e.appspot.com",
    messagingSenderId: "352677560912",
    appId: "1:352677560912:web:f41b90155a04c0805b4755"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const auth=firebase.auth();
  export  {auth}


