const container = document.getElementById('container');

// Vite's import.meta.glob to dynamically import images
const images = import.meta.glob('/src/assets/**/*.{jpg,jpeg,png,gif,webp}', { eager: true });

// Iterate over the imported images and create img elements
Object.entries(images).forEach(([path, module]) => {
    const img = document.createElement('img');
    img.src = module.default;
    container.appendChild(img);
});