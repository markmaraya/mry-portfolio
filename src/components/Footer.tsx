const Footer: React.FC = () => {
  return (
    <footer className="bg-muted text-center py-6">
      <p className="text-accent">
        Designed &amp; Built by{" "}
        <a
          href="https://linkedin.com/in/mark-maraya/"
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
