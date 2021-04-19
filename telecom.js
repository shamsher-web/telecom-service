var image=[];
var time=1000;
var i=0;

image[0]='telecom/jabra.jpeg';
image[1]='telecom/headphone.jpeg';
image[2]='telecom/headphone2.jpeg';
image[3]='telecom/adapter.jpg';
image[4]='telecom/type-b.svg';
image[5]='telecom/philips.jpeg';


    function changeImage() {
    document.slide.src = image[i];

    if (i < image.length - 1) {

        i++;

    } else {

        i = 0;

    }


    setTimeout("changeImage()", time);
}

window.onload=changeImage;

