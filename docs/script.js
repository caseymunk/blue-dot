// This file contains the js code to manipulate the interactive visual

// Define properties for each image with updated paths
var imageProperties = {
    'webpage/images/image1.png': { width: 1254, height: 706, left: 0, top: 0 },
    'webpage/images/image2.png': { width: 1254, height: 706, left: 0, top: 0 },
    'webpage/images/image3.png': { width: 1254, height: 706, left: 0, top: 0 }
};

// Store references to image elements
var imageElements = {};

document.addEventListener('keydown', function(event) {
    var key = event.key;

    // Toggle visibility based on the pressed key (1, 2, 3)
    if (key === '1' || key === '2' || key === '3') {
        var imagePath = 'webpage/images/image' + key + '.png';
        toggleImageVisibility(imagePath);
    }
});

function toggleImageVisibility(imagePath) {
    var background = document.getElementById('background');
    var imgElement = imageElements[imagePath];

    // Check if the image is already visible
    if (imgElement) {
        background.removeChild(imgElement);
        delete imageElements[imagePath];
    } else {
        // Create a new image element
        var img = new Image();
        img.src = imagePath;
        img.style.position = 'absolute';
        img.style.width = imageProperties[imagePath].width + 'px';
        img.style.height = imageProperties[imagePath].height + 'px';
        img.style.left = imageProperties[imagePath].left + 'px';
        img.style.top = imageProperties[imagePath].top + 'px';
        img.style.zIndex = '1'; // Set z-index to 1 for visible images

        // Append the new image
        background.appendChild(img);

        // Update the imageElements object
        imageElements[imagePath] = img;
    }
}
