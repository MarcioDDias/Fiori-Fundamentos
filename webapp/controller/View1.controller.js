sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("fiori.fundamentos.controller.View1", {
        onInit() {

        },
        aoPressionarFuncionario(oEvent){
            //resgata o list item da tela
            let oListItem = oEvent.getParameters().listItem;
            //acessa o item no modelo
            let oDados = oListItem.getBindingContext("dados");
            let sCaminhoFuncionario = oDados.getPath().substring(11);

            //console.log(sCaminhoFuncionario);

            // acessar o Component.js para buscar o router
            let oComponent = this.getOwnerComponent();
            
            // acessa o componente roteador
            let oRouter = oComponent.getRouter();

            //
            oRouter.navTo("RouteView2", { idFuncionario: sCaminhoFuncionario} );

        }

    });
});