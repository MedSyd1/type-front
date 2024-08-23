

const words = [
    "apple", "banana", "cherry", "date", "elderberry", "fig", "grape", "honeydew", "kiwi", "lemon",
    "mango", "nectarine", "orange", "papaya", "quince", "raspberry", "strawberry", "tangerine", "ugli", "vine",
    "watermelon", "xigua", "yam", "zucchini", "apricot", "blackberry", "blueberry", "cantaloupe", "dragonfruit", "eggplant",
    "fennel", "gooseberry", "huckleberry", "jackfruit", "kumquat", "lime", "mulberry", "nectar", "olive", "peach",
    "pear", "pineapple", "plum", "pomegranate", "rhubarb", "sugarcane", "tomato", "ugli fruit", "valencia", "walnut",
    "yuzu", "zest", "almond", "basil", "coconut", "dill", "endive", "fiddlehead", "grapefruit", "horseradish",
    "jalapeno", "kale", "leek", "mushroom", "nutmeg", "oregano", "parsley", "quinoa", "radish", "shallot",
    "thyme", "vanilla", "wasabi", "yarrow", "ziti", "asparagus", "broccoli", "carrot", "daikon", "eggplant",
    "fava", "garlic", "hazelnut", "iceberg", "jicama", "kohlrabi", "lettuce", "mint", "onion", "pepper",
    "quince", "rutabaga", "spinach", "turnip", "vinegar", "watercress", "yam", "zucchini" , "type" , "dman"
  ];
  
export const nbrs = Array.from({length : 210},(_,i) => i + 1);

const getRandomInt = (min:number,max:number) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const randomWords = (n:number) => {
    const arrayWords:string[] = []
    for (let i = 0 ; i < n ; i++)
        {   let i = getRandomInt(1,99);
            if (arrayWords.includes(words[i])){
                n++;
                continue;
            }
            arrayWords.push(words[i])
        }
    return arrayWords;
}

export type customeCharacter= {
    label : string;
    state : string | null;
    id : number;
}


export const  arrayCharacters  = (line:string) : customeCharacter[] => {

    const cs : customeCharacter[] = []
    let i = 0;
    for (const c of line )
        cs.push({label: c , state : null , id : i++})
    return cs
}