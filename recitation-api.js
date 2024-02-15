const express = require('express');

const app = express();
const PORT = process.env.PORT || 5500;

const recitations = {
    '1': {
        title: 'Recitation 1',
        author: 'Author 1',
        duration: '5:32',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
        audio_url: 'https://example.com/recitation/1/audio.mp3',
        image_url: 'https://example.com/recitation/1/image.jpg'
    },
    '2': {
        title: 'Recitation 2',
        author: 'Author 2',
        duration: '4:20',
        description: 'Sed ut perspiciatis unde omnis iste natus error sit...',
        audio_url: 'https://example.com/recitation/2/audio.mp3',
        image_url: 'https://example.com/recitation/2/image.jpg'
    }
};

app.get('/api/recitation/:recitation_id', (req, res) => {
    const recitationId = req.params.recitation_id;
    const recitation = recitations[recitationId];
    
    if (recitation) {
        res.json(recitation);
    } else {
        res.status(404).json({ error: 'Recitation not found' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

