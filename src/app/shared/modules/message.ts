
export class Message {
    authorName : string = ""
    content : string = ""
    signature : string = ""

    constructor(params = {authorName : "", content : "", signature : ""}){
        let isValid = (
            params.authorName.replace(" ", "").length >= 1 &&
            params.authorName.length <= 40 &&
            params.content.length >= 1 &&
            params.content.length <= 2000 &&
            params.signature.length <= 200
        )
        if(!isValid){
            throw new Error("Invalid message object");
        }
            

        this.authorName = params.authorName
        this.content = params.content
        this.signature = params.signature

    }

}