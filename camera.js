document.addEventListener("DOMContentLoaded", function() {
    var video = document.getElementById("videoElement");

    // Check for camera support
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        // Request camera permission
        navigator.mediaDevices.getUserMedia({ video: true })
            .then(function(stream) {
                // Display the camera stream
                video.srcObject = stream;
            })
            .catch(function(error) {
                console.error("Error accessing the camera: ", error);
            });
    } else {
        console.error("Camera not supported on this device");
    }
});
