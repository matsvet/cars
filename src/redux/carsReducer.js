const CHANGE_FAVOURITE = 'CHANGE-FAVOURITE';

let initialState = {
    cars: [
        {
            id: 1,
            brand: 'LADA',
            model: 'Granta',
            manufactureDate: '09/2015',
            ownerAmount: 2,
            mileage: 145000,
            color: 'Черный',
            isBroken: false,
            isPrivate: true,
            transmission: 'Механическая',
            drive: 'Передний',
            body: 'Седан',
            engineCapacity: 1.5,
            enginePower: 125,
            driveHand: 'Левый',
            price: '615000',
            city: 'Москва',
            ownerName: 'Владик',
            adFrom: 'Авито',
            reference: 'https://auto.ru/cars/used/sale/vaz/granta/1114894832-03045815/?from=searchline',
            postDate: '2022-03-05T13:51',
            isFavourite: true
        },
        {
            id: 2,
            brand: 'Chevrolet',
            model: 'Lanos',
            manufactureDate: '09/2007',
            ownerAmount: 5,
            mileage: 236000,
            color: 'Синий',
            isBroken: false,
            isPrivate: true,
            transmission: 'Механическая',
            drive: 'Передний',
            body: 'Седан',
            engineCapacity: 1.5,
            enginePower: 86,
            driveHand: 'Левый',
            price: '115000',
            city: 'Балашиха',
            ownerName: 'Тёма',
            adFrom: 'Авто.ру',
            reference: 'https://auto.ru/cars/used/sale/vaz/granta/1114894832-03045815/?from=searchline',
            postDate: '2022-03-02T17:19',
            isFavourite: true
        },
        {
            id: 3,
            brand: 'Chevrolet',
            model: 'Aveo',
            manufactureDate: '09/2012',
            ownerAmount: 2,
            mileage: 145000,
            color: 'Белый>',
            isBroken: true,
            isPrivate: true,
            transmission: 'Механическая',
            drive: 'Передний',
            body: 'Седан',
            engineCapacity: 1.5,
            enginePower: 125,
            driveHand: 'Левый',
            price: '615000',
            city: 'Москва',
            ownerName: 'Владик',
            adFrom: 'Авито',
            reference: 'https://auto.ru/cars/used/sale/vaz/granta/1114894832-03045815/?from=searchline',
            postDate: '2022-03-05T13:51',
            isFavourite: false,
        },
        {
            id: 4,
            brand: 'Volkswagen',
            model: 'Passat',
            manufactureDate: '09/1998',
            ownerAmount: 7,
            mileage: 200000,
            color: 'Черный',
            isBroken: false,
            isPrivate: false,
            transmission: 'Автоматическая',
            drive: 'Задний',
            body: 'Хэтчбэк',
            engineCapacity: 1.5,
            enginePower: 125,
            driveHand: 'Правый',
            price: '615000',
            city: 'Тула',
            ownerName: 'Владик',
            adFrom: 'Дром',
            reference: 'https://auto.ru/cars/used/sale/vaz/granta/1114894832-03045815/?from=searchline',
            postDate: '2022-02-14T13:51',
            isFavourite: false
        }
    ]
}

const carsReducer = (state = initialState, action) => {
    //let stateCopy = state;
    switch (action.type) {
        case CHANGE_FAVOURITE: {
            return {
                ...state,
                cars: state.cars.map(car => {
                    if (car.id == action.carId) {
                        let antiFav = !car.isFavourite
                        car.isFavourite = antiFav
                    }
                    return car
                })
            }
        }
        default:
            return state;
    }
}

export const changeFavouriteCreator = (id) => ({
    type: CHANGE_FAVOURITE,
    carId: id
})

export default carsReducer;