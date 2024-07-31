const agents = [
    { id: 1, name: 'Justin Swart', email: 'swartjustin105@gmail.com', phone: '+27 66 070 5273' },
    { id: 2, name: 'Emily Smith', email: 'emily.smith@gmail.com', phone: '+27 66 070 5274' },
    { id: 3, name: 'John Doe', email: 'john.doe@gmail.com', phone: '+27 66 070 5275' },
];

const properties = [
    {
        id: 4,
        images: ['images/prop1.jpg', 'images/prop2.jpg', 'images/prop3.jpg', 'images/prop4.jpg'],
        title: 'Cozy Family Home',
        description: 'A beautiful 3 bedroom family home, a granny flat, and a add on apartment. Located in a great neighborhood.',
        price: 'R5 400 000',
        location: 'South Africa',
        url: 'ViewProperty.html'
    },
    {
        id: 5,
        images: ['images/prop3_1.jpg', 'images/prop3_2.jpg', 'images/prop3_3.jpg', 'images/prop4.jpg'],
        title: 'Cozy Family Home',
        description: 'A beautiful 3 bedroom family home, a granny flat, and a add on apartment. Located in a great neighborhood.',
        price: 'R5 400 000',
        location: 'South Africa',
        url: 'ViewProperty.html'
    },
    {
        id: 6,
        images: ['images/prop2_1.jpg', 'images/prop2_2.jpg', 'images/prop2_3.jpg', 'images/prop2.jpg'],
        title: 'Cozy Family Home',
        description: 'A beautiful 3 bedroom family home, a granny flat, and a add on apartment. Located in a great neighborhood.',
        price: 'R5 400 000',
        location: 'South Africa',
        url: 'ViewProperty.html'
    }
];

function displayAgents() {
    const agentList = document.getElementById('agent-list');

    agents.forEach(agent => {
        const agentItem = document.createElement('div');
        agentItem.classList.add('agent');

        agentItem.innerHTML = `
            <h3>${agent.name}</h3>
            <p><strong>Email:</strong> ${agent.email}</p>
            <p><strong>Phone:</strong> ${agent.phone}</p>
        `;

        agentList.appendChild(agentItem);
    });
}

function handleSearch(event) {
    event.preventDefault();
    const location = document.getElementById('location').value;
    const priceRange = document.getElementById('price-range').value;
    console.log('Location:', location);
    console.log('Price Range:', priceRange);
}

function renderProperties(properties) {
    const listingBox = document.getElementById('listing-box');
    listingBox.innerHTML = '';

    properties.forEach(property => {
        const listing = document.createElement('div');
        listing.classList.add('listing');
        
        const img = document.createElement('img');
        img.src = property.images[0];
        img.classList.add('main-image');
        listing.appendChild(img);
        
        const title = document.createElement('h3');
        title.textContent = property.title;
        listing.appendChild(title);
        
        const description = document.createElement('p');
        description.textContent = property.description;
        listing.appendChild(description);
        
        const price = document.createElement('p');
        price.textContent = property.price;
        price.style.fontWeight = 'bold';
        listing.appendChild(price);

        const location = document.createElement('p');
        location.textContent = property.location;
        location.style.fontWeight = 'bold';
        listing.appendChild(location);
        
        const imageGallery = document.createElement('div');
        imageGallery.classList.add('image-gallery');
        property.images.forEach((image, index) => {
            const imgThumb = document.createElement('img');
            imgThumb.src = image;
            imgThumb.dataset.index = index;
            imgThumb.addEventListener('click', function() {
                const mainImage = listing.querySelector('.main-image');
                mainImage.src = image;
                imageGallery.querySelectorAll('img').forEach(img => img.classList.remove('active'));
                imgThumb.classList.add('active');
            });
            if (index === 0) imgThumb.classList.add('active');
            imageGallery.appendChild(imgThumb);
        });
        listing.appendChild(imageGallery);
        
        const viewButton = document.createElement('button');
        viewButton.textContent = 'View Property';
        viewButton.classList.add('view-button');
        viewButton.style.height = '20px';
        viewButton.style.width = '150px';
        viewButton.style.border = '5px';
        viewButton.style.borderColor = 'black';
        viewButton.style.borderRadius = '5px';
        viewButton.style.backgroundColor = 'red';
        viewButton.style.color = 'White';
        viewButton.addEventListener('click', function() {
            window.location.href = `ViewProperty.html?id=${property.id}`;
        });
        listing.appendChild(viewButton);
        
        listingBox.appendChild(listing);
    });
}


document.addEventListener('DOMContentLoaded', function() {
    displayAgents();
    renderProperties(properties);
    const searchForm = document.getElementById('search-form');
    searchForm.addEventListener('submit', handleSearch);
});