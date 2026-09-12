const categories = [
    "Crab-Fishing Rod (No bait)",
    "Fishing Rod (No bait)",
    "Hot-dog bait",
    "Beginner Lure",
    "Standard Lure",
    "Professional Lure",
    "Scientific Lure",
    "Boss"
];

const container = document.getElementById("fish-container");

categories.forEach(cat => {
    const div = document.createElement("div");
    div.className = "category";
    div.innerHTML = `
        <div class="category-title">
            <h2>${cat}</h2>
            <span class="toggle-arrow">▶</span>
        </div>
        <div class="skin-grid" id="cat-${cat.replace(/[^a-zA-Z]/g,'')}"></div>
    `;
    container.appendChild(div);
});



const fishData = {
    5:  { name: "albatros", category: "Boss", hasDrip: false },
    0:  { name: "Angelfish", category: "Standard Lure", hasDrip: true },
    1:  { name: "Anglerfish", category: "Scientific Lure", hasDrip: true },
    2:  { name: "Bass", category: "Professional Lure", hasDrip: true },
    3:  { name: "Blobfish", category: "Scientific Lure", hasDrip: true },
    6:  { name: "Blue Shark", category: "Boss", hasDrip: false },
    4:  { name: "Bluegill", category: "Standard Lure", hasDrip: true },
    7:  { name: "Bowhead Whale", category: "Boss", hasDrip: false },
    16: { name: "Bowlfish", category: "Standard Lure", hasDrip: true },
    21: { name: "Brown Crab", category: "Crab-Fishing Rod (No bait)", hasDrip: true },
    17: { name: "Catfish", category: "Standard Lure", hasDrip: true },
    19: { name: "Clownfish", category: "Standard Lure", hasDrip: true },
    20: { name: "Cod", category: "Fishing Rod (No bait)", hasDrip: true },
    22: { name: "Dripper", category: "Professional Lure", hasDrip: true },
    23: { name: "Eel", category: "Professional Lure", hasDrip: true },
    24: { name: "Flying Fish", category: "Professional Lure", hasDrip: true },
    26: { name: "Gar", category: "Fishing Rod (No bait)", hasDrip: true },
    9:  { name: "Giant Piranha", category: "Boss", hasDrip: false },
    10: { name: "Goblin Shark", category: "Boss", hasDrip: false },
    27: { name: "Goby", category: "Beginner Lure", hasDrip: true },
    28: { name: "Goldfish", category: "Beginner Lure", hasDrip: true },
    29: { name: "Halibut", category: "Professional Lure", hasDrip: true },
    32: { name: "Lobster", category: "Hot-dog bait", hasDrip: true },
    33: { name: "Mackerel", category: "Fishing Rod (No bait)", hasDrip: true },
    11: { name: "Mutated bowhead whale", category: "Boss", hasDrip: false },
    34: { name: "Needlefish", category: "Standard Lure", hasDrip: true },
    35: { name: "Oarfish", category: "Scientific Lure", hasDrip: true },
    36: { name: "Parrotfish", category: "Professional Lure", hasDrip: true },
    37: { name: "Perch", category: "Beginner Lure", hasDrip: true },
    38: { name: "Pike", category: "Fishing Rod (No bait)", hasDrip: true },
    39: { name: "Piranha", category: "Beginner Lure", hasDrip: true },
    12: { name: "Pufferfish", category: "Boss", hasDrip: false },
    40: { name: "Red Snapper", category: "Professional Lure", hasDrip: true },
    79: { name: "Rock Crab", category: "Hot-dog bait", hasDrip: true },
    41: { name: "Salmon", category: "Beginner Lure", hasDrip: true },
    42: { name: "Sea Urchin", category: "Standard Lure", hasDrip: true },
    44: { name: "Seahorse", category: "Standard Lure", hasDrip: true },
    45: { name: "Sengarat", category: "Professional Lure", hasDrip: true },
    46: { name: "Shrimp", category: "Crab-Fishing Rod (No bait)", hasDrip: true },
    13: { name: "Spider Crab", category: "Boss", hasDrip: false },
    47: { name: "Stonefish", category: "Scientific Lure", hasDrip: true },
    14: { name: "Sunfish", category: "Boss", hasDrip: false },
    48: { name: "Superdwarf Fish", category: "Scientific Lure", hasDrip: true },
    8:  { name: "The Old Pike", category: "Boss", hasDrip: false },
    49: { name: "Tigerfish", category: "Beginner Lure", hasDrip: true },
    50: { name: "Triggerfish", category: "Professional Lure", hasDrip: true },
    15: { name: "Tuna", category: "Boss", hasDrip: false },
    51: { name: "Voxelfish", category: "Professional Lure", hasDrip: true },
    52: { name: "Yellow Boxfish", category: "Standard Lure", hasDrip: true }
};

Object.entries(fishData).forEach(([id, fish]) => {
    const grid = document.getElementById("cat-" + fish.category.replace(/[^a-zA-Z]/g,''));

    const div = document.createElement("div");
    div.className = "skin";

    let dripImg = "";
    if (fish.hasDrip) {
        dripImg = `
            <img src="images/fish/${fish.name} drip.png" id="fish-${id}-drip">
        `;
    }

    div.innerHTML = `
        <img src="images/fish/${fish.name}.png" id="fish-${id}">
        ${dripImg}
        <div class="skin-name">${fish.name}</div>
    `;

    grid.appendChild(div);
});

document.getElementById("dropzone").addEventListener("drop", async (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    const text = await file.text();
    const json = JSON.parse(text);

    const list = json.CreaturesToList;

    list.forEach(entry => {
    const normal = document.getElementById("fish-" + entry.ID);
    const drip = document.getElementById("fish-" + entry.ID + "-drip");

    if (normal) normal.classList.add("unlocked");
    if (drip && entry.KilledDrip) drip.classList.add("unlocked");
});

});

document.getElementById("dropzone").addEventListener("dragover", e => e.preventDefault());
