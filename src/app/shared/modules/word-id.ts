const adjectives = ["Adventurous", "Brave", "Calm", "Daring", "Eager", "Fierce", "Gentle", "Happy", "Imaginative", "Jolly", "Kind", "Lively", "Mysterious", "Nice", "Optimistic", "Playful", "Quiet", "Radiant", "Sparkling", "Thoughtful", "Unique", "Vibrant", "Warm", "Xenodochial", "Youthful", "Zany", "Amazing", "Beautiful", "Courageous", "Determined", "Enthusiastic", "Funny", "Generous", "Honest", "Intelligent", "Joyful", "Loving", "Magnificent", "Noble", "Open-minded", "Passionate", "Quirky", "Resilient", "Strong", "Tender", "Understanding", "Valiant", "Wise", "Excellent", "Yummy", "Zealous"]
const things = ["Aardvark", "Butterfly", "Cat", "Dolphin", "Elephant", "Giraffe", "Hippopotamus", "Jaguar", "Koala", "Lion", "Monkey", "Octopus", "Penguin", "Rabbit", "Snake", "Tiger", "Walrus", "Yak", "Zebra", "Airplane", "Bicycle", "Car", "Door", "Envelope", "Faucet", "Guitar", "Hammer", "Island", "Jacket", "Kite", "Lamp", "Mountain", "Newspaper", "Ocean", "Piano", "Quilt", "Rainbow", "Spoon", "Telephone", "Umbrella", "Violin", "Window", "Xylophone", "Yacht", "Zipper", "Transit", "Discussion", "Idea", "Thought", "Debate", "Speech", "Communication", "Language", "Journey", "Travel", "Exploration", "Discovery"]


export class WordId {
    
    static generate(length : number, separator : string){
        let endId = []
        for(let i=0;i<length;i++){
            const randomIndexes = [Math.floor(Math.random() * adjectives.length), Math.floor(Math.random() * things.length)]
            endId.push(adjectives[randomIndexes[0]])
            endId.push(things[randomIndexes[1]])
        }
        return endId.join(separator)
    }
}