exports.submitContactForm = async (req, res) => {
    const { name, email, message } = req.body;
    if (!name || !email || !message) return res.status(400).json({ message: 'All fields are required' });

    res.status(200).json({ message: 'Form submitted successfully' });
};
