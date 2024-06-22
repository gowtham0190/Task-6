// src/components/ImageGallery.js
import React, { useState } from 'react';
import ImageItem from './ImageItem';
import Modal from './Modal';
import './ImageGallery.css';

const images = [
    "https://i.ytimg.com/vi/dpqelE_9OgA/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLA8NbgWGJpqPExUy7wgaIsfulCUOg",
    "https://c4.wallpaperflare.com/wallpaper/591/844/1024/spider-man-spider-video-games-superhero-wallpaper-preview.jpg",
    "https://c4.wallpaperflare.com/wallpaper/764/505/66/baby-groot-4k-hd-superheroes-wallpaper-preview.jpg",
    "https://w0.peakpx.com/wallpaper/103/381/HD-wallpaper-2021-the-batman-batman.jpg",
    "https://static.vecteezy.com/system/resources/thumbnails/036/135/738/small_2x/ai-generated-colored-water-drops-on-abstract-background-water-drops-on-colorful-background-colored-wallpaper-ultra-hd-colorful-wallpaper-background-with-colored-bubbles-photo.jpg",
    'https://img.freepik.com/free-photo/autumn-leaf-falling-revealing-intricate-leaf-vein-generated-by-ai_188544-9869.jpg',
    "https://cdn.pixabay.com/photo/2019/03/05/06/37/insect-4035660_1280.jpg",
    "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg",
    "https://c4.wallpaperflare.com/wallpaper/375/342/535/thor-chris-hemsworth-men-mjolnir-wallpaper-thumb.jpg",
    "https://ideas.ted.com/wp-content/uploads/sites/3/2020/05/final_animals-homeschooling_credit-alamy.jpg",
    "https://thumbs.dreamstime.com/b/cute-cuddly-fuzzy-baby-animals-spring-lambs-sheep-siblings-snugg-snuggling-up-together-green-grass-look-like-smiling-109210933.jpg",
    "https://t4.ftcdn.net/jpg/06/00/90/17/360_F_600901739_93i8HBQhHjqXyvNBrHWEiJOveQYdMe6m.jpg",

   // Add more image URLs here
];

const ImageGallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    const openModal = (image) => {
        setSelectedImage(image);
    };

    const closeModal = () => {
        setSelectedImage(null);
    };

    const nextImage = () => {
        const currentIndex = images.indexOf(selectedImage);
        const nextIndex = (currentIndex + 1) % images.length;
        setSelectedImage(images[nextIndex]);
    };

    const prevImage = () => {
        const currentIndex = images.indexOf(selectedImage);
        const prevIndex = (currentIndex - 1 + images.length) % images.length;
        setSelectedImage(images[prevIndex]);
    };

    return (
        <div className="image-gallery">
            {images.map((image, index) => (
                <ImageItem key={index} image={image} openModal={openModal} />
            ))}
            {selectedImage && (
                <Modal
                    image={selectedImage}
                    closeModal={closeModal}
                    nextImage={nextImage}
                    prevImage={prevImage}
                />
            )}
        </div>
    );
};

export default ImageGallery;
