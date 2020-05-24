chrome.extension.sendMessage({}, function (response) {
    var readyStateCheckInterval = setInterval(function () {
        // wait for the page to load
        if (document.readyState === "complete") {
            clearInterval(readyStateCheckInterval);
            console.log('%c [colab-alive]: extension ready !', 'color:DodgerBlue');
            console.log('%c [colab-alive]: clicking the connect button every 60s', 'color:DodgerBlue');
            setInterval(ClickConnect, 60000);
        }
    }, 10);
});

// credits to https://stackoverflow.com/a/58275370/13156539
// selects the colab-connect-button and clicks it every 60 s
function ClickConnect() {
    console.log('%c [colab-alive]: connect click - start', 'color:DodgerBlue');
    document.querySelector("#top-toolbar > colab-connect-button").shadowRoot.querySelector("#connect").click();
    console.log('%c [colab-alive]: connect click - end', 'color: DodgerBlue');
}

// TODO: add a stop auto-connect option
// var startClickConnect = function startClickConnect(){
//     var clickConnect = function clickConnect(){
//         console.log("Connnect Clicked - Start");
//         document.querySelector("#top-toolbar > colab-connect-button").shadowRoot.querySelector("#connect").click();
//         console.log("Connnect Clicked - End"); 
//     };

//     var intervalId = setInterval(clickConnect, 60000);

//     var stopClickConnectHandler = function stopClickConnect() {
//         console.log("Connnect Clicked Stopped - Start");
//         clearInterval(intervalId);
//         console.log("Connnect Clicked Stopped - End");
//     };

//     return stopClickConnectHandler;
// };

// var stopClickConnect = startClickConnect();