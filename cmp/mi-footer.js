class MiFooter extends HTMLElement {
  connectedCallback(){
  this.innerHTML = /* hmtl */
              `Copyright &copy; 2020 Mejia Barona Jesus Emmanuel. `;
              }
              }
customElements.define("mi-footer", MiFooter);
