import { FaFacebook, FaGithub, FaTwitter } from 'react-icons/fa';
import logo from '../../assets/suitcase.png'

const Footer = () => {
  return (
    <footer className="px-4 divide-y bg-gray-600 text-white">
      <div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
        <div className="lg:w-1/3">
          <a
            rel="noopener noreferrer"
            href="#"
            className="flex justify-center space-x-3 lg:justify-start"
          >
            <div className="flex items-center justify-center rounded-full">
              <img  className='w-8 ' src={logo} alt="" />
            </div>
            <span className="self-center text-2xl font-semibold">
             JobHive
            </span>
          </a>
          <p className='text-lg text-white mt-4'>Analyze and interpret data to support <br /> business decisions using SQL <br /> and data visualization tools.</p>
        </div>
        <div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4">
          <div className="space-y-3">
            <h3 className="tracking-wide uppercase text-gray-50">Home</h3>
            <ul className="space-y-1">
              <li>
                <a rel="noopener noreferrer" href="#">
                  All Job 
                </a>
              </li>
              <li>
                <a rel="noopener noreferrer" href="#">
                  My Job
                </a>
              </li>
              <li>
                <a rel="noopener noreferrer" href="#">
                  Applied Job
                </a>
              </li>
              <li>
                <a rel="noopener noreferrer" href="#">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="tracking-wide uppercase text-gray-50">Contact</h3>
            <ul className="space-y-1">
              <li>
                <a rel="noopener noreferrer" href="#">
                  +1-800-222-1222
                </a>
              </li>
              <li>
                <a rel="noopener noreferrer" href="#">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="uppercase text-gray-50">Address</h3>
            <ul className="space-y-1">
              <li>
                <a rel="noopener noreferrer" href="#">
                John Doe

                </a>
              </li>
              <li>
                <a rel="noopener noreferrer" href="#">
                123 Main Street

                </a>
              </li>
              <li>
                <a rel="noopener noreferrer" href="#">
                Springfield, IL 62701
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <div className="uppercase text-gray-50">Social media</div>
            <div className="flex justify-start space-x-3 text-xl">
              <a
                rel="noopener noreferrer"
                href="#"
                title="Facebook"
                className="flex items-center p-1"
              >
               <FaFacebook/>
              </a>
              <a
                rel="noopener noreferrer"
                href="#"
                title="Twitter"
                className="flex items-center p-1"
              >
               <FaTwitter/>
              </a>
              <a
                rel="noopener noreferrer"
                href="#"
                title="Instagram"
                className="flex items-center p-1"
              >
                <FaGithub/>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="py-6 text-sm text-center text-gray-200">
        © JobHive Company Co. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
