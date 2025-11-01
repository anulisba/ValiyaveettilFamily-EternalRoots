import { useLanguage } from "../context/LanguageContext";
import "./Header.css";

function Header() {
    const { language, toggleLanguage } = useLanguage();

    return (
        <header className="header">
            <div className="t-container">
                <div className="logo">
                    <h1>Valiyaveettil Family</h1>
                </div>

                <div className="lang-toggle" onClick={toggleLanguage}>
                    <span className={`lang-option ${language === "ml" ? "active" : ""}`}>ML</span>
                    <span className={`lang-option ${language === "en" ? "active" : ""}`}>EN</span>
                </div>
            </div>
        </header>
    );
}

export default Header;
