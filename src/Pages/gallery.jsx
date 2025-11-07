// Gallery.jsx
import React, { useState, useEffect } from 'react';
import './gallery.css';
import { useNavigate } from 'react-router-dom';
import Header from './Header';

const Gallery = () => {
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState(0);
    const navigate = useNavigate();
    // Sample gallery data - replace with your actual family photos
    const galleryImages = [
        {
            id: 1,
            src: "https://res.cloudinary.com/dpo91btlc/image/upload/v1762182719/IMG_20251103_192718_k4yqcy.jpg",
            title: "Grandparents Wedding Day",
            year: "1955",
            description: "John and Mary on their wedding day at St. Peter's Church"
        },
        {
            id: 2,
            src: "https://res.cloudinary.com/dpo91btlc/image/upload/v1762182716/IMG_9603.PNG_qta2on.jpg",
            title: "Family Reunion 1982",
            year: "1982",
            description: "The entire Smith family gathering at the annual reunion"
        },
        {
            id: 3,
            src: "https://res.cloudinary.com/dpo91btlc/image/upload/v1762182717/IMG_20251103_192241_qmzdcb.jpg",
            title: "50th Anniversary",
            year: "2005",
            description: "Golden anniversary celebration for John and Mary"
        },
        {
            id: 4,
            src: "https://res.cloudinary.com/dpo91btlc/image/upload/v1762182716/IMG_20251103_192307_hbn7hs.jpg",
            title: "Beach Vacation",
            year: "1998",
            description: "Family vacation at the beach house in summer '98"
        },
        {
            id: 5,
            src: "https://res.cloudinary.com/dpo91btlc/image/upload/v1762182716/IMG_20251103_192215_mejkw4.jpg",
            title: "Beach Vacation",
            year: "1998",
            description: "Family vacation at the beach house in summer '98"
        },
        {
            id: 6,
            src: "https://res.cloudinary.com/dpo91btlc/image/upload/v1762182716/IMG_20251103_194904_uw8ril.jpg",
            title: "Beach Vacation",
            year: "1998",
            description: "Family vacation at the beach house in summer '98"
        },
        {
            id: 7,
            src: "https://res.cloudinary.com/dpo91btlc/image/upload/v1762182715/IMG_20251103_194827_hayxlq.jpg",
            title: "Beach Vacation",
            year: "1998",
            description: "Family vacation at the beach house in summer '98"
        },
        {
            id: 8,
            src: "https://res.cloudinary.com/dpo91btlc/image/upload/v1762182715/ea43bc0b-063b-4ddd-b1be-06571882eaa8_ntl0ip.jpg",
            title: "Beach Vacation",
            year: "1998",
            description: "Family vacation at the beach house in summer '98"
        },
        {
            id: 9,
            src: "https://res.cloudinary.com/dpo91btlc/image/upload/v1762182716/d7024284-f69a-49d7-bf18-d7442cc1f0fe_b5lpnv.jpg",
            title: "Beach Vacation",
            year: "1998",
            description: "Family vacation at the beach house in summer '98"
        },
        {
            id: 34,
            src: "https://res.cloudinary.com/dpo91btlc/image/upload/v1762531667/WhatsApp_Image_2025-11-07_at_9.31.57_PM_hqimek.jpg",
            title: "Beach Vacation",
            year: "1998",
            description: "Family vacation at the beach house in summer '98"
        },
        {
            id: 35,
            src: "https://res.cloudinary.com/dpo91btlc/image/upload/v1762531667/WhatsApp_Image_2025-11-07_at_9.32.32_PM_bp2ng9.jpg",
            title: "Beach Vacation",
            year: "1998",
            description: "Family vacation at the beach house in summer '98"
        },
        {
            id: 36,
            src: "https://res.cloudinary.com/dpo91btlc/image/upload/v1762531667/WhatsApp_Image_2025-11-07_at_9.32.50_PM_ix3msa.jpg",
            title: "Beach Vacation",
            year: "1998",
            description: "Family vacation at the beach house in summer '98"
        },
        {
            id: 31,
            src: "https://res.cloudinary.com/dpo91btlc/image/upload/v1762447884/WhatsApp_Image_2025-11-06_at_10.18.08_PM_xmlmuv.jpg",
            title: "",
            year: "",
            description: "",
        },
        {
            id: 32,
            src: "https://res.cloudinary.com/dpo91btlc/image/upload/v1762447884/WhatsApp_Image_2025-11-06_at_10.16.39_PM_a3nbni.jpg",
            title: "",
            year: "",
            description: "",
        },
        {
            id: 33,
            src: "https://res.cloudinary.com/dpo91btlc/image/upload/v1762447884/WhatsApp_Image_2025-11-06_at_10.20.43_PM_jb6j5x.jpg",
            title: "",
            year: "",
            description: "",
        },
        {
            id: 23,
            src: "https://res.cloudinary.com/dpo91btlc/image/upload/v1762187759/IMG_20251103_210722_ab6m4k.jpg",
            title: "",
            year: "",
            description: ""
        },


        {
            id: 18,
            src: "https://res.cloudinary.com/dpo91btlc/image/upload/v1762182709/Family_h3un8z.jpg",
            title: "",
            year: "",
            description: "",
        },
        {
            id: 10,
            src: "https://res.cloudinary.com/dpo91btlc/image/upload/v1762182714/DSC01428_Original_celbm6.jpg",
            title: "Beach Vacation",
            year: "1998",
            description: "Family vacation at the beach house in summer '98"
        },

        {
            id: 12,
            src: "https://res.cloudinary.com/dpo91btlc/image/upload/v1762182712/DSC01348_Original_ymvzss.jpg",
            title: "",
            year: "",
            description: "",
        },

        {
            id: 11,
            src: "https://res.cloudinary.com/dpo91btlc/image/upload/v1762182714/0d5dc9ca-6fe4-4980-bd94-e4bffffa9ba9_uitmri.jpg",
            title: "",
            year: "",
            description: "",
        },
        {
            id: 27,
            src: "https://res.cloudinary.com/dpo91btlc/image/upload/v1762187759/8574aa0e-92ca-46ce-a731-fa75538c480d_gfcc3h.jpg",
            title: "",
            year: "",
            description: "",
        },
        {
            id: 13,
            src: "https://res.cloudinary.com/dpo91btlc/image/upload/v1762182714/aa4d7a15-4498-4d6a-a8d1-1ddb631d6441_ir3tju.jpg",
            title: "",
            year: "",
            description: "",
        },

        {
            id: 14,
            src: "https://res.cloudinary.com/dpo91btlc/image/upload/v1762182712/IMG_3261_dvqc6w.jpg",
            title: "",
            year: "",
            description: "",
        },
        {
            id: 15,
            src: "https://res.cloudinary.com/dpo91btlc/image/upload/v1762188669/IMG-20251103-WA0023_fr7zmf.jpg",
            title: "",
            year: "",
            description: ""
        },


        {
            id: 17,
            src: "https://res.cloudinary.com/dpo91btlc/image/upload/v1762182712/IMG_9685_kqeemu.jpg",
            title: "",
            year: "",
            description: "",
        },

        {
            id: 19,
            src: "https://res.cloudinary.com/dpo91btlc/image/upload/v1762182709/IMG_7102_Original_ty7nur.jpg",
            title: "",
            year: "",
            description: "",
        },
        {
            id: 20,
            src: "https://res.cloudinary.com/dpo91btlc/image/upload/v1762182709/efa102de-0f9f-41b7-9736-3ded83bf2ff2_i9sxma.jpg",
            title: "",
            year: "",
            description: "",
        },
        {
            id: 21,
            src: "https://res.cloudinary.com/dpo91btlc/image/upload/v1762182709/IMG_0229_g17bln.jpg",
            title: "",
            year: "",
            description: "",
        },

        {
            id: 22,
            src: "https://res.cloudinary.com/dpo91btlc/image/upload/v1762182713/DSC04874_Original_byqece.jpg",
            title: "",
            year: "",
            description: ""
        },
        {
            id: 24,
            src: "https://res.cloudinary.com/dpo91btlc/image/upload/v1762187759/6679806d-f5a1-439e-81d1-b7658f53df1c_dadndt.jpg",
            title: "",
            year: "",
            description: ""
        },
        {
            id: 25,
            src: "https://res.cloudinary.com/dpo91btlc/image/upload/v1762187759/afc1c0ed-42ff-4104-bc54-326eac530ca3_ayahxv.jpg",
            title: "",
            year: "",
            description: "",
        },
        {
            id: 26,
            src: "https://res.cloudinary.com/dpo91btlc/image/upload/v1762187759/7a91ddae-0975-4a33-a257-ec8941b36616_w4aj0h.jpg",
            title: "",
            year: "",
            description: "",
        },
        {
            id: 28,
            src: "https://res.cloudinary.com/dpo91btlc/image/upload/v1762447883/WhatsApp_Image_2025-11-06_at_10.19.07_PM_slnbbk.jpg",
            title: "",
            year: "",
            description: "",
        },
        {
            id: 29,
            src: "https://res.cloudinary.com/dpo91btlc/image/upload/v1762447883/WhatsApp_Image_2025-11-06_at_10.17.14_PM_lvpchk.jpg",
            title: "",
            year: "",
            description: "",
        },
        {
            id: 30,
            src: "https://res.cloudinary.com/dpo91btlc/image/upload/v1762447884/WhatsApp_Image_2025-11-06_at_10.17.35_PM_sfntt2.jpg",
            title: "",
            year: "",
            description: "",
        },
        {
            id: 37,
            src: "https://res.cloudinary.com/dpo91btlc/image/upload/v1762531668/WhatsApp_Image_2025-11-07_at_9.31.45_PM_ttq4ri.jpg",
            title: "",
            year: "",
            description: "",
        },
        {
            id: 16,
            src: "https://res.cloudinary.com/dpo91btlc/image/upload/v1762182709/IMG_3216_dbxa1y.jpg",
            title: "",
            year: "",
            description: "",
        },



        // ... add more photos here
    ];

    const openLightbox = (index) => {
        setCurrentImage(index);
        setLightboxOpen(true);
        document.body.style.overflow = 'hidden';
    };

    const closeLightbox = () => {
        setLightboxOpen(false);
        document.body.style.overflow = 'auto';
    };

    const goToPrevious = () => {
        setCurrentImage((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
    };

    const goToNext = () => {
        setCurrentImage((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
    };

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (lightboxOpen) {
                if (e.key === 'Escape') closeLightbox();
                if (e.key === 'ArrowLeft') goToPrevious();
                if (e.key === 'ArrowRight') goToNext();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [lightboxOpen, currentImage]);
    const viewHome = () => navigate('/');
    const viewTimeline = () => navigate('/timeline');
    return (
        <div className="gallery-page">
            <Header />
            {/* Secondary Navbar for CTA buttons */}
            <section className="secondary-nav">
                <div className="container">
                    <button className="btn-secondary" onClick={viewHome}>Home</button>
                    <button className="btn-primary">Gallery</button>
                    <button className="btn-secondary" onClick={viewTimeline}>Timeline</button>
                </div>
            </section>

            <div className="gallery-header">
                <div className="container">
                    <h1>Family Memories</h1>
                    <div className="underline"></div>
                </div>
            </div>


            {/* Gallery Grid */}
            {/* Video Memories Section */}

            <section className="gallery-grid-section">
                <div className="t-container">
                    <div className="gallery-grid">
                        {galleryImages.map((image, index) => (
                            <div
                                key={image.id}
                                className="gallery-item"
                                onClick={() => openLightbox(index)}
                            >
                                <div className="image-container">
                                    <img src={image.src} alt={image.title} />
                                    {/* <div className="image-overlay">
                                        <div className="overlay-content">
                                            <h3>{image.title}</h3>
                                            <p>{image.year}</p>
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className="video-section">
                <div className="t-container">
                    <h2 className="video-heading">Cherished Moments</h2>
                    <div className="video-grid">
                        <div className="video-item">
                            <video controls playsInline className="family-video">
                                <source src="https://res.cloudinary.com/dpo91btlc/video/upload/v1762532048/WhatsApp_Video_2025-11-07_at_9.41.56_PM_qxqifl.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                        <div className="video-item">
                            <video controls playsInline className="family-video">
                                <source src="https://res.cloudinary.com/dpo91btlc/video/upload/v1762532465/WhatsApp_Video_2025-11-07_at_9.46.20_PM_awfhwt.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                </div>
            </section>


            {/* Lightbox Modal */}
            {lightboxOpen && (
                <div className="lightbox">
                    <div className="lightbox-content">
                        <button className="lightbox-close" onClick={closeLightbox}>
                            &times;
                        </button>
                        <button className="lightbox-nav lightbox-prev" onClick={goToPrevious}>
                            &#8249;
                        </button>
                        <button className="lightbox-nav lightbox-next" onClick={goToNext}>
                            &#8250;
                        </button>

                        <div className="lightbox-image-container">
                            <img
                                src={galleryImages[currentImage].src}
                                alt={galleryImages[currentImage].title}
                            />
                        </div>
                    </div>
                    <div className="lightbox-overlay" onClick={closeLightbox}></div>
                </div>
            )}

            {/* Footer */}
            <footer className="footer">
                <div className="t-container">
                    <p>Created with love by Valiyaveettil Family</p>
                    <p>For Memorial Websites Contact us:</p>
                    <p>+91 9446914883</p>
                    <p>eternalroots2020@gmail.com</p>

                </div>
            </footer>
        </div>
    );
};

export default Gallery;
