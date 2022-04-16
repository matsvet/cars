import CarsTable from "../CarsTable/CarsTable";
import style from "./CarsPage.module.css"
import {Button, DatePicker, InputNumber, Select} from "antd";
import {useContext, useEffect, useState} from "react";
import {Context} from "../../../firebase/firebase";
import {useCollectionData} from "react-firebase-hooks/firestore";
import Preloader from "../../Preloader/Preloader";

const {Option} = Select;

const CarsPage = (props) => {
    const {firestore} = useContext(Context)
    const [cars, loading] = useCollectionData(firestore.collection('tachki'))
    const [filteredCars, setFilteredCars] = useState()
    const [placeHolders, setPlaceHolders] = useState({
        mark: 'Марка',
        model: 'Модель',
        minPrice: 'Цена, от',
        maxPrice: 'Цена, до',
        minYear: 'Год, от',
        maxYear: 'Год, до',
        city: 'Город',
        owner: 'Продавец'
    })

    const Filter = () => {

        const [carFilter, setCarFilter] = useState({
            mark: null,
            model: null,
            minPrice: null,
            maxPrice: null,
            minYear: null,
            maxYear: null,
            city: null,
            owner: null
        })

        function clearFilter() {
            setFilteredCars(cars)
            setCarFilter({
                mark: null,
                model: null,
                minPrice: null,
                maxPrice: null,
                minYear: null,
                maxYear: null,
                city: null,
                owner: null
            })
            setPlaceHolders({
                mark: 'Марка',
                model: 'Модель',
                minPrice: 'Цена, от',
                maxPrice: 'Цена, до',
                minYear: 'Год, от',
                maxYear: 'Год, до',
                city: 'Город',
                owner: 'Продавец'
            })
        }

        const applyAllFilter = () => {
            let filtCars = cars
            if (carFilter.mark) {
                if (carFilter.mark === 'all') {
                    setCarFilter({...carFilter, mark: null})
                } else {
                    filtCars = filtCars.filter(car => car.name.includes(carFilter.mark))
                    setPlaceHolders({...placeHolders, mark: carFilter.mark})
                }
            }
            if (carFilter.model) {
                if (carFilter.model === 'all') {
                    setCarFilter({...carFilter, model: null})
                } else {
                    filtCars = filtCars.filter(car => car.name.includes(carFilter.model))
                    setPlaceHolders({...placeHolders, model: carFilter.model})
                }
            }
            if (carFilter.minPrice) {
                if (carFilter.minPrice === '') {
                    setCarFilter({...carFilter, minPrice: null})
                } else {
                    filtCars = filtCars.filter(car => car.price >= carFilter.minPrice)
                    setPlaceHolders({...placeHolders, minPrice: carFilter.minPrice})
                }
            }
            if (carFilter.maxPrice) {
                if (carFilter.maxPrice === '') {
                    setCarFilter({...carFilter, maxPrice: null})
                } else {
                    filtCars = filtCars.filter(car => car.price <= carFilter.maxPrice)
                    setPlaceHolders({...placeHolders, maxPrice: carFilter.maxPrice})
                }
            }
            if (carFilter.minYear) {
                if (carFilter.minYear === '') {
                    setCarFilter({...carFilter, minYear: null})
                } else {
                    filtCars = filtCars.filter(car => car.year >= carFilter.minYear)
                    setPlaceHolders({...placeHolders, minYear: carFilter.minYear})
                }
            }
            if (carFilter.maxYear) {
                if (carFilter.maxYear === '') {
                    setCarFilter({...carFilter, maxYear: null})
                } else {
                    filtCars = filtCars.filter(car => car.year <= carFilter.maxYear)
                    setPlaceHolders({...placeHolders, maxYear: carFilter.maxYear})
                }
            }
            if (carFilter.city) {
                if (carFilter.city === 'all') {
                    setCarFilter({...carFilter, city: null})
                } else {
                    filtCars = filtCars.filter(car => car.settlement === carFilter.city)
                    setPlaceHolders({...placeHolders, city: carFilter.city})

                }
            }
            if (carFilter.owner) {
                if (carFilter.owner === 'all') {
                    setCarFilter({...carFilter, owner: null})
                } else {
                    if (carFilter.owner === 'private') {
                        filtCars = filtCars.filter(car => car.isShowroom === false)
                    } else {
                        filtCars = filtCars.filter(car => car.isShowroom === true)
                        setPlaceHolders({...placeHolders, owner: carFilter.owner})
                    }
                }
            }
            setFilteredCars(filtCars)
        }

        function onMarkChange(value) {console.log(`selected ${value}`);}
        function onMarkSearch(val) {console.log('search:', val);}
        function onModelChange(value) {console.log(`selected ${value}`);}
        function onModelSearch(val) {console.log('search:', val);}
        function onCityChange(value) {console.log(`selected ${value}`);}
        function onCitySearch(val) {console.log('search:', val);}
        function onMinPriceChange(value) {console.log(`selected ${value}`);}
        function onMaxPriceChange(value) {console.log(`selected ${value}`);}
        function onMinYearChange(date, dateString) {console.log(date, dateString);}
        function onMaxYearChange(date, dateString) {console.log(date, dateString);}

        return <div className={style.filterBlock}>
            <div className={style.filterAreas}>
                <Select
                    className={style.filterItem}
                    showSearch
                    placeholder={placeHolders.mark}
                    optionFilterProp="children"
                    onChange={(value) => setCarFilter({...carFilter, mark: value})}
                    onSearch={(val) => setCarFilter({...carFilter, mark: val})}
                >
                    <Option value="all">Все</Option>
                    <Option value="Chevrolet">Chevrolet</Option>
                    <Option value="Daewoo">Daewoo</Option>
                    <Option value="LADA">LADA (ВАЗ)</Option>
                </Select>
                <Select
                    className={style.filterItem}
                    showSearch
                    placeholder={placeHolders.model}
                    optionFilterProp="children"
                    onChange={(value) => setCarFilter({...carFilter, model: value})}
                    onSearch={(val) => setCarFilter({...carFilter, model: val})}
                    filterOption={(input, option) =>
                        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                    }
                    disabled={!carFilter.mark}
                >
                    <Option value="Lanos">Lanos</Option>
                    <Option value="Nexia">Nexia</Option>
                    <Option value="2115">2115</Option>
                    <Option value="Primera">Primera</Option>
                </Select>
                <InputNumber
                    className={style.filterItem}
                    placeholder={placeHolders.minPrice}
                    min={0}
                    max={1000000000}
                    onChange={(value) => setCarFilter({...carFilter, minPrice: value})}
                />
                <InputNumber
                    className={style.filterItem}
                    placeholder={placeHolders.maxPrice}
                    min={0}
                    max={1000000000}
                    onChange={(value) => setCarFilter({...carFilter, maxPrice: value})}
                />
                <DatePicker
                    className={style.filterItem}
                    placeholder={placeHolders.minYear}
                    onChange={(date, dateString) => setCarFilter({...carFilter, minYear: dateString})}
                    picker="year"/>
                <DatePicker
                    className={style.filterItem}
                    placeholder={placeHolders.maxYear}
                    onChange={(date, dateString) => setCarFilter({...carFilter, maxYear: dateString})}
                    picker="year"/>
                <Select
                    className={style.filterItem}
                    showSearch
                    placeholder={placeHolders.city}
                    optionFilterProp="children"
                    onChange={(value) => setCarFilter({...carFilter, city: value})}
                    onSearch={(val) => setCarFilter({...carFilter, city: val})}
                    filterOption={(input, option) =>
                        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                    }
                >
                    <Option value="Москва">Москва</Option>
                    <Option value="Балашиха">Балашиха</Option>
                    <Option value="Орехово-Зуево">Орехово-Зуево</Option>
                </Select>
                <Select
                    className={style.filterItem}
                    showSearch
                    placeholder={placeHolders.owner}
                    optionFilterProp="children"
                    onChange={(value) => setCarFilter({...carFilter, owner: value})}
                    onSearch={(val) => setCarFilter({...carFilter, owner: val})}
                    filterOption={(input, option) =>
                        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                    }
                >
                    <Option value="all">Все продавцы</Option>
                    <Option value="private">Частное лицо</Option>
                    <Option value="company">Автосалон</Option>
                </Select>
            </div>
            <div className={style.buttonsBlock}>
                <Button danger onClick={clearFilter}>
                    Очистить
                </Button>
                <Button type="dashed" onClick={applyAllFilter}>
                    Применить
                </Button>
            </div>
        </div>
    }


    return <div>
        <div>
            <Filter/>
        </div>
        {loading ? <Preloader/> :
            <CarsTable
                cars={filteredCars ? filteredCars : cars}
                changeFavourite={props.changeFavourite}
                changeComparated={props.changeComparated}
            />}
    </div>
}

export default CarsPage;