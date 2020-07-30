function solve(input) {
 
    let keyMaterials = [
        {
            name: 'Dragonwrath',
            material: 'motes',
            quantity: 0
        },
        {
            name: 'Valanyr',
            material: 'fragments',
            quantity: 0
        },
        {
            name: 'Shadowmourne',
            material: 'shards',
            quantity: 0
        }
    ]
   
    let junkStorage = [];
 
    input = input.split(' ');
 
    for (let i = 0; i < input.length; i += 2) {
 
        let quantity = Number(input[i]);
        let material = input[i + 1].toLowerCase();
 
        if (material !== 'shards' && material !== 'fragments' && material !== 'motes') {
 
            let searchedMaterial = junkStorage.find(obj => obj.material == material);
 
            if (!searchedMaterial) {
 
                junkStorage.push({
                    material: material,
                    quantity: quantity
                });
            }
            else searchedMaterial.quantity += quantity;
 
            continue;
        }
 
        let matchedMaterial = keyMaterials.find(obj => obj.material == material);
        matchedMaterial.quantity += quantity;
 
        if (matchedMaterial.quantity >= 250) {
 
            reachedGoalMaterial = matchedMaterial.material;
            matchedMaterial.quantity -= 250;
 
            console.log(`${matchedMaterial.name} obtained!`);
            break;
        }
    }
 
    keyMaterials.sort((a, b) => b.quantity - a.quantity || a.material.localeCompare(b.material))
 
    junkStorage.sort((a, b) => a.material.localeCompare(b.material));
 
    for (let currentMaterial of keyMaterials) {
       
        console.log(`${currentMaterial.material}: ${currentMaterial.quantity}`);
    }
 
    for (let junk of junkStorage) {
       
        console.log(`${junk.material}: ${junk.quantity}`);
    }
}