import Header from '../components/Header';
import React, { useState } from 'react';
import axios from 'axios';

const Upload = () => {
    const [file, setFile] = useState<File | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files?.[0]) {
        setFile(e.target.files[0]);
        }
    };

    const handleUpload = async () => {
        if (!file) return;

        const formData = new FormData();
        formData.append('video', file);

        try {
        const response = await axios.post('http://localhost:8000/upload', formData, {
            headers: {
            'Content-Type': 'multipart/form-data',
            },
        });
        console.log('Upload successful:', response.data);
        } catch (err) {
        console.error('Upload failed:', err);
        }
    };
    return (
        <div>
        <Header />
        <h1>Upload</h1>
        <input type="file" accept="video/*,audio/*" onChange={handleChange} />
        <button onClick={handleUpload}>Upload Video</button>
        </div>
    );
};

export default Upload;
