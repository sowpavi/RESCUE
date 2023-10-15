const firebaseConfig = {
    apiKey: "AIzaSyAE7TDIX7s2RpDo5czBgQkhdbDJVQTCBik",
    authDomain: "rescue-fcd07.firebaseapp.com",
    databaseURL: "https://rescue-fcd07-default-rtdb.firebaseio.com",
    projectId: "rescue-fcd07",
    storageBucket: "rescue-fcd07.appspot.com",
    messagingSenderId: "89782424550",
    appId: "1:89782424550:web:759046edf4eef66e697c27",
    measurementId: "G-7HH2P8Q657"
  };
  
  // initialize firebase
  firebase.initializeApp(firebaseConfig);
  
  // reference your database
  var contactFormDB = firebase.database().ref("rescue");
  
  document.getElementById("contactForm").addEventListener("submit", submitForm);
  
  function submitForm(e) {
    e.preventDefault();
  
    var name = getElementVal("name");
    var emailid = getElementVal("emailid");
    var msgContent = getElementVal("msgContent");
  
    saveMessages(name, emailid, msgContent);
  
    //   enable alert
    document.querySelector(".alert").style.display = "block";
  
    //   remove the alert
    setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
    }, 3000);
  
    //   reset the form
    document.getElementById("contactForm").reset();
  }
  
  const saveMessages = (name, emailid, msgContent) => {
    var newContactForm = contactFormDB.push();
  
    newContactForm.set({
      name: name,
      emailid: emailid,
      msgContent: msgContent,
    });
  };
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };
 