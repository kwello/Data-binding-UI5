sap.ui.require([
    "sap/m/Text",
    "sap/ui/model/json/JSONModel",
    "sap/ui/core/mvc/XMLView",
    "sap/ui/model/BindingMode",
    "sap/ui/model/resource/ResourceModel"
],function (Text, JSONModel, XMLView,BindingMode,ResourceModel){
    "use strict"

    //attach an anonymous fucntion to the SAPUI5 'init' event
    sap.ui.getCore().attachInit(function (){

        //create a JSON model from an object literal
        var oModel = new JSONModel({
            firstName: "Tanjiro",
            lastName: "Hawk",
            enabled: true,
            address : {
                street: "Lane A",
                city: "Varanasi",
                zip: "211269",
                country: "India"
            },
            panelHeaderText: "Data binding basics",
            salesAmount: 12345.6789,
            currencyCode: "EUR"
        });

        var oResourceModel = new ResourceModel({
            bundleName: "sap.ui.demo.db.i18n.i18n",
            supportedLocales: ["","de"],
            fallbackLocale: ""
        })

        sap.ui.getCore().setModel(oResourceModel, "i18n");

        oModel.setDefaultBindingMode(BindingMode.OneWay);


        //Assign the model object to the SAPUI5 core
        sap.ui.getCore().setModel(oModel);
        //this.getView().setModel(oModel)

        //display the XML view called App
        new XMLView({
            viewName: "sap.ui.demo.db.view.App"
        }).placeAt("content");
    })
    //this.getView().getModel()
})