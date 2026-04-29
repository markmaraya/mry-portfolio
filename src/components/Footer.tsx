const Footer: React.FC = () => {
  const startYear = 2025;
  const currentYear = new Date().getFullYear();

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
      <p className="text-accent">
        &copy; {startYear}-{currentYear}. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
