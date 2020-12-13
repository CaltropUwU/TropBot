'use strict';

// messageReactionRemoveAll
/* Emitted whenever all reactions are removed from a message.
PARAMETER              TYPE                   DESCRIPTION
message             	Message             	The message the reactions were removed from*/


module.exports = {
    execute(client, message)
    {
        if (!message.guild) return;
        console.log('messageReactionRemoveAll');
        client.handleReactRemoveAll(message);
    }
};