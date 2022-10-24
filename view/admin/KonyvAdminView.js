import sheet from "../../css/konyvAdmin.css" assert { type: "css" };

class KonyvAdminView {
    #elem;
    constructor(elem, szuloElem) {
        this.#elem = elem;
        // console.log("KonyvView");
        // console.log(elem);
        szuloElem.append(`<tr>
        <td>${elem.id}</td>
        <td><label class="lab">${elem.cim}</label><input  type="text" value="${elem.cim}" id="elemCim" class="inp"></td>
        <td><label class="lab">${elem.szerzo}</label><input type="text" value="${elem.szerzo}" id="elemSzerzo" class="inp"></td>
        <td><label class="lab">${elem.ar}</label><input type="text" value="${elem.ar}" id="elemAr" class="inp"></td>
        
        <td>
        <input type="button" value="töröl" id="del${elem.id}" class="torol">
        <input type="button" value="szerkeszt" id="szerk${elem.id}" class="szerk">
        <input type="button" value="módosít" id="mod${elem.id}" class="modos"></td>
        </tr>`);
        this.sorElem = szuloElem.children("tbody").children("tr:last-child");
        //input elemek nevei
        this.labElemek = this.sorElem.children("td").children(".lab");
        this.inpElemek = this.sorElem.children("td").children(".inp");
        this.inpElemek.css("display", "none");

        this.inputCimElem = $("#elemCim");
        this.inputSzerzoElem = $("#elemSzerzo");
        this.inputArElem = $("#elemAr");

        this.delElem = $(`#del${elem.id}`);
        this.szerkElem = $(`#szerk${elem.id}`);
        this.modElem = $(`#mod${elem.id}`);
        this.modElem.css("display", "none");
        // console.log(this.modElem);
        this.delElem.on("click", () => {
            this.kattintasTrigger("torol");
        });
        this.szerkElem.on("click", () => {
            this.inpElemek.css("display", "inline");
            this.labElemek.css("display", "none");            
            this.modElem.css("display", "inline");
            this.szerkElem.css("display", "none");
        });
        this.modElem.on("click", () => {
            this.inpElemek.css("display", "none");
            this.labElemek.css("display", "inline");
            this.#elem.cim = this.inputCimElem.val();
            this.#elem.szerzo = this.inputSzerzoElem.val();
            this.#elem.ar = this.inputArElem.val();
            this.modElem.css("display", "none");
            this.szerkElem.css("display", "inline");
            this.kattintasTrigger("modosit");
        });
    }
    kattintasTrigger(para) {
        const esemeny = new CustomEvent(para, { detail: this.#elem });
        window.dispatchEvent(esemeny);
    }
}
export default KonyvAdminView;
