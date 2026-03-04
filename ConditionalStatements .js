function launchbrowser(browserName){
    if(browserName=="chrome"){
        console.log("launching chrome browser");
    }   else if(browsername=="firefox"){
        console.log("launching firefox browser");
    }
}
launchbrowser("chrome");
function runtest(testType){
switch(testType){
    case "smoke":
        console.log("running smoke test");
        break;
    case "sanity":
        console.log("running sanity test");
        break;
    case "regression":
        console.log("running regression test");
        break;
    default:
        console.log("running smoke test");
}
}runtest("sanity");