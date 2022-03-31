const videoBtn = document.getElementById('video-btn');
const imageBtn = document.getElementById('image-btn');
const allImagesBtn = document.getElementById('allimages-btn');

const videoImage = document.querySelector('.video-image');


videoBtn.addEventListener('click', showVideo);

imageBtn.addEventListener('click', showImage);

allImagesBtn.addEventListener('click', showAllImages);

function showVideo(){
    videoImage.innerHTML = `<video class="video" autoplay loop muted plays-inline>
    <source src="./wildlife.MP4" type="video/mp4">
</video>`;
}

function showImage(){
    videoImage.innerHTML = `
    <div class="image">
     <img src="./niseli.jpeg" alt="photo" />
    </div>`;
}

function showAllImages(){
    videoImage.innerHTML = `
          <div class='all-images'>
             <img class='image-1' src='./img1.jpg' alt="photo"/>
             <img class='image-2' src='./img2.jpg' alt="photo"/>
             <img class='image-3' src='./img3.jpg' alt="photo"/>
             <img class='image-4' src='./img4.jpg' alt="photo"/>
             <img class='image-5' src='./img5.jpg' alt="photo"/>
          </div>`;
}