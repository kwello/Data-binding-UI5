sap.ui.require([
    "sap/m/Text",
    "sap/ui/model/json/JSONModel"
],function (Text, JSONModel){
    "use strict"

    //attach an anonymous fucntion to the SAPUI5 'init' event
    sap.ui.getCore().attachInit(function (){

        //create a JSON model from an object literal
        var oModel = new JSONModel({
            greetingText: "Hi. my name is ...Tashu"
        });

        //Assign the model object to the SAPUI5 core
        sap.ui.getCore().setModel(oModel);
        //this.getView().setModel(oModel)

        //create a text ui element that displays a hardcoded text script
        new Text({
            text: "Hi. my name is ...Praveen"
        }).placeAt("content");
    })
    //this.getView().getModel()
})