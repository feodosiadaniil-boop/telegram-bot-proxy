
export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { token, chatId, text, parse_mode, reply_markup } = req.body;
        
        try {
            const response = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    chat_id: chatId,
                    text: text,
                    parse_mode: parse_mode,
                    reply_markup: reply_markup
                })
            });
            
            const data = await response.json();
            res.status(200).json(data);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    } else {
        res.status(405).json({ error: 'Method not allowed' });
    }
}
