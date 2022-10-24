class KonyvModel {
    #konyvekTomb = [];

    constructor() {
        console.log("KonyvModel");
    }

    adatBe(vegpont, myCallBack) {
        fetch(vegpont, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((response) => response.json())
            .then((data) => {
                this.#konyvekTomb = data;
                myCallBack(this.#konyvekTomb);
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    }
    adatUj(vegpont, adat) {     
     
      fetch(vegpont, {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
          },
          body: JSON.stringify(adat),
      })
          .then((response) => response.json())
          .then((data) => {
              console.log("Új adat "+ data);
          })
          .catch((error) => {
              console.error("Error:", error);
          });
  }


    adatModosit(vegpont, adat) {
        console.log(adat);
        console.log("MÓDOSÍT " + vegpont);
        vegpont += "/" + adat.id;
        fetch(vegpont, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(adat),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log("MÓDOSÍTottam " + data.updatedAt);
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    }
    adatTorol(vegpont, adat) {
        console.log("TÖRÖLTEM: " + adat);
        vegpont += "/" + adat.id;
        console.log(vegpont);
        fetch(vegpont, {
            method: "DELETE",
        })
            .then()
            .then(() => {
                console.log("sikeres törlés");
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    }
    konyvVesz(adat) {
        console.log("Vettem: " + adat);
    }
}

export default KonyvModel;
