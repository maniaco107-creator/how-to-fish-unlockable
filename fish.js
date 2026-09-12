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
    5:  { name: "albatros", category: "Boss" },
    0:  { name: "Angelfish", category: "Standard Lure" },
    1:  { name: "Anglerfish", category: "Scientific Lure" },
    2:  { name: "Bass", category: "Professional Lure" },
    3:  { name: "Blobfish", category: "Scientific Lure" },
    6:  { name: "Blue Shark", category: "Boss" },
    4:  { name: "Bluegill", category: "Standard Lure" },
    7:  { name: "Bowhead Whale", category: "Boss" },
    16: { name: "Bowlfish", category: "Standard Lure" },
    21: { name: "Brown Crab", category: "Crab-Fishing Rod (No bait)" },
    17: { name: "Catfish", category: "Standard Lure" },
    19: { name: "Clownfish", category: "Standard Lure" },
    20: { name: "Cod", category: "Fishing Rod (No bait)" },
    22: { name: "Dripper", category: "Professional Lure" },
    23: { name: "Eel", category: "Professional Lure" },
    24: { name: "Flying Fish", category: "Professional Lure" },
    26: { name: "Gar", category: "Fishing Rod (No bait)" },
    9:  { name: "Giant Piranha", category: "Boss" },
    10: { name: "Goblin Shark", category: "Boss" },
    27: { name: "Goby", category: "Beginner Lure" },
    28: { name: "Goldfish", category: "Beginner Lure" },
    29: { name: "Halibut", category: "Professional Lure" },
    32: { name: "Lobster", category: "Hot-dog bait" },
    33: { name: "Mackerel", category: "Fishing Rod (No bait)" },
    11: { name: "Mutated bowhead whale", category: "Boss" },
    34: { name: "Needlefish", category: "Standard Lure" },
    35: { name: "Oarfish", category: "Scientific Lure" },
    36: { name: "Parrotfish", category: "Professional Lure" },
    37: { name: "Perch", category: "Beginner Lure" },
    38: { name: "Pike", category: "Fishing Rod (No bait)" },
    39: { name: "Piranha", category: "Beginner Lure" },
    12: { name: "Pufferfish", category: "Boss" },
    40: { name: "Red Snapper", category: "Professional Lure" },
    79: { name: "Rock Crab", category: "Hot-dog bait" },
    41: { name: "Salmon", category: "Beginner Lure" },
    42: { name: "Sea Urchin", category: "Standard Lure" },
    44: { name: "Seahorse", category: "Standard Lure" },
    45: { name: "Sengarat", category: "Professional Lure" },
    46: { name: "Shrimp", category: "Crab-Fishing Rod (No bait)" },
    13: { name: "Spider Crab", category: "Boss" },
    47: { name: "Stonefish", category: "Scientific Lure" },
    14: { name: "Sunfish", category: "Boss" },
    48: { name: "Superdwarf Fish", category: "Scientific Lure" },
    8:  { name: "The Old Pike", category: "Boss" },
    49: { name: "Tigerfish", category: "Beginner Lure" },
    50: { name: "Triggerfish", category: "Professional Lure" },
    15: { name: "Tuna", category: "Boss" },
    51: { name: "Voxelfish", category: "Professional Lure" },
    52: { name: "Yellow Boxfish", category: "Standard Lure" }
};
Object.entries(fishData).forEach(([id, fish]) => {
    const grid = document.getElementById("cat-" + fish.category.replace(/[^a-zA-Z]/g,''));
    const div = document.createElement("div");
    div.className = "skin";
    div.innerHTML = `
        <img src="images/fish/${fish.name}.png" id="fish-${id}">
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
        const img = document.getElementById("fish-" + entry.ID);
        if (img) img.classList.add("unlocked");
    });
});

document.getElementById("dropzone").addEventListener("dragover", e => e.preventDefault());
