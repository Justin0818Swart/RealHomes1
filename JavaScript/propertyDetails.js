const properties = [
    {
        id: 4,
        images: ['images/prop1.jpg', 'images/prop2.jpg', 'images/prop3.jpg', 'images/prop4.jpg'],
        title: 'Cozy Family Home',
        description: 'Descrition : A beautiful 3 bedroom family home, a granny flat, and a add on apartment. Located in a great neighborhood.',
        price: 'Price : R5 400 000',
        location: 'Country : South Africa',
        fullLocation:'Location : 5 Buttonwood st, Gonubie, Eastlondon',
        pricePerMonth: 'Price per month : R20 000',
        bathroom: 'Number of bathrooms : 3 ',
        swimming: 'Swimming pools : 1 '

    },
    {
        id: 5,
        images: ['images/prop3_1.jpg', 'images/prop3_2.jpg', 'images/prop3_3.jpg', 'images/prop4.jpg'],
        title: 'Cozy Family Home',
        description: 'Descrition : A beautiful 3 bedroom family home, a granny flat, and a add on apartment. Located in a great neighborhood.',
        price: 'Price : R5 400 000',
        location: 'Country : South Africa',
        fullLocation:'Location : 5 Buttonwood st, Gonubie, Eastlondon',
        pricePerMonth: 'Price per month : R20 000',
        bathroom: 'Number of bathrooms : 3 ',
        swimming: 'Swimming pools : 1 '
    },
    {
        id: 6,
        images: ['images/prop2_1.jpg', 'images/prop2_2.jpg', 'images/prop2_3.jpg', 'images/prop2.jpg'],
        title: 'Cozy Family Home',
        description: 'Descrition : A beautiful 3 bedroom family home, a granny flat, and a add on apartment. Located in a great neighborhood.',
        price: 'Price : R5 400 000',
        location: 'Country : South Africa',
        fullLocation:'Location : 5 Buttonwood st, Gonubie, Eastlondon',
        pricePerMonth: 'Price per month : R20 000',
        bathroom: 'Number of bathrooms : 3 ',
        swimming: 'Swimming pools : 1 '


    }
];

function getPropertyById(id) {
    return properties.find(property => property.id === id);
}

function renderPropertyDetails(property) {
    const propertyDetails = document.getElementById('property-details');
    propertyDetails.style.justifyContent = 'left';

    const title = document.createElement('h2');
    title.textContent = property.title;
    propertyDetails.appendChild(title);

    const img = document.createElement('img');
    img.src = property.images[0];
    img.style.height = '650px',
    img.style.width = '400px'
    img.classList.add('main-image');
    propertyDetails.appendChild(img);

    const imageGallery = document.createElement('div');
    imageGallery.classList.add('image-gallery');
    imageGallery.style.backgroundColor = 'grey',
    imageGallery.style.border = '2px solid black',
    imageGallery.style.borderRadius = "25px",
    imageGallery.style.width = '350px',
    imageGallery.style.justifyContent = 'center';
    property.images.forEach((image, index) => {
        const imgThumb = document.createElement('img');
        imgThumb.src = image;
        imgThumb.dataset.index = index;
        imgThumb.addEventListener('click', function () {
            const mainImage = propertyDetails.querySelector('.main-image');
            mainImage.src = image;
            mainImage.style.backgroundColor = 'black';
            imageGallery.querySelectorAll('img').forEach(img => img.classList.remove('active'));
            imgThumb.classList.add('active');
        });
        if (index === 0) imgThumb.classList.add('active');
        imageGallery.appendChild(imgThumb);
    });
    propertyDetails.appendChild(imageGallery);

    const description = document.createElement('p');
    description.textContent = property.description;
    description.classList.add('left-align');
    propertyDetails.appendChild(description);

    const price = document.createElement('p');
    price.textContent = property.price;
    price.classList.add('left-align');
    price.style.fontWeight = 'bold';
    propertyDetails.appendChild(price);

    const location = document.createElement('p');
    location.textContent = property.location;
    location.classList.add('left-align');
    location.style.fontWeight = 'bold';
    propertyDetails.appendChild(location);

    const fullLocation = document.createElement('p');
    fullLocation.textContent = property.fullLocation;
    fullLocation.classList.add('left-align');
    fullLocation.style.fontWeight = 'bold';
    propertyDetails.appendChild(fullLocation);

    const pricePerMonth = document.createElement('p');
    pricePerMonth.textContent = property.pricePerMonth;
    pricePerMonth.classList.add('left-align');
    propertyDetails.appendChild(pricePerMonth);

    const bathroom = document.createElement('p');
    bathroom.textContent = property.bathroom;
    bathroom.classList.add('left-align');
    propertyDetails.appendChild(bathroom);

    const swimming = document.createElement('p');
    swimming.textContent = property.swimming;
    swimming.classList.add('left-align');
    propertyDetails.appendChild(swimming);
}

document.addEventListener('DOMContentLoaded', function () {
    const urlParams = new URLSearchParams(window.location.search);
    const propertyId = parseInt(urlParams.get('id'), 10);
    const property = getPropertyById(propertyId);

    if (property) {
        renderPropertyDetails(property);
    } else {
        document.getElementById('property-details').textContent = 'Property not found.';
    }
});