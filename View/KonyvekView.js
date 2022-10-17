import KonyvView from "./KonyvView.js";

class KonyvekView {
    constructor(tomb, szuloElem) {
        szuloElem.append(`<table><thead><tr>
        <td>ID</td>
        <td>Cím</td>
        <td>Szerző</td>
        <td>Ár</td>
        <td></td>
        <td></td>
        </tr></thead></table>`);
        this.tablaElem = szuloElem.children("table");
        //console.log(this.tablaElem)

        tomb.forEach((konyv) => {
            const konyvem = new KonyvView(konyv, this.tablaElem);
        });
    }
}

export default KonyvekView;
