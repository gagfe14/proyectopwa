class MiFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = /* html */
            `Copyright &copy; 2020 GARCÍA GARCÍA FERNANDO, PICHARDO VILCHIS ALFONSO<br> 
            HINOJOSA SANCHEZ SHADANNI LISSSETTE, RIVERA GONZALEZ DIEGO <br>
            VALENCIA ROSAS IVANA DANIELA, ORTEGA ASTUDILLO JULIO EDGAR <br> 
            LUNA RODRIGUEZ FATIMA DANIELA, MUÑOZ VAZQUEZ LIZBETH JOSELIN <br>
            BAUTISTA MORALES FERNANDO`;
    }
}
customElements.define("mi-footer", MiFooter);