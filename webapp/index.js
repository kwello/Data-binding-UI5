sap.ui.require([
    "sap/m/Text"
],function (Text){
    "use strict"

    //attach an anonymous fucntion to the SAPUI5 'init' event
    sap.ui.getCore().attachInit(function (){
        //create a text ui element that displays a hardcoded text script
        new Text({
            text: "Hi. my name is ...Praveen"
        }).placeAt("content");
    })
    //this.getView().getModel()
})