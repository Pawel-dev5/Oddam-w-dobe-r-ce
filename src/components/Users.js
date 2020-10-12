export default {
    login: data => {
      const { username, password } = data;
      return new Promise((resolve, reject) => {
        if (username === "coderslab@.pl" && password === "qwerty") {
          resolve(
            // username,
            // name: "Jan",
            // surname: "Kowalski",
            // lastLogin: new Date("04/08/2019 13:20:22")
            true
          );
        } else {
          reject("Hasło lub login są nieprawidłowe!");
        }
      });
    }
  };