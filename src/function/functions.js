var baseUrl = "agrotivo.herokuapp.com",
  // loginurl = `https://${baseUrl}/auth/user/login`,
  signupurl = `https://${baseUrl}/auth/user`;

export function formatPrice(sentPrice) {

  let newPrice = "";

  if(sentPrice){

    const price = sentPrice?.toString();
    const priceArray = price?.split("");
  
    if (!priceArray) return;
  
    for (var i = 0; i < priceArray?.length; i++) {
      if (priceArray?.length % 3 !== 0) {
        var remainder = priceArray?.length % 3;
  
        if (i <= remainder - 1) {
          newPrice += priceArray[i];
        } else {
          if (i === remainder) {
            newPrice += `,${priceArray[i]}`;
          } else {
            if (i !== 0 && (i - remainder) % 3 === 0) {
              newPrice += `,${priceArray[i]}`;
            } else {
              newPrice += priceArray[i];
            }
          }
        }
      } else {
        if (i !== 0 && i % 3 === 0) {
          newPrice += `,${priceArray[i]}`;
        } else {
          newPrice += priceArray[i];
        }
      }
    }
  }else{
    newPrice = "0";
  }
  

  return newPrice;
} //done

export function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex !== 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }

  return array;
}

export function splitName(name) {

  let newName = "";
  if(name !== undefined){
    
    const nameArray = name?.split(" ");
  
    // if (!newName) return;
  
    for (var i = 0; i < nameArray?.length; i++) {

      if (i < 1) {

        newName += `${nameArray[i].slice(0, 1).toUpperCase()}${nameArray[i].slice(
          1
        )}`;

      } else {

        newName += ` ${nameArray[i].slice(0, 1).toUpperCase()}${nameArray[
          i
        ].slice(1)}`;
        
      }
    }

  }

  return newName;
}

export function formatDate(date) {

  var month = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    dateFormat = "";

    if(date !== undefined){

      var presentDate = new Date(date);
  
      dateFormat =
        presentDate.getDate() +
        " " +
        month[presentDate.getMonth()] +
        " " +
        presentDate.getFullYear(); /* `${presentDate.getDate()} ${month[presentDate.getMonth()]} ${presentDate.getFullYear()}` */
    // dateFormat = "";
    }


  return dateFormat;
  
}

export function checkUserLoginStatus(res) {
  return res(true, "user is logged in");
  //   if (localStorage.getItem("agroUser")) {
  //     var details = JSON.parse(localStorage.getItem("agroUser"));

  //     if (
  //       details.id &&
  //       details.id !== "" &&
  //       details.email &&
  //       details.email !== "" &&
  //       details.auth &&
  //       details.auth !== ""
  //     ) {
  //       //code to check the db
  //       // fetch(loginurl, {
  //       //     method: "GET",
  //       //     headers: {
  //       //         "Content-Type":"application/json"
  //       //     },
  //       //     body: localStorage.getItem("agroUser")

  //       // })
  //       if (
  //         (details.id === 1 || details.id === "1") &&
  //         details.email === "user" &&
  //         details.auth === "At5jbcybuef889Bfe"
  //       ) {
  //         res(true, "loggedin");
  //       } else {
  //         res(false, "not-loggedin");
  //       }
  //     } else {
  //       res(false, "not-loggedin");
  //     }
  //   } else {
  //     res(false, "not-loggedin");
  //   }
} //half done... remaining checking from db

export function logoutUser(res) {
  if (localStorage.getItem("agroUser")) {
    localStorage.removeItem("agroUser");

    if (
      localStorage.getItem("agroUser") === undefined ||
      localStorage.getItem("agroUser") === null
    ) {
      res(true);
    } else {
      res(false);
    }
  }
}

// function addLoginStatus(details){

//     if(typeof(details) === "object" && details !== null){

//         if(details.userEmail && details.userEmail !== "" && details.jwt && details.jwt && details.userId && details.userId !== ""){

//             var loginDetails = {
//                 id : details.userId,
//                 email: details.userEmail,
//                 auth: details.jwt
//             },
//             loginStringified = JSON.stringify(loginDetails)

//             if(localStorage.setItem("agroUser", loginStringified)){

//                 return true;
//             }else{

//                 return false;

//             }

//         }else{
//             return false;
//         }
//     }else{
//         return false;
//     }

// }

export function checkUserRegistration(details, res) {
  if (typeof details === "object" && details !== null) {
    if (
      details.userEmail &&
      details.userEmail !== "" &&
      details.userPassword &&
      details.userPassword !== ""
    ) {
      //code to check db for details

      if (details.userEmail === "user" && details.userPassword === "password") {
        var loginDetails = {
            id: 1,
            email: details.userEmail,
            auth: "At5jbcybuef889Bfe",
          },
          loginStringified = JSON.stringify(loginDetails);

        localStorage.setItem("agroUser", loginStringified);

        if (
          localStorage.getItem("agroUser") !== undefined ||
          localStorage.getItem("agroUser") !== null
        ) {
          var savedDetails = JSON.parse(localStorage.getItem("agroUser"));

          if (
            savedDetails.id === loginDetails.id &&
            savedDetails.email === loginDetails.email &&
            savedDetails.auth === loginDetails.auth
          ) {
            res(true, "loggedin");
          } else {
            res(false, "not-same");
          }
        } else {
          res(false, "couldnt-save");
        }
      } else {
        res(false, "credentials-not-found");
      }
    } else {
      // return false;
      res(false, "wrong-credentials");
    }
  } else {
    res(false, "non-object");
  }
}

export function getTransaction(userId, res) {
  //code to fetch transaction for a user

  var details = [
    {
      transactionType: "",
    },
  ];

  res(true, details);
}

export function getInvestment(userId, res) {
  //code to fetch investment for a user

  var details = [
    {
      investmentName: "",
    },
  ];

  res(true, details);
}

export function createUser(details, res) {
  if (typeof details === "object" && details !== null) {
    /* var sentDetails = {
            name: details.name,
            email: details.email,
            password: details.password,
            phone_number: details.mobileNumber,
            image: "https://www.agrotivo.heroku.app/fffjsnfin.png"
        }, */
    var sentDetails = {
        name: "Duyil",
        email: "isaacseun63@gmail.com",
        password: "pfhibvybusbb",
        phone_number: 2349036634645,
      },
      readyDetails = JSON.stringify(sentDetails);

    fetch(signupurl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: readyDetails,
    })
      .then((response) => response.json)
      .then((data) => {
        res(true, data);
      })
      .catch((err) => {
        res(false, err);
      });
  } else {
    res(false, "non-object-prop-sent");
  }
}
