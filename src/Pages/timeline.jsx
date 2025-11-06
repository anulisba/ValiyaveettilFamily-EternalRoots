// Timeline.jsx
import React, { useState, useEffect } from 'react';
import './timeline.css';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import { useLanguage } from '../context/LanguageContext';

const Timeline = () => {
    const [activeYear, setActiveYear] = useState(null);
    const [isVisible, setIsVisible] = useState(false);
    const navigate = useNavigate();
    const { language } = useLanguage();


    useEffect(() => {
        // Trigger animation
        setIsVisible(true);


    }, []);


    const viewGallery = () => navigate('/gallery');
    const viewHome = () => navigate('/')

    return (
        <div className="gallery-page">
            {/* Header */}
            <Header />
            {/* Secondary Navbar for CTA buttons */}
            <section className="secondary-nav">
                <div className="container">
                    <button className="btn-secondary" onClick={viewHome}>Home</button>
                    <button className="btn-secondary" onClick={viewGallery}>Gallery</button>
                    <button className="btn-primary">Timeline</button>
                </div>
            </section>
            <div className="gallery-header">
                <div className="container">
                    <h1>{language === "ml" ? "കുടുംബചരിത്രം" : "Family History"}</h1>
                    <div className="underline"></div>
                </div>
            </div>

            <section className="timeline-container">
                <div className="timeline-content">
                    <p className="timeline-text">
                        {language === "ml" ? "എ .ഡി . 1750  ൽ  കുറിവിലങ്ങാട്  പകലോമറ്റം  കുടുംബ പരമ്പരയിൽപെട്ട  ചക്കാല വീട്ടിൽ നിന്നും തൃക്കൊടിത്താനത്തേക്ക്  പത്തില്ലത്തിൽ പോറ്റിമാരാൽ ക്ഷണിക്കപ്പെടുകയും തൃക്കൊടിത്താനം മഹാക്ഷേത്രത്തിന് സമീപത്തായി സ്ഥിതിചെയ്തിരുന്ന അറപ്പുരയുടെ സംരക്ഷണ ദൗത്യത്തിൻ്റെ ഭാഗമായി അറപ്പുരയുടെ വാതിക്കൽ താമസമാക്കുകയും അതുവഴി അറവാക്കൽ കുടുബത്തിൻ്റെ സ്ഥാപകനാവുകയും  ചെയ്ത തോമാ ഔസേഫിൻ്റെ (ജോസഫ് തോമസ്) സന്തതി പരമ്പരകളിൽപ്പെട്ട അറവാക്കൽ, അറവാക്കൽ പുതുപ്പറമ്പിൽ, പുതുപ്പറമ്പിൽ, വലിയവീട്ടിൽ, കുടിലംപറമ്പിൽ എന്നീ കുടുംബ പേരുകളിൽ അറിയപ്പെടുന്നു." : "Around A.D. 1750, a member of the distinguished Pakalomattam lineage of Kuravilangad, one of the most ancient Christian families of Kerala—was invited by the 'Pathillathil Pottymar' to settle in Thrikodithanam Responding to their invitation, he took residence at Arappura, situated near the Thrikodithanam Mahakshetram, as part of his entrusted duty to safeguard the sacred Arappura (the temple’s treasury or sanctum storehouse). Through this noble service, Thoma Ouseph (Joseph Thomas) became recognised as the founder of the Aravackal family. His descendants, over the generations, came to be known by the family names Aravackal, Aravackal Puthuparambil, Puthuparambil, Valiyaveettil, and Kudilamparambil each branch preserving the proud heritage and legacy of their illustrious forebear."}
                    </p>
                    <img
                        src="https://res.cloudinary.com/dpo91btlc/image/upload/v1762444260/WhatsApp_Image_2025-11-05_at_9.43.45_PM_lmkljl.jpg"
                        alt="Family"
                        className="timeline-image"
                    />

                    <p className="timeline-text">
                        {language === "ml" ? (
                            <>
                                ഈ പരമ്പരയിൽ നിന്നുള്ള കോച്ചായൻ എന്നു വിളിക്കപ്പെടുന്ന വി.ജെ. ജോസഫും ഭാര്യ അന്നമ്മയും
                                തൃക്കൊടിത്താനത്ത് താമസിച്ചിരുന്നു. കോച്ചായൻ ഒരു അധ്യാപകനായിരുന്നു. പിന്നീട്
                                കുറുമ്പനാടം എൽ.പി. സ്കൂളിൽ ഹെഡ്മാസ്റ്റർ ആയി സേവനമനുഷ്ഠിക്കുകയും ചെയ്തു.
                                ശാന്തസ്വഭാവം, ലളിതമായ ജീവിതരീതി എന്നിവ കൊണ്ട് അദ്ദേഹം എല്ലാവരുടെയും ആദരവ് നേടി.
                                അന്നമ്മക്ക് ആയുർവേദത്തിൽ പ്രാവിണ്യമുണ്ടായിരുന്നതിനാൽ, അവർ അറിയപ്പെട്ടിരുന്ന
                                ഒരു വൈദ്യയായിരുന്നു. ആയുർവേദ മരുന്നുകൾ ഉപയോഗിച്ച് നിരവധി കുടുംബങ്ങളെ
                                ചികിത്സിച്ച് സഹായിച്ചിരുന്നു.
                                <br />
                                <br />
                                <strong>അവരുടെ മക്കൾ:</strong>
                                <ul className="timeline-list">
                                    <li>വി.ജെ. തോമസ്, അധ്യാപകനായും തൃക്കൊടിത്താനത്തെ മതബോധന സ്കൂളിന്റെ ഹെഡ്മാസ്റ്ററായും സേവനം അനുഷ്ഠിച്ചു.</li>
                                    <li>വി.ജെ. മാത്യു ബിസിനസിൽ പ്രവേശിച്ചു (ജോസഫ് മാത്യുവിന്റെ (ഡാഡിയുടെ) പിതാവ്).</li>
                                    <li>വി.ജെ. ജോൺ, കുടുംബഭൂമിയും കൃഷിയും നോക്കി.</li>
                                    <li>അച്ചാമ്മ  തെക്കേടത്ത് കുടുംബത്തിൽ വിവാഹം കഴിച്ച് പൂണെയിൽ സ്ഥിരതാമസമായി.</li>
                                    <li>വി.ജെ. ജോർജ് ഇന്ത്യൻ വ്യോമസേനയിൽ സേവനമനുഷ്ഠിച്ചിരുന്നു.</li>
                                    <li>തങ്കമ്മ മാത്തൂർ കുടുംബത്തിൽ വിവാഹം കഴിച്ചു.</li>
                                    <li>വി.ജെ. ഫ്രാൻസിസ്  ഇന്ത്യൻ നാവികസേനയിൽ ജോലി ചെയ്തു, പിന്നീട് കാനഡയിലെ കോഡാക് ഫിലിംസിൽ ഫിനാൻഷ്യൽ കൺട്രോളറായി ചേർന്ന് കുടുംബസമേതം അവിടെ സ്ഥിരതാമസമായി.</li>
                                    <li>ഗ്രേസ്കുട്ടി, ഓതറ കുടുംബത്തിൽ വിവാഹം കഴിച്ചു.</li>
                                </ul>

                                ഇവരിൽ വി.ജെ. മാത്യു തൃക്കൊടിത്താനത്ത് തുടരുകയും താന്നിക്കാട് കുടുംബത്തിലെ ത്രേസ്യമ്മ യുമായി വിവാഹിതനാകുകയും ചെയ്തു. പിന്നീട് കോഴിക്കോട് തെരുവത്ത്കടവിൽ താമസം തുടങ്ങി.
                            </>
                        ) : (
                            <>
                                From this line came V.J. Joseph, fondly called Kochayan, and his wife
                                Annamma. They lived in Thrikodithanam. Kochayan was a teacher by profession
                                and later became Headmaster at the Kurumpanadom LP School. He was respected for his calm
                                nature and simple way of living. Annamma was known as a vaidhya, treating people
                                with Ayurvedic medicines and helping many families around the area.
                                <br />
                                <br />
                                <strong>Their children were:</strong>
                                <ul className="timeline-list">
                                    <li>V.J. Thomas — a teacher and Headmaster of the Sunday School in Thrikodithanam.</li>
                                    <li>V.J. Mathew — who went into business (father of Joseph Mathew — our daddy).</li>
                                    <li> V.J. John — who looked after the family land and farming.</li>
                                    <li> Achamma — married into the Thekkedam family and settled in Pune.</li>
                                    <li>V.J. George — served in the Indian Air Force.</li>
                                    <li>Thangamma — married into the Mathoor family.</li>
                                    <li> V.J. Francis — worked in the Indian Navy and later joined Kodak Films in Canada as a Financial Controller, where he settled with his family.</li>
                                    <li>Gracekutty — married into the Othara family.</li>
                                </ul>
                                Among them, V.J. Mathew continued in Thrikodithanam and was married to
                                Thresiamma from the Thannikad family. Later, they moved to
                                Theruvathekadav in Calicut.
                            </>
                        )}
                    </p>

                    <img
                        src="https://res.cloudinary.com/dpo91btlc/image/upload/v1762446608/WhatsApp_Image_2025-11-05_at_9.46.18_PM_eqahju.jpg"
                        alt="Family"
                        className="timeline-image"
                    />

                    <p className="timeline-text">{language === "ml" ? "ഈ ചരിത്രം ജോസഫ് മാത്യുവിന്റെ (വലിയവീട്ടിൽ) സ്മരണയ്ക്കായി പങ്കുവയ്ക്കുന്നു - അദ്ദേഹത്തിന്റെ ജീവിതവും നന്മയും ഈ കുടുംബത്തിന്റെ ചരിത്രത്തെ സജീവമായി നിലനിർത്തുന്നു." : "This history is shared in memory of Joseph Mathew (Valiyaveetil) — whose life and goodness continue to keep this family’s story alive."}</p>
                    <img
                        src="https://res.cloudinary.com/dpo91btlc/image/upload/v1762447078/WhatsApp_Image_2025-11-06_at_10.07.34_PM_i5bscm.jpg"
                        alt="Family"
                        className="timeline-image"
                    />
                </div>
            </section>


            {/* Footer */}
            <footer className="footer">
                <div className="t-container">
                    <p>Created with love by Vliyaveettil Family</p>
                    <p>For Memorial Websites Contact us:</p>
                    <p>+91 9446914883</p>
                    <p>eternalroots2020@gmail.com</p>

                </div>
            </footer>
        </div>
    );
};

export default Timeline;