function promotion(année) {
    var image;
    if (année == 2023) {
                    image = "promotion 2023.png";
                } else if (année == 2022) {
                    image = "promotion 2022.png";
                } else if (année == 2021) {
                    image = "promotion 2021.png";
                }
                document.getElementById('monImage').src = image;
            }