let messages = [];
let id = 0;

module.exports = {
    create: (req, res) => {
        const { text, time} = req.body;
        messages.push({ id, text, time });
        i++;
        res.status(200).send(messages);
    },

    read: (req, res) => {
        res.status(200).send(messages);

    },

    update: (req, res) => {
        const { text } = req.body;
        const updateID = req.params.id;
        const messageIndex = messages.findIndex(message => message.id == updateID);
        let message = messages[messageIndex];

        messages[messagesIndex]= {
            id: message.id, text: text,
            time: message.time
        };

        res.status(200).send(messages);
    },

    delete: (req, res) => {
        const deleteId = req.params.id;
        const messageIndex = messages.findIndex(messages.id == deleteId);
        messages.splice(messageIndex, 1);
        res.status(200).send(messages);

    }
}