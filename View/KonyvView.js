class KonyvView {
    constructor(elem, szuloElem) {
        // console.log("KonyvView");
        //console.log(elem);
        szuloElem.append(`<tr>
                            <td>${elem.id}</td>
                            <td>${elem.cim}</td>
                            <td>${elem.szerzo}</td>
                            <td>${elem.ar}</td>
                            <td><button id="T${elem.id}">Töröl</button></td>
                            <td><button>Módosít</button></td>
                        </tr>`);
        this.adat = elem;
        this.sorElem = szuloElem.children("tr:last-child");
        this.torolElem = szuloElem
            .children("tr:last-child")
            .children("td:nth-child(5)")
            .children("button");
        this.torolElem = $(`#T${elem.id}`);
        this.modositElem = szuloElem
            .children("tr:last-child")
            .children("td:last-child")
            .children("button");
        // console.log(this.elem)
        //console.log(this.torolElem);
        // console.log(this.modositElem)

        this.torolElem.on("click", () => {
            console.log("törlés");
            this.kattintasTrigger()
        });
    }
    kattintasTrigger(){
        const esemeny=new CustomEvent("torol",{detail:this.adat.id})
        window.dispatchEvent(esemeny);
    }
}

export default KonyvView;
