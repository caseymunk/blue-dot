// Define properties for each image
var imageProperties = {
    'images/image1.png': { width: 1254, height: 706, left: 0, top: 0 },
    'images/image2.png': { width: 1254, height: 706, left: 0, top: 0 },
    'images/image3.png': { width: 1254, height: 706, left: 0, top: 0 }
};

// Track the visibility of each image independently
var imageVisibility = {
    'images/image1.png': false,
    'images/image2.png': false,
    'images/image3.png': false
};

// Define variables for the image elements
var img1 = null;
var img2 = null;
var img3 = null;

document.addEventListener('keydown', function(event) {
    var key = event.key;

    // Toggle visibility based on the pressed key (1, 2, 3)
    if (key === '1' || key === '2' || key === '3') {
        var imagePath = 'images/image' + key + '.png';
        toggleImageVisibility(imagePath);
    }
});

function toggleImageVisibility(imagePath) {
    var background = document.getElementById('background');

    // Check if the corresponding img element already exists
    if (imagePath === 'images/image1.png' && img1) {
        background.removeChild(img1);
        img1 = null; // Reset the img1 variable
        imageVisibility[imagePath] = false;
    } else if (imagePath === 'images/image2.png' && img2) {
        background.removeChild(img2);
        img2 = null; // Reset the img2 variable
        imageVisibility[imagePath] = false;
    } else if (imagePath === 'images/image3.png' && img3) {
        background.removeChild(img3);
        img3 = null; // Reset the img3 variable
        imageVisibility[imagePath] = false;
    } else {
        // Create and append the new image based on visibility
        var img = new Image();
        img.src = imagePath;
        img.style.position = 'absolute';
        img.style.width = imageProperties[imagePath].width + 'px';
        img.style.height = imageProperties[imagePath].height + 'px';
        img.style.left = imageProperties[imagePath].left + 'px';
        img.style.top = imageProperties[imagePath].top + 'px';

        // Set z-index based on image path
        img.style.zIndex = imageVisibility[imagePath] ? '0' : '1';

        // Create a unique ID for each image dynamically
        img.id = 'image-' + imagePath.split('/').pop().split('.').shift();

        // Append the new image
        background.appendChild(img);

        // Update the corresponding img variable and visibility flag
        if (imagePath === 'images/image1.png') {
            img1 = img;
            imageVisibility[imagePath] = true;
        } else if (imagePath === 'images/image2.png') {
            img2 = img;
            imageVisibility[imagePath] = true;
        } else if (imagePath === 'images/image3.png') {
            img3 = img;
            imageVisibility[imagePath] = true;
        }
    }
}