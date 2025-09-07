const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-[#0f172a] via-[#1e293b] to-[#0f172a] py-8 mt-12 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
        {/* Brand / Logo */}
        <div className="flex items-center">
          <span className="font-extrabold text-2xl tracking-tight text-white">
            Stack<span className="text-[#6C63FF]">Mates</span>
          </span>
        </div>

        {/* Links */}
        <div className="flex space-x-6">
          {["Home", "Projects", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm text-gray-300 hover:text-[#6C63FF] transition-colors"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Social Icons */}
        <div className="flex space-x-4">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#6C63FF] transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19.633 7.997c.014.2.014.4.014.6 0 6.123-4.66 13.188-13.188 13.188-2.622 0-5.064-.77-7.125-2.1.363.043.713.057 1.09.057 2.174 0 4.175-.742 5.764-2.002-2.03-.043-3.737-1.377-4.328-3.22.286.057.572.086.872.086.414 0 .828-.057 1.214-.157-2.13-.429-3.724-2.317-3.724-4.59v-.057c.629.357 1.357.572 2.13.6-1.272-.857-2.116-2.303-2.116-3.948 0-.872.229-1.657.629-2.36 2.303 2.83 5.757 4.703 9.639 4.903-.072-.343-.115-.7-.115-1.058 0-2.603 2.13-4.717 4.717-4.717 1.357 0 2.574.572 3.432 1.5 1.072-.2 2.088-.6 2.988-1.13-.357 1.115-1.115 2.074-2.116 2.66 1-.115 1.944-.386 2.831-.772-.686.972-1.544 1.83-2.545 2.517z" />
            </svg>
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#6C63FF] transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path
                fillRule="evenodd"
                d="M12 2a10 10 0 00-3.162 19.493c.5.092.687-.217.687-.483 0-.237-.009-.865-.014-1.697-2.796.608-3.386-1.348-3.386-1.348-.454-1.152-1.11-1.46-1.11-1.46-.908-.62.069-.608.069-.608 1.004.07 1.532 1.031 1.532 1.031.892 1.528 2.341 1.088 2.91.832.092-.646.35-1.088.636-1.338-2.235-.254-4.584-1.118-4.584-4.974 0-1.1.392-2 .93-2.707-.093-.255-.403-1.277.088-2.66 0 0 .754-.24 2.47.92a8.59 8.59 0 014.494 0c1.716-1.16 2.47-.92 2.47-.92.49 1.383.18 2.405.088 2.66.539.707.93 1.607.93 2.707 0 3.864-2.353 4.717-4.594 4.967.359.31.682.923.682 1.86 0 1.344-.012 2.427-.012 2.756 0 .266.18.575.692.478A10.001 10.001 0 0012 2z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="mt-6 text-center text-sm text-gray-400 px-4 sm:px-6 lg:px-8">
        © {new Date().getFullYear()} StackMates. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
