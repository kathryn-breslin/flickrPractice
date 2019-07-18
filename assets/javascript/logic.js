var userInput = [];

function displayImages () {
    $('#addUserInput').on('click', function() {
        event.preventDefault();
        var userInput = $('#inputSearch').val().trim();
        $('#inputSearch').val('');

        var queryUrl = "http://api.flickr.com/services/rest/?method=flickr.photos.search&api_key="+ apiKey + "&tags=" + userInput + "&safe_search=1&per_page=5&format=json&nojsoncallback=?&extras=url_s"
        // Adding params for downscaled images: url_t, url_s, url_q, url_m, url_n, url_z, url_c, url_l
        $.ajax({
            url: queryUrl,
            method: "GET"
        }).then(function(response) {
            var flickrData = response.photos.photo;
            console.log(flickrData);
            // console.log(response);
            for (var i = 0; i < flickrData.length; i++) {

                var imageCard = $('<div>');
                    imageCard.addClass('individual-image-container');
                    imageCard.addClass('card');

                var newImage = $("<img src='" + flickrData[i].url_s + " '>");
                    newImage.addClass('flickr-image', 'card-image-top');
                
                var newDivContents = $('<div>');
                    newDivContents.addClass('card-body');
                
                imageCard.append(newImage);
                imageCard.append(newDivContents);

                $('#flickrDiv').append(imageCard);
            }
        })
        // console.log(userInput);
    })
}
displayImages();