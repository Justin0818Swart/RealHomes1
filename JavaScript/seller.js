const properties = [
    {
        images: ['images/prop1.jpg', 'images/prop2.jpg', 'images/prop3.jpg', 'images/prop4.jpg'],
        title: 'Cozy Family Home',
        description: 'A beautiful 3 bedroom family home, a granny flat, and a add on apartment. Located in a great neighborhood.',
        price: 'R20000/month',
        location: 'South Africa',
        url: 'ViewProperty.html'
    },
    {
        images: ['images/prop3_1.jpg', 'images/prop3_2.jpg', 'images/prop3_3.jpg', 'images/prop4.jpg'],
        title: 'Cozy Family Home',
        description: 'A beautiful 3 bedroom family home, a granny flat, and a add on apartment. Located in a great neighborhood.',
        price: 'R20000/month',
        location: 'South Africa',
        url: 'ViewProperty.html'
    },
    {
        images: ['images/prop2_1.jpg', 'images/prop2_2.jpg', 'images/prop2_3.jpg', 'images/prop2.jpg'],
        title: 'Cozy Family Home',
        description: 'A beautiful 3 bedroom family home, a granny flat, and a add on apartment. Located in a great neighborhood.',
        price: 'R20000/month',
        location: 'South Africa',
        url: 'ViewProperty.html'
    }
];

function addProperty(event) {
    event.preventDefault();
    
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const price = document.getElementById('price').value;
    const location = document.getElementById('location').value;
    const images = document.getElementById('images').value.split(',');

    const newProperty = {
        images: images,
        title: title,
        description: description,
        price: price,
        location: location,
        url: 'ViewProperty.html'
    };

    properties.push(newProperty);
    alert('Property added successfully!');
}

function removeProperty(event) {
    event.preventDefault();

    const propertyTitle = document.getElementById('property-title').value;
    const index = properties.findIndex(property => property.title === propertyTitle);

    if (index !== -1) {
        properties.splice(index, 1);
        alert('Property removed successfully!');
    } else {
        alert('Property not found.');
    }
}

document.getElementById('add-property-form').addEventListener('submit', addProperty);
document.getElementById('remove-property-form').addEventListener('submit', removeProperty);