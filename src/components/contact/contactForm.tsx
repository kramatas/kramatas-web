import { useState } from 'react';
import { Button, Input, Textarea } from '@nextui-org/react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

    const validateForm = () => {
        if (!name || name.length < 3) {
            toast.error('Name must be at least 3 characters long.');
            return false;
        }
        if (!email || !emailRegex.test(email)) {
            toast.error('Please enter a valid email address.');
            return false;
        }
        if (!subject || subject.length < 5) {
            toast.error('Subject must be at least 5 characters long.');
            return false;
        }
        if (!message || message.length < 10) {
            toast.error('Message must be at least 10 characters long.');
            return false;
        }
        return true;
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    
        if (!validateForm()) return;
    
        const data_js = {
            access_token: "ldi6l1fvzhr15no0gz20h5xw",
            from: "lakshmanlanka949@gmail.com",
            subject: "Acknowledgment",
            text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`,
        };
    
        try {
            const response = await axios.post(
                "https://postmail.invotes.com/send", 
                JSON.stringify(data_js), 
                { headers: { 'Content-Type': 'application/json' } }
            );
    
            if (response.status === 200) {
                toast.success('Email sent successfully!');
                setName('');
                setEmail('');
                setSubject('');
                setMessage('');
                setSubmitted(true);
            } else {
                toast.error(`Failed to send email. Status: ${response.status}`);
            }
        } catch (error) {
            if (axios.isAxiosError(error)) {
                const errorMessage = error.response?.data?.error || error.message || 'An error occurred';
                toast.error(`Error sending email: ${errorMessage}`);
            } else if (error instanceof Error) {
                toast.error(`Error: ${error.message}`);
            } else {
                toast.error('An unexpected error occurred.');
            }
        }
    };
    

    return (
        <>
            <ToastContainer style={{ zIndex: 9999, top: '100px' }} position="top-right" />
            <form 
                className="dark:bg-blue-950 bg-white p-6 rounded-lg shadow-lg" 
                onSubmit={handleSubmit}
            >
                <div className="mb-4">
                    <Input
                        fullWidth
                        label="Name"
                        isClearable
                        required
                        color="primary"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <Input
                        fullWidth
                        label="Email"
                        isClearable
                        required
                        color="primary"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <Input
                        fullWidth
                        label="Subject"
                        isClearable
                        required
                        color="primary"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                    />
                </div>
                <div className="mb-4">
                    <Textarea
                        fullWidth
                        label="Message"
                        required
                        rows={4}
                        color="primary"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    />
                </div>
                <Button 
                    type="submit" 
                    className="w-full mt-4 bg-blue-200 dark:bg-blue-600 dark:hover:bg-blue-500"
                >
                    Send Message
                </Button>
                {submitted && (
                    <p className="mt-4 text-green-600 text-center">Your message has been sent!</p>
                )}
            </form>
        </>
    );
};

export default ContactForm;
