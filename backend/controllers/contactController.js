// In controllers/contactController.js
exports.submitContactForm = async (req, res) => {
    const { name, email, message } = req.body;
    if (!name || !email || !message) return res.status(400).json({ message: 'All fields are required' });

    // Save to database or send an email, etc.
    res.status(200).json({ message: 'Form submitted successfully' });
};
