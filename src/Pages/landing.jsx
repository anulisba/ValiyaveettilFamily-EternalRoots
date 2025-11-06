import React, { useState, useEffect } from 'react';
import './landing.css';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import Header from './Header';

const MemorialWebsite = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [visibleCards, setVisibleCards] = useState([]);
    const navigate = useNavigate();
    const [showPopup, setShowPopup] = useState(false);
    const { language } = useLanguage();
    const familyMembers = [
        {
            id: 1,
            name: "ചാക്കോ മഠത്തിനകത്ത്",
            years: "13/08/1904 - 14/10/1983",
            role: "Beloved Grandfather",
            description: "John was a war veteran and dedicated family man who loved gardening and storytelling.",
            image: "https://res.cloudinary.com/dpo91btlc/image/upload/v1758988545/WhatsApp_Image_2025-09-27_at_9.20.45_PM_wtkpsw.jpg"
        },
        {
            id: 2,
            name: "ഏലമ്മ ചാക്കോ",
            years: "08/11/1909 - 02/06/1985",
            role: "Loving Grandmother",
            description: "Mary was known for her kindness, delicious cooking, and beautiful embroidery work.",
            image: "https://res.cloudinary.com/dpo91btlc/image/upload/v1758989010/WhatsApp_Image_2025-09-27_at_9.25.24_PM_1_k7wgyp.jpg"
        },
        {
            id: 3,
            name: "അബ്രാഹം മഠത്തിനകത്ത് (പാപ്പച്ചൻ)",
            years: "18/08/1926 - 26/12/2011",
            role: "Loving Grandmother",
            description: "Mary was known for her kindness, delicious cooking, and beautiful embroidery work.",
            image: "https://res.cloudinary.com/dpo91btlc/image/upload/v1759166015/WhatsApp_Image_2025-09-29_at_9.43.57_PM_c9lxjg.jpg"
        },
        {
            id: 4,
            name: "ഏലിക്കുട്ടി",
            years: "22/02/1928 - 2/10/1998",
            role: "Loving Grandmother",
            description: "Mary was known for her kindness, delicious cooking, and beautiful embroidery work.",
            image: "https://res.cloudinary.com/dpo91btlc/image/upload/v1759166017/WhatsApp_Image_2025-09-29_at_9.43.57_PM_1_efir4e.jpg"
        },
        {
            id: 5,
            name: "അബ്രാഹം എം. എ (സോമൻ)",
            years: "09/10/1961 - 24/05/2025",
            role: "Loving Grandmother",
            description: "Mary was known for her kindness, delicious cooking, and beautiful embroidery work.",
            image: "https://res.cloudinary.com/dpo91btlc/image/upload/v1758993906/WhatsApp_Image_2025-09-27_at_10.54.22_PM_twvz1u.jpg"
        },
        {
            id: 6,
            name: "തോമസ് എം. എ (ബാബു)",
            years: "05/10/1965 - 22/09/2017",
            role: "Loving Grandmother",
            description: "Mary was known for her kindness, delicious cooking, and beautiful embroidery work.",
            image: "https://res.cloudinary.com/dpo91btlc/image/upload/v1758994716/WhatsApp_Image_2025-09-27_at_11.07.53_PM_zd26q1.jpg"
        },
        {
            id: 7,
            name: "ഏലിക്കുട്ടി",
            years: "01/06/1988 - 22/06/1989",
            role: "Loving Grandmother",
            description: "Mary was known for her kindness, delicious cooking, and beautiful embroidery work.",
            image: "https://res.cloudinary.com/dpo91btlc/image/upload/v1758994782/WhatsApp_Image_2025-09-27_at_10.22.50_PM_knfth6.jpg"
        },
        {
            id: 8,
            name: "മേരി",
            years: "03/09/1990 - 04/08/1991",
            role: "Loving Grandmother",
            description: "Mary was known for her kindness, delicious cooking, and beautiful embroidery work.",
            image: "https://res.cloudinary.com/dpo91btlc/image/upload/v1759066641/Untitled_design_17_jzd9go.png"
        },
        {
            id: 9,
            name: "അബ്രാഹം",
            years: "09/09/1994 - 23/03/1995",
            role: "Loving Grandmother",
            description: "Mary was known for her kindness, delicious cooking, and beautiful embroidery work.",
            image: "https://res.cloudinary.com/dpo91btlc/image/upload/v1759066641/Untitled_design_17_jzd9go.png"
        }
    ];

    const viewGallery = () => navigate('/gallery');
    const viewTimeline = () => navigate('/timeline');

    useEffect(() => {
        const timer = setTimeout(() => {
            setVisibleCards(familyMembers.map((_, index) => index));
        }, 100);
        return () => clearTimeout(timer);
    }, [familyMembers]);


    useEffect(() => {
        const showTimer = setTimeout(() => setShowPopup(true), 15000); // Show after 15s
        const hideTimer = setTimeout(() => setShowPopup(false), 45000); // Hide after 30s of visibility

        return () => {
            clearTimeout(showTimer);
            clearTimeout(hideTimer);
        };
    }, []);

    const handleClosePopup = () => setShowPopup(false);
    const handleWhatsAppRedirect = () => {
        window.open("https://wa.me/919446914883?text=Hi%2C%20I%20would%20like%20to%20create%20a%20memorial%20website%20for%20my%20loved%20one.", "_blank");
    };

    return (
        <div className="memorial-website">
            {/* Header */}
            <Header />
            {/* Secondary Navbar for CTA buttons */}
            <section className="secondary-nav">
                <div className="container">
                    <button className="btn-primary">Home</button>
                    <button className="btn-secondary" onClick={viewGallery}>Gallery</button>
                    <button className="btn-secondary" onClick={viewTimeline}>Timeline</button>
                </div>
            </section>


            {/* Hero Section */}
            {/* <section id="home" className="hero">
                <div className="hero-overlay"></div>
                <div className="hero-content">
                    <h2>In Loving Memory</h2>
                    <h1>The Memory Lane</h1>
                    <p>Honoring our beloved Madathinakath family members who have passed away</p>
                    <button className="cta-button" onClick={viewGallery}>Explore Their Stories</button>
                </div>
            </section> */}
            <section id="memorial" className="memorial-section">
                <div className="container">
                    <div className="memorial-title">
                        <h2>
                            {language === "ml" ? "സ്നേഹസ്മരണയിൽ" : "In Loving Memory"}
                        </h2>
                        <div className="underline"></div>
                    </div>

                    <div className="memorial-content">
                        <div className="memorial-image">
                            <img src="https://res.cloudinary.com/dpo91btlc/image/upload/v1761972183/IMG_3116_szuidx.jpg" alt="Joseph Mathew Aliyaveetil" />
                        </div>

                        <div className="memorial-text">
                            <h3>
                                {language === "ml" ? "ജോസഫ് മാത്യു (ജോയ്) വലിയവീട്ടിൽ" : "Jospeh Mathew (Joy) Valiyaveettil"}</h3>
                            <p className="memorial-years">23-08-1941 <span style={{ fontWeight: "bold" }}>—</span> 29-09-2025</p>
                            {/* <p className="memorial-description">
                                വലിയവീട്ടിൽ മാത്തുക്കുട്ടി തെച്ചാമ്മ താന്നിക്കൽ ദമ്പതികളുടെ 10 മക്കളിൽ മൂത്തമകനായ ജോസഫ് മാത്യു (ജോയ്) 1941 ഇൽ തന്റെ അമ്മവീടായ ആലപ്പുഴ തത്തംപള്ളി താന്നിക്കൽ വീട്ടിൽ ജനിച്ചു. സഹോദരങ്ങളായ തോമസ് മാത്യു, ജോൺ മാത്യു, ജോളി മാത്യു, മേരിക്കുട്ടി സെബാസ്റ്റിയൻ, ജെസ്സി ജോസ്, ജോമി മാത്യു, റെജി ബാബു, ജാനമ്മ ജോർജ്, പരേതയായ പൊന്നമ്മ ലൂക്കോസ് എന്നിവരോടൊപ്പം ചങ്ങനാശ്ശേരി തൃക്കോട്ടിതാനം എന്നിടത്ത്  തൻ്റെ ബാല്യകാലം ചിലവഴിക്കുകയും, തുടർന്ന് പത്താംക്ലാസ് വരെ സെന്റ് ബെർച്ഛ്മൻസ് സ്കൂളിലും , പ്രീഡിഗ്രി സെന്റ് ബെർച്ഛ്മൻസ് കോളേജിലുമായി  വിദ്യാഭ്യാസം പൂർത്തിയാക്കി.
                            </p>
                            <p className="memorial-description">
                                1959 -ൽ ചങ്ങനാശേരിയിൽന്നിന്നും   മലബാറിലെ തെരുവത്തകടവ് എന്നിടത്തേക്ക് കുടിയേറി താമസിച്ചു . വ്യാപാരത്തിൽ താത്പര്യം കാണിച്ചിരുന്നതിനാൽ പിതാവിൻ്റെ  അരിമിൽ വ്യാപാരത്തിൽ ഏർപ്പെടുകയും പിന്നീട്   കുടുംബ സ്ഥാപനമായ വലിയവീടൻ വുഡ് ഇൻഡസ്ട്രിയിൽ  പ്രവർത്തിച്ചു പോന്നു .1970 കളിൽ പൊതുജനങ്ങൾക്കു വേണ്ടി തെരുവത്തകടവ് - ഏലത്തുർ റൂട്ടിൽ ബോട്ട് സർവീസ് ആരംഭിച്ചു.
                            </p> */}
                        </div>
                    </div>
                </div>
            </section>

            {/* Family Story */}
            <section id="family" className="family-intro">
                <div className="t-container">
                    {/* <div className="section-title">
                        <h2>കാലങ്ങളിലൂടെ കുടുംബം</h2>
                        <div className="underline"></div>
                    </div> */}
                    <div className="family-content">
                        <div className="family-text">
                            <p>
                                {language === "ml" ? "വലിയവീട്ടിൽ മാത്തുക്കുട്ടി താന്നിക്കാട് ത്രേസ്യാമ്മ ദമ്പതികളുടെ 10 മക്കളിൽ മൂത്തമകനായ ജോസഫ് മാത്യു (ജോയ്) 1941- ൽ തന്റെ അമ്മവീടായ ആലപ്പുഴ തത്തംപള്ളി താന്നിക്കാട് വീട്ടിൽ ജനിച്ചു.  തുടർന്ന് പത്താംക്ലാസ് വരെ സെന്റ് ബെർക്ക്മൻസ് സ്കൂളിലും, പ്രീ-യൂണിവേഴ്സിറ്റി സെന്റ് ബെർക്ക്മൻസ് കോളേജിലുമായി വിദ്യാഭ്യാസം പൂർത്തിയാക്കി." : "Joseph Mathew(Joy), the eldest son of Mr. Mathukutty Valiyaveettil and Mrs.Thresiamma Thannikkadu , was born in 1941 at his maternal home, Thannikkadu House, Tathamppally, Alappuzha. He completed his schooling up to the tenth standard at St. Berchmans’ High School, Changanassery, and pursued his Pre-University studies at St. Berchmans’ College."}
                            </p>
                            <p>
                                {language === "ml" ? "1958 -ൽ ചങ്ങനാശ്ശേരിയിൽ നിന്നും മാതാപിതാക്കളും സഹോദരങ്ങളായ തോമസ് മാത്യു, ജോൺ മാത്യു, ജോളി മാത്യു, മേരിക്കുട്ടി സെബാസ്റ്റ്യൻ, ജെസ്സി ജോസ്, ജോമി മാത്യു, റെജി ബാബു, ജൈനമ്മ ജോർജ്, പരേതയായ പൊന്നമ്മ ലൂക്കോസ് എന്നിവരോടും കൂടെ  മലബാറിലെ തെരുവത്ത്കടവിലേക്ക് കുടിയേറി താമസിച്ചു. വ്യാപാരത്തിൽ താത്പര്യം കാണിച്ചിരുന്നതിനാൽ പിതാവിൻ്റെ അരിമിൽ വ്യാപാരത്തിൽ ഏർപ്പെടുകയും, പിന്നീട്  കുടുംബ സ്ഥാപനമായ വലിയവീടൻ വുഡ് ഇൻഡസ്ട്രിയിൽ  പ്രവർത്തിച്ചു പോന്നു. 1970 കളിൽ പൊതുജനങ്ങൾക്കു വേണ്ടി തെരുവത്തകടവ് - എലത്തൂർ റൂട്ടിൽ ബോട്ട് സർവീസ് ആരംഭിച്ചു." : "In 1958, together with his parents and siblings – Thomas Mathew, John Mathew, Jolly Mathew, Marykutty Sebastian, Jessy Jose, Jomy Mathew, Reji Babu, Jainamma George, and the late Ponnamma Lukose – he migrated from Changanassery to Theruvathukadavu in Malabar. There, he joined his father in the rice milling business and later contributed to the family enterprise, Valiyaveedan Wood Industries. A visionary by nature, he ventured into new fields with courage and conviction. During the 1970s, he introduced a boat service along the Theruvathkadavu–Elathur route, enhancing local connectivity and livelihood."}
                            </p>
                            <p>
                                {language === "ml" ? "1972 ൽ ചെമ്പനോട ഒഴുകയിൽ വീട്ടിൽ ശാന്തമ്മയെ തൻ്റെ ജീവിതസഖിയാക്കി.1978 ൽ പേരാമ്പ്ര സോമിൽ & വുഡ് ഇൻഡസ്ട്രീസ് എന്ന സ്ഥാപനം, പേരാമ്പ്ര പൈതോത്ത് റോഡിൽ സ്ഥാപിക്കുകയും തൻ്റെ കുടുംബത്തോടൊപ്പം പേരാമ്പ്രയിൽ താമസമാക്കുകയും ചെയ്തു. 1980 ൽ മില്ലിനോടടുത്ത് സ്വന്തം വീടുവെച്ച് താമസമാക്കി. പേരാമ്പ്ര സെൻ്റ് ഫ്രാൻസീസ് അസ്സീസി ദേവലയത്തിൻ്റെ  മൂന്നാമത്തെ ഇടവകാംഗവുമായിരുന്നു." : "In 1972, he married Mrs. Shanthamma of the Ozhukayil family, Chempanoda, who became his lifelong companion and partner. In 1978, he established “Perambra Sawmill & Wood Industries” on the Paithoth Road at Perambra and subsequently settled there with his family. By 1980, he had built and moved into his own home adjacent to the mill.He was among the earliest parishioners of St. Francis Assisi Church, Perambra."}
                            </p>
                            <p>
                                {language === "ml" ? "കൊയിലാണ്ടി താലൂക്ക് സോമിൽ അസോസിയേഷൻ പ്രസിഡന്റും പിന്നീട് കോഴിക്കോട് ജില്ലാ - സോമിൽ അസോസിയേഷൻ സ്ഥാപക നേതാവും ജില്ലാ പ്രസിഡന്റുമായി 30 വർഷത്തോളം സേവനമനുഷ്ഠിക്കുകയും ചെയ്‌തു. " : " A respected leader in his field, Joseph Mathew served as President of the Koyilandy Taluk Sawmill Association and later became the founding leader and District President of the Kozhikode District Sawmill Association, positions he held with dedication and distinction for over three decades."}
                            </p>
                            <p>
                                {language === "ml" ? "2025 സെപ്റ്റംബർ 29 ന് നിത്യസമ്മാനത്തിനായി   വിളിക്കപ്പെട്ടു.  പേരാമ്പ്ര സെൻ്റ് ഫ്രാൻസീസ് അസ്സീസി ദേവാലയത്തിൻ്റെ   പെരുവണ്ണാമൂഴിയിലുള്ള ഫാത്തിമ മാതാ ദേവാലയത്തിൽ സ്ഥിതി ചെയ്യുന്ന  സെമിത്തേരിയിൽ അന്ത്യവിശ്രമം കൊള്ളുന്നു." : "On 29 September 2025, Joseph Mathew  was called to eternal rest. The funeral rites were held at St.Francis Assisi Church Perambra, followed by interment in the cemetery adjoining at Fathima Matha Church,  Peruvannamuzhi."}
                            </p>
                            <p>
                                {language === "ml" ? (
                                    <>
                                        മക്കൾ:<br />
                                        ജാസ്മിൻ ഷാജി (ഭർത്താവ്. ഷാജി മണ്ഡപം ,തിരുവമ്പാടി)<br />
                                        ജസ്റ്റിൻ ജോസഫ് (ഭാര്യ. സുനിത ജസ്റ്റിൻ ചൊവ്വാറ്റുകുന്നേൽ,പുളിങ്ങോം)<br />
                                        ജോസിൻ ജോസഫ് (ഭാര്യ. ഡോ. ആനി സി. ഡേവിസ്, ചാലിശ്ശേരി വെട്ടൻ, അയ്യന്തോൾ, തൃശ്ശൂർ)
                                    </>
                                ) : (
                                    <>
                                        Children:<br />
                                        Jasmin Shaji (married to Mr. Shaji Mandapam , Thiruvambady)<br />
                                        Justin Joseph (married to Mrs. Sunitha Justin, Chowattukunnel, Pulingom)<br />
                                        Josin Joseph (married to Dr. Anne C. Davis, Chalissery Vettan, Ayyanthole, Thrissur)
                                    </>
                                )}
                            </p>
                            <p>
                                {language === "ml" ? (
                                    <>
                                        കൊച്ചുമക്കൾ:<br />
                                        ജോൺ ഷാജി, അന്ന ജസ്റ്റിൻ, ജോസഫ് ഷാജി, മരിയ ജസ്റ്റിൻ, റെബേക്ക ജോസിൻ, ജോസഫ് ജസ്റ്റിൻ, മാത്യു ജോസിൻ, വെറോനിക്ക ജോസിൻ
                                    </>
                                ) : (
                                    <>
                                        Grandchildren:<br />
                                        John Shaji, Anna Justin, Joseph Shaji, Mariya Justin, Rebekah Josin, Joseph Justin, Matthew Josin, and Veronica Josin.
                                    </>
                                )}
                            </p>

                        </div>
                        <div className="family-image">
                            <img src="https://res.cloudinary.com/dpo91btlc/image/upload/v1762014337/IMG-20251101-WA0043_ozoebh.jpg"
                                alt="Family" className="luxury-image" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Family Members */}
            {/* <section id="members" className="family-members">
                <div className="container">
                    <div className="section-title">
                        <h2>Remembering Our Loved Ones</h2>
                        <div className="underline"></div>
                        <p>Ten generations of love, legacy, and memories</p>
                    </div>
                    <div className="members-grid">
                        {familyMembers.map((member, index) => (
                            <div key={member.id} className={`member-card ${visibleCards.includes(index) ? 'visible' : ''}`}>
                                <div className="member-image">
                                    <img src={member.image} alt={member.name} />
                                    <div className="member-overlay">

                                    </div>
                                </div>
                                <div className="member-info">
                                    <h3>{member.name}</h3>
                                    <p>{member.years}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section> */}

            {/* CTA Section */}
            <section className="cta-section">
                <div className="t-container">
                    <h2>
                        {language === "ml"
                            ? "വിശ്വസിക്കുന്നവൻ ഒരിക്കലും മരിക്കയില്ല"
                            : "Whoever believes in Me will never die"}
                    </h2>
                    <p>
                        {language === "ml" ? (
                            <>
                                യേശു അവളോടു പറഞ്ഞു: പുനരുത്ഥാനവും ജീവനും ഞാനാകുന്നു;
                                എന്നിൽ വിശ്വസിക്കുന്നവൻ മരിച്ചാലും ജീവിക്കും;
                                ജീവിച്ചുകൊണ്ടു എന്നിൽ വിശ്വസിക്കുന്നവൻ ഒരിക്കലും മരിക്കയില്ല.” <br />
                                (യോഹന്നാൻ 11:25-26)
                            </>
                        ) : (
                            <>
                                Jesus said to her, “I am the resurrection and the life.
                                The one who believes in Me will live, even though they die;
                                and whoever lives by believing in Me will never die.”<br />
                                (John 11:25-26)
                            </>
                        )}
                    </p>

                    {/* Minimal Cross */}
                    <div className="minimal-cross">
                        <svg width="30" height="40" viewBox="0 0 30 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <line x1="15" y1="0" x2="15" y2="60" stroke="#F0EDE6" strokeWidth="2" />
                            <line x1="0" y1="15" x2="30" y2="15" stroke="#F0EDE6" strokeWidth="2" />
                        </svg>
                    </div>
                </div>
            </section>



            {/* Footer */}
            <footer className="footer">
                <div className="t-container">
                    <p>Created with love by Valiyaveettil Family</p>
                    <p>For Memorial Websites Contact us:</p>
                    <p>+91 9446914883</p>
                    <p>eternalroots2020@gmail.com</p>

                </div>
            </footer>
            {showPopup && (
                <div className="popup-overlay">
                    <div className="popup-box">
                        <button className="popup-close" onClick={handleClosePopup}>×</button>
                        <h3>Honor the Memory of Your Loved One</h3>
                        <p>
                            If you wish to create a memorial website for your loved one who passed away,
                            we can help you cherish their memories forever
                        </p>
                        <div className="popup-footer">
                            <button className="popup-btn" onClick={handleWhatsAppRedirect}>
                                Contact Us
                            </button>
                            <span className="popup-tagline">— Eternal Roots</span>
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
};

export default MemorialWebsite;
