import Image from "next/image";
import Logo from 'public/logo.svg';

const BlogHeader = ({ title, description, keywords }) => (
  <div className="container-fluid g-0">
    <div className="d-flex">
      {/* Logo Section */}
      <div>
        <Image src={Logo} layout="responsive" alt="Full-Stack Developer" />
      </div>
      {/* Nav Section */}
      <div>
        <ul className="menu">
          <li className="menu__item">Item 1</li>
          <li className="menu__item">Item 2</li>
          <li className="menu__item">Item 3</li>
        </ul>
      </div>
    </div>
  </div>
);
export default BlogHeader;
