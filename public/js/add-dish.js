const form = document.querySelector('form')
const dishNameInput = document.querySelector('[name="dish_name"]')
const descriptionInput = document.querySelector('[name="description"]')
const guestNameInput = document.querySelector('[name="guest_name"]')
const hasNutsCheckbox = document.querySelector('[name="has_nuts"]')

const handleSubmit = e => {
    e.preventDefault()

    const dishData = {
        dish_name: dishNameInput.value,
        description: descriptionInput.value,
        guest_name: guestNameInput.value,
        has_nuts: hasNutsCheckbox.checked
    }

    fetch('/api/add-dish', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dishData)
    })
        .then(response => console.log(response))
        .catch(err => console.log(err))

}

form.addEventListener('submit', handleSubmit)