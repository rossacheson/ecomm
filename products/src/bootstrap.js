import faker from 'faker';

const mount = (el) => {
    let products = '';

    for (let i = 0; i < 5; i++) {
        const name = faker.commerce.productName();
        products += `<div>${name}</div>`;
    }

    el.innerHTML = products;
};

// for dev in isolation
if (process.env.NODE_ENV === 'development') {
    const el = document.querySelector('#dev-products');

    // assuing our container doesn't have an element with id 'dev-products', and dev does
    if (el) {
        // we are probably running in isolaiton
        mount(el);
    }
}

// for container to use
export { mount };