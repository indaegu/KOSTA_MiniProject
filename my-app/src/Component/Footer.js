const Footer = () => {
    return (
        <footer className="footer">
        <div className="footer-section">
            <h4>About Us</h4>
            <p>저희 플랫폼은 개발자, 전문가, 학생들에게 최고의 학습 자원과 도구를 제공합니다. 저희와 함께 배우고, 성장하고, 번영하세요.</p>
        </div>
        <div className="footer-section">
            <h4>Site Map</h4>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Terms of Service</a></li>
                <li><a href="#">Privacy Policy</a></li>
            </ul>
        </div>
        <div className="footer-section">
            <h4>Contact Info</h4>
            <p>Email: support@ourplatform.com</p>
            <p>Phone: +1 234 567 890</p>
        </div>
    </footer>
    )
}

export default Footer;