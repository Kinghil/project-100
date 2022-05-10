var SpeechRecognition = window.webkitSpeechRcognition;
var Content;
var recognition();

function start()
{
    recognition.start();
}

recognition.onresult = function(event) {
    console.log(event);

    Content = event.result[0][0].transcript.toLowerCase();
    console.log(Content);
    if (Content == "selfie") {
        speak();
    }
}

function speak(){
    var synth = window.speechSynthesis;
    webcam.attach(camera);

    speak_data = "Taking your next Selfie in 5 seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);

    setTimeout(function()
    {

        img_id = "selfie2";
        take_snapshot();
        speak_data = "Taking your next sellfie in 15 seconds";
        var utterThis = new SpeechSynthesisUtterance(speak_data);
        synth_speak(utterThis);

    }, 10000);

    setTimeout(function()
{
    img_id = "selfie3";
    take_snapshot();

}, 15000);

}

camera = document.getElementById("camera");
Webcam.set({
    width:500,
    height:400,
    image_format:'jpeg',
    jpeg_quality:90
});

function take_snapshot()
{

    console.log(img_id);

    Webcam.snap(function(data_uri){
        if(image)
    })
}