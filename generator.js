function generateStory() {
    let num1 = Math.ceil(Math.random() * 20);
    let num2 = Math.ceil(Math.random() * 20);
    let num3 = Math.ceil(Math.random() * 20);

    let biggest = Math.max(num1, num2, num3);
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let nthLetter = alphabet[num1 - 1] || "Z";

    let totalMinutes = num2 * num3;
    let hours = Math.floor(totalMinutes / 60);
    let minutes = totalMinutes % 60;

    let story = `An adventurer named ${nthLetter} set out on a journey. After ${totalMinutes} minutes 
    (${hours} hours and ${minutes} minutes) of exploring, they discovered a hidden cave. 
    Inside, they found a Level ${biggest} enchanted relic.`;

    document.getElementById("story").innerText = story;
}