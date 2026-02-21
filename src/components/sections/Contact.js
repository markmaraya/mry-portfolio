const Contact = ({ ...props }) => {
  return (
    <section {...props}>
      <h3 className="text-accent text-3xl font-semibold mb-6">Contact</h3>
      <p className="text-secondary mb-4">
        Feel free to reach out for collaborations or just a friendly hello!
      </p>
      <a
        href="mailto:john@example.com"
        className="text-blue-600 hover:underline"
      >
        john@example.com
      </a>
    </section>
  );
};

export default Contact;
