$(document).ready(function () {
  // Array of image URLs
  const imageUrls = [
    'https://api.wandb.ai/files/ayush-thakur/images/projects/103390/b2d285f2.png',
    'https://api.wandb.ai/files/ayush-thakur/images/projects/103390/b2d285f2.png',
    // Add URLs for the remaining images
  ];

  // Function to resize and add icon to each image
  function resizeImages() {
    const containerWidth = $('.container').width();

    imageUrls.forEach(function (imageUrl) {
      const img = new Image();
      img.src = imageUrl;

      img.onload = function () {
        const imgWidth = img.width;
        const imgHeight = img.height;

        let newWidth, newHeight;

        // Calculate new dimensions without stretching
        if (imgWidth > imgHeight) {
          newWidth = containerWidth;
          newHeight = (containerWidth / imgWidth) * imgHeight;
        } else {
          newHeight = containerWidth;
          newWidth = (containerWidth / imgHeight) * imgWidth;
        }

        // Create image container
        const imgContainer = $('<div class="col-md-4 mb-4 img-container"></div>').css({
          width: containerWidth,
          height: newHeight,
        });

        // Create image element
        const resizedImg = $('<img class="img-fluid" />').attr({
          src: imageUrl,
          alt: 'Resized Image',
        }).css({
          width: newWidth,
          height: newHeight,
        });

        // Create icon element
        const icon = $('<img class="icon" src="icon.png" alt="Icon" />');

        // Append elements to the container
        imgContainer.append(resizedImg).append(icon);

        // Append container to the row
        $('.row').append(imgContainer);
      };
    });
  }

  // Call the function to resize and add icon to each image
  resizeImages();
});
