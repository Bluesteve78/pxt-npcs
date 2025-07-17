//% weight=100 color=#AA00FF icon="\uf075"
namespace chatbotNPC {
    let responses: { [keyword: string]: string } = {};

    //% block="set response for keyword %keyword to %response"
    export function setResponse(keyword: string, response: string): void {
        responses[keyword.toLowerCase()] = response;
    }

    //% block="player says %playerText"
    export function playerSays(playerText: string): void {
        let lowerText = playerText.toLowerCase();
        let words = lowerText.split(/[\s,.!?]+/);
        let reply = "I don't understand.";

        for (let key in responses) {
            if (words.includes(key)) {
                reply = responses[key];
                break;
            }
        }
        npcSays(reply);
    }

    //% block="NPC says %text"
    export function npcSays(text: string): void {
        game.showLongText(text, DialogLayout.Bottom);
    }

    //% block="reset conversation"
    export function resetConversation(): void {
        responses = {};
        npcSays("Conversation reset.");
    }
}

