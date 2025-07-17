//% weight=100 color=#AA00FF icon="\uf075"
namespace chatbotNPC {

    let conversationState: string = "start";

    // A simple dictionary to store keyword-response pairs
    let responses: { [keyword: string]: string } = {};

    /**
     * Set a response phrase for a keyword.
     * @param keyword The keyword to listen for
     * @param response The response phrase the NPC says
     */
    //% block="set response for keyword %keyword to %response"
    export function setResponse(keyword: string, response: string): void {
        responses[keyword.toLowerCase()] = response;
    }

    /**
     * Player says something to the NPC. The NPC replies based on keywords.
     * @param playerText The player's input text
     */
    //% block="player says %playerText"
    export function playerSays(playerText: string): void {
        let lowerText = playerText.toLowerCase();
        let reply = "I don't understand.";

        for (let key in responses) {
            if (lowerText.includes(key)) {
                reply = responses[key];
                break;
            }
        }

        npcSays(reply);
    }

    /**
     * NPC says something (shows a speech bubble)
     * @param text Text to say
     */
    //% block="NPC says %text"
    export function npcSays(text: string): void {
        game.showLongText(text, DialogLayout.Bottom);
    }

    /**
     * Reset the conversation state
     */
    //% block="reset conversation"
    export function resetConversation(): void {
        conversationState = "start";
        npcSays("Hello! Let's chat.");
    }
}
