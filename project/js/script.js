var galleryImg = document.querySelector('.galleryImg');
var gallery = [];
gallery[0] = 'slide1.jpeg';
gallery[1] = 'slide2.jpeg';
var i = 0;

function left(){
	if(i <= 0){ 
	i = gallery.length;
	} 
	i--;
	return img();		 
}

function right(){
	if(i >= gallery.length-1) {
	i = -1;
	}
	i++;
	return img();			 
}

function img(){
	return galleryImg.setAttribute('src', "images/"+gallery[i]);
	
}