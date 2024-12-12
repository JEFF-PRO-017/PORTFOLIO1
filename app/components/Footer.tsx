import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer id="footer" className="footer_area gray-bg pt-115 pb-120">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="footer_content text-center">
              <Link href="#">
                <span>
                  <Image src="/assets/images/logo.svg" alt="Logo" width={150} height={50} />
                </span>
              </Link>
              <ul className="footer_social">
                {socialLinks.map((link, index) => (
                  <li key={index}>
                    <Link href={link.href}>
                      <span>
                        <i className={link.icon}></i>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
              <span className="email">someone@example.com</span>
              <ul className="footer_menu">
                {footerMenu.map((menu, index) => (
                  <li key={index}>
                    <Link href={menu.href}>
                      <span>{menu.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
              <p className="credit pt-45">
                Template Designed and Developed by
                <Link href="https://uideck.com/">
                  <span rel="nofollow">UIdeck</span>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

const socialLinks = [
  { href: '#', icon: 'lni lni-facebook' },
  { href: '#', icon: 'lni lni-twitter' },
  { href: '#', icon: 'lni lni-instagram' },
  { href: '#', icon: 'lni lni-linkedin' },
];

const footerMenu = [
  { href: '#', label: 'Home' },
  { href: '#', label: 'About Us' },
  { href: '#', label: 'Service' },
  { href: '#', label: 'Portfolio' },
  { href: '#', label: 'Pricing' },
  { href: '#', label: 'Contact Us' },
];
