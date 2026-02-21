const Footer = ({ ...props }) => {
  return (
    <footer {...props}>
      <p className="text-accent">
        Designed & Built by{" "}
        <a
          href="www.linkedin.com/in/mark-maraya"
          className="text-link hover:text-linkHover"
        >
          Mark Maraya
        </a>
      </p>
      <p className="text-accent">&copy; 2025. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
