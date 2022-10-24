import KonyvModel from "../model/KonyvModel.js";
import KonyvekAdminView from "../view/admin/KonyvekAdminView.js";
import KonyvekPublicView from "../view/public/KonyvekPublicView.js";
class AdminController {
    constructor() {
        const konyvmodel = new KonyvModel();
        this.vegpont = "http://localhost:3000/konyv";
        $("#admin").on("click", () => {
            konyvmodel.adatBe(
                "http://localhost:3000/konyv",
                this.konyvAdminAdatok
            );
        });
        $("#public").on("click", () => {
            konyvmodel.adatBe(
                "http://localhost:3000/konyv",
                this.konyvPublicAdatok
            );
        });

        $(window).on("modosit", (event) => {
            console.log(event.detail);
             konyvmodel.adatModosit(this.vegpont,event.detail);
        });
        $(window).on("torol", (event) => {
            konyvmodel.adatTorol(this.vegpont, event.detail);
        });
        $(window).on("veszem", (event) => {
            konyvmodel.konyvVesz(this.vegpont, event.detail);
        });
    }

    konyvAdminAdatok(tomb) {
        new KonyvekAdminView(tomb, $("main"));
    }
    konyvPublicAdatok(tomb) {
        new KonyvekPublicView(tomb, $("main"));
    }
}
export default AdminController;
