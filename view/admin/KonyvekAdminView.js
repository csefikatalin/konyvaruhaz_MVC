import KonyvAdminView from "./KonyvAdminView.js";

class KonyvekAdminView {
  constructor(tomb, parent) {
    parent.html(`<table><tr>
    <td>id</td>
    <td>cim</td>
    <td>szerző</td>
    <td>ár</td>
    </tr></table>`);
    this.tabla = parent.children("table:last-child");

    tomb.forEach((konyv) => {
      new KonyvAdminView(konyv, this.tabla);
    });
  }
}
export default KonyvekAdminView;
