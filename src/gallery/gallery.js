import React from 'react';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";

// images
import image1 from './galleryImages/bbclass2016.JPG';
import image2 from './galleryImages/boardbreak.JPG';
import image3 from './galleryImages/brickbreak-1.JPG';
import image4 from './galleryImages/brickbreak-2.JPG';
import image5 from './galleryImages/brickbreak-3.JPG';
import image6 from './galleryImages/duosidekick.JPG';
import image7 from './galleryImages/fightingstance.jpg';
import image8 from './galleryImages/forms2015-1.JPG';
import image9 from './galleryImages/forms2015-2.JPG';
import image10 from './galleryImages/forms2015-3.JPG';
import image11 from './galleryImages/forms2015-4.jpg';
import image12 from './galleryImages/group.jpg';
import image13 from './galleryImages/highsidekick-1.jpg';
import image14 from './galleryImages/highsidekick-2.JPG';
import image15 from './galleryImages/instructor1.jpg';
import image16 from './galleryImages/instructor4.jpg';
import image17 from './galleryImages/jumpfrontkick.jpg';
import image18 from './galleryImages/profiles.JPG';
import image19 from './galleryImages/sparring2015-1.JPG';
import image20 from './galleryImages/sparring2015-2.JPG';
import image21 from './galleryImages/sparring2015-3.JPG';
import image22 from './galleryImages/sparring2015-4.JPG';
import image23 from './galleryImages/sparring2015-5.JPG';
import image24 from './galleryImages/zheadbreak.JPG';
import image25 from './galleryImages/zleejonlogo2.JPG';
import image26 from './galleryImages/zleejonlogo5.JPG';

class Gallery extends React.Component {
	constructor (props) {
        super(props);
    }

	render() {
        const images = [
            {original: image1},
            {original: image2},
            {original: image3},
            {original: image4},
            {original: image5},
            {original: image6},
            {original: image7},
            {original: image8},
            {original: image9},
            {original: image10},
            {original: image11},
            {original: image12},
            {original: image13},
            {original: image14},
            {original: image15},
            {original: image16},
            {original: image17},
            {original: image18},
            {original: image19},
            {original: image20},
            {original: image21},
            {original: image22},
            {original: image23},
            {original: image24},
            {original: image25},
            {original: image26}
        ]

		return (
			<div className="gallery-content">
                <ImageGallery
                    items={images}
                    lazyLoad
                    showThumbnails="false"
                    className="gallery-carousel"
                />
            </div>
		);
	}
}

export default Gallery;