const Footer = () => {
    return (
      <footer className="bg-gray-100 text-center py-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
          <div>
            <h3 className="font-semibold">Help & Services</h3>
            <ul>
              <li><a href="#">Contact</a></li>
              <li><a href="#">FAQs</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold">About Louis Vuitton</h3>
            <ul>
              <li><a href="#">Our Story</a></li>
              <li><a href="#">Careers</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold">Sign Up for Emails</h3>
            <input type="email" placeholder="Your email" className="border p-2 mt-2 w-full" />
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  